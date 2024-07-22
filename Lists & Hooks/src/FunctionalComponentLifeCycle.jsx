import React, { useState, useEffect } from 'react';


const MyFunctionalComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('ComponentDidMount: Component has been added to the DOM');

    return () => {
      console.log('ComponentWillUnmount: Component is being removed from the DOM');
    };
  }, []); // Empty array means this effect runs once on mount and cleanup on unmount

  useEffect(() => {
    console.log('ComponentDidUpdate: Component has been updated');
  }, [count]); // This effect runs every time 'count' changes

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
        <h1>This is Fuctional componant life cycle</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default MyFunctionalComponent;
