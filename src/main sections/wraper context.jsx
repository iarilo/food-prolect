import React,{createContext,useState} from 'react';

export const Context = createContext();
export const WraperContext = ({children}) => {
  const[stateCheck,setStateCheck] = useState('');
  const [newValue, setnewValue] = useState('');

  const dataCheck = (check) => {
    setStateCheck(check);
  }

  const dataValue = (value) => {
    setnewValue(value);
  }

  const objValue = { stateCheck, newValue, dataCheck, dataValue}
  return (
    <div>
      <Context.Provider value={objValue} >
        {children}
      </Context.Provider>
      
    </div>
  )
}
