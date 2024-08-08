import React, {useState} from "react";
import Header from "./header.jsx";
import Page from "./note.jsx";
import TypeArea from "./typeArea.jsx";

function App(){
    const [pages, setPages] = useState([]);
    
    function addItem(newPage){
        if(newPage.title === "" && newPage.content === ""){
            console.log("Both are empty!");
        }else{
            setPages((prevPage) => {
                return [...prevPage, newPage];
            });
        }
    }

    function deletePage(id){
        console.log(id);
        setPages((prevPages) => {
            return prevPages.filter((item,index) => {
                return index !== id;
            });
        });
    }

    return(
        <div>
            <Header/>
            <TypeArea 
                onAdd={addItem}
            />
            {pages.map((page,index) => {
                return (
                    <Page
                        key = {index}
                        id= {index}
                        title = {page.title}
                        content = {page.content}
                        onDelete = {deletePage}
                    />
                );
            })}
        </div>
    );
}

export default App;