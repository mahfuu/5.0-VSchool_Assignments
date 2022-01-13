import React from "react"

function BountyCard(props) {
    const { firstName, lastName, living, bountyPrice, guild, _id } = props

    return(
        <li style={{listStyleType: "none"}}>
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
        </li>
    )
}

export default BountyCard