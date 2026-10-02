import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setOpenedFilter } from '../../store/reducers/user';
import rightArrow from '../../assets/right-arrow.svg';

interface IFilter {
  children: ReactNode
  id: string
  title: string
}

const Filter: React.FC<IFilter> = ({ children, id, title }) => {
  const dispatch = useAppDispatch();

  const { openedFilter } = useAppSelector((state) => state.userSlice);

  const handleFilter = () => {
    if (openedFilter === id) {
      dispatch(setOpenedFilter(''));
    } else {
      dispatch(setOpenedFilter(id));
    }
  };

  return (
    <Body id={id} onClick={handleFilter}>
      <div className={'filter__title'} id={id}>
        {title}

        <img
          alt={'arrow_pic'}
          className={openedFilter === id ? 'filter__arrow' : 'filter__arrow__down'}
          id={id}
          src={rightArrow}
        />
      </div>

      {openedFilter === id && <div onClick={(e) => e.stopPropagation()}>
        {children}
      </div>}
    </Body>
  );
};

export default Filter;

const Body = styled.div`
  display: flex;
  /* width: 166px; */
  /* height: 48px; */
  max-width: 196px;
  background: var(--light);
  border-radius: 16px;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  position: relative;
  cursor: pointer;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  align-items: center;
  text-align: center;
  color: var(--dark_blue);
  width: 100%;
  min-width: max-content;

  @media screen and (max-width: 750px) {
    font-size: 16px;
    padding: 8px 12px;
  }

  @media screen and (max-width: 600px) {
    width: auto;
    max-width: none;
  }

  .filter__title {
    display: flex;
    /* width: 166px; */
    width: 100%;
    background: var(--light);
    align-items: center;
    justify-content: space-between;
  }

  .filter__arrow {
    width: 24px;
    height: 24px;
    transform: rotate(90deg);
    transition: all 0.2s;
    margin-left: 8px;
  }

  .filter__arrow__down {
    width: 24px;
    height: 24px;
    transition: all 0.2s;
    margin-left: 8px;
  }
`;
