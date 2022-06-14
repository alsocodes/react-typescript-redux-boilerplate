import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import TextInput from '../../components/TextInput';
import { setToast } from '../../redux/ActionCreator/AppConfig';
import { login } from '../../redux/ActionCreator/Auth';
import { AppDispatch } from '../../redux/store';

const Test = (): JSX.Element => {
  return <div>Ini cuma test</div>;
};
export interface IFromLogin {
  username: string;
  password: string;
}

const Login = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFromLogin>();

  const inputs = [
    {
      name: 'username',
      type: 'text',
      label: 'What is your username, ',
      placeholder: 'Username',
      register: register('username', { required: 'Username harus diisi' }),
      errors: errors,
      defaultValue: 'alsocodes',
    },
    {
      name: 'password',
      type: 'password',
      label: 'and your password?',
      placeholder: 'Password',
      register: register('password', { required: 'Password harus diisi' }),
      errors: errors,
      defaultValue: '123456',
    },
  ];

  const formSubmit: SubmitHandler<IFromLogin> = (data) => {
    // console.log(data);
    // dispatch(setToast({ type: 'error', message: 'Wrong username or password' }));
    dispatch(login(data));
  };

  return (
    <section className="h-screen">
      <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
        <div className="flex-grow">
          <div className="flex w-full h-full items-center justify-center">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              alt="Sample image"
              className="max-w-lg"
            />
          </div>
        </div>
        <div className="xl:w-5/12 lg:w-5/12 md:w-8/12 w-full lg:h-screen py-10 px-20 bg-primary">
          <div className="items-center justify-center flex w-full h-full flex-grow">
            <form className="w-full" onSubmit={handleSubmit(formSubmit)}>
              <div className="flex flex-row items-center justify-center lg:justify-start mb-2">
                <p className="text-xl text-black py-2">Sign in</p>
              </div>
              {/* <input type="text" name="username" {...register('username')} />
              <input type="text" name="password" {...register('password')} /> */}

              {inputs.map((item) => {
                return <TextInput key={item.name} {...item} />;
              })}

              <div className="text-center lg:text-right mt-4">
                <button className="btn btn-primary btn-secondary px-5" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
  return (
    <section className="h-screen">
      <div className="h-full text-gray-800 border-red-900">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image"
            />
          </div>
          <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 px-20 bg-green-400">
            <form>
              <div className="flex flex-row items-center justify-center lg:justify-start mb-2">
                <p className="text-xl text-black py-2">Sign in</p>
              </div>

              <div className="mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Username"
                />
              </div>

              <div className="mb-6">
                <input
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Password"
                />
              </div>

              <div className="text-center lg:text-right">
                <button
                  type="button"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
