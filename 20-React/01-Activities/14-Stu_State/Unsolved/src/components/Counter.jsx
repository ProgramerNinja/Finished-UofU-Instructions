import { useState } from 'react';
import CardBody from './CardBody';

// TODO: Add a comment explaining what export default does
// It will pass the object/function back as the only export
export default function Counter() {
  // TODO: Add a comment that explains how the useState hook works
  //it sets up theinitial value of the state of the count variable
  const [count, setCount] = useState(0);

  // TODO: Explain what is happening with this click handler
  // it is using the set count variable to change the value of the state of count
  const handleIncrement = () => {
    setCount((count + 1));
  };

  // TODO: Explain what is happening with this click handler
  // inverse of the pervious
  const handleDecrement = () => {
    if (count > 0) {
      setCount((count - 1));
    }
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      {/* TODO: Add a comment that explains what props are getting passed to CardBody */}
      {/* it is passing through both the count variable/state and the methods we made to modify it*/}
      <CardBody
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
}
