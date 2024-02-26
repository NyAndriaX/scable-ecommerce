import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as userService from "@/services/userService"
import Input from '@/components/common/Input/Input';
import Button from '@/components/common/Button/Button';
import { User } from '@/types/interface';
import { toast } from 'react-toastify';
import { formatDate } from '@/utils/formatDate';
import { useUserActions } from '@/store/userStore';

interface PersonalInfoProps{
  user:User | null
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({user}) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm({
    mode: 'onSubmit',
    defaultValues:{
      firstName: user?.firstName || '',
      sexe: user?.sexe || 'Mr',
      lastName: user?.lastName || '',
      dateOfBirth:user?.dateOfBirth ? formatDate(user.dateOfBirth.toString()) : null,
    },
  });
  const [selectedValue, setSelectedValue] = useState<string>(user?.sexe || 'Mr');
  const [isEditing, setIsEditing] = useState(false);
  const { setUserInfo, setUserToken } = useUserActions();

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const submit = async (data: any) => {
    try {
      const res:any = await userService.updateUser(user?.id as string,data);
      const { user:newDataUser, token:newDataToken } = res.data;
      if(res.statusText === 'OK' && newDataUser && newDataToken){
        setUserInfo(newDataUser);
        setUserToken(newDataToken);
        toast.success('update success');
      }
    } catch (e:any) {
      toast.error(e.response?.data.message)
    }
  };

  return (
    <div className="flex flex-col border border-gray-300 p-4 gap-6">
      <h2 className="text-xl font-bold opacity-90">Personal information</h2>
      {isEditing ? (
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit((data) => submit(data))}
        >
          <div className="flex flex-row gap-4">
            <div className="flex flex-col w-1/5 gap-1">
              <label className="text-black">Type</label>
              <select
                {...register('sexe')}
                value={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value)}
              >
                <option value="Mr">Mr</option>
                <option value="Md">Md</option>
              </select>
            </div>
            <Input
              {...register('firstName', {
                required: 'First name is required',
              })}
              error={errors.firstName?.message}
              ariaInvalid={isDirty}
              label="First name"
              type="text"
              className="mb-3"
              autofocus
              autoComplete="off"
            />
            <Input
              {...register('lastName', {
                required: 'Last name is required',
              })}
              error={errors.lastName?.message}
              ariaInvalid={isDirty}
              label="Last name"
              type="text"
              className="mb-3"
              autofocus
              autoComplete="off"
            />
          </div>
          <div className='flex flex-col w-1/3'>
            <Input
              {...register('dateOfBirth')}
              ariaInvalid={isDirty}
              label="Date of Birth"
              type="date"
              className="mb-3"
              autofocus
              autoComplete="off"
            />
            <p className="text-xs text-gray-400">month,dd,year</p>
          </div>
          <Button
            text="update"
            type="submit"
            disabled={isSubmitting}
            className="w-1/3 bg-black hover:bg-opacity-80 py-4 text-white"
          />
          <div className="border-b border-gray-300" />

          <button type="button" className="contents" onClick={toggleEdit}>
            Cancel
          </button>
        </form>
      ) : (
        <div className="flex flex-col gap-4">
          <p className="text-sm">Mr test test</p>
          <div className="border-b border-gray-300" />
          <button type="button" className="contents" onClick={toggleEdit}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default PersonalInfo;
