import {useState} from "react";


function App() {

    const [numberOne, setNumberOne]= useState("")
    const [numberTwo, setNumberTwo]= useState("")
    const [result, setResult]= useState(0)



    const handlePlus=()=>{
          setResult(+numberOne+ +numberTwo)
}
    const handleMinus=()=>{
         setResult(numberOne-numberTwo)
    }
    const handleDivide=()=>{
         setResult (numberOne*numberTwo)
    }
    const handleMultiply=()=>{
         setResult(numberOne/numberTwo)
    }
    const handleReset=()=>{
        return setNumberOne(""),
            setNumberTwo("")
    }

    const handleChangeOne=(e)=>{
        setNumberOne(e.target.value)
}
    const handleChangeTwo=(e)=>{
        setNumberTwo(e.target.value)
    }



    return (
   <div className="app">
     <div className="main">
       <div className="numbers">
         <div className="number-1">
             <input placeholder="первое число" type="text" value={numberOne} onChange={handleChangeOne}/>
         </div>
         <div className="number-2">
             <input placeholder="второе число" type="text" value={numberTwo} onChange={handleChangeTwo}/>
         </div>
       </div>
       <div className="buttons">
         <div className="plus">
             <button onClick={handlePlus}>+</button>
         </div>
         <div className="minus">
             <button onClick={handleMinus}>-</button>
         </div>
         <div className="divide">
             <button onClick={handleDivide}>*</button>
         </div>
         <div className="multiply">
             <button onClick={handleMultiply}>/</button>
         </div>
       </div>
         <div className="reset">
             <button onClick={handleReset}>reset</button>
         </div>
       <div className="result" >
           {result}
       </div>
     </div>
   </div>
  );
}

export default App;
