import React from 'react'
import Checkbox from './Checkbox'
import ImageUpload from './ImageUpload'
import Checkbox2 from './Checkbox2';
import Parent from './Parent';

const App = () => {
  return (
    <div>
      <ImageUpload />
      <Checkbox />
      <Checkbox2 />
      <Parent/>
    </div>
  )
}

export default App