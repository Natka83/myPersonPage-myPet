import React from "react";

export function ListItem(props) {
    return (
        <>
        <li>{props.skills[0]}</li>
        <li>{props.skills[1]}</li>
        <li>{props.skills[2]}</li>
        <li>{props.skills[3]}</li>
        <li>{props.skills[4]}</li>
        <li>{props.skills[5]}</li>
        <li>{props.skills[6]}</li>
        <li>{props.skills[7]}</li>
        <li>{props.skills[8]}</li>
       </>
    )
}

export default function ItemList(props) {
    let {items} = props.data;
    return (
        <>
            <ul style={{ listStyleType: "none" }}>
                {items.map(item => {
                    return <ListItem skills={item}></ListItem>
                })
                }
            </ul>
        </>
    )
}