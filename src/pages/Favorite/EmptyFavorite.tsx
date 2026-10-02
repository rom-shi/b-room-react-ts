import React from 'react';
import styled from 'styled-components';
import ULink from '../../components/UI/Link/ULink';
import books from '../../assets/cart-default.webp';

const EmptyFavorite: React.FC = () => {
  return (
    <Body>
      <img className={'image'} src={books} alt={'Books'} />

      <div className={'warning'}>
        <h2 className={'warning__title'}>Your favorite is empty</h2>

        <p className={'warning__text'}>Add items to favorite to don't forget.<br />Go to the catalogue now</p>

        <ULink to={'/catalog'} text={'Go to catalog'} view={'primary'} width={'long'} />
      </div>
    </Body>
  );
};

export default EmptyFavorite;

const Body = styled.section`
  display: flex;
  margin: auto 0;
  
  .image {
    height: 261px;
    width: 433px;
  }

  .warning {
    display: flex;
    flex-direction: column;
    margin-left: 110px;

    &__title {
      font-weight: 700;
      font-size: 40px;
      line-height: 60px;
      color: #0D1821;
      margin: 0;
    }

    &__text {
      font-weight: 500;
      font-size: 24px;
      line-height: 36px;
      color: #344966;
      margin-top: 20px;
      margin-bottom: 60px;
    }
  }
`;
