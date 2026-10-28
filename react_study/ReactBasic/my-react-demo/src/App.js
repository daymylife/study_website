import { useState } from 'react'
import HooksTest from './test-code/hooks-test'
// import './index.css'
// import classnames from 'classnames'
// import { useRef } from 'react'
// import { createContext, useContext } from 'react'
// import { useEffect, useState } from 'react'

// import { use } from "react";
const useChange = () => {
  const [value, setValue] = useState(true)
  const toggle = () => setValue(!value)
  return [value, toggle]
}
function App() {
  const [value, toggle] = useChange()
  return (
    <div>
      {'hello react'}
      {'hello'}
      {value && <div>this is div</div>}
      <button onClick={toggle}>click</button>
      <HooksTest />
    </div>
  );
}

export default App;
