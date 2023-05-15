import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import { VscWarning } from "react-icons/vsc";

function ButtonPage() {
  const handleClick = () => {
    console.log('click!!')
  }
  return (
    <div><br/>
      <div>
        <Button pimary onClick={handleClick}>
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
        <Button danger onMouseEnter={handleClick}>Something!</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
