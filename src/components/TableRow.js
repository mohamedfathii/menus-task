import React, { Component } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { Button, Form } from 'semantic-ui-react'
class TableRow extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Accordion>
        {
          this.props.categories.map((cat, i) => {
            return (
              <AccordionItem key={cat.id}>
                <span >
                  <AccordionItemTitle >
                    <h3>{cat.name}</h3>
                    <span>
                      <button className="btn btn-warning mr-2">Edit</button>
                      <button className="btn btn-danger" onClick={this.props.deleteCategory.bind(null, cat.id)} >Delete</button>
                    </span>
                  </AccordionItemTitle>
                  <AccordionItemBody key={cat.id}>
                    <Accordion>
                      <div className="p-4">
                        <Form onSubmit={this.props.handleSubmitItem.bind(null, cat.id)}>
                          <Form.Group widths='equal'>
                            <Form.Field>
                              <label>Item Name</label>
                              <input placeholder='Item Name' onChange={this.props.getItemName.bind(this)} value={this.props.itemName} />
                            </Form.Field>
                            <Form.Field>
                              <label>Price</label>
                              <input placeholder='Item Price' onChange={this.props.getItemPrice.bind(this)} value={this.props.itemPrice} />
                            </Form.Field>
                            <Form.Field>
                              <label>Description</label>
                              <textarea placeholder="Description" onChange={this.props.getItemDescription.bind(this)} value={this.props.itemDesc} />
                            </Form.Field>
                          </Form.Group>
                          <Button type='submit'>Submit</Button>
                        </Form>
                      </div>
                      {
                        cat.items.map((item, x) => {
                          return <AccordionItem key={x}>
                            <AccordionItemTitle >
                              <h6>{item.name}</h6>
                              <span>
                                <button className="btn btn-warning  mr-2">Edit</button>
                                <button className="btn btn-danger" onClick={this.props.deleteItem.bind(null, item.id)} >Delete</button>
                              </span>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                              <p>Description: {item.description}</p>
                              <p>Price: {item.price}</p>
                            </AccordionItemBody>

                          </AccordionItem>
                        })
                      }
                    </Accordion>
                  </AccordionItemBody>
                </span>
              </AccordionItem>
            )
          })}
      </Accordion>
    );

  }
}


export default TableRow;