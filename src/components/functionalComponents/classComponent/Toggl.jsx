import { useState, useEffect } from 'react';

function ToggleButton() {
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = isToggled ? 'black' : 'white';
    document.body.style.color = isToggled ? 'white' : 'black';

    // Cleanup the style when the component unmounts
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    };
  }, [isToggled]);

  function handleClick() {
    setIsToggled(!isToggled);
  }

  return (
    <button onClick={handleClick}>
      {isToggled ? 'LIGHT' : 'DARK'}
    </button>
  );
}

export default ToggleButton;
