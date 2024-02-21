import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
  // this is using array destructuring from useState object from react
  // 'name' is the getter, 'setName' is the setter
  // then we give a default state as 'James' to use when the page is loaded
  // NOTE - need to use const because don't ever want to change the state directly
  //   const [name, setName] = useState("James");
  //   const [count, setCount] = useState(0)
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "One half pound bag of nuts",
    },
    {
      id: 2,
      checked: false,
      item: "Item 2",
    },
    {
      id: 3,
      checked: false,
      item: "Item 3",
    },
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  return (
    <main>
        {items.length ? (
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input
              type="checkbox"
              onChange={() => handleCheck(item.id)}
              checked={item.checked}
            />
            <label
              onDoubleClick={() => handleCheck(item.id)}
              style={item.checked ? { textDecoration: "line-through" } : null}>
              {item.item}
            </label>
            <FaTrashAlt
              onClick={() => handleDelete(item.id)}
              role="button"
              tabIndex="0"
            />
          </li>
        ))}
      </ul>
        ) :(
            <p style={{ marginTop: "2rem"}}>Your list is empty!</p>
        ) }
    </main>
  );
};

export default Content;

// function to generate random name
//   const handleNameChange = () => {
//     const names = ["James", "Brian", "Marty", "Johan"];
//     const int = Math.floor(Math.random() * 3);
//     setName(names[int]);
//   };

//   const handleClick = () => {
//     setCount(count + 1)
//     console.log(count);
//   };
//   const handleClickTwo = (name) => {
//     console.log(count);
//   };
// pass in the event itself
//   const handleClickThree = (e) => {
//     console.log(e.target);
//   };

{
  /* EXAMPLE CODE FOR CLICK EVENTS */
}
{
  /* <p onDoubleClick={handleClick}>Hello {name}</p>
      <button onClick={handleNameChange}>Change Name</button>
      this needs to be inside an anonymous function else it will be called immediately
      <button
        onClick={handleClick}>
        Button 2
      </button>
      pass in the event as the anonymous function is called
      <button
        onClick={(e) => {
          handleClickThree(e);
        }}>
        Button 3
      </button> */
}
