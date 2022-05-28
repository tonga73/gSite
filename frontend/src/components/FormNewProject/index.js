import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Actions de redux
import { addNewProjectAction } from "../../app/actions/projectActions";

const NewProject = () => {
  // state del compontente
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  // utilizar useDispatch y te crea una funcion
  const dispatch = useDispatch();

  // manda llamar el action de projectActions
  const addProject = (project) => dispatch(addNewProjectAction(project));

  const submitNewProject = (e) => {
    e.preventDefault();

    // validar formulario
    if (name.trim() === "" || description.trim() === "" || date.trim() === "") {
      return;
    }
    // si no hay errores

    //crear el nuevo produto
    addProject({
      name,
      description,
      date,
    });
  };

  return (
    <form onSubmit={submitNewProject} className="border py-3 px-5">
      <h3 className="text-center pb-3 uppercase font-bold text-gray-700">
        Crear Proyecto
      </h3>
      <div className="mb-6">
        <label
          htmlFor="text"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Nombre del Proyecto
        </label>
        <input
          required
          type="text"
          id="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Descripción
        </label>
        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Una descripción del proyecto..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="mb-6">
        <label
          htmlFor="datePicker"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Plazo máximo
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            required
            type="date"
            id="datePicker"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={date}
            name="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default NewProject;
