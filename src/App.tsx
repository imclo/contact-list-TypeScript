import "./App.css";

import { useState } from "react";
import Contact from "./components/Contact";

export interface ContactInfo {
  name: string;
  mail?: string;
}

function App(): JSX.Element {
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");
  const [contacts, setContacts] = useState<Array<ContactInfo>>([
    {
      name: "Alice",
    },
    { name: "Bob", mail: "bob@gmail.com" },
    { name: "Paul", mail: "paul@gmail.com" },
  ]);

  const sortedContact = [...contacts].sort((left, right) =>
    left.name.localeCompare(right.name)
  );

  return (
    <>
      <div className="container">
        <h1>Contacts</h1>
        {sortedContact.map((contact) => {
          return (
            <Contact
              contact={contact}
              key={contact.name}
              onDelete={() => {
                setContacts(
                  contacts.filter((item) => item.name !== contact.name)
                );
              }}
            />
          );
        })}
      </div>
      <div className="add-contact">
        <input
          className="input-name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="name"
        />

        <input
          className="input-mail"
          value={mail}
          onChange={(event) => setMail(event.target.value)}
          placeholder="mail"
        />
        <button
          className="button-add"
          onClick={() => {
            const newContact: ContactInfo = {
              name: name,
              mail,
            };
            const contactsCopy = [...contacts];
            contactsCopy.push(newContact);
            setContacts(contactsCopy);
            setName("");
            setMail("");
          }}
        >
          Add
        </button>
      </div>
    </>
  );
}

export default App;
