import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { putCart } from '../../store/reducers/cart';
import { addFavoriteBook, removeFavoriteBook } from '../../store/reducers/user';
import { BookModel } from '../../models/book';
import StarCounter from './StarCounter/StarCounter';
import BookButton from './Button/BookButton';
import ULink from '../UI/Link/ULink';
import BookLoader from '../Loaders/BookLoader';
import favoriteButton from '../../assets/button-favorite_unpressed.svg';
import favoriteButtonActive from '../../assets/button-favorite_pressed.svg';
import newBook from '../../assets/new-book.png';
import bestsellerBook from '../../assets/bestseller-book.webp';
import scrollToTop from '../ScrollToTop/ScrollToTop';

interface IBook {
  book: BookModel
  onClick?: () => void
}

const Book: React.FC<IBook> = ({ book }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.userSlice.user);
  const cartBooks = useAppSelector((state) => state.cartSlice.cartItems);

  const thisBook = !!cartBooks.filter((item) => item.cartId === book.bookId)[0];
  const isFavoriteBook = user?.favoriteBooks.includes(book.bookId);

  const handleAddToCart = (id: string, available: boolean) => {
    if (!available) return;
    dispatch(putCart({ id, view: 'hard' }));
  };

  const handleAddFavorite = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.stopPropagation();

    if (user?.favoriteBooks.includes(id)) {
      dispatch(removeFavoriteBook({ id }));
    } else {
      dispatch(addFavoriteBook({ id }));
    }
  };

  return (
    <Body photo={book.photo} isFavorite={isFavoriteBook}>
      {book.photo
        ? <div className={'book__cover'} onClick={() => { navigate(`/catalog/${book.bookId}`); scrollToTop(); }}>
          {user && <button className={'book__favorite'} onClick={(e) => handleAddFavorite(e, book.bookId)} id={book.bookId.toString()} title={'Add to favorite'} />}

          {(book.news || book.bestsaller) && <div className={'book__attributies'}>
            {book.news && <img className={'book__attributies-new'} src={newBook} alt={'new book'} />}

            {book.bestsaller && <img className={'book__attributies-best'} src={bestsellerBook} alt={'best book'} />}
          </div>}
        </div>
        : <BookLoader>
          <div/><div/><div/><div/><div/><div/><div/><div/><div/><div/><div/><div/>
        </BookLoader>
      }

      <p className={'book__title'}>{book.title}</p>

      <p className={'book__author'}>{book.author}</p>

      {(book.rating || book.rating === 0) && <StarCounter rating={book.rating} />}

      {thisBook
        ? <ULink to={'/cart'} text={'Added to cart'} view={'book'} width={'long'} />
        : <BookButton
          available={book.available}
          onClick={() => handleAddToCart(book.bookId, book.available)}
          title={book.available ? `$ ${(book.hardPrice * 100).toFixed(2)} USD` : 'Not available'}
          view={book.available ? '' : 'not-availble'}
        />
      }
    </Body>
  );
};

export default Book;

interface IStylesProps {
  photo?: string;
  isFavorite?: boolean;
}

const Body = styled.div<IStylesProps>`
  display: flex;
  flex-direction: column;
  height: 50vw;
  max-height: 800px;
  width: calc((100% - 48px) / 4);

  @media screen and (max-width: 700px) {
    width: calc((50vw - 32px));
    height: 100vw;
  }

  .book {
    &__cover {
      display: flex;
      width: 100%;
      height: 63%;
      background: url(${(props) => props.photo});
      background-size: cover;
      border-radius: 16px;
      margin-bottom: 30px;
      position: relative;
      cursor: pointer;

      @media screen and (max-width: 960px) {
        margin-bottom: 16px;
      }
    }

    &__favorite {
      position: absolute;
      display: flex;
      width: 48px;
      height: 48px;
      border: none;
      cursor: pointer;
      border-radius: 24px;
      top: 20px;
      left: 20px; 
      background: url(${favoriteButton});
      transition: all 0.2s;
      padding: 0;
      background-size: contain;

      @media screen and (max-width: 960px) {
        width: 32px;
        height: 32px;
      }

      :hover {
        background: url(${favoriteButtonActive});
        transition: all 0.2s;
        background-size: contain;
      }
      
    ${(props) => {
      if (props.isFavorite) {
        return css`
          background: url(${favoriteButtonActive});
          background-size: contain;
        `;
      }
    }}
  }

    &__attributies {
      display: flex;
      flex-direction: column;
      position: absolute;
      bottom: 20px;
      left: 20px;
      justify-content: flex-end;

      &-new {
        width: 132px;
        height: 30px;

        @media screen and (max-width: 960px) {
          width: 100px;
          height: 23px;
        }
      }

      &-best{
        width: 175px;
        height: 30px;
        margin-top: 10px;

        @media screen and (max-width: 960px) {
          width: 120px;
          height: 23px;
        }
      }
    }

    &__title {
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      color: var( --dark_blue);
      margin: 0;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;

      @media screen and (max-width: 960px) {
        font-size: 16px;
        line-height: 24px;
      }
    }

    &__author {
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      color: var(--dark_grey);
      margin: 0;
      overflow: hidden;
      white-space: nowrap;

      @media screen and (max-width: 960px) {
        font-size: 16px;
        line-height: 24px;
      }
    }
  }
`;
