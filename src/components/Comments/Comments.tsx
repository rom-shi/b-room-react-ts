import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import arrayComments from '../../api/temp/comments';
import { CommentModel } from '../../models/comment';
import UButton from '../UI/Button/UButton';
import { useAppSelector } from '../../store/hooks';
import defaultProfileIco from '../../assets/profile-ico.svg';

interface IProps {
  bookId: string
}

const Comments: React.FC<IProps> = ({ bookId }) => {
  const user = useAppSelector((state) => state.userSlice.user);

  const [text, setText] = useState('');
  const [comments, setComments] = useState<CommentModel[]>([]);

  useEffect(() => {
    getComments();
  }, [bookId]);

  const handlePostComment = () => {
    if (text.trim().length < 1) return;

    setText('');

    const newComent = {
      commentId: uuidv4(),
      bookId,
      photo: user?.photo,
      author: user?.name,
      timer: moment().format('DD-MM-YYYY, h:mm a'),
      text,
    };

    arrayComments.push(newComent);
    setComments((state) => [...state, newComent]);
  };

  const getComments = () => {
    setComments([]);

    arrayComments.forEach((item) => {
      if (item.bookId === bookId) {
        setComments((state) => [...state, item]);
      }
    });
  };

  if (comments.length === 0) return null;

  return (
    <Body>
      <h2 className={'comments__title'}>Comments</h2>

      {comments.map((item) => (
        <div className={'comment'} key={item.commentId}>
          <div className={'comment__photo'}>
            <img src={item.photo || defaultProfileIco} alt={'photo'} />
          </div>

          <div className={'comment__description'}>
            <h4 className={'comment__author'}>{item.author}</h4>

            <span className={'comment__timer'}>Left a comment {moment(item.timer, 'DD-MM-YYYY, h:mm a').fromNow()}</span>

            <p className={'comment__text'}>{item.text}</p>
          </div>
        </div>
      ))}

      {user && <>
        <textarea className={'comment__textarea'} placeholder={'White here'} value={text} onChange={(e) => setText(e.target.value)} />
        <UButton text={'Post comment'} view={'primary'} onClick={handlePostComment} />
      </>
      }
    </Body>
  );
};

export default Comments;

const Body = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  /* margin-bottom: 110px; */

  .comments__title {
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    /* margin: 110px 0 50px; */
    color: var(--dark__blue); 

    @media screen and (max-width: 520px) {
      font-size: 32px;
    }
  }

  .comment {
    display: flex;
    background: var(--light);
    border-radius: 15px;
    padding: 32px;
    margin-bottom: 10px;

    @media screen and (max-width: 520px) {
      padding: 16px;
    }

    &__photo img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 1px solid #00000025;
    }

    &__description {
      display: flex;
      flex-direction: column;
      margin-left: 20px;
    }

    &__author {
      margin: 0;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.75px;
      color: var(--dark__blue);
    }

    &__timer {
      font-weight: 500;
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;
      letter-spacing: 0.75px;    
      color: var(--dark_grey);
    }

    &__text {
      margin: 0;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.75px;
      color: var(--dark__blue);
          
      @media screen and (max-width: 520px) {
        font-size: 14px;
      }
    }

    &__textarea {
      margin: 60px 0 30px;
      padding: 20px 24px;
      border-radius: 15px;
      background: var(--light);
      border: none;
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      letter-spacing: 0.75px;  
      outline: none;
      resize: none;
      height: 120px;
    }
  }
`;
