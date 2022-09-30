import { useId, useState } from 'react'



const GemCreateForm = (props) => {
    const [cls, setCls] = useState('Scion');
    const baseID = useId();

    const submitForm = (e) => {
        e.preventDefault();
        
    }

    return (
        <form onSubmit={submitForm}>
            <h3>{props.type} Gems</h3>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <label htmlFor={baseID + "progression"}>Progression:</label>
                        </td>
                        <td>
                            <select name="" id={baseID+"progression"}>
                                {
                                    props.progressions.map((progression,index)=> (
                                        <option key={index} value={progression.id}>{progression.expected_level} {progression.activity}</option>
                                    ))
                                }
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor={baseID + "class"}>Class:</label>
                        </td>
                        <td>
                            <select name="" id={baseID+"class"}>
                                {
                                    props.classes.map((cls,index)=> (
                                        <option key={index} value={cls}>{cls}</option>
                                    ))
                                }
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor={baseID + "gemname"}>Gem Name:</label>
                        </td>
                        <td>
                            <input type="text" name="" id={baseID + "gemname"} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor=""></label>
                        </td>
                        <td>

                        </td>
                    </tr>

                </tbody>
            </table>
            <button type="submit">Create</button>
        </form>
    )
}

export default GemCreateForm
