'use client';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import ImageComponent from '@/components/ImageComponent';
import { useLoginStatus } from '@/hooks/useLoginStatus';

const Add = () => {
  const [newOfferTitle, setNewOfferTitle] = useState('');
  const [newOfferDescription, setNewOfferDescription] = useState('');
  const [newOfferResponsibilities, setNewOfferResponsibilities] = useState('');
  const [newOfferRequirements, setNewOfferRequirements] = useState('');
  const [newOfferLocation, setNewOfferLocation] = useState('');

  const isLoggedIn = useLoginStatus();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/offers', {
        title: newOfferTitle,
        description: newOfferDescription,
        responsibilities: newOfferResponsibilities,
        requirements: newOfferRequirements,
        location: newOfferLocation,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      // ['link', 'image'],
      ['link'],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    // 'image',
  ];

  return (
    <>
    {isLoggedIn ? (
    <form>
      <div>
        <label htmlFor="location">location</label>
        <input
          type="text"
          name="location"
          onChange={(e) => setNewOfferLocation(e.target.value)}
          value={newOfferLocation}
          className="w-1/4 border border-slate-800"
        />
      </div>
      <div>
        <label htmlFor="title">Title</label>
        <input
          onChange={(e) => setNewOfferTitle(e.target.value)}
          type="text"
          name="title"
          className="w-1/4 border border-slate-800"
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <div
          data-name="description-editor"
          className="w-1/3 border border-slate-800"
        >
          <ReactQuill
            theme="snow"
            value={newOfferDescription}
            onChange={setNewOfferDescription}
            modules={modules}
            formats={formats}
            name="description"
          />
        </div>
      </div>
      <div>
        <label htmlFor="responsibilities">Responsibilities</label>
        <div
          data-name="responsibilities-editor"
          className="w-1/3 border border-slate-800"
        >
          <ReactQuill
            theme="snow"
            value={newOfferResponsibilities}
            onChange={setNewOfferResponsibilities}
            modules={modules}
            formats={formats}
            name="responsibilities"
          />
        </div>
      </div>
      <div>
        <label htmlFor="requirements">Requirements</label>
        <div data-name="requirements" className="w-1/3 border border-slate-800">
          <ReactQuill
            theme="snow"
            value={newOfferRequirements}
            onChange={setNewOfferRequirements}
            modules={modules}
            formats={formats}
            name="requirements"
          />
        </div>
      </div>
      <div>
        <ImageComponent />
      </div>
      <label htmlFor="video">Video URL</label>
      <input
        type="text"
        name="video"
        className="w-1/4 border border-slate-800"
      />
      <button onClick={handleSubmit} className="border border-slate-600">
        save
      </button>
    </form>
    ) : <h1>404</h1>}
    </>
  );
};

export default Add;
