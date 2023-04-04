const TodoModel = require("../models/Todo.model");

exports.createTodoService = async (data) => {
  const result = await TodoModel.create(data);
  return result;
};

exports.getTodoService = async (filters, queries) => {
  const result = await TodoModel.find(filters)
    .skip(queries.skip)
    .limit(queries.limit)
    .select(queries.fieldsList)
    .sort(queries.sortList);

  const total = await TodoModel.countDocuments(filters);
  const page = Math.ceil(total / queries.limit);
  return { total, page, result };
};

exports.getTodoByIdService = async (id) => {
  const result = await TodoModel.findOne({ _id: id });
  return result;
};

exports.updateTodoByIdService = async (id, data) => {
  const result = await TodoModel.updateOne(
    { _id: id },
    { $set: data },
    {
      runValidators: true,
    }
  );
  return result;
};

exports.deleteTodoByIdService = async (id) => {
  const result = await TodoModel.deleteOne({ _id: id });
  return result;
};
