import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface IUlink {
  className?: string
  minWidth? : string
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
  style?: React.CSSProperties
  text: string
  to: string
  view: string
  width?: string
}

const ULink: React.FC<IUlink> = ({ to, text, view, width, className, style, onClick }) => {
  return (
    <Body to={to} view={view} width={width} className={className} style={style} onClick={onClick}>
      {text}
    </Body>
  );
};

export default ULink;

interface IStyledProps {
  view: string
  width?: string
  minWidth?: string
}

const Body = styled(NavLink)<IStyledProps>`
  display: flex;  
  /* height: 40px; */
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border: 2px solid var(--dark_blue);
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;
  box-sizing: border-box;
  padding: 8px 16px;
  width: ${(props) => {
    switch (props.width) {
    case 'long':
      return '220px';

    default:
      return '100px';
    }
  }};

  min-width: ${(props) => {
    switch (props.minWidth) {
    case 'long':
      return '220px';

    default:
      return 'max-content';
    }
  }};

  @media screen and (max-width: 420px) {
    padding: 8px 12px;
  }

  ${(props) => {
    switch (props.view) {
    case 'primary':
      return css`
        background: var(--dark_blue);
        color: white;

        /* :hover {
          background: #344966c0;
          border: 2px solid #344966c0;
        } */
      `;
    case 'secondary':
      return css`
        background: white;
        color: var(--dark_blue);

        /* :hover {
          background: #e6e6e6;
        } */
      `;
    case 'book':
      return css`
        background: white;
        color: var(--dark_blue);
        margin: 2px auto;
        width: 100%;

        /* :hover {
          background: #e6e6e6;
        } */

          @media screen and (max-width: 960px) {
            padding: 4px 8px;
          }
      `;
    default:
      return css`
        background: var(--dark_blue);
        color: white;
      `;
    }
  }}

  @media (max-width: 768px) {
    /* min-width: ${(props) => {
    switch (props.width) {
    case 'long':
      return '220px';

    default:
      return '70px';
    }
  }}; */
  }
`;
