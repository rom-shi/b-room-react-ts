import React from 'react';
import { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch } from '../../store/hooks';
import { putUser } from '../../store/reducers/user';
import { registerUser } from '../../api/services/users';
import UInput from '../../components/UI/Input/UInput';
import UButton from '../../components/UI/Button/UButton';
import scrollToTop from '../../components/ScrollToTop/ScrollToTop';
import { SignupModel } from '../../models/signUpForm';
import mainPicture from '../../assets/reg-chel.webp';
import mailIco from '../../assets/mail-ico.svg';
import hideIco from '../../assets/hide-ico.svg';

const constans = {
  mailIco,
  hideIco,
  placeholderEmail: 'Email',
  placeholderPassword: 'Password',
  placeholderPasswordReplay: 'Password replay',
  labelEmail: 'Enter your email',
  labelPassword: 'Enter your password',
  labelReplay: 'Repeat your password without errors',
};

const regexPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*!@#$%^&*(){}:;<>,.?~_=|-]).{4,16}$/;

const warningEmail = {
  email: 'Wrong email',
  max: 'Email too long, get another',
  required: 'Need email',
};
const warningPassword = {
  matches: 'Password must contain at least 1 lowercase letter, at least 1 uppercase letter, and 1 special character',
  min: 'Password shoud be min 6 charactes',
  required: 'Need password',
};

const signupSchema = yup.object().shape({
  email: yup.string().email(warningEmail.email).max(30, warningEmail.max)
    .required(warningEmail.required),
  password: yup.string().matches(regexPassword, warningPassword.matches)
    .min(6, warningPassword.min).required(warningPassword.required),
  replay: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const Signup: React.FC = () => {
  scrollToTop();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
    defaultValues: {
      email: '',
      password: '',
      replay: '',
    },
  });

  const onSubmit = async (data: SignupModel) => {
    try {
      if (data.password !== data.replay) return;

      const response = await registerUser(data);

      dispatch(putUser(response.data.user));
      navigate('/');
    } catch (e) {
      if (e instanceof AxiosError) {
        const { response } = e as AxiosError;
        return console.error('Error SignUp >>> ', response?.data);
      }
      // alert('UNEXPECTED');
    }
  };

  return (
    <Body>
      <Helmet>
        <title>Signup</title>
        <meta name={'description'} content={'Зарегистрируйтесь на сайте для больших возможностей'} />
      </Helmet>

      <form className={'signup-form'} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={'signup-form__title'}>Sign Up</h2>

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
        />

        <UInput
          error={errors.replay}
          icon={constans.hideIco}
          label={constans.labelReplay}
          placeholder={constans.placeholderPasswordReplay}
          register={register}
          regtxt={'replay'}
        />

        <UButton text={'Sing Up'} view={'primary'} />
      </form>

      <img className={'signup-form__picture'} src={mainPicture} alt={'Signup picture'} />
    </Body>
  );
};

export default Signup;

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

  .signup-form {
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
      color:  var(--dark);
      margin: 0;
      margin-bottom: 60px;

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
      padding-left:20px;

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
