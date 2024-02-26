import React from 'react';
import PersonalInfo from './Details/PersonalInfo';
import EmailAddress from './Details/EmailAddress';
import Password from './Details/Password';
import { User } from '@/types/interface';

interface DetailsProps {
  user: User | null;
}

const Details: React.FC<DetailsProps> = ({ user }) => (
  <div className="flex flex-col gap-4 w-3/4 px-10 mb-4">
    <PersonalInfo user={user} />
    <EmailAddress user={user}/>
    <Password user={user}/>
  </div>
);

export default Details;
