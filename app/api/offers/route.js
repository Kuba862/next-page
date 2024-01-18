import connectMongoDB from "@/libs/mongodb";
import Offer from "@/models/offer";
import { NextResponse } from 'next/server';

export async function POST(request) {
    const { title, location, description, responsibilities, requirements, image, video } = await request.json();
    await connectMongoDB();
    await Offer.create({
        title,
        location,
        description,
        responsibilities,
        requirements,
        image,
        video
    });
    return NextResponse.json({ message: 'Offer created' }, { status: 201 })
}

export async function GET() {
    await connectMongoDB();
    const offers = await Offer.find({});
    return NextResponse.json(offers, { status: 200 });
}

export async function DELETE(request) {
    const { id } = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Offer.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Offer deleted' }, { status: 200 });
}
