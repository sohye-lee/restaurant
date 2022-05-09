import mongoose from 'mongoose';

var Schema = mongoose.Schema;

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      maxLength: 20,
    },
  },
  {
    timestamp: true,
  }
);

export default mongoose.models.Category ||
  mongoose.model('Category', categorySchema);
