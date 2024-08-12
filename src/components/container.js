import { useState } from 'react';
import Diary from './diary';
import Dreams from './dreams';
import EditDiary from './editdiary';

function Container() {
    const [dreamId, setDreamId] = useState(0);
    const [dataFromDiary, setDataFromDiary] = useState([]);

    const handleDataFromDiary = data => {
        console.log("data is: ", data);
        console.log("the type of data is: ", typeof (data));
        setDataFromDiary([...dataFromDiary, [data]]);
        console.log("dataFromDiary is: ", dataFromDiary);
        setDreamId(dreamId + 1)
    }

    const editTheDream = id => {
        console.log('the id in editTheDream is: ', id);
        console.log('and the type is: ', typeof (id));
        console.log('the dataFromdiary now is: ', dataFromDiary);
        console.log('the type of dataFromDiary is: ', typeof (dataFromDiary));

        setDataFromDiary(dataFromDiary.map(data => {
            const parseData = JSON.parse(data);
            if (parseData.id === id) {
                parseData.isEditing = !parseData.isEditing;
                return JSON.stringify(parseData);
            } else
                return data
        }));

        console.log('the dataFromDiary after is: ', dataFromDiary);
    }

    const editData = (dataFromEdit) => {
        setDataFromDiary(dataFromDiary.map(data => {
            const parseDream = JSON.parse(data);
            const parseDataFromEdit = JSON.parse(dataFromEdit);
            if (parseDream.id === parseDataFromEdit.id) {
                parseDream.isEditing = !parseDream.isEditing;
                parseDream.title = parseDataFromEdit.title;
                parseDream.dream = parseDataFromEdit.dream;
                parseDream.emojiCode = parseDataFromEdit.emojiCode;
                return JSON.stringify(parseDream);
            } else
                return data
        }))
    }

    return (
        <div className='container'>
                <div class="dreamform">
                    <h1>Dream Catcher</h1>
                    <Diary sendDataToApp={handleDataFromDiary} idOfDream={dreamId} />
                </div>
                <div class="dreamlist">
                    {dataFromDiary.map((data, index) => (
                        JSON.parse(data).isEditing ? (
                            <EditDiary editDataToApp={editData} show={data} />
                        ) :
                            <Dreams show={data} key={index} editDream={editTheDream} />
                    ))}
                </div>
        </div>
    );
}

export default Container;
