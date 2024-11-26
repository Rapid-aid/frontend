import React, { useState } from 'react';
import { InfoOutlined } from '@mui/icons-material';
import Legend from './Legend';


function Controls() {
  const [visibility, setVisibility] = useState({
    legendPopup: false,
  });

  const toggleVisibility = (section) => {
    setVisibility(prevState => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <>
      <div className="top-[12rem] md:top-[8rem] right-4 z-20 absolute">
        <div className="bg-white shadow-md rounded-lg">
          <button 
            type="button"
            onClick={() => toggleVisibility('legendPopup')}
            className="block p-3 text-neutral-500 hover:text-neutral-950 hover:text-red duration-200 cursor-pointer"
          >
            <InfoOutlined />
          </button>
        </div>
      </div>
      {visibility.legendPopup && <Legend />}
    </>
  );
}

export default Controls;