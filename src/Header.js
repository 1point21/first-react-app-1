import React from "react";

// pass in destructured props from parent
const Header = ({title}) => {
  
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Default Title"
}

export default Header;
