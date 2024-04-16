import { useState, useEffect, useRef } from "react";
// import { React, Component } from "react";

function UseRefHook() {
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");
  
    useEffect(() => {
      previousInputValue.current = inputValue;
    }, [inputValue]);
  
    return (
      <>
        <input
          ref={previousInputValue}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <h2>Current Value: {inputValue}</h2>
        <h2>Previous Value: {previousInputValue.current}</h2>
      </>
    );
}
  
// class UseRefHook extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         inputValue: "",
//         previousInputValue: ""
//       };
//       this.inputRef = React.createRef();
//     }
  
//     componentDidMount() {
//       this.inputRef.current.focus();
//     }
  
//     handleChange = (e) => {
//       const { value } = e.target;
//       this.setState({
//         inputValue: value,
//         previousInputValue: this.state.inputValue
//       });
//     };
  
//     render() {
//       const { inputValue, previousInputValue } = this.state;
//       return (
//         <>
//           <input
//             type="text"
//             value={inputValue}
//             onChange={this.handleChange}
//             ref={this.inputRef}
//           />
//           <h2>Current Value: {inputValue}</h2>
//           <h2>Previous Value: {previousInputValue}</h2>
//         </>
//       );
//     }
// }

export default UseRefHook;