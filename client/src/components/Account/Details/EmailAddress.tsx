import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { EMAIL_REGEX } from '@/constants/appConstants';
import * as userService from '@/services/userService';
import Input from '@/components/common/Input/Input';
import Button from '@/components/common/Button/Button';
import { useUserActions } from '@/store/userStore';
import { User } from '@/types/interface';
import { toast } from 'react-toastify';

interface EmailAddressProps {
  user:User | null
}

const defaultValues = {
  newEmail: '',
  currentPassword: '',
};

const EmailAddress: React.FC<EmailAddressProps> = ({user}) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
    reset
  } = useForm({
    mode: 'onSubmit',
    defaultValues,
  });
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const { setUserInfo, setUserToken } = useUserActions();
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const submit = async (data: any) => {
    try {
      const res:any = await userService.updateEmail(user?.id as string,data);
      const { user: newDataUser, token: newDataToken } = res.data;
      if (res.statusText === 'OK' && newDataUser && newDataToken) {
        setUserInfo(newDataUser);
        setUserToken(newDataToken);
        reset();
        toast.success('update success');
      }
      
    } catch (e:any) {
      toast.error(e.response?.data.message);
    }
  };

  return (
    <div className="flex flex-col border border-gray-300 p-4 gap-6">
      <h2 className="text-xl font-bold opacity-90">Email Address</h2>
      {isEditing ? (
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit((data) => submit(data))}
        >
          <div className="flex flex-col w-1/2 gap-4">
            <Input
              {...register('newEmail', {
                required: 'New Email is required',
                pattern: {
                  value: EMAIL_REGEX,
                  message: 'Please providew a properly formatted email address',
                },
              })}
              error={errors.newEmail?.message}
              ariaInvalid={isDirty}
              label="New email"
              type="text"
              className="mb-3"
              autofocus
              autoComplete="off"
            />
            <Input
              {...register('currentPassword', {
                required: 'Current password is required',
                minLength: {
                  value: 6,
                  message:
                    'Current password needs to be between 6 to 20 characters',
                },
                maxLength: {
                  value: 20,
                  message:
                    'Current password needs to be between 6 to 20 characters',
                },
              })}
              error={errors.currentPassword?.message}
              ariaInvalid={isDirty}
              label="Current password"
              type="password"
              className="mb-10"
              autocomplete="off"
            />
            <Button
              text="update"
              type="submit"
              disabled={isSubmitting}
              className=" bg-black hover:bg-opacity-80 py-4 text-white"
            />
          </div>
          <div className="border-b border-gray-300" />

          <button type="button" className="contents" onClick={toggleEdit}>
            Cancel
          </button>
        </form>
      ) : (
        <div className="flex flex-col gap-4">
          <p className="text-sm">{user?.email}</p>
          <div className="border-b border-gray-300" />
          <button type="button" className="contents" onClick={toggleEdit}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default EmailAddress;
