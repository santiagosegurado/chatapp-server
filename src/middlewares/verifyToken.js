import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const authToken = req.headers.token;

  if (authToken) {
    jwt.verify(authToken.toString(), "salta2578", (error, user) => {
      if (error) {
        return res.status(403).send("Token no es valido!!");
      }

      req.user = user;

      next();
      return;
    });
  } else {
    return res.status(401).send("No estas autenticado!!");
  }

  return;
};

export { verifyToken };
