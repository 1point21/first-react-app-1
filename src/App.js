import Header from './Header';
import Content from './Content';
import Footer from './Footer';

// modern react uses functional components
function App() {
  
  return (
    <div className="App">
      <Header />
      <Content/>
      <Footer/>
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
