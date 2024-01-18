import React from 'react';
import RemoveBtn from './RemoveBtn';
import Link from 'next/link';
import { HiPencilAlt } from 'react-icons/hi';

const getOffers = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/offers', {
      cache: 'no-store',
    });
    if(!res.ok) {
      throw new Error('Failed to fetch offers');
    }
    return res.json();
  } catch(err) {
    console.log("Error loading offers: ", err.message);
  }
}

export default async function OfferList() {
  const offers = await getOffers();

  return (
    <>
    {offers.map(offer => (
      <div>
      <div>
        <h2>{offer.title}</h2>
        <p>{offer.description}</p>
      </div>
      <div>
        <RemoveBtn />
        <Link href={`/edit/${offer._id}`}>
          <HiPencilAlt size={24} />
        </Link>
      </div>
    </div>
    ))}
      
    </>
  );
};
