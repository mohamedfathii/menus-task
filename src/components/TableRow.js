import React, { Component } from 'react';
import axios from 'axios';
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
        <AccordionItem>
          {
            this.props.categories.map((cat, i) => {
            return(
              <span>
              <AccordionItemTitle key={cat.id}>
              <h3>{cat.name}</h3>
              <span>
                <button className="btn btn-warning" onClick={this.editCategory}>Edit</button>
                <button className="btn btn-danger" onClick={ this.props.deleteCategory.bind(null, cat.id)} >Delete</button>
              </span>
          </AccordionItemTitle>
          <AccordionItemBody>
          <Accordion>
          { 
           cat.items.map((item, x) => {
              return   <AccordionItem >
            <AccordionItemTitle key={x}>
                <h6>{item.name}</h6>
                <span>
                  <button className="btn btn-warning" onClick={this.editItem}>Edit</button>
                  <button className="btn btn-danger" onClick={this.props.deleteItem.bind(null, item.id)} >Delete</button>
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
            )})}
        </AccordionItem>
        </Accordion>
    );
    
  }
}


export default TableRow;