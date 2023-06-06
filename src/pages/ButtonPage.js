
import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase, GoChecklist, GoBug } from "react-icons/go";


function ButtonPage(){

    
    return(
        <div>
            <div><Button primary rounded outline className = "mb-5" ><GoBell/>Click</Button></div>
            <div><Button outline success ><GoCloudDownload/>Hello</Button></div>
            <div><Button secondary><GoChecklist/>HI</Button></div>
            <div><Button rounded warning ><GoDatabase/>click here</Button></div>
            <div><Button danger outline><GoBug/>Danger</Button></div>
        </div>
        
    )
}

export default ButtonPage;