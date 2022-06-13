import React from 'react';

const Login = (): JSX.Element => {
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
            <form className="w-full">
              <div className="flex flex-row items-center justify-center lg:justify-start mb-2">
                <p className="text-xl text-black py-2">Sign in</p>
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">What is your username,</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Username"
                  className="input input-bordered w-full"
                />
                <label className="label"></label>
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">And password?</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Password"
                  className="input input-bordered w-full"
                />
                <label className="label"></label>
              </div>

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
