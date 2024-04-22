// import React, { Component } from 'react';

import React, { useMemo } from 'react';

// syntax
// const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

function UseMemo({ a, b }) {
  const result = useMemo(() => {

    return a * b;
  }, [a, b]); 

//   const result1 = a * b;

  return <div>{result}</div>;
  
}

// class UseMemo extends Component {

//     calculateResult = () => {
//     const { a, b } = this.props;
//     return a * b;
//   };

//   render() {
//     const result = this.calculateResult();

//     return <div>{result}</div>;
//   }
// }


export default UseMemo;