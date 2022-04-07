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

    const deleteBounty = id => {
        axios.delete(`/bounty/${id}`)
            .then(res => {
                setBounties(prevBounties => 
                    prevBounties.filter(item => 
                        item._id !== id
                    )
                )
            })
            .catch(err => console.log(err))
    }

    const updateBounty = (updates, id) => {
        console.log("update bounty called")
        axios.put(`/bounty/${id}`, updates)
            .then(res => {
                setBounties(prevBounties =>
                    prevBounties.map(item =>
                        item._id !== id ?
                        item :
                        res.data
                    )
                )
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getBounties()
    }, [])

    const renderBounties = bounties.map(item => (
        <BountyCard
            {...item}
            key={item.id}
            deleteBounty={deleteBounty}
            updateBounty={updateBounty}
        />
    ))

    return(
        <div>
            <div className="first-form">
                <AddBountyForm
                    submit={addBounty}
                    btnText="Add Bounty"
                />
            </div>
            <ul>
                {renderBounties}
            </ul>  
        </div>
    )
}

export default App