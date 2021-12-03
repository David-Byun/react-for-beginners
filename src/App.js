import Button from "./Button";
import styles from "./App.module.css";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  return (
    <div>
      <h1>Welcome</h1>
      <button on onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
