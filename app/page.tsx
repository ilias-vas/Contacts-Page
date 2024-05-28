'use client'
import { FC, useEffect, useState } from 'react';
import Contact from '../components/Contact';
import { Contact as ContactType } from '../types/types'; // Adjust the import path

const Home: FC = () => {
  const [contacts, setContacts] = useState<ContactType[]>([]);

  useEffect(() => {
    fetch('/contacts.json')
      .then((response) => response.json())
      .then((data: ContactType[]) => setContacts(data));
  }, []);

  return (
    <div>
      <h1>Contact List</h1>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
      <style jsx>{`
        div {
          max-width: 600px;
          margin: 0 auto;
          padding: 1rem;
        }
        h1 {
          text-align: center;
          margin-bottom: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Home;

