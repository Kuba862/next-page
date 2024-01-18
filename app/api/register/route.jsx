import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        await connectMongoDB();
        const reqBody = await request.json();
        const { email, password } = reqBody;

        const user = await User.findOne({ email });

        if(user) {
            return NextResponse.json({ error: 'User already exists' }, { status: 400 });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            email,
            password: hashedPassword,
        });

        const savedUser = await newUser.save();

        return NextResponse.json(savedUser, { message: "user created successfully", success: true, status: 201 });
    }
    catch(error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}