import React, { useState } from 'react';

const ImageComponent = () => {
    const [image, setImage] = useState(null);
  return (
    <>
      <label htmlFor="image">add image</label>
      <input
        type="file"
        name="image"
        className="w-1/4 border border-slate-800"
      />
    </>
  );
};

export default ImageComponent;
