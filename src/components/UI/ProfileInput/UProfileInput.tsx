import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';
import { IProfileValues } from '../../../pages/Profile/Profile';

interface IInput {
  bottomLabel?: string
  disabled: boolean
  icon: string
  placeholder: string
  register: UseFormRegister<IProfileValues>
  registerName: 'name' | 'email' | 'password' | 'newPassword' | 'newPasswordReplay'
  topLabel?: string
  type?: string
}

const UProfileInput: React.FC<IInput> = ({
  icon, topLabel, bottomLabel, type, placeholder, disabled, register, registerName,
}) => {
  return (
    <Body bottomLabel={bottomLabel}>
      <div className={'uinput__wrapper'}>
        <img className={'uinput__icon'} src={icon} alt='icon'/>

        <div className={'uinput__wparrer2'}>
          {topLabel && <label className={'uinput__top-label'}>{topLabel}</label>}

          <input
            className={'uinput__input'}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            {...register(registerName)}
          />
        </div>
      </div>

      <span className={'uinput__bottom-label'}>{bottomLabel}</span>
    </Body>
  );
};

export default UProfileInput;

interface IStyledProps {
  bottomLabel?: string
}

const Body = styled.div<IStyledProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ bottomLabel }) => (bottomLabel ? '0px' : '32px')};
  border-radius: 16px;

  @media screen and (max-width: 520px) {
    display: flex;
    margin-bottom: ${({ bottomLabel }) => (bottomLabel ? '0px' : '24px')};
  }

  .uinput__wrapper {
    display: flex;
    background: var(--light);
    border-radius: 16px;
  }

  .uinput__icon {
    width: 24px;
    height: 24px;
    margin: 20px 16px 20px 24px;
  }

  .uinput__wparrer2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    .uinput__top-label {
      display: flex;
      align-items: center;
      letter-spacing: 0.75px;
      color: var(--dark_blue);
      margin-top: 6px;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
    }
    
    .uinput__input {
      display: flex;
      background: var(--light);
      width: 90%;
      border: none;
      outline: none;
      font-size: 16px;
      line-height: 28px;
      letter-spacing: 0.75px;
      color: var(--dark_blue);
    }
  }

  .uinput__bottom-label {
    display: ${({ bottomLabel }) => (bottomLabel ? 'flex' : 'none')};
    align-items: center;
    letter-spacing: 0.75px;
    color: var(--dark_blue);
    margin: 9px 0;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
  }
`;
