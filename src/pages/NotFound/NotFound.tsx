import React from 'react';
import './notFound.css';
import styled from 'styled-components';
import scrollToTop from '../../components/ScrollToTop/ScrollToTop';

const NotFound: React.FC = () => {
  scrollToTop();

  return (
    <Body>
      <div className={'error'}>
        <div className={'number'}>4</div>
        <div className={'illustration'}>
          <div className={'circle'}></div>
          <div className={'clip'}>
            <div className={'paper'}>
              <div className={'face'}>
                <div className={'eyes'}>
                  <div className={'eye eye-left'}></div>
                  <div className={'eye eye-right'}></div>
                </div>
                <div className={'rosyCheeks rosyCheeks-left'}></div>
                <div className={'rosyCheeks rosyCheeks-right'}></div>
                <div className={'mouth'}></div>
              </div>
            </div>
          </div>
        </div>
        <div className={'number'}>4</div>
      </div>

      <div className={'text'}>Ups... page not found</div>
    </Body>
  );
};

export default NotFound;

const Body = styled.main`
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 422px);
  align-items: center;

  @media screen and (max-width: 1024px) {
    min-height: calc(100vh - 406px);
  }

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }

  @media screen and (max-width: 640px) {
    .number {
      font-size: 8rem;
    }

    .text {
      font-size: 2rem;
      margin: 32px auto;
    }

    .illustration {
      width: 9.2rem;
      margin: 0 2.1rem;
    }

    .circle {
      width: 9.2rem;
      height: 8.4rem;
    }

    .clip {
      width: 9.5rem;
      height: 10rem;
    }

    .paper {
      width: 8.2rem;
      height: 9.4rem;
    }

    .eyes {
      left: 2rem;
    }
  }

  @media screen and (max-width: 470px) {
    .number {
      font-size: 5rem;
    }

    .text {
      font-size: 1.5rem;
    }

    .illustration {
      width: 7.2rem;
      margin: 0 1rem;
    }

    .circle {
      width: 7.2rem;
      height: 5.4rem;
    }

    .clip {
      width: 7.5rem;
      height: 8rem;
    }

    .paper {
      width: 6.2rem;
      height: 7.4rem;
    }

    .eyes {
      left: 1rem;
    }

    .eye-left {
      left: 6px;
    }

    .eye-right {
      right: 8px;
    }
    
    .rosyCheeks {
      top: 1.8rem;
    }

    .rosyCheeks-left {
      left: 0.7rem;
    }

    .rosyCheeks-right {
      right: 0.7rem;
    }
  }
`;
