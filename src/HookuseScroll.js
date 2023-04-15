import './App.css'
import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom'
import userEvent from '@testing-library/user-event';

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0
  });
  const onScroll = () => {
    setState({y:window.scrollY, x:window.scrollX});
  };
  useEffect (() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
}
function HookuseScroll() {
  const {y} = useScroll();
  return (
    <div className="App" style={{height:"1000vh"}}>
      <h1 style={{position:"fixed", color: y>100?"red":"blue"}}> hello</h1>
    </div>
  )
}

export default HookuseScroll