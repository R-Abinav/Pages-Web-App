import React,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import { Zoom } from "@mui/material";

function TypeArea(props){
    const [popUp, setPopUp] = useState(true);

    function handlePopUp(){
        setPopUp(false);

    }

    const [input, setInput] = useState({
        title: "",
        content: ""
    });

    function preventRefresh(event){
        event.preventDefault();
    }

    function handleChange(event){
        const {value, name} = event.target;
        setInput((prevNote) => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    function submitInput(event){
        props.onAdd(input);
        setInput({
            title: "",
            content: ""
        });
    }

    return(
        <div>
            <form onSubmit={preventRefresh}>
                { popUp ?
                 <input onClick={handlePopUp} className="startText" name="startText" placeholder="Click here to make your 1st note!"></input> :
                 <div>
                    <input onChange={handleChange} name="title" placeholder="Your Note Title" value={input.title}/>
                    <textarea onChange={handleChange} name="content" placeholder="Start cooking here..." rows="3" value={input.content}/>
                    <Zoom in={true}>
                        <button type="submit" onClick={submitInput}>
                            <AddIcon />
                        </button>
                    </Zoom> 
                 </div>
                }
            </form>
        </div>
    );
}

export default TypeArea;