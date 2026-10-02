import moment from 'moment';
import { BookModel } from '../../models/book';
import { IRequestState } from '../../models/request';
import testBooks from '../temp/books';

export const getAdditionalBook = (request: IRequestState) => {
  const byGenres = getBooksByGenres(request.selectedGenres);
  const byPrice = getBooksByPrice(byGenres, +(request.selectedMinPrice /
  100).toFixed(5), request.selectedMaxPrice / 100);
  const bySort = getBooksBySort(byPrice, request.selectedSort, request.selectedOrder);
  const byQuery = getBooksByQuery(bySort, request.selectedQuery.toLocaleLowerCase());

  const books = byQuery.slice(
    request.currentPage * request.pageSize,
    (request.currentPage + 1) * request.pageSize,
  );
  return new Promise<BookModel[]>((res) => {
    setTimeout(() => {
      res(books);
    }, 610);
  });
};

const getBooksByGenres = (genres: string[]) => {
  if (genres.length === 0) return testBooks;
  return testBooks.filter((item) => genres.some((elem) => item.genre.includes(elem)));
};

const getBooksByPrice = (books: BookModel[], minVal: number, maxVal: number) => {
  if (minVal === 0 && maxVal === 0) return books;

  return books.filter((item) => item.hardPrice >= minVal && item.hardPrice <= maxVal);
};

const getBooksBySort = (books: BookModel[], sort: 'price' | 'title' | 'author' | 'rating' | 'date', order: 'ASC' | 'DESC') => {
  let name: 'hardPrice' | 'title' | 'author' | 'rating' | 'date';
  if (sort === 'price') name = 'hardPrice';
  if (sort === 'title') name = 'title';
  if (sort === 'author') name = 'author';
  if (sort === 'rating') name = 'rating';
  if (sort === 'date') name = 'date';

  function compareASC(a: BookModel, b: BookModel) {
    if (name === 'date') {
      if (moment(a[name], 'DD-MM-YYYY').valueOf() < moment(b[name], 'DD-MM-YYYY').valueOf()) {
        return -1;
      }
      if (moment(a[name], 'DD-MM-YYYY').valueOf() > moment(b[name], 'DD-MM-YYYY').valueOf()) {
        return 1;
      }
    }

    if (name !== 'date') {
      if (a[name] < b[name]) {
        return -1;
      }
      if (a[name] > b[name]) {
        return 1;
      }
    }
    return 0;
  }

  function compareDESC(a: BookModel, b: BookModel) {
    if (name === 'date') {
      if (moment(a[name], 'DD-MM-YYYY').valueOf() > moment(b[name], 'DD-MM-YYYY').valueOf()) {
        return -1;
      }
      if (moment(a[name], 'DD-MM-YYYY').valueOf() < moment(b[name], 'DD-MM-YYYY').valueOf()) {
        return 1;
      }
    }

    if (name !== 'date') {
      if (a[name] < b[name]) {
        return 1;
      }
      if (a[name] > b[name]) {
        return -1;
      }
    }
    return 0;
  }

  if (order === 'ASC') return books.sort(compareASC);
  return books.sort(compareDESC);
};

const getBooksByQuery = (books: BookModel[], query: string) => {
  return books.filter((item) => item.author.toLocaleLowerCase().includes(query) ||
  item.title.toLocaleLowerCase().includes(query));
};
