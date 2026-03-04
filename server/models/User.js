import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    _id: { type: String, requried: true },
    email: { type: String, requried: true },
    full_name: { type: String, requried: true },
    username: { type: String, uniuqe: true },
    bio: { type: String, default: "Hey there I am using PingUp." },
    profile_picture: { type: String, default: "" },
    cover_photo: { type: String, default: "" },
    location: { type: String, default: "" },
    followers: [{ type: String, default: "User" }],
    following: [{ type: String, default: "User" }],
    connection: [{ type: String, default: "User" }],
  },
  { timestamps: true, minimize: false },
);

const User = mongoose.model("User", userSchema);

export default userSchema;
