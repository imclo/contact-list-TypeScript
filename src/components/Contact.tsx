import { ContactInfo } from "../App";

interface Props {
  contact: ContactInfo;
  onDelete: () => void;
}

const Contact = ({ contact, onDelete }: Props): JSX.Element => {
  return (
    <>
      <div className="contact">
        <div className="contact-info">
          <h2>{contact.name}</h2>
          {contact.mail && <p className="mail">{contact.mail}</p>}
        </div>
        <button className="delete" onClick={onDelete}>
          Delete
        </button>
      </div>
    </>
  );
};

export default Contact;
