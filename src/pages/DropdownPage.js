import Dropdown from "../components/Dropdown";
import { useState } from "react";

function DropdownPage() {

    const [ selected, setSelected ] = useState(null);


    const options = [
        {
            label:"Red",
            value: "red"
        },
        {
            label:"Blue",
            value: "blue"
        },
        {
            label:"White",
            value: "white"
        },
    ]

    const handleSelect = (option)=>{
        setSelected(option)

    }
  return (
    <div>
      <Dropdown options = {options} value = {selected} onChange = {handleSelect}/>
    </div>
  );
}

export default DropdownPage;
