import { useEffect } from 'react';
import styled from 'styled-components';
import { setOpenedFilter } from '../../store/reducers/user';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import MultiRangeSlider from './PriceSlider/PriceSlider';
import GenresFilter from './GenresFilter';
import SortFilter from './SortFilter';
import PageSize from './PageSize';
import Filter from './Filter';

const Filters: React.FC = () => {
  const dispatch = useAppDispatch();

  const { pageSize, selectedGenres, selectedMinPrice,
    selectedMaxPrice, selectedSort } = useAppSelector((store) => store.requestSlice);
  const { minPrice, maxPrice } = useAppSelector((state) => state.bookSlice);

  const isChangedPrice = (selectedMinPrice !== minPrice && selectedMinPrice !== 0) ||
    (selectedMaxPrice !== maxPrice && selectedMaxPrice !== 0);

  const isChangedGenres = selectedGenres.length > 0;

  useEffect(() => {
    // eslint-disable-next-line
    const listen = (event: any) => {
      const id = event.target.id;

      if (id !== 'size' && id !== 'genre' && id !== 'slider' && id !== 'sort') {
        dispatch(setOpenedFilter(''));
      }
    };

    document.addEventListener('click', listen);

    return () => document.removeEventListener('click', listen);
  }, []);

  return (
    <Body>
      <Filter title={`Show by ${pageSize}`} id={'size'}>
        <PageSize />
      </Filter>

      <Filter title={`Genre ${isChangedGenres ? '*' : ''}`} id={'genre'}>
        <GenresFilter />
      </Filter>

      <Filter title={`Price ${isChangedPrice ? '*' : ''}`} id={'slider'} >
        <MultiRangeSlider />
      </Filter>

      <Filter title={`Sort by ${selectedSort}`} id={'sort'}>
        <SortFilter />
      </Filter>
    </Body>
  );
};

export default Filters;

const Body = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;
  width: 748px;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    display: grid;
    gap: 12px;
    grid-template-columns: 1fr 1fr;
  }
`;
