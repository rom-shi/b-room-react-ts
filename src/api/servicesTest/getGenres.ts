import { GenreModel } from '../../models/genre';
import testBooks from '../temp/books';
import testGenres from '../temp/genres';

export const getGenres = () => {
  const booksGenres = testBooks.map((item) => item.genre).flat();

  const genres = testGenres.filter((item) => booksGenres.includes(item.genreId))
    .sort((a, b) => (a.genre > b.genre ? 1 : -1));

  for (let g = 0; g < genres.length; g++) {
    let counter = 0;

    for (let b = 0; b < testBooks.length; b++) {
      if (testBooks[b].genre.includes(genres[g].genreId)) {
        counter++;
      }
    }

    genres[g].countBooks = counter;
  }

  return new Promise<GenreModel[]>((res) => {
    setTimeout(() => {
      res(genres);
    }, 610);
  });
};
