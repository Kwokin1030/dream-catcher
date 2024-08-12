import { useState } from 'react';
import Mood from './mood';
import myLogo from './image/logo.jpg';

function Diary({ sendDataToApp, idOfDream }) {
    const [inputs, setInputs] = useState({
        id: "",
        title: "",
        dream: "",
        emojiCode: "",
        isEditing: false
    });

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
        inputs.id = String(idOfDream);
        console.log("typeof inputs.id is: ", typeof (inputs.id));
        console.log(inputs.id);
        console.log("inputs is: ", inputs);
        console.log(typeof (inputs));
        const myJSON = JSON.stringify(inputs);
        sendDataToApp(myJSON);

        setInputs({
            id: "",
            title: "",
            dream: "",
            emojiCode: "",
            isEditing: false
        });
    }

    return (<div>
        <form onSubmit={handleSubmit}>
            <img className="logo" src={myLogo} alt="logo" width="250"/>
            <br/><br/>
            <label for="title">Remembering it</label>
            <br /><br />
            <input type="text" placeholder="Give your dream a name" id="title" name="title" value={inputs.title} onChange={handleChange} />
            <br /><br />
            <label for="content">What was it about?</label>
            <br /><br />
            {/* <input type="text" placeholder="Write down your dream here..." id="dream" name="dream" value={inputs.dream} onChange={handleChange} /><br /> */}

            <textarea id="dream" name="dream" rows="5" cols="25" value={inputs.dream} onChange={handleChange}>Write down your dream here...</textarea><br />

            <p>Pick your Mood</p>
            <Mood readEmo={emoji} />
            <br />
            <input type="submit" value="Catch it" />
        </form>
    </div>);
}
export default Diary;