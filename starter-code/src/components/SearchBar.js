import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            productFilter: ''
        }
    }
    handleChange = (event) => {
        this.setState({
            productFilter: event.target.value
        })
        this.props.onFilter(event.target.value)
    }

    render (){
        return (
            <input type="text" name="search"
            value={this.state.productFilter}
            onChange={this.handleChange} ></input>
        )
    }
}