import React, { useState } from 'react'
import './App.css'
import styled from 'styled-components'

import Message from './components/misc/message'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

interface Props {
  title: string,
  text: string
}

function App() {
  const [Arr, setArr] = useState<Array<Props>>([{title: 'New value', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, et nulla nostrum voluptatum nihil consequuntur est! Eius'}])

  const add = () => {
    const val = {title: 'New', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, et nulla nostrum voluptatum nihil consequuntur est! Eius'}
    setArr([...Arr,val])
    console.log(Arr)
  } 

  const remove = () => {
    Arr.splice(1,1)
    setArr([...Arr])
  } 
  return (
    <div className="App">
      {
        Arr.map(i => (
          <Message key={i.title} title={i.title} text={i.text}/>
        ))
      }
      <button onClick={add}>Add</button>  
      <button onClick={remove}>Remove</button>
    </div>
  );
}

export default App;
