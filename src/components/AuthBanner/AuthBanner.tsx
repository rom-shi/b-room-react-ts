import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { loadUserThunk } from '../../store/reducers/user';
import scrollToTop from '../ScrollToTop/ScrollToTop';
import ULink from '../UI/Link/ULink';
import castle from '../../assets/castle.webp';
import witch from '../../assets/witch.svg';

const AuthBanner: React.FC = () => {
  const { user } = useAppSelector((state) => state.userSlice);

  if (user) return null;

  const dispatch = useAppDispatch();

  const handleAuth = () => {
    dispatch(loadUserThunk());
    scrollToTop();
  };

  return (
    <Body>
      <div className={'authbanner__wrapper'}>
        <img className={'authbanner__castle'} src={castle} alt={'castle'} />

        <div className={'authbanner__content'}>
          <img className={'authbanner__witch'} src={witch} alt={'witch'} />

          <div className={'authbanner__content__info'}>
            <h2 className={'authbanner__content__info-title'}>Authorize now</h2>

            <p className={'authbanner__content__info-text'}>
              Authorize now and&nbsp;discover the&nbsp;fabulous world of&nbsp;books
            </p>

            <div onClick={handleAuth}>
              <ULink to={'#'} text={'Login me!'} view={'primary'} width={'long'} />
            </div>
          </div>
        </div>
      </div>
    </Body>
  );
};

export default AuthBanner;

const Body = styled.section`
  display: flex;
  width: 100%;
  height: 400px;
  background-color: #F0F4EF;
  border-radius: 16px;
  position: relative;
  z-index: 1;

  .authbanner {
    &__wrapper {
      display:flex;
      align-items:center;
      justify-content: space-between;
      width: 1080px;
      padding: 24px;
    }
    
    &__castle {
      width: 521px;
      height: 462px;
      padding-bottom: 62px;
      cursor: pointer;

      @media screen and (max-width: 1080px) {
        width: 386px;
        height: 357px;
        margin-bottom: -40px;
        padding: 0;
      }

      @media screen and (max-width: 920px) {
        width: 285px;
        height: 256px;
        margin-bottom: -144px;

      }

      @media screen and (max-width: 690px) {
        display: none;
      }
    }
    
    &__witch {
      display: flex;
      position: absolute; 
      top: -62px;
      right: 0px;
      z-index: 2;
      width: 456px;
      height: 462px;

      @media screen and (max-width: 690px) {
        width: 100%;
      }
    }
    
    &__content {
      display: flex;
      flex-direction: column;
      align-items:center;

      &__info {
        z-index: 3;
        width: 411px;

        @media screen and (max-width: 920px) {
          margin-left: 16px;
          width: auto;
        }

        @media screen and (max-width: 690px) {
          margin: 0;
        }

        &-title {
          font-weight: 700;
          font-size: 40px;
          line-height: 60px;
          color: var(--dark);

          @media screen and (max-width: 520px) {
            font-size: 28px;
            line-height: 32px;
          }
        }

        &-text {
          font-weight: 500;
          font-size: 20px;
          line-height: 30px;
          color: var(--dark);

          @media screen and (max-width: 520px) {
            font-size: 16px;
            line-height: 24px;
          }
        }
      }
    }
  }
`;
