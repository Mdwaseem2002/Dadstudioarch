import mongoose, { Schema, Document, Model } from "mongoose";

export interface IProject extends Document {
  title: string;
  description: string;
  category: string;
  location: string;
  year: string;
  client: string;
  images: string[]; // base64 data URIs or URLs
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new Schema<IProject>(
  {
    title: {
      type: String,
      required: [true, "Project title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Project description is required"],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: [
        "Modern Villas",
        "Residential Architecture",
        "Interior Spaces",
        "Commercial Projects",
        "UPVC Installations",
      ],
    },
    location: {
      type: String,
      trim: true,
      default: "",
    },
    year: {
      type: String,
      trim: true,
      default: "",
    },
    client: {
      type: String,
      trim: true,
      default: "",
    },
    images: {
      type: [String],
      default: [],
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Project: Model<IProject> =
  mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);

export default Project;
