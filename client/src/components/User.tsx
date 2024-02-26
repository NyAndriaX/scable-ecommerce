import React from 'react';
import PhotoDefaultURL from '../assets/images/default_image.jpg';

interface UserType {
  lastName: string | null;
  firstName?: string | null;
  photoURL?: string | null;
  mobile: boolean;
}

const User: React.FC<UserType> = ({
  lastName,
  firstName,
  photoURL,
  mobile,
}) => (
  <>
    {!mobile && (
    <p className="mr-2" style={{ display: 'grid', alignContent: 'center' }}>
      {lastName}
      {' '}
      {firstName}
    </p>
    )}
    <img
      className="h-10 w-10 rounded-full border border-gray-300"
      src={
          photoURL === 'default' || !photoURL
            ? PhotoDefaultURL
            : photoURL
        }
      alt={firstName ?? 'Anonymous'}
    />
    {mobile && (
    <p className="ml-2" style={{ display: 'grid', alignContent: 'center' }}>
      {lastName}
      {' '}
      {firstName}
    </p>
    )}
  </>
);

export default User;
