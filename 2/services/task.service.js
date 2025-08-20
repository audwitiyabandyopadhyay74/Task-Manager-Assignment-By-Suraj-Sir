import { Task } from "../models/task.model.js";

export const AddTask = async (userId, title, description) => {
  const task = new Task({ userId, title, description });
  return await task.save();
};

export const FetchTask = async (userId) => {
  return await Task.find({ userId });
};
export const MarkAsDone = async (title) => {
  return await Task.findOneAndUpdate(
    { title },
    { $set: { done: true } },
    { new: true }
  );
};

export const DeleteTask = async (title) => {
  return await Task.findOneAndDelete({ title });
};
