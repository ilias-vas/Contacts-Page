// components/Contact.tsx
'use client';

import { FC } from 'react';
import { Contact as ContactType } from '../types/types';

interface Props {
  contact: ContactType;
}

const Contact: FC<Props> = ({ contact }) => {
  return (
    <div className="border border-gray-300 p-4 rounded-lg bg-gray-100">
      <h2 className="text-xl font-semibold mb-2">{contact.name}</h2>
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
  );
};

export default Contact;

