import Project from "../models/Project.js";
import Task from "../models/Task.js";

const addTask = async (req, res) => {
  const { project } = req.body;

  const projectExists = await Project.findById(project);

  if (!projectExists) {
    const error = new Error("El proyecto no existe");
    return res.status(404).json({ msg: error.message });
  }

  if (projectExists.author.toString() !== req.user._id.toString()) {
    const error = new Error("No tienes permisos para agregar tareas");
    return res.status(403).json({ msg: error.message });
  }

  try {
    const storedTask = await Task.create(req.body);
    res.json(storedTask);
  } catch (error) {
    console.log(error);
  }

  console.log(projectExists);
};

const getTask = async (req, res) => {
  const { id } = req.params;

  const task = await Task.findById(id).populate("project");

  if (task.project.author.toString() !== req.user._id.toString()) {
    const error = new Error("Accion no valida");
    return res.status(404).json({ msg: error.message });
  }

  if (task.project.author.toString() !== req.user._id.toString()) {
    const error = new Error("No tienes los permisos");
    return res.status(403).json({ msg: error.message });
  }

  res.json(task);
};

const updateTask = async (req, res) => {
  const { id } = req.params;

  const task = await Task.findById(id).populate("project");

  if (task.project.author.toString() !== req.user._id.toString()) {
    const error = new Error("Accion no valida");
    return res.status(404).json({ msg: error.message });
  }

  if (task.project.author.toString() !== req.user._id.toString()) {
    const error = new Error("No tienes los permisos");
    return res.status(403).json({ msg: error.message });
  }

  task.name = req.body.name || task.name;
  task.description = req.body.description || task.description;
  task.priority = req.body.priority || task.priority;
  task.deliveryDate = req.body.deliveryDate || task.deliveryDate;

  try {
    const storedTask = await task.save();
    res.json(storedTask);
  } catch (error) {
    console.log(error);
  }
};

const removeTask = async (req, res) => {
  const { id } = req.params;

  const task = await Task.findById(id).populate("project");

  if (task.project.author.toString() !== req.user._id.toString()) {
    const error = new Error("Accion no valida");
    return res.status(404).json({ msg: error.message });
  }

  if (task.project.author.toString() !== req.user._id.toString()) {
    const error = new Error("No tienes los permisos");
    return res.status(403).json({ msg: error.message });
  }

  try {
    await task.deleteOne();
    res.json({ msg: "Tarea Eliminada" });
  } catch (error) {
    console.log(error);
  }
};

const changeStatus = async (req, res) => {};

export { addTask, getTask, updateTask, removeTask, changeStatus };
