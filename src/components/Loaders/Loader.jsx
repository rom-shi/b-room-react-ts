import styled from 'styled-components';
import castle from '../../assets/castle.png';

const Loader = () => {
  return (
    <Body>
      <img src={castle} alt={'castle'} className={'flash'} data-test={'app-vertical-list'} />
    </Body>
  );
};

const Body = styled.span`
    margin: 64px auto;

  .flash {
    animation-name: flash;
    width: 300px;
    height: 300px;

    @media screen and (max-width: 750px) {
      width: 200px;
      height: 200px;
    }
  }

  @keyframes flash {
    from,
    50%,
    to {
      opacity: 1;
    }

    25%,
    75% {
      opacity: 0;
    }
  }

  [data-test='app-vertical-list'] {
    animation: flash 1s infinite;
    animation-iteration-count: infinite;
    animation-fill-mode: none;
    animation-fill-mode: forwards;
  }
`;

export default Loader;
