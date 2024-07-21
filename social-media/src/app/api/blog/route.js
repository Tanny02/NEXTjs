import Post from "@models/post";
import connectDB from "@lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    connectDB();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch posts");
  }
};
