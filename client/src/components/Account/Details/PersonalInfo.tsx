import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '@/components/common/Input/Input';
import Button from '@/components/common/Button/Button';

const defaultValues = {
  firstName: '',
  sexe: 'Mr' as 'Mr' | 'Md',
  lastName: '',
  dateOfBirth: null,
};

const PersonalInfo: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
    reset,
  } = useForm({
    mode: 'onSubmit',
    defaultValues,
  });
  const [selectedValue, setSelectedValue] = useState<string>(
    defaultValues.sexe
  );
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const submit = async (data: any) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col border border-gray-300 p-4 gap-6">
      <h2 className="text-xl">Personal information</h2>
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
          <div>
            <Input
              {...register('dateOfBirth', {
                required: 'Date of birth is required',
              })}
              error={errors.dateOfBirth?.message}
              ariaInvalid={isDirty}
              label="Date of Birth"
              type="date"
              className="mb-3"
              autofocus
              autoComplete="off"
              inputClassName="w-1/3"
            />
            <p className="text-xs text-gray-400">dd,month,year</p>
          </div>
          <Button
            text="update"
            type="submit"
            disabled={isSubmitting}
            className="w-1/3 bg-black hover:bg-opacity-80 py-4 text-white"
          />
          <div className="border border-b border-gray-300" />

          <button type="button" className="contents" onClick={toggleEdit}>
            Cancel
          </button>
        </form>
      ) : (
        <div className="flex flex-col gap-4">
          <p className="text-sm">Mr test test</p>
          <div className="border border-b border-gray-300" />
          <button type="button" className="contents" onClick={toggleEdit}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default PersonalInfo;
