import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "El campo es requerido"],
      unique: [true, "El nombre de usuario ya esta en uso"],
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: [true, "El email ya esta en uso"],
      required: "Email address is required",
      max: [50, "El email es demasiado largo"],
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
  },
  { timestamps: true }
);


export const User = model('User', UserSchema);