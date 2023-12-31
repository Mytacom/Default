import { model, Schema } from 'mongoose';

const CfpsSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    slug: {
      type: String,
      require: true,
    },
    organizer: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    address: {
      type: { isOnline: Boolean, location: String },
      required: true,
    },
    image: {
      type: String,
      require: false,
    },
    date: {
      type: Date,
      require: true,
    },
    duration: {
      type: Number,
      require: true,
    },
    tags: {
      type: [String],
      require: true,
    },
    logo: {
      type: String,
      required: false,
    },
    link: {
      type: String,
      require: true,
    },
    deadline: {
      type: Date,
      required: true,
    },
    topics: {
      type: [String],
      required: true,
    },
    guidelines: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const CfpModel = model('cfps', CfpsSchema);
