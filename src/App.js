import './App.css';
import {useState,createContext} from "react";
import CompA from './components/CompA';

const AppState = createContext();

function App() {

  const [data,setData] = useState("Moin Khan");

  return (
    <AppState.Provider value={data}>
    <div className="App">
      <CompA />
    </div>
    </AppState.Provider>
  );
}

export default App;
export {AppState};
