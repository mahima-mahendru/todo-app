import { Button, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'
import { db } from './firebase_config';
 
export default function TodoListItem ({todo,inprogress,id}) {
function toggleinprogress(){
    db.collection("todo").doc(id).update({
            inprogress:!inprogress,
    });
}
function todeletetodo(){
    db.collection("todo").doc(id).delete();
}
    return (
        <div style={{display:"flex" ,marginTop:"24px"}}>
           <ListItem>
            <ListItemText primary={todo} secondary={inprogress?"In Progress":"Done"}/>
           </ListItem>
           <Button onClick={toggleinprogress}>{ inprogress?"Done":"Undone"}
           </Button>
           <Button onClick={todeletetodo}>x</Button>

        </div>
    )
}
