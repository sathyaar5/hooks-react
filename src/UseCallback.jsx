import React, { Component } from 'react';
import React, { useState, useCallback } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const memoizedIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]); 

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment without useCallback</button>
      <button onClick={memoizedIncrement}>Increment with useCallback</button>
    </div>
  );
};

export default MyComponent;

// class UseCallback extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//     // Binding 'this' to the class methods
//     this.incrementCount = this.incrementCount.bind(this);
//   }

//   // Method to increment the count
//   incrementCount() {
//     this.setState(prevState => ({
//       count: prevState.count + 1
//     }));
//   }

//   render() {
//     const { count } = this.state;

//     return (
//       <div>
//         <p>Count: {count}</p>
//         <button onClick={this.incrementCount}>Increment without useCallback</button>
//         <button onClick={this.incrementCount}>Increment with useCallback</button>
//       </div>
//     );
//   }
// }

// export default UseCallback;


//syntax
// const memoizedCallback = useCallback (
//     callbackFunction,
//     dependencyArray
// );