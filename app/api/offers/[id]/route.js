import connectMongoDB from '@/libs/mongodb';
import Offer from '@/models/offer';
import { NextResponse } from 'next/server';

export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newTitle: title,
    newLocation: location,
    newDescription: description,
    newResponsibilities: responsibilities,
    newRequirements: requirements,
    newImage: image,
    newVideo: video,
  } = await request.json();
  await connectMongoDB();
  await Offer.findByIdAndUpdate(id, {
    title,
    location,
    description,
    responsibilities,
    requirements,
    image,
    video,
  });
  return NextResponse.json({ message: 'Offer updated' }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const offer = await Offer.findOne({ _id: id });
  return NextResponse.json(offer, { status: 200 });
}
