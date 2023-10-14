import React from "react";
import { Section } from '../Section'
import { sections } from "../../App";

function Main(){
  return(
    <main>
      {
        sections.map(function(secao, index){
          return (
            <Section
              id={index}
              key={index}
              title={secao.title}
              legend={secao.legend}
              className={secao.className}
            />
          )
        })
      }
    </main>
  )
}

export {Main}