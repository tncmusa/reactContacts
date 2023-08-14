import React from 'react'

function List({contacts}) {
  return (
    <>
      <div>Contacts List</div><div>
        <ul>
          {contacts.map((x, i) => <li key={i}>{x.fullname} - {x.phone_number}</li>)}
        </ul>
      </div>
    </>
  )
}

export default List