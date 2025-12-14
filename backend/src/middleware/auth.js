
const auth = (roles) => {
  return (req, res, next) => {
    const role = req.headers['x-user-role'];
    if (roles.includes(role)) {
      next();
    } else {
      res.status(401).json({ error: 'Unauthorized' });
    }
  };
};

module.exports = auth;
