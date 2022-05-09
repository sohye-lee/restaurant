import dbConnect from '../../../util/mongodb';
import Category from '../../../models/Category';

export default async function handler(req, res) {
  const { method } = req;

  dbConnect();

  if (method === 'GET') {
  }

  if (method === 'POST') {
    try {
      const category = await Category.create(req.body);
      res.status(201).json(category);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
