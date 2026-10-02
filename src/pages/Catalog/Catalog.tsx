import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import CatalogBody from '../../components/CatalogBody/CatalogBody';
import AuthBanner from '../../components/AuthBanner/AuthBanner';

const Catalog: React.FC = () => {
  return (
    <Body>
      <Helmet>
        <title>Catalog</title>
        <meta name={'description'} content={'В каталоге можете найти интересующие вас книги, добавить в избранное или купить'} />
      </Helmet>

      <CatalogBody />

      <AuthBanner />
    </Body>
  );
};

export default Catalog;

const Body = styled.main`
  margin: 40px auto 150px;
  padding: 0 calc((1.3% - 9px) * 8); 
  max-width: var(--width_content);

  @media (max-width: 1024px) {
    padding: 0 16px;   
  }

  @media screen and (max-width: 960px) {
    margin: 40px auto 48px;
  }
`;
