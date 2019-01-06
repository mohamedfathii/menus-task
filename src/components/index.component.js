import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {category: []};
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
  
      console.log(updatedCategory);
      // this.setState({ category: updatedCategory });
    }
    deleteItem (itemId) {
    let  updatedItem = this.state.category.map( 
      (cat) => {
        return cat.items.filter((item)=>{    
          return item.id != itemId
        });

      });
      console.log(updatedItem);
      // this.setState({ category: updatedItem });
    }
    // handleSubmit (event) {
    //   event.preventDefault();
    //   console.log("form was submitted");
  
    //   var text = this.state.text;
    //   var newItems = this.state.items.push(text);
  
    //   console.log("submitted form has value ", text);
    //   this.setState({ text: '', items: newItems });
    // }
  
    // handleChange (event) {
    //   var text = event.target.value;
    //   console.log(text);
    //   this.setState({ text: text });
    // }
    render() {
      return (
        <div>
             {/* <p> Add Category </p>
              <form onSubmit={this.handleSubmit.bind(this)}>
                <input placeholder="Category Name" onChange={this.handleChange.bind(this)} value={this.state.text} />
                <textarea placeholder="description"  onChange={this.handleChange.bind(this)} value={this.state.text}></textarea>
                <button> Submit </button>
              </form> */}

          <h3 align="center">Menus Data</h3>
          <TableRow
          deleteCategory={this.deleteCategory.bind(this)}
          deleteItem={this.deleteItem.bind(this)}
          categories={this.state.category}  />
        </div>
      );
    }
  }