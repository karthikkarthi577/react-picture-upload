import React from "react";
import { useState } from "react";

const Checkbox2 = () => {
  let [state, setState] = useState({});

  let handleChange = e => {
    if (e.target.checked === true) {
      let { name, value } = e.target;
      setState({ ...state, [name]: value });
      console.log(state);
    } else if (e.target.checked === !true) {
      setState(delete state.male);
      setState(delete state.female);
    }
  };
  console.log(state);
  return (
    <div>
      <input type="checkbox" name="male" value="male" onChange={handleChange} />
      male
      <input
        type="checkbox"
        name="female"
        value="female"
        onChange={handleChange}
      />
      female
    </div>
  );
};

export default Checkbox2;
