import { sessionsCollection } from "../database/db.js";
import { v4 as uuid } from "uuid";

export default async function signIn(req, res) {
  const user = res.locals.user;
  const token = uuid();

  try {
    await sessionsCollection.insertOne({ token, userId: user._id });
    res.status(200).send({ token });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
