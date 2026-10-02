import styled from 'styled-components';
import { useAppSelector } from '../../../store/hooks';
import starFilled from '../../../assets/star-filled.svg';
import star from '../../../assets/star.svg';

interface ICounter {
  bookId?: string
  onClick?: (stars: number, bookId: string) => void
  rating: number
}

const StarCounter: React.FC<ICounter> = ({ rating, onClick, bookId }) => {
  const user = useAppSelector((state) => state.userSlice.user);

  const rating_5 = rating > 4.5;
  const rating_4 = (rating > 3.5 && rating <= 4.5) || rating_5;
  const rating_3 = (rating > 2.5 && rating <= 3.5) || rating_4;
  const rating_2 = (rating > 1.5 && rating <= 2.5) || rating_3;
  const rating_1 = (rating > 0.5 && rating <= 1.5) || rating_2;

  return (
    <Body user={!!user}>
      <div className={'rating-stars'}>
        <div className={rating_1 ? 'star-filled' : 'star'} onClick={() => onClick && bookId && onClick(1, bookId)} style={onClick ? {} : { cursor: 'auto' }} />
        <div className={rating_2 ? 'star-filled' : 'star'} onClick={() => onClick && bookId && onClick(2, bookId)} style={onClick ? {} : { cursor: 'auto' }} />
        <div className={rating_3 ? 'star-filled' : 'star'} onClick={() => onClick && bookId && onClick(3, bookId)} style={onClick ? {} : { cursor: 'auto' }} />
        <div className={rating_4 ? 'star-filled' : 'star'} onClick={() => onClick && bookId && onClick(4, bookId)} style={onClick ? {} : { cursor: 'auto' }} />
        <div className={rating_5 ? 'star-filled' : 'star'} onClick={() => onClick && bookId && onClick(5, bookId)} style={onClick ? {} : { cursor: 'auto' }} />
      </div>

      <div className={'rating-number'}>{rating.toFixed(1)}</div>
    </Body>
  );
};

export default StarCounter;

interface IStyledProps {
  user: boolean
  onClick?: (stars: number, bookId: string) => void
}

const Body = styled.div<IStyledProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 27px;
  margin: 20px 0;

  @media screen and (max-width: 960px) {
    margin: 12px 0;
  }

  .rating-mobile {
    display: none;

    @media screen and (max-width: 520px) {
      display: flex;
    }
  }

  .rating-stars {
    display: flex;
    width: 100%;
    height: 26px;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: 400px) {
      justify-content: space-between;
    }
  
    .star {
      display: flex;
      width: 26px;
      height: 26px;
      cursor: ${((props) => { return (props.user ? 'pointer' : 'auto'); })};
      background: url(${star});
      background-size: cover;

      @media screen and (max-width: 960px) {
        width: 20px;
        height: 20px;
      }
    }

    .star-filled {
      display: flex;
      width: 26px;
      height: 26px;
      cursor: ${((props) => { return (props.user ? 'pointer' : 'auto'); })};
      background: url(${starFilled});
      background-size: cover;

      @media screen and (max-width: 960px) {
        width: 20px;
        height: 20px;
      }
    }
  }
  
  .rating-number {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: var(--dark_grey);
    text-align: center;
    align-items: center;

    @media screen and (max-width: 400px) {
      display: none;
    }
  }
`;
