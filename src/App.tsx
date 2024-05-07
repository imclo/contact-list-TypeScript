import "./App.css";

import { useState } from "react";
import Contact from "./components/Contact";

export interface ContactInfo {
  id: number;
  name: string;
  mail?: string;
}

function App(): JSX.Element {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Alice",
    },
    { id: 2, name: "Bob", mail: "bob@gmail.com" },
    { id: 3, name: "Paul", mail: "paul@gmail.com" },
  ]);
  return (
    <>
      <Contact contact={contact} key={contact.id} />
    </>
  );
}

export default App;
