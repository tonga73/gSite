import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const FormUserForgotPassword = () => {
  return (
    <>
      <form className="rounded-md border border-pink-700 border-opacity-60 py-3 px-5 shadow-md shadow-pink-700">
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required=""
          />
        </div>
        <button
          type="submit"
          className="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm w-full px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-blue-800"
        >
          Recibir Instrucciones
        </button>
      </form>

      <nav className="lg:flex lg:justify-between">
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/login"
        >
          Inicia Sesión
        </Link>
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/login/register"
        >
          ¿No tienes una cuenta? Registrate
        </Link>
      </nav>
    </>
  );
};

export default FormUserForgotPassword;
