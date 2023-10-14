import React from "react";
import { sections } from "../../App";

function List(props){
  return(
    <ul className={props.className}>
      {
        sections[props.id].listItems.map((item, index) => {
          return(
            <li key={index}>
              <a 
                target="_blank"
                rel="noreferrer noopener"
                href={item.link}>
                <img src={item.img} alt={item.alt}/>
              </a>
            </li>
          )
        })
      }
    </ul>
  )
}

export {List}