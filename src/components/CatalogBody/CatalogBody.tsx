import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Waypoint } from 'react-waypoint';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { getAdditionalBookThunk, getCatalogBooksThunk, putCatalogBooks } from '../../store/reducers/book';
import { reqPagination, resetFilters } from '../../store/reducers/request';
import Filters from '../Filters/Filters';
import Book from '../Book/Book';
import Loader from '../Loaders/Loader';
import Pagination from '../Pagination/Pagination';
import { BookModel } from '../../models/book';
import books from '../../assets/cart-default.webp';

const CatalogBody: React.FC = () => {
  const dispatch = useAppDispatch();

  const { catalogBooks, status, totalBooks } = useAppSelector((state) => state.bookSlice);
  const requestSlice = useAppSelector((state) => state.requestSlice);
  const { selectedGenres, selectedMinPrice,
    selectedMaxPrice } = useAppSelector((store) => store.requestSlice);
  const { minPrice, maxPrice } = useAppSelector((state) => state.bookSlice);

  const isChangedPrice = (selectedMinPrice !== minPrice && selectedMinPrice !== 0) ||
    (selectedMaxPrice !== maxPrice && selectedMaxPrice !== 0);

  const isChangedGenres = selectedGenres.length > 0;

  useEffect(() => {
    if (!requestSlice.noLimit) return;

    dispatch(putCatalogBooks([]));
  }, [
    requestSlice.selectedGenres,
    requestSlice.selectedMaxPrice,
    requestSlice.selectedMinPrice,
    requestSlice.selectedOrder,
    requestSlice.selectedQuery,
    requestSlice.selectedSort,
  ]);

  useEffect(() => {
    if (requestSlice.noLimit) {
      dispatch(getAdditionalBookThunk(requestSlice));
    }

    if (!requestSlice.noLimit) {
      dispatch(putCatalogBooks([]));
      dispatch(getCatalogBooksThunk(requestSlice));
    }
  }, [requestSlice]);

  const handleUpdateList = () => {
    if (((requestSlice.currentPage + 1) * requestSlice.pageSize) > totalBooks) return;

    dispatch(reqPagination(requestSlice.currentPage + 1));
  };

  const resetFilter = () => {
    dispatch(resetFilters());
  };

  return (
    <Body>
      <div className={'bar'}>
        <div className={'bar__container'}>
          <h2 className={'bar__title'}>Catalog</h2>

          {(isChangedPrice || isChangedGenres) && <button className={'bar__clear'} onClick={resetFilter}>Clear filters</button>}
        </div>

        <Filters />
      </div>

      {status === 'loading' && !requestSlice.noLimit && catalogBooks.length === 0 && <Body><Loader /></Body> }

      {catalogBooks?.length !== 0 &&
        <>
          <div className={'book-content'}>
            {catalogBooks.map((item: BookModel) => (
              <Book key={item.bookId} book={item} />
            ))}
          </div>

          {requestSlice.noLimit &&
            <Waypoint
              onEnter={handleUpdateList}
            />
          }

          {!requestSlice.noLimit && <Pagination />}
        </>
      }

      {catalogBooks?.length === 0 && status !== 'loading' &&
          <NoResults>
            <img className={'image'} src={books} alt='Books'/>

            <div className={'content'}>
              <h2 className={'content__title'}>No results</h2>
            </div>
          </NoResults>
      }

      {status === 'loading' && requestSlice.noLimit && <Body><Loader /></Body> }
    </Body>
  );
};

export default CatalogBody;

const Body = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto 80px;
  min-height: calc(100vh - 112px - 756px);

  @media screen and (max-width: 1024px) {
    margin: 0 auto 80px;
  }

  .bar {
    display:flex;
    justify-content: space-between;
    align-items: center;

    &__container {
      display: flex;
      width: 100%;

      @media screen and (max-width: 1024px) {
        align-items: center;
        margin-bottom: 20px;
      }
    }

    &__title {
      font-weight: 700;
      font-size: 40px;
      line-height: 60px;
      color: var(--dark);
      margin: 0;

      @media screen and (max-width: 520px) {
        font-size: 28px;
        line-height: 36px;
      }
    }

    &__clear {
      font-weight: 500;
      font-size: 16px;
      text-decoration-line: underline;
      color: var(--dark_green);
      border: none;
      background-color: white;
      cursor: pointer;
      margin: 0 16px 0 auto;

      @media screen and (max-width: 1024px) {
        display: flex;
      }
    }

    @media screen and (max-width: 1024px) {
      flex-direction: column;
      align-items: start;
    }
  }

  .book-content {
    display: flex;
    flex-wrap: wrap;
    margin: 40px auto 0;
    width: 100%;
    /* justify-content: space-between; */
    gap: 16px;
    /* justify-content: center; */

    @media screen and (max-width: 700px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 700px) {
      gap: 10px;
    }
  }

  .empty-catalog {
    display: flex;
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    color: var(--dark);
    margin: 100px auto 100px;
  }
`;

const NoResults = styled.div`
  display: flex;
  margin: 64px auto;
  align-items: center;

  
  @media screen and (max-width: 520px) {
    flex-direction: column-reverse;
  }
  
  .image {
    height: 261px;
    width: 433px;

    @media screen and (max-width: 960px) {
      height: 140px;
      width: auto;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    margin-left: 110px;

    @media screen and (max-width: 960px) {
      margin-left: 64px;
    }

    @media screen and (max-width: 600px) {
      margin-left: 24px;
    }

    @media screen and (max-width: 520px) {
      margin: 0 0 24px 0;
    }

    &__title {
      font-weight: 700;
      font-size: 40px;
      line-height: 60px;
      color: #0D1821;
      margin: 0;

      @media screen and (max-width: 960px) {
        font-size: 32px;
        line-height: 48px;
      }
    }
  }
`;
