import { useState } from 'react'

function List({contacts}) {

  const [filterText, setFiltered] = useState("");

  const filteredArray = contacts.filter((item) => Object.keys(item).some((key) => item[key].toString().toLocaleLowerCase().includes(filterText)));
  return (
    <>
      <div>
        <div>
          <input name="filter" placeholder="Filter Contacts" onChange={(e) => setFiltered(e.target.value)} />
        </div>
        <ul className="list">
          {
            filteredArray.map((item, i) => {
              return <li key={i}>{item.fullname} - {item.phone_number}</li>
            })
          }
        </ul>
        <p> Total contacts ({filteredArray.length})</p>
      </div>
    </>
  )
}

export default List