import React, { Component } from 'react';
import TableRow from './TableRow';
import { Button, Checkbox, Form } from 'semantic-ui-react'

export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {category: [], categoryName:'', categoryDesc:''};
    }
    data={
      "categories": [
        {
          "id": 80877,
          "name": "Appetizers",
          "items": [
            {
              "id": 132548,
              "name": "French Fries",
              "description": "Custom premium cut by farm frites. Add melted cheese for 7LE - chili con carne for 9LE",
              "price": 54.834
            },
            {
              "id": 655881,
              "name": "Nacho Chips & Salsa",
              "description": "Homemade crispy nacho chips served with fresh salsa dip",
              "price": 54.834
            },
            {
              "id": 655882,
              "name": "Sweet Potato Fries",
              "description": "Served with hot mayo dip",
              "price": 54.834
            },
            {
              "id": 655883,
              "name": "Seasoned Wedges",
              "description": "Served with garlic mayo dip",
              "price": 54.834
            },
            {
              "id": 132565,
              "name": "Chili Cheese Fries",
              "description": "French fries, topped with chili con carne & melted cheddar cheese, served with sour cream and pickled jalapenos",
              "price": 54.834
            },
            {
              "id": 655884,
              "name": "Potato Skins",
              "description": "Loaded with cheese & chili beef ( served with sour cream)",
              "price": 54.834
            },
            {
              "id": 132549,
              "name": "Onion Rings",
              "description": "",
              "price": 54.834
            }
          ]
        },
        {
          "id": 21281,
          "name": "Salads",
          "items": [
            {
              "id": 655880,
              "name": "BLT Salad",
              "description": "Grilled bacon , lettuce , tomatoes with ranch sauce",
              "price": 34.834
            },
            {
              "id": 132570,
              "name": "Caesar Salad",
              "description": "Lettuce, Parmesan cheese, Croutons & Caesar dressing",
              "price": 34.834
            },
            {
              "id": 132574,
              "name": "Garden Salad",
              "description": "Mixed greens and fresh garden selections tossed in vinaigrette dressing",
              "price": 34.834
            },
            {
              "id": 164438,
              "name": "Rocket Mushroom Salad",
              "description": "Rocket leaves, fresh mushrooms, Parmesan cheese, Balsamic dressing",
              "price": 34.834
            }
          ]
        }
      ]
    }
    componentDidMount(){
      this.setState({ category: this.data.categories });
    }
    deleteCategory (categoryId) {
      const updatedCategory = this.state.category.filter( (item) => {
        return item.id != categoryId
      } )
        this.setState({ category: updatedCategory });
    }
    deleteItem (itemId) {
     this.state.category.forEach((cat)=>{
          cat.items.forEach((item)=>{
          return  item.id == itemId ? cat.items.splice(cat.items.indexOf(item),1) : this.state.category;
          })
             })
      this.setState({ category: this.state.category });
    }
    handleSubmit (event) {
      event.preventDefault();
      let appendCategory = this.state.category;    
      let catId = [...this.state.category].pop() ? [...this.state.category].pop().id + 1 : 1; 
      appendCategory.push({id:catId, name: this.state.categoryName, items:[]});   
      this.setState({ categoryName:'', categoryDesc:'', category: appendCategory });
    }
  
    getCategoryName (event) {
      this.setState({ categoryName: event.target.value });
    }
    getCategoryDescription (event) {
      this.setState({ categoryDesc: event.target.value });
    }
    render() {
      return (
        <div>
             <h3> Add New Category </h3>
              <Form onSubmit={this.handleSubmit.bind(this)}>
              <Form.Group widths='equal'>
                <Form.Field>
                  <label>Category Name</label>
                  <input placeholder='Category Name' onChange={this.getCategoryName.bind(this)} value={this.state.categoryName}  />
                </Form.Field>
                <Form.Field>
                  <label>Description</label>
                  <textarea placeholder="Description"  onChange={this.getCategoryDescription.bind(this)} value={this.state.categoryDesc} />
                </Form.Field>
              </Form.Group>
                <Button type='submit'>Submit</Button>
              </Form>
          <h3 align="center">Menus Data</h3>
          <TableRow
          deleteCategory={this.deleteCategory.bind(this)}
          deleteItem={this.deleteItem.bind(this)}
          categories={this.state.category}  />
        </div>
      );
    }
  }