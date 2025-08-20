export const isloggedin = async (req, res, next) => {
  if (req.session && req.session.userId) {
    
  res.status(200).json({
    success: true,
    message: "authorized",
  });
    return next();
  }

  res.status(401).json({
    success: false,
    message: "Unauthorized",
  });
};
