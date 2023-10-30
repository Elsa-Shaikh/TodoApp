const express = require("express");
const router = express.Router();

const {
  addTodo,
  getAllTodo,
  doneTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

router.route("/todo").post(addTodo);
router.route("/getAllTodo").get(getAllTodo);
router.route("/updateTodo/:id").put(updateTodo);
router.route("/deleteTodo/:id").delete(deleteTodo);
router.route("/doneTodo/:id").get(doneTodo);

module.exports = router;
