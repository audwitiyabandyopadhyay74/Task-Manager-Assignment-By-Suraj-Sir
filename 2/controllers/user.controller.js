import {
  loginUser,
  logoutUser,
  registerUser,
} from "../services/user.service.js";

export const signup = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await registerUser(username, password);
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error signing up",
      error: error.message,
    });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await loginUser(username, password);
    req.session.userId = user._id;
    req.session.username = user.username;
    
    res.status(200).json({
      success: true,
      message: "Login Successfull",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error Logging in",
      error: error.message,
    });
  }
};

export const logout = async (req, res) => {
  try {
    req.session.destroy();
    res.status(200).json({
      success: true,
      message: "Logout Successfull",
    });
  } catch (error) {
    console.log(error);
  }
};
