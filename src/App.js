// import Button from "./components/Button";
// import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
// import { VscWarning } from "react-icons/vsc";
import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: '1',
      label: 'Can i use React on a project?',
      content: 'yes'
    },
    {
      id: '2',
      label: 'Can i use Javascript on a project?',
      content: 'Yes'
    },
    {
      id: '3',
      label: 'Can i use CSS on a project?',
      content: 'Yes'
    },
    {
      id: '4',
      label: 'Can i use EcmaScript on a project?',
      content: 'Yes'
    },
    {
      id: '5',
      label: 'Can i use Java on a project?',
      content: 'No'
    },
    {
      id: '6',
      label: 'Can i use Docker on a project?',
      content: 'No'
    }
  ]
  return <Accordion items={items} />
}

export default App;
