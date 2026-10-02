import styled from 'styled-components';
import castle from '../../assets/castle.webp';

const Loader = () => (
  <Body>
    <img className={'loader__castle'} src={castle} alt={'Castle'} />
  </Body>
);

export default Loader;

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--light);
  height: 100vh;

  .loader__castle {
    height: 300px;
    width: 300px;
  }
`;
