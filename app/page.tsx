// app/page.tsx
'use client';

import { FC, useEffect, useState } from 'react';
import Contact from '../components/Contact';
import { Contact as ContactType } from '../types/types';

const Home: FC = () => {
  const [contacts, setContacts] = useState<ContactType[]>([]);

  useEffect(() => {
    fetch('/contacts.json')
      .then((response) => response.json())
      .then((data: ContactType[]) => setContacts(data));
  }, []);

  return (
    <div className="min-h-screen bg-white text-black p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Contact List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
};

export default Home;
