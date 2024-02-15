import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { EMAIL_REGEX } from '@/constants/appConstants';
import { useNavigate } from 'react-router-dom';
import Input from '@/components/common/Input/Input';
import Button from '@/components/common/Button/Button';

interface IProps {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm<IProps>({
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const navigate = useNavigate();

  const submit = (data: IProps) => {
    console.log(data);
  };

  return (
    <section className="flex flex-col justify-center items-center py-11">
      <div className="flex flex-col lg:w-1/2 w-1 p-10 gap-12">
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl ">Sign In</h1>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit((data) => submit(data))}
          >
            <Input
              {...register('email', {
                required: 'Please provide an email',
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
              autocomplete="on"
            />
            <Input
              {...register('password', {
                required: 'Please provide a password',
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
            <Link to="/" className="text-md text-black hover:text-opacity-80">
              Forgot your password ?
            </Link>
            <Button
              text="Sign In"
              type="submit"
              disabled={isSubmitting}
              className="bg-black hover:bg-opacity-80 py-4 text-white"
            />
          </form>
        </div>
        <div className="border-b" />
        <div className="flex flex-col gap-6">
          <p className="text-md text-center">Don't have an Account ? </p>
          <Button
            text="Create Account"
            type="button"
            onClick={() => navigate('/register')}
            className="bg-white py-4 text-black  border border-solid"
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
