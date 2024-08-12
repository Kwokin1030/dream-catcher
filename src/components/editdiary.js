import { useState } from 'react';
import Mood from './mood';

function EditDiary({ editDataToApp, show }) {
    const [inputs, setInputs] = useState(JSON.parse(show));

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({
            ...values, [name]: value
        }))
    }

    const emoji = (code) => {
        setInputs(values => (
            {
                ...values, emojiCode: code
            }
        ))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const myJSON = JSON.stringify(inputs);
        editDataToApp(myJSON);
    }

    return (<div className='editform'>
        <form onSubmit={handleSubmit}>

            <label for="title">Remembering it</label>
            <br /><br />
            <input type="text" placeholder="Give your dream a name" id="title" name="title" value={inputs.title} onChange={handleChange} />
            <br /><br />

            <label for="content">What was it about?</label>
            <br /><br />
            {/* <input type="text" placeholder="Details of the dream" id="dream" name="dream" value={inputs.dream} onChange={handleChange} /><br /> */}

            <textarea id="dream" name="dream" rows="5" cols="25" value={inputs.dream} onChange={handleChange}>Write down your dream here...</textarea><br />

            <p>Change your mood?</p>
            <Mood readEmo={emoji} />
            <input className="button-60" type="submit" value="Update" />
        </form>
    </div>);
}
export default EditDiary;