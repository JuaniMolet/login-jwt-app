'use client';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

const LoginComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data: unknown) => console.log(data);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Login</h1>
      <form className="flex flex-col mt-4" onSubmit={handleSubmit(onSubmit)}>
        <label className="text-sm" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          className="border border-gray-300 rounded-md p-2 w-80"
          type="email"
          placeholder="Email"
          {...register('email', { required: true })}
        />
        {errors.email && <span className="text-red-500">This field is required</span>}
        <label className="text-sm mt-2" htmlFor="pass">
          Password
        </label>
        <input
          id="pass"
          className="border border-gray-300 rounded-md p-2 w-80 mt-2"
          type="password"
          placeholder="Password"
          {...register('password', { required: true })}
        />
        {errors.email && <span className="text-red-500">This field is required</span>}
        <button className="bg-blue-500 text-white rounded-md p-2 w-80 mt-2" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};
export default LoginComponent;
