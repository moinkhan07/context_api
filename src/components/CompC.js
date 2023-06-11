import React,{useContext} from 'react'
import { AppState } from '../App'

const CompC = () => {
    const appState = useContext(AppState);
  return (
    <div className='comC'>
    <div>CompC</div>
    <h1>{appState}</h1>
    </div>
  )
}

export default CompC