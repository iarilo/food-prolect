import React, { useState, useEffect, useCallback, useContext } from 'react';
import { Context } from '../../main sections/wraper context';

export const CheckboxFilter = ({ catalog, cb }) => {
  const strCategories = catalog?.map((item) => item.strCategory);
  const categoriesLengthArray = new Array(strCategories.length).fill(false);

  const [checkedState, setCheckedState] = useState(categoriesLengthArray);
  const { dataValue, dataCheck }= useContext(Context);
  console.log( 'CheckboxFilter',checkedState);
  
  useEffect(
    () => setCheckedState(new Array(strCategories.length).fill(false)),
    [strCategories.length]
  );
    const handleOnChange = useCallback(
    (e, position) => {
        const  value = e.target.value;
       dataValue(value)
            const updatedCheckedState = checkedState.map((item, index) =>
        index === position ? !item : item
      );
       dataCheck(checkedState)
      setCheckedState([...updatedCheckedState]);
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[checkedState]
    
  );

  return (
      <fieldset className="container-check">
        <ul>
          {catalog.map((item, index) => {
            return (
              <li key={item.idCategory}>
                <div className="input-check">
                  <label htmlFor={`check-${item.strCategory}`}>
                    <input
                      className="filled-in"
                      type="checkbox"
                      id={`check-${item.strCategory}`}
                      name={item.strCategory}
                      value={item.strCategory}
                      checked={checkedState[index]}
                      onChange={(e) => handleOnChange(e, index)}
                    />

                    <span>{item.strCategory}</span>
                  </label>
                </div>
              </li>
            );
          })}
        </ul>
      </fieldset>
  
  );
};
