import React from "react";
import { sections } from "../../App";
import './index.css'

function List(props){
  return(
    <ul className={props.className}>
      {
        sections[props.id].listItems.map((item, index) => {
          return(
            <li 
              key={index}
              data-toggle="tooltip" 
              data-placement="top" 
              data-bs-custom-class="custom-tooltip" 
              title={item.title === undefined ? item.alt : item.title}
            >
              <a 
                target="_blank"
                rel="noreferrer noopener"
                href={item.link}>
                <img src={item.img} 
                alt={item.alt}
              />
              </a>
            </li>
          )
        })
      }
    </ul>
  )
}

export {List}