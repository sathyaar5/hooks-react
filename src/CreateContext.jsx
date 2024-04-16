import React, { createContext } from 'react';

const MyContext = createContext();

// function ParentComponent() {
//   return (
//     <MyContext.Provider value="Hello from Context!">
//       <ChildComponent />
//     </MyContext.Provider>
//   );
// }

// function ChildComponent() {

//   const contextValue = useContext(MyContext);
//   return <p>{contextValue}</p>;
// } 

class MyProvider extends React.Component {
  render() {
    return (
      <MyContext.Provider value="Hello from Context!">
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

class ChildComponent extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {contextValue => <p>{contextValue}</p>}
      </MyContext.Consumer>
    );
  }
}

export { ChildComponent, MyProvider };
