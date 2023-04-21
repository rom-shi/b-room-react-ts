import { GenreModel } from '../../models/genre';
import testBooks from '../temp/books';
import testGenres from '../temp/genres';

export const getGenres = () => {
  const booksGenres = testBooks.map((item) => item.genre).flat();
  const genres = testGenres.filter((item) => booksGenres.includes(item.genreId))
    .sort((a, b) => (a.genre > b.genre ? 1 : -1));

  return new Promise<GenreModel[]>((res) => {
    setTimeout(() => {
      res(genres);
    }, 610);
  });
};
