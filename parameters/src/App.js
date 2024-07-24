import logo from "./logo.svg";
import "./App.css";
import { useRef } from "react";

function App() {
  let firstNameRef = useRef();
  let telMarksRef = useRef();
  let hinMarksRef = useRef();
  let engMarksRef = useRef();
  let matMarksRef = useRef();
  let sciMarksRef = useRef();
  let socMarksRef = useRef();
  let resultRef = useRef();
  let telMarksStatusRef = useRef();
  let hinMarksStatusRef = useRef();
  let engMarksStatusRef = useRef();
  let matMarksStatusRef = useRef();
  let sciMarksStatusRef = useRef();
  let socMarksStatusRef = useRef();
  let totalMarks=useRef();
  
  let inputOnFocus = (inputRef) => {
    inputRef.current.style.backgroundColor = "pink";
    inputRef.current.style.color = "black";
  };

  let inputOnBlur = (inputRef) => {
    inputRef.current.style.backgroundColor = "";
  };

  let inputOnChange = (inputRef, statusRef) => {
    if (inputRef.current.value >= 0 && inputRef.current.value <= 100) {
      if (inputRef.current.value >= 35) {
        statusRef.current.innerHTML = "pass";
        statusRef.current.style.color = "green";
      } else {
        statusRef.current.innerHTML = "fail";
        statusRef.current.style.color = "red";
      }
    } else {
      statusRef.current.innerHTML = "invalid";
      statusRef.current.style.color = "black";
    }
  };


  let calculateResult = () => {
    let passMarks = 35;
    let telugu = telMarksRef.current.value;
    let hindi = hinMarksRef.current.value;
    let english = engMarksRef.current.value;
    let maths = matMarksRef.current.value;
    let science = sciMarksRef.current.value;
    let social = socMarksRef.current.value;

    if (
      telugu >= passMarks &&
      hindi >= passMarks &&
      english >= passMarks &&
      maths >= passMarks &&
      science >= passMarks &&
      social >= passMarks
    ) {
      resultRef.current.innerHTML = "Passed";
    } else {
      resultRef.current.innerHTML = "Failed";
    }
  };
  return (
    <div className="App">
      <form>
        <div>
          <label>First Name</label>
          <input
            type="text"
            ref={firstNameRef}
            onFocus={() => {
              inputOnFocus(firstNameRef);
            }}
            onBlur={() => {
              inputOnBlur(firstNameRef);
            }}
          ></input>
          <span></span>
        </div>
        <div>
          <label>Telugu</label>
          <input
            type="number"
            ref={telMarksRef}
            onFocus={() => {
              inputOnFocus(telMarksRef);
            }}
            onBlur={() => {
              inputOnBlur(telMarksRef);
            }}
            onChange={() => {
              inputOnChange(telMarksRef,telMarksStatusRef);
            }}
          ></input>
          <span ref={telMarksStatusRef}></span>
        </div>
        <div>
          <label>Hindi</label>
          <input
            type="number"
            ref={hinMarksRef}
            onFocus={() => {
              inputOnFocus(hinMarksRef);
            }}
            onBlur={() => {
              inputOnBlur(hinMarksRef);
            }}
            onChange={() => {
              inputOnChange(hinMarksRef,hinMarksStatusRef);
            }}
          ></input>
          <span ref={hinMarksStatusRef}></span>
        </div>
        <div>
          <label>English</label>
          <input
            type="number"
            ref={engMarksRef}
            onFocus={() => {
              inputOnFocus(engMarksRef);
            }}
            onBlur={() => {
              inputOnBlur(engMarksRef);
            }}
            onChange={() => {
              inputOnChange(engMarksRef,engMarksStatusRef);
            }}
          ></input>
          <span ref={engMarksStatusRef}></span>
        </div>
        <div>
          <label>Maths</label>
          <input
            type="number"
            ref={matMarksRef}
            onFocus={() => {
              inputOnFocus(matMarksRef);
            }}
            onBlur={() => {
              inputOnBlur(matMarksRef);
            }}
            onChange={() => {
              inputOnChange(matMarksRef,matMarksStatusRef);
            }}
          ></input>
          <span ref={matMarksStatusRef}></span>
        </div>
        <div>
          <label>Science</label>
          <input
            type="number"
            ref={sciMarksRef}
            onFocus={() => {
              inputOnFocus(sciMarksRef);
            }}
            onBlur={() => {
              inputOnBlur(sciMarksRef);
            }}
            onChange={() => {
              inputOnChange(sciMarksRef,sciMarksStatusRef);
            }}
          ></input>
          <span ref={sciMarksStatusRef}></span>
        </div>
        <div>
          <label>Social</label>
          <input
            type="number"
            ref={socMarksRef}
            onFocus={() => {
              inputOnFocus(socMarksRef);
            }}
            onBlur={() => {
              inputOnBlur(socMarksRef);
            }}
            onChange={() => {
              inputOnChange(socMarksRef,socMarksStatusRef);
            }}
          ></input>
          <span ref={socMarksStatusRef}></span>
        </div>
        <button type="button" onClick={calculateResult}>
          Calculate Result
        </button>
        <p ref={resultRef}></p>
      </form>
    </div>
  );
}

export default App;
