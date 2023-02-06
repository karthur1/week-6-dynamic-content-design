import { useState } from "react"
import Start from "./Start"

export default function Survey() {

    const [name, setName] = useState("");
    const [isActiveOne, setIsActiveOne] = useState(true);
    const [isActiveTwo, setIsActiveTwo] = useState(False);

    const passName = (event) => {
        if(event.key === "Enter") {
            console.log("enter")
            setIsActiveOne(false);
            setIsActiveTwo(true);
        }
    }

        return(
            <div>
                <div style={{display: isActiveOne ? 'block' : 'none'}}>
                    <h1>What is your naem?</h1>
                    <input
                        value={name}
                        oneChange={event => setName(event.target.value)}
                        placeholder="Enter name"
                        type="text"

                    />
                </div>
                <div style={{display: isActiveTwo ? 'block' : 'none'}}>
                    <Start passName={name}/>
                </div>
            </div>
        )
}