import React, {useState} from 'react'

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  const setLeftAction = () => setLeft(left + 1)
  const setRightAction = () => setRight(right + 1)


  return (
    <div>
      {left}
      <button onClick={setLeftAction}>
        left
      </button>
      <button onClick={setRightAction}>
        right
      </button>
      {right}
    </div>
  )
}

export default App
