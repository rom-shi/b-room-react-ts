import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { reqGenres, reqPagination } from '../../store/reducers/request';
import { putCatalogBooks } from '../../store/reducers/book';
import { GenreModel } from '../../models/genre';
import UCheckbox from '../UI/Checkbox/UCheckbox';

const GenresFilter: React.FC = () => {
  const dispatch = useAppDispatch();

  const { genres } = useAppSelector((state) => state.bookSlice);
  const { selectedGenres } = useAppSelector((state) => state.requestSlice);

  const handleSelectGenre = (genre: GenreModel) => {
    let tempArray = [...selectedGenres];

    if (tempArray.includes(genre.genreId)) {
      tempArray = selectedGenres.filter((gen) => gen !== genre.genreId);
    } else {
      tempArray.push(genre.genreId);
    }

    dispatch(reqGenres({ genresId: tempArray }));
    dispatch(reqPagination(0));
    dispatch(putCatalogBooks([]));
  };

  return (
    <Body>
      {genres?.map((genre) => (
        <UCheckbox
          count={genre.countBooks}
          func={handleSelectGenre}
          genre={genre}
          key={genre.genreId}
          selectedGenres={selectedGenres}
        />
      ))}
    </Body>
  );
};

export default GenresFilter;

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

  @media screen and (max-width: 600px) {
    left: auto;
    right: 0px;
    top: 52px;
  }
`;
