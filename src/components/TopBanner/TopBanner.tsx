import styled from 'styled-components';
import ULink from '../UI/Link/ULink';
import scrollToTop from '../ScrollToTop/ScrollToTop';
import bannerBooks from '../../assets/banner-books.webp';
import bannerBook from '../../assets/books.png';
import bannerGirl from '../../assets/banner-girl.webp';

const TopBanner: React.FC = () => {
  return (
    <Body>
      <div className={'banner__books'} />

      <div className={'banner__wrapper'}>
        <div className={'banner__content'}>
          <h2 className={'banner__content__title'}>Build your library with us</h2>

          <p className={'banner__content__text'}>Buy two books and get one for free</p>

          <ULink to={'/catalog'} text={'Choose a book'} onClick={scrollToTop} view={'primary'} width={'long'} />
        </div>

        <img className={'banner__girl'} src={bannerGirl} alt={'Girl'} />
      </div>
    </Body>
  );
};

export default TopBanner;

const Body = styled.section`
  display: flex;
  width: 100%;
  height: 400px;
  background-color: #F0F4EF;
  border-radius: 16px;
  position: relative;
  z-index: 1;
  margin-bottom: 64px;

  .banner__books {
    background-image: url(${bannerBooks});
    background-size:cover;
    position: absolute;
    z-index: 2;
    border-radius: 16px;
    height: 265.72px;
    width: 542px;
    left: 0;
    bottom: 0;
  }

  .banner__wrapper {
    display: flex; 
    align-items: center;
    justify-content: space-between;
    width: 1080px;
    z-index: 3;
    margin: 0 auto;

    @media screen and (max-width: 1024px) {
      align-items: start;
      padding: 36px 36px 36px 64px;
    }

    @media screen and (max-width: 830px) {
      padding: 36px;
    }

    @media screen and (max-width: 770px) {
      padding: 24px;
    }

    @media screen and (max-width: 520px) {
      padding-bottom: 0;
    }
  }

  .banner__content {
    display: flex;
    flex-direction: column;
    margin-left: 25px;
    
    &__title {
      font-weight: 700;
      font-size: 40px;
      line-height: 60px;
      color: var(--dark);
      margin: 0;
      margin-bottom: 10px;
      z-index: 3;

      @media screen and (max-width: 1024px) {
        font-size: 32px;
        line-height: 48px;
      }

      @media screen and (max-width: 770px) {
        font-size: 22px;
        line-height: 28px;
      }
    }
    
    &__text {
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      color: var(--dark_blue);
      margin: 0;
      margin-bottom: 50px;
      width: 200px;

      @media screen and (max-width: 1024px) {
        font-size: 16px;
        line-height: 24px;
      }

      @media screen and (max-width: 770px) {
        font-size: 14px;
        line-height: 21px;
      }
    }

    @media screen and (max-width: 1024px) {
      margin-left: 0;
    }
  }

  .banner__girl {
    width: 406px;
    height: 400px;
  }

  @media screen and (max-width: 1024px) {
    height: 289px;

    .banner__books {
      width: 361px;
      height: 218px;
      border-bottom-right-radius: 0;
      background-image: url(${bannerBook});
      opacity: 0.5;
    }

    .banner__girl {
      width: 328px;
      height: 325px;
      position: absolute;
      right: 0;
      bottom: 0;
      border-radius: 16px;
    }
  }

  @media screen and (max-width: 770px) {
    height: 254px;

    .banner__girl {
      width: 253px;
      height: 282px;
    }

    .banner__books {
      width: 316px;
      height: 170px;
    }
  }

  @media screen and (max-width: 570px) {
    .banner__content a {
      min-width: auto;
      width: 190px;
      height: 38px;
      font-size: 14px;
      line-height: 18px;
    }

    .banner__books {
      width: 200px;
      height: 100px;
    }
  }

  @media screen and (max-width: 520px) {
    height: auto;

    .banner__wrapper {
      width: auto;
      flex-direction: column;
    }

    .banner__girl {
      position: static;
      margin-top: 32px;
    }

    .banner__books {
      bottom: auto;
      left: calc(50% - 50px);
      top: 76px;
    }
  }
`;
