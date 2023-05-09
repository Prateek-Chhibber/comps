import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button primary rounded outline >Click me!</Button>
      </div>
      <div>
        <Button secondary outline >Buy Now!</Button>
      </div>
      <div>
        <Button success outline >See Deal!</Button>
      </div>
      <div>
        <Button warning outline >Hide Ads!</Button>
      </div>
      <div>
        <Button danger outline >Something!</Button>
      </div>
    </div>
  );
}

export default App;
