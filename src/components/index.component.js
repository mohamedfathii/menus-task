import React, { Component } from 'react';
import TableRow from './TableRow';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';

export default class Index extends Component {

  constructor(props) {
    super(props);
    /**
     * initiate the state value
     */
    this.state = {
      category: [],
      categoryName: '',
      categoryDesc: '',
      itemName: '',
      itemPrice: '',
      itemDesc: '',
      isAdmin: false
    };
  }
  /**
   * set state with categories data
   */
  componentDidMount() {
    axios.get('https://raw.githubusercontent.com/mohamedfathii/test/master/menu')
      .then(response => {
        this.setState({ category: response.data.categories });
      })
      .catch(function (error) {
        console.log(error);
      })
    /** get user type from local storage */
    this.state.isAdmin = JSON.parse(localStorage.getItem('isAdmin'));
    this.setState({ isAdmin: this.state.isAdmin });
  }
  /**
   * delete category
   * @param {*} categoryId 
   */
  deleteCategory(categoryId) {
    const updatedCategory = this.state.category.filter((item) => {
      return item.id !== categoryId
    })
    this.setState({ category: updatedCategory });
  }
  /**
   * delete item from category
   * @param {*} itemId 
   */
  deleteItem(itemId) {
    this.state.category.forEach((cat) => {
      cat.items.forEach((item) => {
        return item.id === itemId ? cat.items.splice(cat.items.indexOf(item), 1) : this.state.category;
      })
    })
    this.setState({ category: this.state.category });
  }
  /**
   * handle add new category to categories Array
   * @param {*} event 
   */
  handleSubmit(event) {
    event.preventDefault();
    let appendCategory = this.state.category;
    let catId = [...this.state.category].pop() ? [...this.state.category].pop().id + 1 : 1;
    appendCategory.push({ id: catId, name: this.state.categoryName, items: [] });
    this.setState({ categoryName: '', categoryDesc: '', category: appendCategory });
  }
  /**
   * get category name from user input 
   * @param {*} event 
   */
  getCategoryName(event) {
    this.setState({ categoryName: event.target.value });
  }
  /**
   * get category description from user input 
   * @param {*} event 
   */
  getCategoryDescription(event) {
    this.setState({ categoryDesc: event.target.value });
  }

  /**
 * handle add new item 
 * @param {*} event 
 */
  handleSubmitItem(catId) {
    this.state.category.forEach((cat) => {
      let itemId = [...cat.items].pop() ? [...cat.items].pop().id + 1 : 1;
      return cat.id === catId ? cat.items.push({
        id: itemId,
        name: this.state.itemName,
        price: this.state.itemPrice,
        description: this.state.itemDesc
      }) : this.state.category;
    })
    this.setState({
      category: this.state.category
    });
  }
  /**
   * get item name from user input 
   * @param {*} event 
   */
  getItemName(event) {
    this.setState({ itemName: event.target.value });
  }
  /**
   * get item price from user input 
   * @param {*} event 
   */
  getItemPrice(event) {
    this.setState({ itemPrice: event.target.value });
  }
  /**
 * get item description from user input 
 * @param {*} event 
 */
  getItemDescription(event) {
    this.setState({ itemDesc: event.target.value });
  }

  render() {
    return (
      <div>
        {this.state.isAdmin ?
          <div>
            <h3> Add New Category </h3>
            <Form onSubmit={this.handleSubmit.bind(this)}>
              <Form.Group widths='equal'>
                <Form.Field>
                  <label>Category Name</label>
                  <input placeholder='Category Name' onChange={this.getCategoryName.bind(this)} value={this.state.categoryName} />
                </Form.Field>
                <Form.Field>
                  <label>Description</label>
                  <textarea placeholder="Description" onChange={this.getCategoryDescription.bind(this)} value={this.state.categoryDesc} />
                </Form.Field>
              </Form.Group>
              <Button type='submit'>Submit</Button>
            </Form>
            <h3 align="center">Menus Data</h3>
          </div> : null
        }
        <TableRow
          deleteCategory={this.deleteCategory.bind(this)}
          deleteItem={this.deleteItem.bind(this)}
          categories={this.state.category}
          handleSubmitItem={this.handleSubmitItem.bind(this)}
          getItemName={this.getItemName.bind(this)}
          getItemPrice={this.getItemPrice.bind(this)}
          getItemDescription={this.getItemDescription.bind(this)}
        />
      </div>
    );
  }
}