import React, { Component } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
class TableRow extends Component {

  constructor(props) {
        super(props);   
    }

  render() {
    return (
        <Accordion>
          {
            this.props.categories.map((cat, i) => {
              return(
              <AccordionItem key={cat.id}>
                <span >
              <AccordionItemTitle >
              <h3>{cat.name}</h3>
              <span>
                <button className="btn btn-warning">Edit</button>
                <button className="btn btn-danger" onClick={ this.props.deleteCategory.bind(null, cat.id)} >Delete</button>
              </span>
          </AccordionItemTitle>
          <AccordionItemBody key={cat.id}>
          <Accordion>
          { 
           cat.items.map((item, x) => {
              return   <AccordionItem key={x}>
            <AccordionItemTitle >
                <h6>{item.name}</h6>
                <span>
                  <button className="btn btn-warning">Edit</button>
                  <button className="btn btn-danger" onClick={ this.props.deleteItem.bind(null , item.id)} >Delete</button>
                </span>
                <AccordionItemBody>
                 <p>Descritpon: {item.description}</p>
               <p>  Price : {item.price}</p>
                </AccordionItemBody>
                </AccordionItemTitle>

              </AccordionItem>
            })
          }
        </Accordion>
            </AccordionItemBody>
              </span>
        </AccordionItem>
            )})}
        </Accordion>
    );
    
  }
}


export default TableRow;