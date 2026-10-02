import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getCartBooksThunk } from '../../store/reducers/book';
import EmptyCart from './EmptyCart';
import ULink from '../../components/UI/Link/ULink';
import BookCounter from '../../components/BookCounter/BookCounter';
import Loader from '../../components/Loaders/Loader';
import scrollToTop from '../../components/ScrollToTop/ScrollToTop';

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state) => state.userSlice);
  const { cartItems } = useAppSelector((state) => state.cartSlice);
  const { cartBooks, status } = useAppSelector((state) => state.bookSlice);

  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const ids = cartItems.map((item) => item.cartId);
    dispatch(getCartBooksThunk(ids));
  }, []);

  useEffect(() => {
    setTotal(0);

    if (cartBooks.length === 0 || cartBooks.length !== cartItems.length) return;

    for (let i = 0; i < cartBooks.length; i++) {
      setTotal((state) => (state +
        (cartBooks[i].hardPrice * cartItems[i].hardCoverCount) +
        (cartBooks[i].paperPrice * cartItems[i].paperCoverCount)
      ));
    }
  }, [cartItems, cartBooks]);

  if (status === 'loading') {
    return (
      <Body>
        <Loader/>
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

  return (
    <Body>
      <Helmet>
        <title>Cart</title>
        <meta name={'description'} content={'Ваша корзина'} />
      </Helmet>

      {cartItems.length !== 0
        ? <FullCart>
          {cartBooks?.map((item) => {
            if (!cartItems.map((item) => item.cartId).includes(item.bookId)) return;

            return (
              <div className={'item'} key={item.bookId}>
                <div className={'item__cover'} onClick={() => navigate(`/catalog/${item.bookId}`)}>
                  <img src={item.photo} alt={'book__cover'} />
                </div>

                <div className={'item__description'}>
                  <h2 className={'item__title'}>{item.title}</h2>

                  <h3 className={'item__author'}>{item.author}</h3>

                  <p className={'item__price__label'}>Paperback</p>

                  <BookCounter id={item.bookId} view={'paper'} />

                  <h3 className={'item__price'}>$ {(item.paperPrice * 100).toFixed(2)} USD</h3>

                  <p className={'item__price__label'}>Hardcover</p>

                  <BookCounter id={item.bookId} view={'hard'} />

                  <h3 className={'item__price'}>$ {(item.hardPrice * 100).toFixed(2)} USD</h3>
                </div>
              </div>
            );
          })}

          <p className={'cart__total'}>Total: <b>{(total * 100).toFixed(2)} USD</b></p>

          <div className={'cart__buttons'}>
            <ULink to={'/catalog'} text={'Continue shopping'} onClick={scrollToTop} view={'secondary'} width={'long'} />

            {user
              ? <ULink to={'/payment'} text={'Check out'} view={'primary'} width={'long'} />
              : <ULink to={'/login'} text={'Log in to payment'} view={'primary'} width={'long'} />
            }
          </div>
        </FullCart>
        : <EmptyCart />
      }
    </Body>
  );
};

export default Cart;

const Body = styled.main`
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 422px);
  padding: 0 16px;

  @media screen and (max-width: 1024px) {
    min-height: calc(100vh - 406px);
  }

  @media screen and (max-width: 520px) {
    min-height: auto;
  }
`;

const FullCart = styled.section`
  display: flex;
  flex-direction: column;
  max-width: var(--width_content);
  width: 100%;
  margin: 0 auto 60px;
  padding: 0 calc((1.3% - 9px) * 8);

  .item {
    display: flex;
    padding: 30px 0;
    border-top: 2px solid #0000001f;

    :first-child {
      border-top: none;
    }

    &__cover {
      display: flex;
      height: 270px;
      width: 175px;
      cursor: pointer;

      @media screen and (max-width: 520px) {
        height: 250px;
        width: 162px;
      }

      @media screen and (max-width: 420px) {
        height: 220px;
        width: 143px;
      }
    }

    &__description {
      display: flex;
      flex-direction: column;
      margin-left: 32px;

      @media screen and (max-width: 520px) {
        margin-left: 16px;
      }
    }
    
    &__price__label {
      font-size: 14px;
      margin-bottom: 4px;
    }

    &__title {
      margin: 0;
    }

    &__title__author {

    }

    &__title__counter {
      
    }

    &__title__price {

    }
  }

  .cart__total {
    margin: 0 0 30px;
    font-size: 30px;

    @media screen and (max-width: 520px) {
      font-size: 24px;
    }
  }

  .cart__buttons {
    display: flex;
    justify-content: space-between;
    max-width: 480px;
    gap: 16px;

    @media screen and (max-width: 420px) {
      flex-direction: column;
    }
  }
`;
