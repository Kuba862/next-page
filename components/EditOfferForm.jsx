import React from 'react';

const EditOfferForm = () => {
  return (
    <>
      <input type="text" className='border border-slate-500' placeholder="Title" />
        <input type="text" className='border border-slate-500' placeholder="Description" />
        <button className='border border-slate-600' >update offer</button>
    </>
  );
};

export default EditOfferForm;