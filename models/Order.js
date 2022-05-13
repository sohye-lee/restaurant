import mongoose from 'mongoose';

var Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    ordernumber: {
      type: String,
      // type: mongoose.Schema.Types.ObjectId,
      // default: mongoose.Types.ObjectId,
      // index: { unique: true },
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
      // required: true,
      maxlength: 20,
    },
    status: {
      type: Number,
      default: 0,
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
            // required: true,
            maxlength: 100,
          },
          // size: {
          //   type: String,
          //   required: true,
          //   maxlength: 10,
          // },
          extras: {
            type: [{ text: { type: String } }],
          },
          quantity: {
            type: Number,
            // required: true,
          },
        },
      ],
      required: false,
    },
    note: {
      type: String,
      maxlength: 200,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Order || mongoose.model('Order', orderSchema);
