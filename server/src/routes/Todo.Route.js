const express = require("express");
const TodoController = require("../controller/Todo.controller");

const router = express.Router();

router.route("/").post(TodoController.createTodo).get(TodoController.getTodo);

router
  .route("/:id")
  .get(TodoController.getTodoById)
  .put(TodoController.updateTodoById)
  .delete(TodoController.deleteTodoById);

module.exports = router;
