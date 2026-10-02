import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
// import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosError } from 'axios';
// import * as yup from 'yup';
import { useAppDispatch } from '../../store/hooks';
import { loadUserThunk } from '../../store/reducers/user';
// import { loginUser } from '../../api/services/users';
// import { LoginModel } from '../../models/loginForm';
import UButton from '../../components/UI/Button/UButton';
import UInput from '../../components/UI/Input/UInput';
import scrollToTop from '../../components/ScrollToTop/ScrollToTop';
import mailIco from '../../assets/mail-ico.svg';
import hideIco from '../../assets/hide-ico.svg';
import mainPicture from '../../assets/reg-chel.webp';

const constans = {
  mailIco,
  hideIco,
  placeholderEmail: 'Email',
  placeholderPassword: 'Password',
  labelEmail: 'Enter your email',
  labelPassword: 'Enter your password',
};

// const warningEmail = {
//   email: 'Wrong email',
//   max: 'Email too long, get another',
//   required: 'Need email',
// };

// const warningPassword = {
//   matches: 'Password must contain at least 1 lowercase letter,
//    at least 1 uppercase letter, and 1 special character',
//   min: 'Password shoud be min 6 charactes',
//   required: 'Need password',
// };

// const loginSchema = yup.object({
//   email: yup.string().email(warningEmail.email).required(warningEmail.required),
//   password: yup.string().required(warningPassword.required),
//   replay: yup.string(),
// });

interface ILocation {
  from: {
    pathname: string,
  }
}

const Login: React.FC = () => {
  scrollToTop();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();

  const from: ILocation = location.state as ILocation || { from: { pathname: '/' } };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      replay: '',
    },
  });

  // const onSubmit = async (data: LoginModel) => {
  const onSubmit = async () => {
    try {
      // const response = await loginUser(data);
      // dispatch(putUser(response.data.user));
      dispatch(loadUserThunk());

      navigate(from.from.pathname, { replace: true });
    } catch (e) {
      if (e instanceof AxiosError) {
        const { response } = e as AxiosError;
        return console.error('Error App >>> ', response?.data);
      }
    }
  };

  return (
    <Body>
      <Helmet>
        <title>Login</title>
        <meta name={'description'} content={'Авторизуйтесь на сайте для больших возможностей'} />
      </Helmet>

      <form className={'login-form'} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={'login-form__title'}>Log In</h2>

        <UInput
          error={errors.email}
          icon={constans.mailIco}
          label={constans.labelEmail}
          placeholder={constans.placeholderEmail}
          register={register}
          regtxt={'email'}
        />

        <UInput
          error={errors.password}
          icon={constans.hideIco}
          label={constans.labelPassword}
          placeholder={constans.placeholderPassword}
          register={register}
          regtxt={'password'}
          type={'password'}
        />

        <UButton text={'Log In'} view={'primary'} />
      </form>

      <img className={'login-form__picture'} src={mainPicture} alt={'Login picture'} />
    </Body>
  );
};

export default Login;

const Body = styled.main`
  display: flex;
  justify-content: space-between;
  margin: 90px auto 80px;
  padding: 0 calc((1.3% - 9px) * 8);
  max-width: var(--width_content);

  @media screen and (max-width: 1024px) {
    padding: 0 16px;
  }

  @media screen and (max-width: 560px) {
    flex-direction: column;
    margin: 32px auto;
  }

  .login-form {
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    color:  var(--dark);
    max-width: 413px;
    width: 100%;

    @media screen and (max-width: 560px) {
      margin: auto;
    }

    &__title {
      font-weight: 700;
      font-size: 40px;
      line-height: 60px;
      color: var(--dark);
      margin: 0 0 60px 0;

      @media screen and (max-width: 560px) {
        margin: 0 0 32px 0;
        font-size: 32px;
      }
    }

    &__picture {
      display: flex;
      max-width: 612px;
      max-height: 522px;
      height: 45.7%;
      min-width: 390px;
      margin-left: 20px;

      @media screen and (max-width: 700px) {
        min-width: auto;
        width: 250px;
      }

      @media screen and (max-width: 560px) {
        margin: 32px auto 0;
      }
    }
  }
`;
