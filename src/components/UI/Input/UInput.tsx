import { FieldError, UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';
import { SignupModel } from '../../../models/signUpForm';

interface IUinput {
  label: string
  placeholder: string
  register: UseFormRegister<SignupModel>
  regtxt: 'email' | 'password' | 'replay'
  error?: FieldError
  icon: string
  autoComplete?: string
  type?: string
}

const UInput: React.FC<IUinput> = ({
  label, placeholder, register, regtxt, error, icon, autoComplete, type,
}) => {
  return (
    <Body error={!!error}>
      <div className={'uinput__wrapper'}>
        <img
          className={'uinput__wrapper__icon'}
          src={icon}
          alt=''
        />
        <input
          className={'uinput__wrapper__input'}
          placeholder={placeholder}
          {...register(regtxt)}
          autoComplete={autoComplete}
          type={type}
        />
      </div>

      {error
        ? <label className={'uinput__label'} style={{ color: '#C30052' }}>{error?.message}</label>
        : <label className={'uinput__label'}>{label}</label>
      }
    </Body>
  );
};

export default UInput;

interface IStyledProps {
  error: boolean,
}

const Body = styled.div<IStyledProps>`
  display: flex;
  flex-direction: column;
  margin: 30px 0;
  max-width: 413px;
  width: 100%;

  .uinput__wrapper {
    display: flex;
    position: relative;
    width: 100%;

    &__icon {
      position: absolute;
      width: 24px;
      height: 24px;
      z-index: 2;
      top: 18px;
      left:24px;
    }

    &__input{
      border: ${(props) => (props.error ? '2px solid #c30052' : '2px solid #F0F4EF')};
      position: relative;
      width: 100%;
      height: 24px;
      display: flex;
      background: #F0F4EF;
      border-radius: 16px;
      padding: 16px 16px 16px 62px;
      outline: none;
      align-items: center;
      font-size: 16px;
      line-height: 28px;
      letter-spacing: 0.75px;
      color: black;

      :focus {
        border: 2px solid #3d5475;
      }
    }
  }

  .uinput__label {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.75px;
    color: var(--dark_blue);
    margin-top: 9px;
  }
`;
