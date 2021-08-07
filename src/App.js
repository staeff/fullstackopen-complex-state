import React, {useState} from 'react'


const History = ({ allClicks }) => {
  // this component renders different React elements,
  // depending on the state of the application. (conditional rendering)
  if (allClicks.length === 0 ) {
    return (
      <div>this app is used by pressing buttons</div>
    )
  }
  return (
    <div>button press history: {allClicks.join(' ')}</div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

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
      <Button handleClick={handleLeftClick} text='left'/>
      <Button handleClick={handleRightClick} text='right'/>
      {right}
      <History allClicks={allClicks} />
    </div>
  )
}

export default App
