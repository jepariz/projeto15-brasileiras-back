import { productsCollection} from "../database/db.js";


export async function postProduct(req, res) {

const product = req.body
  
  try {
    await productsCollection.insertOne({product});
    res.sendStatus(201);
    return;
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
    return;
  }
}