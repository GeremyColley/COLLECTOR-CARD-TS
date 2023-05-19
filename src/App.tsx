
import './App.css'
import Cards from './components/Cards';


function double(num: number): number {
  return num * 2;
}

function sayHello (firstName: string, lastName: string): void {
  console.log(`Hello ${firstName} ${lastName}`);
}

function sayHelloReturn (firstName: string, lastName: string): string {
  return `Hello ${firstName} ${lastName}`;
}

const sayHi = (firstName: string, lastName: string = "Jocelyne") => {
  console.log(`Hello ${firstName} ${lastName}`);
}

function App() {
  sayHello("Alice", "Colley");
  sayHi("Alice", "Sylvie");

  return (
    <div className='App'>
      <p>Double fnc {double(2)}</p>
      <p>{sayHelloReturn("Alice" , "Colley")}</p>
      <Cards btnColor={"Coucou"} />
    </div> 
  )
}

export default App
