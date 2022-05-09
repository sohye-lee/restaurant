import mongoose from 'mongoose';

var Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      maxLength: 100,
    },
    image: {
      type: String,
      required: true,
      maxLength: 200,
    },
    description: {
      type: String,
      required: true,
      maxLength: 300,
    },
    badge: {
      type: String,
      maxLength: 30,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
    },
    prices: {
      type: [Number],
      required: true,
    },
    extras: {
      type: [
        {
          text: { type: String, required: true },
          price: { type: Number, required: true },
        },
      ],
    },
    spicy: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model('Product', ProductSchema);
