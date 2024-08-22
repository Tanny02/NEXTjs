import User from "@models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (req) => {
  try {
    const body = await req.json();
    const userData = body.formData;
    if (!userData?.name || !userData?.email || !userData.password) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }
    const userExists = await User.findOne({ email: userData.email })
      .lean()
      .exec();

    if (userExists)
      return NextResponse.json(
        { message: "User already exists." },
        { status: 409 }
      );
    const hashPassword = await bcrypt.hash(userData.password, 10);
    const newUser = new User({
      name: userData.name,
      email: userData.email,
      password: hashPassword,
    });
    await newUser.save();
    return NextResponse.json(
      { message: "User created successfully." },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
};
