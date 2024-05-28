'use client';

import { FC, useEffect, useState } from 'react';
import Contact from '@/components/Contact';
import { Contact as ContactType } from '@/types/types';

const Home: FC = () => {
  const [contacts, setContacts] = useState<ContactType[]>([]);

  useEffect(() => {
    fetch('/contacts.json')
      .then((response) => response.json())
      .then((data: ContactType[]) => setContacts(data));
  }, []);

  return (
    <div className="min-h-screen bg-white text-black p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Contact List</h1>
        <button className="bg-green-500 text-white px-4 py-2 rounded">+</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
};

export default Home;

