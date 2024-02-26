import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { EMAIL_REGEX } from '@/constants/appConstants';
import Button from '@/components/common/Button/Button';
import Input from '@/components/common/Input/Input';
import { RegisterInput } from '#/interface';
import * as authService from '@/services/authService';

const defaultValues = {
  email: '',
  password: '',
  firstName: '',
  sexe: 'Mr' as 'Mr' | 'Md',
  lastName: '',
  dateOfBirth: null,
};

function Register() {
  const [selectedValue, setSelectedValue] = useState<string>(
    defaultValues.sexe
  );
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
    reset,
  } = useForm<RegisterInput>({
    mode: 'onSubmit',
    defaultValues,
  });
  const navigate = useNavigate();

  const submit = async (data: RegisterInput) => {
    try {
      const { statusText } = await authService.register(data);
      if (statusText === 'OK') {
        toast.success('Register success');
        reset();
      }
    } catch (e: any) {
      toast.error(e.response?.data.message);
    }
  };

  return (
    <section className="flex flex-col justify-center items-center py-11">
      <div className="flex flex-col lg:w-1/2 w-1 p-10 gap-12">
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl ">Register</h1>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit((data) => submit(data))}
          >
            <Input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: EMAIL_REGEX,
                  message: 'Please providew a properly formatted email address',
                },
              })}
              error={errors.email?.message}
              ariaInvalid={isDirty}
              label="Email"
              type="email"
              className="mb-3"
              autofocus
              autocomplete="off"
            />
            <div className="flex flex-col">
              <Input
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password needs to be between 6 to 20 characters',
                  },
                  maxLength: {
                    value: 20,
                    message: 'Password needs to be between 6 to 20 characters',
                  },
                })}
                error={errors.password?.message}
                ariaInvalid={isDirty}
                label="Password"
                type="password"
                className="mb-10"
                autocomplete="off"
              />
              {!errors.password?.message && (
                <small className="text-black opacity-30">
                  Your password must be eight characters or more and contain
                  both an uppercase letter and a number
                </small>
              )}
            </div>

            <div className="flex flex-row justify-between items-baseline gap-4">
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
              <div className="w-4/5">
                <Input
                  {...register('firstName', {
                    required: 'First name is required',
                  })}
                  error={errors.firstName?.message}
                  ariaInvalid={isDirty}
                  label="First Name"
                  type="text"
                  className="w-full"
                  autocomplete="off"
                />
              </div>
            </div>
            <Input
              {...register('lastName', {
                required: 'Last name is required',
              })}
              error={errors.lastName?.message}
              ariaInvalid={isDirty}
              label="Last name"
              type="text"
              className="w-full"
              autocomplete="off"
            />
            <Input
              {...register('dateOfBirth', {})}
              error={errors.dateOfBirth?.message}
              ariaInvalid={isDirty}
              label="Date of birth (optional)"
              type="date"
              className="w-full"
              autocomplete="off"
            />

            <p className="text-black opacity-30 text-xs">
              By registering, your account will be subject to the{' '}
              <span className="underline">Terms and Conditions</span> &{' '}
              <span className="underline">Privacy Policy</span>
            </p>

            <Button
              text="Create Account"
              type="submit"
              disabled={isSubmitting}
              className="bg-black hover:bg-opacity-80 py-4 text-white"
            />
          </form>
        </div>
        <div className="border-b" />
        <div className="flex flex-col gap-6">
          <p className="text-md text-center">Already have an account </p>
          <Button
            text="Sign In"
            type="button"
            onClick={() => navigate('/register')}
            className="bg-white py-4 text-black  border border-solid"
          />
        </div>
      </div>
    </section>
  );
}

export default Register;
