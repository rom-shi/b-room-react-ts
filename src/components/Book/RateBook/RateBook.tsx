import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { putRating } from '../../../store/reducers/book';
import { putRateBook } from '../../../store/reducers/user';
import star from '../../../assets/star.svg';
import starFilled from '../../../assets/star-filled.svg';
import arrow from '../../../assets/icons/Gray-Back Arrow.svg';
import StarCounter from '../StarCounter/StarCounter';

interface ICounter {
  bookId: string
  rating: number
}
const RateBook: React.FC<ICounter> = ({ bookId, rating }) => {
  const dispatch = useAppDispatch();
  
  const ratedBooks = useAppSelector((store) => store.userSlice.user?.ratedBooks);
  const user = useAppSelector((state) => state.userSlice.user);

  const handleRate = (star: number, id: string) => {
    if (ratedBooks?.includes(id) || !user) return;

    dispatch(putRating({ id, rate: star }));
    dispatch(putRateBook(id));
  };

  return (
    <Body ratedBooks={ratedBooks} bookId={bookId}>
      <div className={'rate-stars'}>
        <StarCounter rating={rating} onClick={handleRate} bookId={bookId} />
      </div>

      {user && !ratedBooks?.includes(bookId) &&
        <div className={'ratebook-label'}>
          <img className={'left-arrow'} src={arrow} alt={'arrow'} />

          Rate this book!
        </div>
      }
    </Body>
  );
};

export default RateBook;

interface IStyledProps {
  ratedBooks: string[] | undefined
  bookId: string
}

const Body = styled.div<IStyledProps>`
  display: flex;
  align-items: center;
  margin: 20px 0;

  @media screen and (max-width: 960px) {
    margin: 12px 0;
  }

  @media screen and (max-width: 740px) {
    flex-direction: column;
    align-items: self-start;
  }

  .rate-stars {
    display: flex;
    height: 26px;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 300px;

    .star {
      display: flex;
      width: 26px;
      height: 26px;
      cursor:  ${(props) => (props.ratedBooks?.includes(props.bookId) ? 'auto' : 'pointer')};
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
      cursor:  ${(props) => (props.ratedBooks?.includes(props.bookId) ? 'auto' : 'pointer')};
      background: url(${starFilled});
      background-size: cover;

      @media screen and (max-width: 960px) {
        width: 20px;
        height: 20px;
      }
    }
  }
  
  .left-arrow {
    margin-right: 15px;

    @media screen and (max-width: 740px) {
      display: none;
    }
  }

  .ratebook-label {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 16px;
    color: #B9BAC4;

    @media screen and (max-width: 740px) {
      margin-top: 16px;
    }
  }

  .rating-number {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 16px;
    color: #B9BAC4;
    margin: 0 12px;

    @media screen and (max-width: 400px) {
      font-size: 14px;
      margin: 0 0 0 8px
    }
  }
`;
