import React, {useState} from "react"

function AddBountyForm(props) {
    const { firstName, lastName, bountyPrice, guild, _id, submit, btnText, close } = props

    const defaultInputs = {
        firstName: firstName || "",
        lastName: lastName || "",
        living: true,
        bountyPrice: bountyPrice || "",
        guild: guild || ""
    }

    const [inputs, setInputs] = useState(defaultInputs)

    const handleChange = e => {
        const {name, value, type, checked} = e.target
        setInputs(prevInputs => (
            {
                ...prevInputs,
                [name]: type === "checkbox" ? checked : value
            }
        ))
    }

    const handleSubmit = e => {
        e.preventDefault()
        submit(inputs, _id)
        setInputs(defaultInputs)
        close()
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="firstName"
                value={inputs.firstName}
                onChange={handleChange}
                placeholder="First Name"
            />
            <input
                type="text"
                name="lastName"
                value={inputs.lastName}
                onChange={handleChange}
                placeholder="Last Name"
            />
            <input
                type="text"
                name="bountyPrice"
                value={inputs.bountyPrice}
                onChange={handleChange}
                placeholder="Bounty Price"
            />
            <label>
                <input
                    type="radio"
                    name="guild"
                    value="Jedi"
                    checked={inputs.guild === "Jedi"}
                    onChange={handleChange}
                />
                Jedi
            </label>
            <label>
                <input
                    type="radio"
                    name="guild"
                    value="Sith"
                    checked={inputs.guild === "Sith"}
                    onChange={handleChange}
                />
                Sith
            </label>
            <button>{btnText}</button>
        </form>
    )
}

export default AddBountyForm