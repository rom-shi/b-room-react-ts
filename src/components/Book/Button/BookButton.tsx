import React from 'react';
import styled, { css } from 'styled-components';

interface IButton {
  available?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  title: string
  view?: 'catalog' | 'not-availble' | 'not-availble-small' | 'catalog-small' | ''
}

const BookButton: React.FC<IButton> = ({ onClick, title, view }) => {
  return (
    <Body view={view || 'catalog'} onClick={onClick}>
      {title}
    </Body>
  );
};

export default BookButton;

interface IStyledProps {
  id?: number
  view: 'catalog' | 'not-availble' | 'not-availble-small' | 'catalog-small'
}

const Body = styled.button<IStyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: var(--dark_blue);
  text-align: center;
  border-radius: 16px;
  border: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.75px;
  color: var(--light);
  padding: 10px 12px;

  ${(props) => {
    switch (props.view) {
    case 'not-availble':
      return css`
        width: 100%;
        font-size: 20px;
        background: #B9BAC3;
        cursor: auto;

        @media screen and (max-width: 960px) {
          font-size: 16px;
          padding: 6px 12px;
        }
      `;
    case 'catalog':
      return css`
        width: 100%;
        font-size: 20px;

        @media screen and (max-width: 960px) {
          font-size: 16px;
          padding: 6px 12px;
        }
      `;
    case 'not-availble-small':
      return css`
      width: 205px;
      height: 48px;
      font-size: 20px;
      line-height: 28px;  
      background: #B9BAC3;
      cursor: auto;
    `;
    case 'catalog-small':
      return css`
        width: 205px;
        height: 48px;
        font-size: 20px;
        line-height: 28px;
      `;
    default:
      return css``;
    }
  }}
`;
