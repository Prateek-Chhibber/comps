import Button from "./Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import { VscWarning } from "react-icons/vsc";

function App() {
  return (
    <div><br/>
      <div>
        <Button pimary >
          <GoBell/>
          Click me!</Button>
      </div><br/>
      <div>
        <Button secondary ><GoCloudDownload />Buy Now!</Button>
      </div><br/>
      <div>
        <Button success ><GoDatabase />See Deal!</Button>
      </div><br/>
      <div>
        <Button warning ><VscWarning />Warnings!!</Button>
      </div><br/>
      <div>
        <Button danger >Something!</Button>
      </div>
    </div>
  );
}

export default App;
