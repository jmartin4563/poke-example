export function validateId(req, res, next) {
  try {
    const parsedId = parseInt(req.params.id, 10);

    if (Number.isInteger(parsedId)) {
      return next();
    }

    return res.status(400).json({ error: "Pokemon ID is required" });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
}
