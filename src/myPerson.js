import React from "react";
export default function PersonInfo(props){
    return(
        <>
            <img src={props.photo} alt="avatar"></img>
            <h1>{props.fio}</h1>
            <p>Телефон: {props.tel}</p>
            <p>Еmail: {props.email}</p>
            <p>Город: {props.city}</p>
            <p>Опыт работы: {props.exp} года</p>
            <p>Навыки:</p>
            {/* <p>{props.skills}</p> */}
        </>
    )
}