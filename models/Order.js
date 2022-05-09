import mongoose from 'mongoose';

var Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    ordernumber: {
      type: mongoose.Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId,
      index: { unique: true },
    },
    customer: {
      type: String,
      required: true,
      maxlength: 100,
    },
    total: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
      maxlength: 200,
    },
    phone: {
      type: String,
      required: true,
      maxlength: 20,
    },
    status: {
      type: Number,
      default: 1,
      required: true,
    },
    method: {
        type: Number,
        required: true,
    },
    orderItems: {
      type: [
        {
          mainItem: {
            type: String,
            required: true,
            maxlength: 100,
          },
          size: {
            type: String,
            required: true,
            maxlength: 10,
          },
          extras: {
            type: [{ String }],
          },
          note: {
            type: String,
            maxlength: 150,
          },
          quantity: {
            type: Number,
            required: true,
          },
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model.Orders || mongoose.model('Order', orderSchema);
