import React from 'react';
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';


function ListItems(props){
    const items = props.items; 
    const ListItems = items.map(item =>
        {
            return <div className="list" key={item.key}>
                <p>{item.text}
                <span>
                    <FontAwesomeIcon className="faicons"
                    
                    onClick={ () => {props.deleteItem(item.key)

                    }} icon='trash'/>
                </span>
                </p> 
            </div>
        })
    return(
        <div>{ListItems}</div>
    )
}
export default ListItems; 