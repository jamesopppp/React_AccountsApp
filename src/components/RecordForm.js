import React, { Component } from 'react';

export default class RecordForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            date: "",
            title: "",
            amount: ""
        }
    }

    valid() {
        return this.state.date && this.state.title && this.state.amount
    }

    handleChange(event) {
        let name,obj;
        name = event.target.name;
        this.setState((
            obj = {},
            obj["" + name] = event.target.value,
            obj
        ))
    }

    render() {
        return (
            <form className = "form-inline">
                <div className = "form-group">
                    <input onChange={this.handleChange.bind(this)} type="text" className="form-control" placeholder="Date" name="date" value={this.state.date}/>
                </div>
                <div className = "form-group">
                    <input onChange={this.handleChange.bind(this)} type="text" className="form-control" placeholder="Title" name="title" value={this.state.title}/>
                </div>
                <div className = "form-group">
                    <input onChange={this.handleChange.bind(this)} type="text" className="form-control" placeholder="Amount" name="amount" value={this.state.amount}/>
                </div>
                <button disabled={!this.valid()} type="submit" className="btn btn-primary">Create Record</button>
            </form>
        );
    }
}
