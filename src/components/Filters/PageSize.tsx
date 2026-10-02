import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { reqNoLimit, reqPagesize, reqPagination } from '../../store/reducers/request';
import { putCatalogBooks } from '../../store/reducers/book';
import { setOpenedFilter } from '../../store/reducers/user';
import fillChBox from '../../assets/checkbox-checked.svg';
import emptyChBox from '../../assets/checkbox-empty.svg';

const PageSize: React.FC = () => {
  const dispatch = useAppDispatch();

  const { pageSize, noLimit } = useAppSelector((store) => store.requestSlice);

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(reqPagesize(+e.target.value));
    dispatch(putCatalogBooks([]));
    dispatch(reqPagination(0));
  };

  const handleToggleLimit = () => {
    dispatch(reqNoLimit());
    dispatch(putCatalogBooks([]));
    dispatch(reqPagination(0));
    dispatch(setOpenedFilter(''));
  };

  return (
    <Body>
      <Filter>
        <input id={'pagesize-4'} name={'pagesize'} type={'radio'} value={'4'} onChange={handlerChange} checked={pageSize === 4} />
        <label htmlFor={'pagesize-4'}>4</label>
      </Filter>

      <Filter>
        <input id={'pagesize-8'} name={'pagesize'} type={'radio'} value={'8'} onChange={handlerChange} checked={pageSize === 8} />
        <label htmlFor={'pagesize-8'}>8</label>
      </Filter>

      <Filter>
        <input id={'pagesize-12'} name={'pagesize'} type={'radio'} value={'12'} onChange={handlerChange} checked={pageSize === 12} />
        <label htmlFor={'pagesize-12'}>12</label>
      </Filter>

      <Filter>
        <input id={'pagesize-16'} name={'pagesize'} type={'radio'} value={'16'} onChange={handlerChange} checked={pageSize === 16} />
        <label htmlFor={'pagesize-16'}>16</label>
      </Filter>

      <Checkbox>
        <input
          checked={noLimit}
          className={'ucheckbox'}
          onChange={handleToggleLimit}
          type={'checkbox'}
        />

        <span className={'fake-checkbox'} />

        No limit
      </Checkbox>
    </Body>
  );
};

export default PageSize;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--light);
  position: absolute;
  left: 0px;
  top: 60px;
  z-index: 2;
  padding: 15px;
  border-radius: 16px;
  width: max-content;
  cursor: default;
  box-shadow: 0px 0px 7px 3px rgba(34, 60, 80, 0.13);
`;

const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;

  :last-child {
    margin: 0;
  }

  input[type=radio] {
    display: none;
  }

  label {
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.75px;
    color: #a3a3a3;
    cursor: pointer;
  }

  input[type=radio]:checked + label {
    color: var(--dark_blue);
  } 

  label:hover {
    color: var(--dark_blue);
  }

  .arrows {
    width: 23px;
    height: 23px;
  }
`;

const Checkbox = styled.label`
  display: flex;
  height: 28px;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  align-items: center;
  letter-spacing: 0.75px;
  color: var(--dark_blue);
  margin-bottom: 10px;
  cursor: pointer;

  :last-child {
    margin: 0;
  }

  .ucheckbox { 
    opacity: 0;
    position: absolute;
    left: -100000px;
  }

  .fake-checkbox {
    position: relative;
    display: inline-block;
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-top: -2px;
    margin-right: 7px;
  }

  .fake-checkbox::before,
  .fake-checkbox::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url(${emptyChBox}) no-repeat center / contain;
  }

  .fake-checkbox::after {
    background: url(${fillChBox})  no-repeat center / contain;
    opacity: 0;
  }

  .ucheckbox:checked + .fake-checkbox::before {
    opacity: 0;
  }

  .ucheckbox:checked + .fake-checkbox::after {
    opacity: 1;
  }

  .ucheckbox:focus + .fake-checkbox {
    outline:  #34496624 solid 5px;
    border-radius: 20px;
  }
`;
