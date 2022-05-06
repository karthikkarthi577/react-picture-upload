import React from "react";
import { useState } from "react";

const ImageUpload = () => {
  let [file, setFile] = useState("");
  let [data, setState] = useState({});
  let handleChange = e => {
    setFile(URL.createObjectURL(e.target.files[0]));
    setState(e.target.files[0]);
  };
  return (
    <div>
      <input type="file" onChange={handleChange} />

      <p>name:{data.name}</p>
      <p>size:{data.size}</p>
      <img src={file} alt="" style={{ height: "100px" }} />
    </div>
  );
};

export default ImageUpload;
