import connectMongoDB from '@/libs/mongodb';
import User from '@/models/user';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export async function POST(request) {
  const reqBody = await request.json();
  const { email, password } = reqBody;
  console.log(email)
  await connectMongoDB();
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({
        error: 'wrong email or password',
        status: 401,
      });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json({
        error: 'wrong email or password',
        status: 401,
      });
    }
    const response = NextResponse.json({ message: 'logged in', status: 200 });
    response.cookies.set('NextToken', user._id, {
      httpOnly: true
    })

    return response;
  } catch (err) {
    return NextResponse.json({ error: err.message, status: 500 });
  }
}