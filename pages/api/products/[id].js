import dbConnect from '../../../util/mongodb';
import Product from '../../../models/Product';

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  dbConnect();

  if (method === 'GET') {
    try {
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === 'PUT') {
    try {
      const product = await Product.findByIdAndUpdate(id, req.body);
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === 'DELETE') {
    try {
      const product = await Product.deleteById(id);
      res
        .status(201)
        .json(`The Menu ${product.name} has been successfully deleted!`);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
