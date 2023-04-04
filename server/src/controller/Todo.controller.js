const {
  createTodoService,
  getTodoService,
  getTodoByIdService,
  updateTodoByIdService,
  deleteTodoByIdService,
} = require("../services/Todo.services");

exports.createTodo = async (req, res, next) => {
  try {
    const result = await createTodoService(req.body);
    res.status(200).json({
      status: "success",
      message: "Todo created successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Todo can't create successfully",
      error: error,
    });
  }
};

exports.getTodo = async (req, res, next) => {
  try {
    let filters = { ...req.query };
    const excludeField = ["page", "limit", "sort"];
    let filtersString = JSON.stringify(filters);
    filtersString = filtersString.replace(
      /\b(gt|lt|gte|lte)\b/g,
      (match) => `$${match}`
    );
    filters = JSON.parse(filtersString);

    const queries = {};

    if (req.query.sort) {
      const sortList = req.query.sort.split(",").join(" ");
      queries.sortList = sortList;
    }
    if (req.query.fields) {
      const fieldsList = req.query.fields.split(",").join(" ");
      queries.fieldsList = fieldsList;
    }
    if (req.query.page) {
      const { page = 1, limit = 10 } = req.query;
      const skip = (page - 1) * parseInt(limit);
      queries.skip = skip;
      queries.limit = parseInt(limit);
    }

    excludeField.forEach((field) => delete filters[field]);

    const result = await getTodoService(filters, queries);

    res.status(200).json({
      status: "success",
      message: "Todo get successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Todo can't get successfully",
      error: error,
    });
  }
};

exports.getTodoById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await getTodoByIdService(id);
    res.status(200).json({
      status: "success",
      message: "Todo get successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Todo can't get successfully",
      error: error,
    });
  }
};

exports.updateTodoById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await updateTodoByIdService(id, req.body);
    if (!result.modifiedCount) {
      res.status(400).json({
        status: "fail",
        message: "Todo can't update successfully",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Todo update successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Todo can't update successfully",
      error: error,
    });
  }
};

exports.deleteTodoById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await deleteTodoByIdService(id);
    res.status(200).json({
      status: "success",
      message: "Todo delete successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Todo can't delete successfully",
      error: error,
    });
  }
};
