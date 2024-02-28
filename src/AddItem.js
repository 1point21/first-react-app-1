import React from "react";
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'

const AddItem = ({ newItem, setNewItem, handleSubmit}) => {
  const inputRef = useRef()
  
    return (
    // call handleSubmit function when form submitted
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        ref={inputRef}
        id="addItem"
        type="text"
        placeholder="Add Item"
        required
        // controlled component:
        // value is initially newItem, which is initially empty string
        // (see app.js file)
        value={newItem}
        // event handler updates the state of newItem using the setter
        // as the user types in the box
        // as typed in the box, set the state as the typed value
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type="submit" aria-label="Add Item" onClick={() => inputRef.current.focus()}>
        <FaPlus/>
      </button>
    </form>
  );
};

export default AddItem;
