// components/Contact.tsx
'use client';

import { FC } from 'react';
import { Contact as ContactType } from '../types/types';

interface Props {
  contact: ContactType;
}

const Contact: FC<Props> = ({ contact }) => {
  return (
    <div className="relative w-full h-64 perspective">
      <div className="absolute inset-0 transition-transform transform-style-preserve-3d duration-500 hover:rotate-y-180">
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center backface-hidden">
          <h2 className="text-xl font-semibold">{contact.name}</h2>
        </div>
        <div className="absolute inset-0 bg-gray-200 p-4 backface-hidden rotate-y-180">
          <p className="mb-1"><strong>Username:</strong> {contact.username}</p>
          <p className="mb-1"><strong>Email:</strong> {contact.email}</p>
          <p className="mb-1"><strong>Phone:</strong> {contact.phone}</p>
          <p className="mb-1"><strong>Website:</strong> <a href={`http://${contact.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{contact.website}</a></p>
          <h3 className="font-semibold mt-4">Address</h3>
          <p className="mb-1">{contact.address.street}, {contact.address.suite}</p>
          <p className="mb-1">{contact.address.city}, {contact.address.zipcode}</p>
          <h3 className="font-semibold mt-4">Company</h3>
          <p className="mb-1"><strong>Name:</strong> {contact.company.name}</p>
          <p className="mb-1"><strong>CatchPhrase:</strong> {contact.company.catchPhrase}</p>
          <p className="mb-1"><strong>BS:</strong> {contact.company.bs}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

