import React, { useState } from 'react';
import { TimePicker } from 'react-ios-time-picker';
  const Time= () => {
   const [value, setValue] = useState('10:00');

   const onChange = (timeValue) => {
      setValue(timeValue);
   }

   return (
        
    <TimePicker onChange={onChange} value={value}  />
   );
}
export default Time
