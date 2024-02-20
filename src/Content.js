import React from 'react'

const Content = () => {
  
    // function to generate random name
    const handleNameChange = () => {
        const names = ["James", "Brian", "Marty", "Johan"]
        const int = Math.floor(Math.random() * 3)
        return names[int]
      }
    return (
    <main>
      <p>
        Hello {handleNameChange()}
      </p>
    </main>
  )
}

export default Content
