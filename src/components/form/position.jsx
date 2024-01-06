import {useState, useEffect} from "react";

export default function Position({testRadio}) {

    let [positions, setPosition] = useState([])

    useEffect(() => {
        
        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
        .then((response) => response.json())
        .then(data  => {
            setPosition(data.positions);
        })
    }, [])

    return(
        <ul>
            <legend>Select your position:</legend>
            {
                positions.map((position, index) => (
                        <label key={index}>
                            <input type="radio" name="position" id={position.id} value={position.name} onChange={testRadio} required/>
                            {position.name}
                        </label>
                    )
                )
            }
        </ul>
    )
}