"use client";

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const LoginForm = () => {
  // set default value sync
  useForm({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div className="bg-gray-800 rounded-md p-8 w-2/4 sm:w-full md:w-3/4">
      <form onSubmit={handleSubmit(onSubmit)} className="sm:w-5/6 md:w-3/4 lg:w-1/2 xl:w-1/6 m-auto relative">
        <div className="mb-6 min-w-full">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            {...register("email", { pattern: /^[a-zA-Z]{3,}@[a-zA-Z0-9]+\.[A-Za-z]+$/ })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
          <span>
            {errors.email && (
              <>
                <p className="text-xs text-red-500"> Email is required </p>{" "}
              </>
            )}
          </span>
        </div>
        <div className="mb-6 min-w-full">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            {...register("password", {
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/,
            })}
            type="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          <span>
            {errors.password && (
              <>
                <p className="text-xs text-red-500 py-2">
                  Password must contain at least one letter, one digit, and be
                  at least 8 characters long.
                </p>
              </>
            )}
          </span>
        </div>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <input type="submit" />
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
