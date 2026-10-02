import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { reqSort, reqOrder, reqPagination } from '../../store/reducers/request';
import { putCatalogBooks } from '../../store/reducers/book';
import orderArrow from '../../assets/arrows.png';

const Sort: React.FC = () => {
  const dispatch = useAppDispatch();
  const { selectedSort } = useAppSelector((state) => state.requestSlice);

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(reqSort(e.target.value as unknown as 'title' | 'price' | 'author' | 'rating' | 'date'));
    dispatch(reqPagination(0));
    dispatch(putCatalogBooks([]));
  };

  const handlerOrder = () => {
    dispatch(reqOrder());
    dispatch(reqPagination(0));
    dispatch(putCatalogBooks([]));
  };
  return (
    <Body>
      <Filter>
        <input id={'sort-1'} name={'sort'} type={'radio'} value={'price'} onChange={handlerChange} checked={selectedSort === 'price'} />
        <label htmlFor={'sort-1'}>Price</label>
        {selectedSort === 'price' && <img className={'arrows'} src={orderArrow} onClick={handlerOrder} alt={'sort arrows'} />}
      </Filter>

      <Filter>
        <input id={'sort-2'} name={'sort'} type={'radio'} value={'title'} onChange={handlerChange} checked={selectedSort === 'title'} />
        <label htmlFor={'sort-2'}>Title</label>
        {selectedSort === 'title' && <img className={'arrows'} src={orderArrow} onClick={handlerOrder} alt={'sort arrows'} />}
      </Filter>

      <Filter>
        <input id={'sort-3'} name={'sort'} type={'radio'} value={'author'} onChange={handlerChange} checked={selectedSort === 'author'} />
        <label htmlFor={'sort-3'}>Author name</label>
        {selectedSort === 'author' && <img className={'arrows'} src={orderArrow} onClick={handlerOrder} alt={'sort arrows'} />}
      </Filter>

      <Filter>
        <input id={'sort-4'} name={'sort'} type={'radio'} value={'rating'} onChange={handlerChange} checked={selectedSort === 'rating'} />
        <label htmlFor={'sort-4'}>Rating</label>
        {selectedSort === 'rating' && <img className={'arrows'} src={orderArrow} onClick={handlerOrder} alt={'sort arrows'} />}
      </Filter>

      <Filter>
        <input id={'sort-5'} name={'sort'} type={'radio'} value={'date'} onChange={handlerChange} checked={selectedSort === 'date'} />
        <label htmlFor={'sort-5'}>Date of issue</label>
        {selectedSort === 'date' && <img className={'arrows'} src={orderArrow} onClick={handlerOrder} alt={'sort arrows'} />}
      </Filter>
    </Body>
  );
};

export default Sort;

const Body = styled.div`
  display: flex;
  width: 165px;
  background: var(--light);
  border-radius: 16px;
  position: absolute;
  top: 60px;
  left: 0px;
  z-index: 2;
  flex-direction: column;
  text-align: start;
  padding: 16px;
  cursor: auto;
  box-shadow: 0px 0px 7px 3px rgba(34, 60, 80, 0.13);

  @media screen and (max-width: 600px) {
    left: auto;
    right: 0px;
  }
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
    cursor: pointer;
  }
`;
