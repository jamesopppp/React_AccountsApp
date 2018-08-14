import React, { Component } from 'react';
import Record from './Record';
// import { getJSON } from 'jquery';
import * as RecordsAPI from '../utils/RecordsAPI';

class Records extends Component {
  constructor(){
    super();
    this.state = {
      error: null,
      isLoaded: false,
      records: []
    }
  }

  componentDidMount(){
    RecordsAPI.getAll().then(
      response => this.setState({
        records: response.data,
        isLoaded: true
      })
    ).catch(
      error => this.setState({
        error,
        isLoaded: true
      })
    )
  }


  render() {
    const { error, isLoaded, records } = this.state;

    if (error){
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded){
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <h2>Records</h2>
          <table className="table table-bordered">
            <thead>
              <tr>
                <td>Date</td>
                <td>Title</td>
                <td>Amount</td>
              </tr>
            </thead>
            <tbody>
              {records.map((record)=><Record key={record.id} {...record}/>)}
            </tbody>
          </table>
        </div>
      )
    }
  }
}

export default Records;
