import React, { useState, useEffect } from "react"
import axios from "axios"

import BountyCard from "./components/BountyCard.js"
import AddBountyForm from "./components/AddBountyForm.js"

function App(){
    const [bounties, setBounties] = useState([])

    const getBounties = () => {
        axios.get("/bounty")
            .then(res => setBounties(res.data))
            .catch(err => console.log("oops..." + err))
    }

    const addBounty = (newBounty) => {
        axios.post("/bounty", newBounty)
            .then(res => (
                setBounties(prevBounties => [...prevBounties, res.data])
            ))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getBounties()
    }, [])

    const renderBounties = bounties.map(item => (
        <BountyCard
            {...item}
            key={item.id}
        />
    ))

    return(
        <div>
            <AddBountyForm
                addBounty={addBounty}
            />
            <ul>
                {renderBounties}
            </ul>  
        </div>
    )
}

export default App