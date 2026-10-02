import React from 'react';
import styled from 'styled-components';
import ULink from '../../components/UI/Link/ULink';
import books from '../../assets/cart-default.webp';

const EmptyCart: React.FC = () => {
  return (
    <Body>
      <img className={'image'} src={books} alt={'Books'} />

      <div className={'content'}>
        <h2 className={'content__title'}>Your cart is empty</h2>

        <p className={'content__text'}>Add items to cart to make a&nbsp;purchase.<br/>Go to the catalogue now.</p>

        <ULink to={'/catalog'} text={'Go to catalog'} view={'primary'} width={'long'} />
      </div>
    </Body>
  );
};

export default EmptyCart;

const Body = styled.section`
  display: flex;
  margin: auto 0;

  @media screen and (max-width: 520px) {
    flex-direction: column-reverse;
    margin: 32px 0;
  }
  
  .image {
    height: 261px;
    width: 433px;

    @media screen and (max-width: 1024px) {
      height: 130px;
      width: 230px;
    }

    @media screen and (max-width: 520px) {
      margin: 32px auto;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    margin-left: 110px;

    @media screen and (max-width: 1024px) {
      margin-left: 64px;
    }

    @media screen and (max-width: 800px) {
      margin-left: 32px;
    }

    @media screen and (max-width: 520px) {
      margin-left: 0;
    }

    &__title {
      font-weight: 700;
      font-size: 40px;
      line-height: 60px;
      color: #0D1821;
      margin: 0;

      @media screen and (max-width: 800px) {
        font-size: 32px;
        line-height: 48px;
      }

      @media screen and (max-width: 520px) {
        font-size: 24px;
        line-height: 32px;
      }
    }

    &__text {
      font-weight: 500;
      font-size: 24px;
      line-height: 36px;
      color: #344966;
      margin-top: 20px;
      margin-bottom: 60px;

      @media screen and (max-width: 800px) {
        font-size: 18px;
        line-height: 26px;
      }
    }
  }
`;
