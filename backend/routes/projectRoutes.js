import express from "express";

import {
  getProjects,
  newProject,
  getProject,
  editProject,
  removeProject,
  addCollaborator,
  removeCollaborator,
} from "../controllers/projectController.js";

import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.route("/").get(checkAuth, getProjects).post(checkAuth, newProject);

router
  .route("/:id")
  .get(checkAuth, getProject)
  .put(checkAuth, editProject)
  .delete(checkAuth, removeProject);

router.post("add-collaborator/:id", checkAuth, addCollaborator);
router.post("delete-collaborator", checkAuth, removeCollaborator);

export default router;
