const validator = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    const message = err.errors[0].message
    return res.status(400).json({ message: message}); // Return specific validation errors
  }
};

module.exports = validator;
