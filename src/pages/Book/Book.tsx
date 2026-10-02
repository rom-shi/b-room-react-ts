import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import parse from 'html-react-parser';
import { CartItem, putCart } from '../../store/reducers/cart';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { getOneBookThunk, putCatalogBooks } from '../../store/reducers/book';
import { reqGenres, reqPagination } from '../../store/reducers/request';
import { BookModel } from '../../models/book';
import scrollToTop from '../../components/ScrollToTop/ScrollToTop';
import AuthBanner from '../../components/AuthBanner/AuthBanner';
import BookButton from '../../components/Book/Button/BookButton';
import BookCounter from '../../components/BookCounter/BookCounter';
import Comments from '../../components/Comments/Comments';
import Loader from '../../components/Loaders/Loader';
import RateBook from '../../components/Book/RateBook/RateBook';
import Recomendation from '../../components/Recomendation/Recomendation';
import StarCounter from '../../components/Book/StarCounter/StarCounter';
import starFilled from '../../assets/star-filled.svg';

const Book: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const params = useParams<{id: string | undefined}>();

  const cartItems = useAppSelector((state) => state.cartSlice.cartItems);
  const book = useAppSelector((state) => state.bookSlice.oneBook);
  const genres = useAppSelector((state) => state.bookSlice.genres);
  const status = useAppSelector((state) => state.bookSlice.status);
  const user = useAppSelector((state) => state.userSlice.user);

  const [thisBookInCart, setThisBookInCart] = useState<CartItem>();

  useEffect(() => {
    dispatch(getOneBookThunk(params.id));
  }, [params]);

  useEffect(() => {
    setThisBookInCart(cartItems.filter((item) => item.cartId === book?.bookId)[0]);
  }, [cartItems, book]);

  const handleAddToCartPaper = (id: string, available: boolean) => {
    if (!available) return;
    dispatch(putCart({ id, view: 'paper' }));
  };

  const handleAddToCartHard = (id: string, available: boolean) => {
    if (!available) return;
    dispatch(putCart({ id, view: 'hard' }));
  };

  const handleSetGenre = (id: string) => {
    scrollToTop();
    dispatch(reqGenres({ genresId: [id] }));
    dispatch(reqPagination(0));
    dispatch(putCatalogBooks([]));
    navigate('/catalog');
  };

  if (status === 'loading' || genres.length === 0) {
    return (
      <Body>
        <Loader />
      </Body>
    );
  }

  if (status === 'error') {
    return (
      <Body>
        Error
      </Body>
    );
  }

  const getBookDescription = (book: BookModel) => {
    return <>
      <h4 className={'discription__content__title-m'}>Description</h4>

      <p className={'discription__content__text'}>
        {parse(book.description)}
      </p>

      <p className={'discription__content__date'}>
        Published: {book.date}
      </p>

      <div className={'discription__content__genres'}>
        {book.genre.map((genre) => {
          const name = genres.filter((item) => item.genreId === genre)[0];

          return (
            <div
              key={name.genreId}
              onClick={() => handleSetGenre(name.genreId)}
            >
              {name.genre}
            </div>
          );
        })}
      </div>

      <div className={'buy__buttons'}>
        <div className={'buy__buttons__wrapper'}>
          <p className={'buy__buttons__label'}>Paperback</p>

          {thisBookInCart?.paperCoverCount
            ? <BookCounter id={book.bookId} view={'paper'} />
            : <BookButton
              available={book.available}
              onClick={() => handleAddToCartPaper(book.bookId, book.available)}
              title={`$ ${(book.paperPrice * 100).toFixed(2)} USD`}
            />
          }
        </div>
        <div className={'buy__buttons__wrapper'}>
          <p className={'buy__buttons__label'}>Hardcover</p>

          {thisBookInCart?.hardCoverCount
            ? <BookCounter id={book.bookId} view={'hard'} />
            : <BookButton
              available={book.available}
              onClick={() => handleAddToCartHard(book.bookId, book.available)}
              title={`$ ${(book.hardPrice * 100).toFixed(2)} USD`}
            />
          }
        </div>
      </div>
    </>;
  };

  return (
    <Body>

      {book
        ? <>
          <Helmet>
            <title>{book.title}</title>
          </Helmet>

          <section className={'discription'}>
            <div className={'discription__top'}>

              <div className={'discription__photo'}>
                <img className={'discription__photo__img'} src={book.photo} alt={'Book photo'}/>
              </div>

              <div className={'discription__content'}>
                <h3 className={'discription__content__title'}>{book.title}</h3>

                <h4 className={'discription__content__title-m'}>{book.author}</h4>

                {/* {user */}
                  {/* // ? <div> */}
                    {/* <div className={'discription__content__rating'}>
                      <div className={'discription__content__rating__star'} />
                      {book.rating.toFixed(1)}
                    </div> */}
                    <RateBook bookId={book.bookId} rating={book.rating} />
                  {/* </div>
                  : 
                  <div className={'discription__content__stars'}><StarCounter rating={book.rating} /></div> */}
                {/* } */}

                <div className={'discription__content-pc'}>
                  {getBookDescription(book)}
                </div>
              </div>
            </div>

            <div className={'discription__content-mobile'}>
              {getBookDescription(book)}
            </div>
          </section>

          <Comments bookId={book.bookId} />

          {!user && <AuthBanner />}

          <Recomendation thisBook={book.bookId} />
        </>
        : <Loader/>
      }
    </Body>
  );
};

export default Book;

const Body = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 24px calc((1.3% - 9px) * 8); 
  max-width: var(--width_content);
  margin-top: 60px;
  min-height: calc(100vh - 112px - 294px);
  gap: 96px;

  @media (max-width: 1024px) {
    padding: 24px 16px;
    gap: 64px;
  }

  @media screen and (max-width: 960px) {
    margin: 40px auto 48px;
  }

  .discription {
    display: flex;

    @media (max-width: 520px) {
      flex-direction: column;
    }

    &__top {
      display: flex
    }

    &__content-pc {
      display: flex;
      flex-direction: column;

      @media (max-width: 520px) {
        display: none;
      }
    }

    &__photo__img {
      height: 799px;
      width: 522px;
      border-radius: 20px;

      @media (max-width: 1024px) {
        height: 650px;
        width: 400px;
      }
      @media (max-width: 960px) {
        height: 540px;
        width: 350px;
      }

      @media (max-width: 830px) {
        height: 340px;
        width: 220px;
      }

      @media (max-width: 580px) {
        height: 300px;
        width: 200px;
      }

      @media (max-width: 520px) {
        height: 250px;
        width: 160px;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      margin-left: 128px;

      @media (max-width: 1200px) {
        margin-left: 64px;
      }

      @media (max-width: 1120px) {
        margin-left: 32px;
      }

      @media (max-width: 700px) {
        margin-left: 24px;
      }

      @media (max-width: 520px) {
        margin-left: 16px;
        width: 100%;
      }

      &__title {
        font-weight: 700;
        font-size: 40px;
        line-height: 60px;
        margin: 0;

        @media (max-width: 580px) {
          font-size: 32px;
          line-height: 46px;
        }

        @media (max-width: 520px) {
          font-size: 24px;
          line-height: 32px;
        }
      }

      &__title-m {
        font-weight: 500;
        font-size: 24px;
        line-height: 36px;
        margin: 0;

        @media (max-width: 520px) {
          font-size: 18px;
          line-height: 32px;
          font-weight: 600;
          margin-top: 32px;
        }
      }

      &__stars {
        max-width: 300px;

        @media screen and (max-width: 960px) {
          max-width: 220px;
        }
      }

      &__text {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        margin: 12px 0;

        @media (max-width: 520px) {
          font-weight: 400;
        }
      }

      &__date {

      }

      &__genres {
        display: flex;
        margin: 10px 0 74px;
        flex-wrap: wrap;
        gap: 12px;

        @media screen and (max-width: 960px) {
          margin: 10px 0 32px;
        }

        div {
          padding: 3px 8px;
          border: 1px solid black;
          border-radius: 5px;
          cursor: pointer;
          min-width: max-content;
        }
      }

      &__rating {
        display: none;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: var(--dark_grey);
        margin-top: 16px;

        @media screen and (max-width: 400px) {
          display: flex;
        }

        &__star {
          background: url(${starFilled});
          background-size: cover;
          width: 20px;
          height: 20px;
          margin-right: 8px;
        }
      }
    }

    &__content-mobile {
      display: none;

      @media screen and (max-width: 520px) {
        display: flex;
        flex-direction: column;
      }
    }
  }

  .buy__buttons {
    display: flex;
    
    &__wrapper {
      display: flex;
      flex-direction: column;
      width: 100%;

      :nth-child(1) {
        margin-right: 20px
      }
    }

    &__label {
      font-size: 14px;
    }
  }
`;
