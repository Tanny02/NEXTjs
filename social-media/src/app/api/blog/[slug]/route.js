import Post from "@models/post";
import connectDB from "@lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async ({ params }) => {
  const { slug } = params;
  try {
    await connectDB();
    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch post");
  }
};

export const DELETE = async (request, { params }) => {
  const { slug } = params;

  try {
    await connectDB();

    await Post.deleteOne({ slug });
    return NextResponse.json("Post deleted");
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete  post");
  }
};
