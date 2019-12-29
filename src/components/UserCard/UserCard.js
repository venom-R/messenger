import React from 'react';
import Avatar from '../Avatar';
import './UserCard.scss';

const UserCard = ({ user, timestamp }) => {
  const { avatar, fullName } = user;
  return (
    <div className="UserCard">
      <Avatar src={avatar} alt={fullName} />
      <div className="UserCard__caption">
        <h5 className="UserCard__fullname">{fullName}</h5>
        {timestamp && <small className="UserCard__timestamp">{timestamp}</small>}
      </div>
    </div>
  );
};

export default UserCard;
