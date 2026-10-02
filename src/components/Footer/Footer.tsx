import { NavLink, useNavigate } from 'react-router-dom';
import { YMaps, Map, FullscreenControl, ZoomControl } from '@pbe/react-yandex-maps';
import styled from 'styled-components';
import { logoutUser } from '../../store/reducers/user';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import logo from '../../assets/logo-footer.svg';
import { useScreenSize } from '../../hooks/useScreenSize';
import scrollToTop from '../ScrollToTop/ScrollToTop';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.userSlice.user);

  const [, widthHook] = useScreenSize();

  const handleLogout = () => {
    localStorage.removeItem('token');
    scrollToTop();
    dispatch(logoutUser());
    navigate('/');
  };

  const mapState = {
    center: [47.228442, 39.715612],
    zoom: 10,
  };

  return (
    <Wrapper>
      <Body>
        <div className={'footer-column'}>
          <NavLink to={'/'} className={'footer-column__logo'}>Footer logo</NavLink>

          <span className={'footer-column__title'}>roman.shiryaev.ru@gmail.com</span>

          <span className={'footer-column__title'}>+7 (928) 169-56-50 </span>
        </div>

        <div className={'footer-column'}>
          <NavLink to={'/'} onClick={scrollToTop} className={'footer-link'}>Home Page</NavLink>

          <NavLink to={'/catalog'} onClick={scrollToTop} className={'footer-link'}>Catalog</NavLink>

          <NavLink to={'/cart'} onClick={scrollToTop} className={'footer-link'}>Cart</NavLink>

          {user && <NavLink to={'/favorite'} onClick={scrollToTop} className={'footer-link'}>Favorite</NavLink>}

          {user && <NavLink to={'/profile'} onClick={scrollToTop} className={'footer-link'}>My Account</NavLink>}

          {user && <NavLink to={'#'} onClick={handleLogout} className={'footer-link'}>Log out</NavLink>}
        </div>

        <div className={'footer-column'}>
          <span className={'footer-column__title'}>Rostov region, Russian Federation</span>

          <YMaps>
            <Map defaultState={mapState} width={widthHook < 460 ? 'auto' : 416} height={widthHook < 460 ? 260 : 160}>
              <FullscreenControl />
              <ZoomControl options={
                {
                  position: {
                    top: 'left',
                  },
                  size: 'small',
                }}
              />
            </Map>
          </YMaps>
        </div>
      </Body>

      <div className={'footer-mobile__row'}>
        <div className={'footer-column'}>
          <NavLink to={'/'} onClick={scrollToTop} className={'footer-link'}>Home Page</NavLink>

          <NavLink to={'/catalog'} onClick={scrollToTop} className={'footer-link'}>Catalog</NavLink>

          <NavLink to={'/cart'} onClick={scrollToTop} className={'footer-link'}>Cart</NavLink>

          {user && <NavLink to={'/favorite'} onClick={scrollToTop} className={'footer-link'}>Favorite</NavLink>}

          {user && <NavLink to={'/profile'} onClick={scrollToTop} className={'footer-link'}>My Account</NavLink>}

          {user && <NavLink to={'#'} onClick={handleLogout} className={'footer-link'}>Log out</NavLink>}
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  background-color: var(--dark);
  flex: 0 0 auto;
  padding: 50px calc(10.4% - 72px);
  min-height: 210px;

  @media screen and (max-width: 960px) {
    padding: 24px 16px;
  }

  .footer-mobile__row {
    display: none;

    @media screen and (max-width: 960px) {
      display: flex;
      min-width: max-content;
      margin: 0 auto 0 64px;
      width: 100%;
    }

    @media screen and (max-width: 720px) {
      margin: 0 auto 0 16px;
    }

    @media screen and (max-width: 600px) {
      display: none;
    }
  }

  .footer-column {
    display: flex;
    flex-direction: column;

    :nth-child(2) {
      margin: 0 auto;

      @media screen and (max-width: 960px) {
        display: none;
      }

      @media screen and (max-width: 600px) {
        display: flex;
        margin: 24px auto;
      }
    }

    &__logo {
      width: 89px;
      height: 46px;
      margin-bottom: 40px;
      background-image: url(${logo});
      color: #00000000;
      font-size: 1px;
    }

    &__title {
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      color: var(--light);
      margin: 0 0 5px;
    }
    
    &__map {
      display: flex;
      max-width: 416px;
      max-height: 160px;
      width: 100%;
      height: 100%;
      border-radius: 10px;

      @media screen and (max-width: 480px){
        width: 260px;
        height: 100px;
      }
    }
  }

  .footer-link {
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: var(--light);
    margin: 0;
    margin-bottom: 5px;
    text-decoration: none;
    width: 130px;
  }

  .active {
    font-weight: 600;
  }
`;

const Body = styled.div`
  display: flex;
  max-width: var(--width_content);
  width: 100%;
  justify-content: space-between;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;
