import { useState } from "react"
import Start from "./Start"

export default function Survey() {

    const [name, setName] = useState("");
    const [isActiveOne, setIsActiveOne] = usestate(true);
    const [isActiveTwo, setIsActiveTwo] = usestate(False);


        return(
            <div>
                <div style={{display: isActiveOne ? 'block' : 'none'}}>
                    <h1>What is your naem?</h1>
                    <input>
                        value={name}
                        oneChange={event => setName(event.target.value)}
                        placeholder="Enter name"
                        type="text"

                    </input>
                </div>
                <div style={{display: isActiveTwo ? 'block' : 'none'}}>

                </div>
            </div>
        )
}