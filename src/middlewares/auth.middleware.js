import { usersCollecion } from "../database/db.js";

import bcrypt from "bcrypt";

export async function signInValidation(req, res, next) {
  const { email, password } = req.body;

  try {
    const user = await usersCollecion.findOne({ email });

    if (!user) {
      res.sendStatus(401);
      return;
    }

    const passwordOk = bcrypt.compareSync(password, user.password);

    if (!passwordOk) {
      res.sendStatus(401);
      return;
    }

    res.locals.user = user;
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }

  next();
}
