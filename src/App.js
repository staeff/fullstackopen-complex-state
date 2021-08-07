import React, {useState} from 'react'

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  // Initialise all clicks as empty array to store
  // every click as a char.
  const [allClicks, setAll] = useState([])

  // .concat does not mute an array but rather returns a
  // copy of the array. Its important not mutate state directly
  // in React. push would update the existing array, so it
  // should not be used for this
  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }


  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>
        left
      </button>
      <button onClick={handleRightClick}>
        right
      </button>
      {right}
      <p>{allClicks.join(' ')}</p>
    </div>
  )
}

export default App
