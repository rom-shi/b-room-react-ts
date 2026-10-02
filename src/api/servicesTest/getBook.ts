import { BookModel } from '../../models/book';
import testBooks from '../temp/books';

export const getBook = (id: string | undefined) => {
  const book = testBooks.filter((item) => item.bookId === id)[0];

  return new Promise<BookModel>((res) => {
    setTimeout(() => {
      res(book);
    }, 610);
  });
};
