import React, {useState} from "react"

import AddBountyForm from "./AddBountyForm"

function BountyCard(props) {
    const { firstName, lastName, living, bountyPrice, guild, _id, deleteBounty, updateBounty} = props
    const [editToggle, setEditToggle] = useState(false)
    return(
        <li style={{listStyleType: "none"}}>
            { !editToggle ?
                <>
                    <h1>{`${firstName} ${lastName}`}</h1>
                    <h2>{guild}</h2>
                    <h2>$ {bountyPrice}</h2>
                    <h2>{
                        living ?
                        "Active Bounty" :
                        !living ?
                        "Collected" :
                        "Information missing..."
                    }</h2>
                    <button
                        onClick={() => deleteBounty(_id)}>
                        Delete
                    </button>
                    <button
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Edit
                    </button>
                </>
            :
                <>
                    <AddBountyForm 
                        firstName={firstName}
                        lastName={lastName}
                        bountyPrice={bountyPrice}
                        living={living}
                        guild={guild}
                        _id={_id}
                        submit={updateBounty}
                        btnText="Update"
                    />
                    <button
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Close
                    </button>
                </>
            }
        </li>
    )
}

export default BountyCard