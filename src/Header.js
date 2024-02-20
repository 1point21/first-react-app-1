import React from "react";

const Header = () => {
  // this is a way to define inline styles
  // then call under "<header style={headerStyle}>"
  const headerStyle = {
    backgroundColor: "mediumblue",
    color: "#fff",
  };

  return (
    <header>
      <h1>Groceries List</h1>
    </header>
  );
};

export default Header;
