import { VirtualizedList } from "./components/VirtualizedList";
import "./styles.css";

const LIST = new Array(10000).fill().map((_, index) => index + 1);

export default function App() {
  return (
    <VirtualizedList list={LIST} height={400} width={300} itemHeight={35} />
  );
}
