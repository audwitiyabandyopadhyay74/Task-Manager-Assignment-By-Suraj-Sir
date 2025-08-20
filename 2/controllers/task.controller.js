import {
  AddTask,
  FetchTask,
  MarkAsDone,
  DeleteTask,
} from "../services/task.service.js";

export const AddTaskcontroller = async (req, res) => {
  try {
    const { title, description } = req.body;
    const userId = req.user.id;
    await AddTask(userId, title, description);
    res.status(200).json({
      success: true,
      message: "Task Creation Successful",
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Task Creation unSuccessful",
    });
    console.log(error);
  }
};

export const FetchTaskcontroller = async (req, res) => {
  try {
    const userId = req.user.id;
    const tasks = await FetchTask(userId);
    res.status(200).json({
      success: true,
      message: "Task Fetching Successful",
      data: tasks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Task Fetching unSuccessful",
    });
  }
};

export const MarkAsDonecontroller = async (req, res) => {
  try {
    const { title } = req.body;
    await MarkAsDone(title);
    res.status(200).json({
      success: true,
      message: "Task Marking as Done Successful",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Task Marking as Done unSuccessful",
    });
  }
};

export const DeleteTaskcontroller = async (req, res) => {
  try {
    const { title } = req.body;
     await DeleteTask(title);
    res.status(200).json({
      success: true,
      message: "Task Deleting the task Successful",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Task Deleting the task unSuccessful",
    });
  }
};
