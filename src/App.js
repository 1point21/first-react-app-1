import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

// modern react uses functional components
// this is the parent component
function App() {
  // SET STATES
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppinglist"))
  );

  const [newItem, setNewItem] = useState("");

  const [search, setSearch] = useState("");

  // helper function for setting new items/state AND store in local storage
  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("shoppinglist", JSON.stringify(newItems));
  };

  // create new item for list
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = {
      id,
      checked: false,
      item,
    };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  };

  // remove/add check to checkbox
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(listItems);
  };

  // delete item from list
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  };

  // + button for add new item to list
  const handleSubmit = (e) => {
    // prevent webpage reloading because html form
    e.preventDefault();
    // if no new item then exit function
    if (!newItem) return;
    addItem(newItem);
    // sets state to empty after submitted
    setNewItem("");
  };

  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter(item => {
          return ((item.item).toLowerCase()).includes(search.toLowerCase())
        })}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
  // component returns jsx (javascript in xml)
  // we can put javascript expressions in the code
  // use {} to use a javascript expression but NOT objects or bool
}

// default export
export default App;

// ADDING STYLES
// use something called "styled-components" as package
