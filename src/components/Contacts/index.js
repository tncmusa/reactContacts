import { useState, useEffect } from 'react';

import List from './List';
import Form from './Form';

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Mehmet",
      phone_number: "123124"
    },
    {
      fullname: "Kerim",
      phone_number: "3242101"
    },
    {
      fullname: "Halit",
      phone_number: "2324212"
    }
]);

  useEffect(() => {
    console.log("last hali: ", contacts);
  }, [contacts]);

  return (
    <div>
        <List contacts={contacts} />
        <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts