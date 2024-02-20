import React from 'react'

const Content = () => {
  
    // function to generate random name
    const handleNameChange = () => {
        const names = ["James", "Brian", "Marty", "Johan"]
        const int = Math.floor(Math.random() * 3)
        return names[int]
      }

      const handleClick = () => {
        console.log("You clicked it")
      }
      const handleClickTwo = (name) => {
        console.log(`${name} was clicked!`)
      }
    return (
    <main>
      <p>
        Hello {handleNameChange()}
      </p>
      <button onClick={handleClick}>Click it</button>
      {/* this needs to be inside an anonymous function else it will be called immediately */}
      <button onClick={() => {handleClickTwo('James')}}>Click it here too!</button>
    </main>
  )
}

export default Content
