const express = require("express");
const router = express.Router();
const {
  allTasks,
  createTasks,
  SingleTask,
  editTask,
  deleteTask,
} = require("../controllers/tasks");

router.route("/").get(allTasks).post(createTasks);
router.route("/:id").get(SingleTask).patch(editTask).delete(deleteTask);

module.exports = router;
