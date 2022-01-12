import React, { useState, useEffect } from "react"
import axios from "axios"


function App(){
    const [bounties, setBounties] = useState([])

    useEffect(() => {
        axios.get("/bounty")
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log("oops..." + err))
    }, [])

    return(
        <div>
            helloworld
        </div>
    )
}

export default App