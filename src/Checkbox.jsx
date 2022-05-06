import React from 'react'
import { useState } from 'react';

const Checkbox = () => {
    // it works like radio button
    let [state,setState]=useState()
    let handleChecked = (e) => {
        if (e.target.checked === true) {
            setState(e.target.name); 
            console.log(e.target.name);
        }
        else if (e.target.checked ===! true) {
            setState(null)
        }
        // console.log(e.target.checked);//checked will return boolean value if i check true if i remove false      
    }
    return (
      <div>
        <input
          type="checkbox"
          name="male"
          value="male"
          onChange={handleChecked}
        />
        Male
        <input
          type="checkbox"
          name="female"
          value="female"
          onChange={handleChecked}
        />
            Female
            
            <div><h1>{state}</h1></div>
      </div>
    );
}

export default Checkbox