import { FC } from 'react';
import { Contact as ContactType } from '../types/types'; // Adjust the import path

interface Props {
  contact: ContactType;
}

const Contact: FC<Props> = ({ contact }) => {
  return (
    <div className="contact">
      <h2>{contact.name}</h2>
      <p>Username: {contact.username}</p>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>Website: <a href={`http://${contact.website}`} target="_blank" rel="noopener noreferrer">{contact.website}</a></p>
      <h3>Address</h3>
      <p>{contact.address.street}, {contact.address.suite}, {contact.address.city}, {contact.address.zipcode}</p>
      <h3>Company</h3>
      <p>Name: {contact.company.name}</p>
      <p>CatchPhrase: {contact.company.catchPhrase}</p>
      <p>BS: {contact.company.bs}</p>
      <style jsx>{`
        .contact {
          border: 1px solid #ccc;
          padding: 1rem;
          margin: 1rem 0;
          border-radius: 5px;
        }
        h2 {
          margin: 0 0 0.5rem 0;
        }
        p {
          margin: 0.5rem 0;
        }
        a {
          color: blue;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default Contact;
