import React from "react";
import ItemList from "./ItemList";

// items passed down from parent via props and prop drilling
const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty!</p>
      )}
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

// {
/* EXAMPLE CODE FOR CLICK EVENTS */
// }
// {
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
// }
