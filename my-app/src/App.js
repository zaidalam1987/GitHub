import Navbar from "./navbar";
import Card from "./card";

function App() {
  return (
    <div className = "App">
      <Navbar/>
        <div ClassName = "Card">
          <Card title = "Card 1" description = "abc"/>
          <Card title = "Card 2" description = "abcd"/>
          <Card title = "Card 3" description = "abcde"/>
          <Card title = "Card 4" description = "abcdef"/>
          <Card title = "Card 5" description = "abcdefg"/>
        </div>
        </div>
);
}

export default App;
