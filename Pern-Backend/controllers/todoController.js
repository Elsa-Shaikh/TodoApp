const prisma = require("../prisma/index");

exports.addTodo = async (req, res) => {
  try {
    const newTodo = await prisma.todo.create({
      data: {
        data: req.body.data,
        done: false, // Assuming 'done' is a boolean field
        createdAt: new Date(), // Assuming 'createdAt' is a date field
      },
    });
    console.log(newTodo);
    return res.status(200).json(newTodo);
  } catch (error) {
    console.error("Error during addTodo:", error);
    return res
      .status(500)
      .json({ success: false, error: "Internal Server Error!" });
  }
};

exports.getAllTodo = async (req, res) => {
  try {
    const todos = await prisma.todo.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.status(200).json(todos);
  } catch (error) {
    console.error("Error during getAllTodo:", error);
    return res
      .status(500)
      .json({ success: false, error: "Internal Server Error!" });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const updatedTodo = await prisma.todo.update({
      where: {
        id: parseInt(req.params.id),
      },
      data: {
        data: req.body.data,
      },
    });

    return res.status(200).json(updatedTodo);
  } catch (error) {
    console.error("Error during updateTodo:", error);
    return res
      .status(500)
      .json({ success: false, error: "Internal Server Error!" });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const deletedTodo = await prisma.todo.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });

    return res.status(200).json(deletedTodo);
  } catch (error) {
    console.error("Error during deleteTodo:", error);
    return res
      .status(500)
      .json({ success: false, error: "Internal Server Error!" });
  }
};

exports.doneTodo = async (req, res) => {
  try {
    const todoRef = await prisma.todo.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
    });

    if (!todoRef) {
      return res.status(404).json({ success: false, error: "Todo not found!" });
    }

    const updatedTodo = await prisma.todo.update({
      where: {
        id: parseInt(req.params.id),
      },
      data: {
        done: !todoRef.done,
      },
    });

    return res.status(200).json(updatedTodo);
  } catch (error) {
    console.error("Error during doneTodo:", error);
    return res
      .status(500)
      .json({ success: false, error: "Internal Server Error!" });
  }
};
