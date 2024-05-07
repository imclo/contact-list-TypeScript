import { ContactInfo } from "../App";

interface Props {
  contact: ContactInfo;
}

const Contact = ({ contact }: Props): JSX.Element => {
  return (
    <>
      <div>
        <h2>{contact.name}</h2>
        {contact.mail && <p>{contact.mail}</p>}
      </div>
    </>
  );
};

export default Contact;
