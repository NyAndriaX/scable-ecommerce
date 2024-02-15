// import { useForm } from 'react-hook-form';
import Input from '@/components/common/Input/Input';
import Button from '@/components/common/Button/Button';

const Register = () => {
  // const { register, handleSubmit, watch, setValue, setError, clearErrors }=useForm;
  return (
    <section className="flex flex-col justify-center items-center py-11">
      <div className="flex flex-col lg:w-1/2 w-1 p-10 gap-12">
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl ">Sign In</h1>
          <form className="flex flex-col gap-4">
            <Input label="Email" type="text" />
            <Input label="Password" type="text" />
            <Button
              text="Sign In"
              type="submit"
              //  disabled={isSubmitting}
              className="bg-black hover:bg-opacity-80 py-4 text-white"
            />
          </form>
        </div>
        <div className="border-b" />
        <div className="flex flex-col gap-4">
          <p className="text-xl">Don't have an Account ? </p>
          <Button
            text="Create Account"
            type="button"
            //  disabled={isSubmitting}
            className="bg-white py-4 text-black  border border-solid"
          />
        </div>
      </div>
    </section>
  );
};

export default Register;
