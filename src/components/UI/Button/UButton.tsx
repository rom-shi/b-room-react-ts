import styled from 'styled-components';

interface IButton {
  icon?: string
  mright?: string
  mtop?: string
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  text: string
  view: 'primary' | 'secondary'
  width?: string
}

const UButton: React.FC<IButton> = ({ text, view, icon, width, mtop, mright, onClick }) => {
  const thisFunc = (e: React.MouseEvent<HTMLElement>) => {
    if (!onClick) return;

    onClick(e);
  };

  return (
    <Body
      mright={mright}
      mtop={mtop}
      onClick={(e) => thisFunc(e)}
      text={text}
      view={view}
      width={width}
    >
      {icon && <img src={icon} alt={''} />}

      {text}
    </Body>
  );
};

export default UButton;

interface IStyledProps {
  view: 'primary' | 'secondary',
  text: string,
  width?: string,
  mtop?: string,
  mright?: string,
}

const Body = styled.button<IStyledProps>`
  background:  ${(props) => (props.view === 'primary' ? 'var(--dark_blue)' : 'white')};
  color: ${(props) => (props.view === 'primary' ? 'var(--light)' : 'var(--dark_blue)')};
  cursor: pointer;
  border-radius: 16px;
  border: 2px solid #344966;
  font-weight: 500;
  font-size: 16px;
  padding: 12px 40px;
  max-width: 305px;
  width: ${({ width }) => (width ? 'min-content' : '')};
  align-items: center;
  text-align: center;
  margin-top: ${({ mtop }) => (mtop && mtop)};
  margin-right: ${({ mright }) => (mright && mright)};

  img {
    max-height: 20px;
    margin-right: ${(props) => (!props.text ? '' : '15px')};
  }
`;
