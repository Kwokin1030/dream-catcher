import { useState } from "react";

function Dreams({ show, editDream }) {
  const obj = JSON.parse(show);

  const [isVisible, setIsVisible] = useState(false);

  // Time Stamp
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  return (
    <div className="dreams">
      {/* <p>ID is: {obj.id}</p> */}
      {/* <p>Editing status: {obj.isEditing? "True": "False"}</p> */}
      <p className="dreamy">When did it happen<br /><br/>{day}-{month}-{year}</p>
      <p className="dreamy">Do you remember?<br /><br />{obj.title}</p>
      {
        isVisible && (
          <p className="dreamy">Where is it coming from?<br /><br />{obj.dream}<br /><br />{obj.emojiCode}</p>
        )
      }
      <button className="button-60" onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Show Less' : 'Show More'}
      </button>
      <button className="button-60" onClick={()=>editDream(obj.id)}>Edit</button>
    </div>
  );
}

export default Dreams;