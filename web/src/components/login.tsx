"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

type Inputs = {
  email: string;
  password: string;
};

const LoginForm = () => {
  // set default value sync
  useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    axios
      .post("/api/auth", data, {
        headers: {
          "Content-Type": "application/json",
        },
        validateStatus: function (status) {
          return status > 500; // Resolve only if the status code is less than 500
        },
      })
      .then((res) => {
        console.log(res.data.accessToken);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="bg-gray-800 rounded-md sm:w-11/12 md:w-11/12 lg:w-4/6 xl:w-3/5  m-auto 2xl:w-2/5 w-full  relative p-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            {...register("email", {
              pattern: /^[a-zA-Z]{3,}@[a-zA-Z0-9]+\.[A-Za-z]+$/,
            })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
          <span>
            {errors.email && (
              <>
                <p className="text-xs text-red-500 p-2"> Email is required </p>{" "}
              </>
            )}
          </span>
        </div>
        <div className="mb-6">
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
            type={passwordShown ? "text" : "password"}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          <span>
            {errors.password && (
              <>
                <p className="text-xs text-red-500 p-2">
                  Password must contain at least one letter, one digit, and be
                  at least 8 characters long.
                </p>
              </>
            )}
          </span>

          <div className="flex items-start py-2">
            <div className="flex items-center h-5 p-2">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                onClick={togglePasswordVisiblity}
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
              />{" "}
              <label
                htmlFor="remember"
                className="text-gray-500 dark:text-gray-300 p-2 text-sm"
              >
                Show Pasword
              </label>
            </div>
          </div>
        </div>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <input type="submit" />
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
