import { Header } from "./components/Header";
import { LearnComponent } from "./components/LearnComponent"

import { FunctionSample } from "./components/FunctionSample";

import { MultiTypeComponent } from "./components/MultiTypeComponent";

import { OneofSample } from "./components/OneofSample";

import { ArraySample } from "./components/ArraySample";

import { Student } from "./components/Student";
import { ChildComponent } from "./components/ChildComponent";




function App() {
   const items = [
     { id: 1, name: 'item1' },
     { id: 2, name: 'item2' },
     { id: 3, name: 'item3' },

   ]
  const handleClick = () => {
    alert("Button clicked!");
  }
  return (
  <>
    <div>Kavin react course</div>
    <LearnComponent /> 
    <Header /> 
    <Student name = "Kavin" age = {35} isMarried = {true}/>
    <Student name = "Sanjay" age = {25} isMarried = {false}/>
    <Student />

    <ChildComponent>
      <p>This is a simple para 1</p>
      <p>This is a simple para 2</p>
    </ChildComponent> 
    <ArraySample items = {items} />
    <OneofSample color = "red" />
    <MultiTypeComponent value = "Hello"/>
    <MultiTypeComponent  value = {42}/>
    <MultiTypeComponent value = {true}/>
    <div>This is a parent component</div>
    <FunctionSample handleClick = {handleClick}/>
  </>
  );
}

export default App
