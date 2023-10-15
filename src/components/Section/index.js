import React from "react";
import { List } from "../List";
import './index.css'

function Section(props){
  return(
    <section>
      <div>
        <h2>{props.title}</h2>
        <p>{props.legend}</p>
        <List 
          id={props.id}
          className={props.className}
        />
      </div>
    </section>
  )
}

export { Section }