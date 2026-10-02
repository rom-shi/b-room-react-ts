import { useCallback, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { reqQuery } from '../../store/reducers/request';
import ULink from '../UI/Link/ULink';
import logo from '../../assets/logo-header.svg';
import searchIco from '../../assets/search-ico.svg';
import clearIco from '../../assets/icons/Close.svg';
import cartIco from '../../assets/button-cart.svg';
import favoriteIco from '../../assets/button-favorite.svg';
import userIco from '../../assets/button_user.svg';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const user = useAppSelector((state) => state.userSlice.user);
  const cartBooks = useAppSelector((state) => state.cartSlice.cartItems);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleQueryFind = (e: React.ChangeEvent<HTMLInputElement>) => {
    navigate('catalog');
    dispatch(reqQuery({ query: e.target.value.trim() }));
  };

  const debounce = (func: (e: React.ChangeEvent<HTMLInputElement>) => void) => {
    let timer: ReturnType<typeof setTimeout> | null;

    // eslint-disable-next-line
    return function name(...args: any) {
      if (args[0].target.value.trim() === '') return;
      const context = timer;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  const debounceQuery = useCallback(debounce(handleQueryFind), []);

  const getPageName = () => {
    const pathName = window.location.pathname;

    switch (pathName) {
    case '/': return 'Catalog';
    case '/cart': return 'Cart';
    case '/signup': return 'Sign Up';
    case '/login': return 'Log In';
    case '/catalog': return 'Catalog';
    case '/favorite': return 'Favorite';
    case '/profile': return 'Profile';
    default: return 'Catalog';
    }
  };

  const clearInput = () => {
    if (inputRef.current == null) return;
    inputRef.current.value = '';

    navigate('catalog');
    dispatch(reqQuery({ query: inputRef.current.value }));
  };

  return (
    <Body>
      <div className={'header'}>
        <NavLink to={'/'} className={'header__logo'} title={'Home page'}>Header logo</NavLink>

        <div className={'header__center'}>
          <div className={'header__center__label'}>{getPageName()}</div>

          <div className={'header__input'}>
            <img className={'header__input__ico'} src={searchIco} alt='search icon' />

            <input className={'header__input__body'} placeholder={'Search in catalog'} onChange={debounceQuery} ref={inputRef} />

            {
              inputRef.current !== null && inputRef.current.value.length > 0 &&
              <img className={'header__input__clear'} src={clearIco} alt={'search icon'} onClick={clearInput} />
            }
          </div>
        </div>

        {user
          ? <nav className={'header__navbar'}>
            <NavLink to={'/cart'} className={'header__navbar__cart'}>
              Cart
              {cartBooks.length !== 0 && <div className={'cart__position'}>{cartBooks.length}</div>}
            </NavLink>

            <NavLink to={'/favorite'} className={'header__navbar__favorite'}>Favorite</NavLink>

            <NavLink to={'/profile'} className={'header__navbar__user'}>Profile</NavLink>
          </nav>
          : <nav className={'header__auth'}>
            <ULink to={'/signup'} text={'Sign Up'} view={'secondary'} className={'signup__button'} />

            <ULink to={'/login'} text={'Log In'} view={'primary'} className={'login__button'} />
          </nav>
        }
      </div>

      <div className={'header__input__mobile'}>
        <img className={'header__input__ico'} src={searchIco} alt={'search icon'} />

        <input className={'header__input__body'} placeholder={'Search in catalog'} onChange={debounceQuery} />

        {
          inputRef.current !== null && inputRef.current.value.length > 0 &&
          <img className={'header__input__clear'} src={clearIco} alt={'search icon'} onClick={clearInput} />
        }
      </div>
    </Body>
  );
};

export default Header;

const Body = styled.header`
  margin: 24px auto;
  padding: 0 calc((1.3% - 9px) * 8);
  max-width: var(--width_content);

  @media (max-width: 1024px) {
    padding: 0 16px;   
  }

  @media (max-width: 520px) {
    margin: 16px auto;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: var(--width_content);
  }

  .header__logo {
    min-width: 88.5px;
    min-height: 46px;
    background-image: url(${logo});
    background-size: cover;
    color: #00000000;
    font-size: 1px;    

    @media (max-width: 1024px) {
      min-width: 62px;
      min-height: 31px;    
    }
  }

  .header__center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 782px;
    width: 100%;
    
    &__label {
      display: flex;
      color: #000000;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      justify-content: center;
      width: 100%;
      max-width: 152px;

      @media (max-width: 1024px) {
        max-width: 90px;
      }

      @media (max-width: 520px) {
        margin: 0 auto;
      }
    }
  }

  .header__input {
    display: flex;
    position: relative;
    width: 100%;

    @media (max-width: 520px) {
      display: none;
    }
    
    &__ico {
      display: flex;
      position: absolute;
      top: 20px;
      left: 24px;

      @media (max-width: 1024px) {
        top: 12px;
        left: 12px;
      }
    }
    
    &__body {
      height: 24px;
      width: 100%;
      padding: 20px 20px 20px 64px;
      border: none;
      display: flex;
      align-items: center;
      letter-spacing: 0.75px;
      color: black;
      background: var(--light);
      border-radius: 16px;
      outline: none;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;

      @media (max-width: 1024px) {
        padding: 12px 12px 12px 46px;
      }
    }

    &__clear {
      display: flex;
      position: absolute;
      top: 20px;
      right: 24px;
      cursor: pointer;
      
      @media (max-width: 1024px) {
        top: 12px;
        right: 14px;
      }
    }
  }

  .header__input__mobile {
    display: none;
    position: relative;
    width: 100%;
    margin-top: 20px;

    @media (max-width: 520px) {
      display: flex;
    }
  }

  .header__navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 230px;
    margin-left: 51px; 

    @media (max-width: 1024px) {
      margin-left: 20px; 
      min-width: 150px;
    }

    @media (max-width: 520px) {
      margin-left: 0px; 
    }

    
    @media (max-width: 400px) {
      min-width: 130px; 
    }
  
    &__cart {
      background-image: url(${cartIco});
      background-size: cover;
      width: 48px;
      height: 48px;
      position: relative;
      color: #00000000;
      font-size: 1px;
      
      .cart__position {
        position: absolute;
        top: -5px;
        right: -5px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--green);
        border-radius: 50%;
        color: var(--dark_blue);
        font-weight: 600;
        font-size: 14px;
        width: 20px;
        height: 20px;
      }

      @media (max-width: 1024px) {
        width: 33px;
        height: 33px;
      }
    }

    &__favorite {
      background-image: url(${favoriteIco});
      background-size: cover;
      background-color: white;
      width: 48px;
      height: 48px;
      border: none;
      cursor: pointer;
      color: #00000000;
      font-size: 1px;

      @media (max-width: 1024px) {
        width: 33px;
        height: 33px;
      }
    }

    &__user {
      background-image: url(${userIco});
      background-size: cover;
      width: 48px;
      height: 48px;
      color: #00000000;
      font-size: 1px;

      @media (max-width: 1024px) {
        width: 33px;
        height: 33px;
      }
    }
  }

  .header__auth {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 51px; 
    gap: 16px;

    @media (max-width: 1024px) {
      margin-left: 20px; 
    }

    @media (max-width: 650px) {
      gap: 8px;
    }
    
    @media (max-width: 520px) {
      margin-left: 0px; 
    }
  }

  .signup__button {
    @media (max-width: 1024px) {
      width: 80px;
      height: 35px;
    }  
  }

  .login__button {
    @media (max-width: 1024px) {
      width: 80px;
      height: 35px;
    }  
  }
`;
