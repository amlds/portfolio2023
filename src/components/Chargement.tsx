import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";

export default function MyComponent() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState(location);

  function handleClick() {
    setIsLoading(true);
    // Faire une demande à l'API ici...
    setIsLoading(false);
  }

  useEffect(() => {
    if (prevLocation !== location) {
      setPrevLocation(location);
      console.log("location changed");
      handleClick();
    }
  }, [location, prevLocation, handleClick]);

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      {isLoading && <div>Loading...</div>}
    </div>
  );
}
