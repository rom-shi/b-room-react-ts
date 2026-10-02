import styled from 'styled-components';
import defaultProfileIco from '../../../assets/profile-ico.svg';
import btnPhoto from '../../../assets/button-photo.svg';

interface IPhoto {
  photo: string | null,
  updatable: boolean,
  updateFunc: React.ChangeEventHandler<HTMLInputElement>
}

const ProfilePhoto: React.FC<IPhoto> = ({ updatable, photo, updateFunc }) => {
  return (
    <Body>
      <img className={'profile__photo'} src={photo || defaultProfileIco} alt={'avatar'} />

      <input className={'profile__input'} type={'file'} onChange={updateFunc} id={'userPhoto'} />

      {updatable && <label className={'profile__label'} htmlFor={'userPhoto'} />}
    </Body>
  );
};

export default ProfilePhoto;

const Body = styled.div`
  display: flex;
  border-radius: 16px;
  position: relative;
  width: 305px;
  height: 305px;

  @media screen and (max-width: 960px) {
    width: 250px;
    height: 250px;  
  }

  @media screen and (max-width: 600px) {
    width: 150px;
    height: 150px;  
  }

  @media screen and (max-width: 520px) {
    width: 100px;
    height: 100px;  
  }

  .profile__photo {
    /* width: 100%; */
    /* height: 100%; */
    border-radius: 24px;
  }

  .profile__input {
    display: none;
  }
  
  .profile__label {
    position: absolute;
    right: 20px;
    bottom: 20px;
    background-image: url(${btnPhoto});
    background-size: cover;
    width: 48px;
    height: 48px;
    cursor: pointer;

    @media screen and (max-width: 960px) {
      width: 30px;
      height: 30px;
    }

    @media screen and (max-width: 600px) {
      right: 10px;
      bottom: 10px; 
    }
  }
`;
