import React, { Component } from 'react';
import Record from './Record';

class Records extends Component {
  constructor(){
    super();
    this.state = {
      records: [
        {
          "id":1,
          "date":"2018-01-09",
          "title":"收入",
          "amount":20
        },
        {
          "id":2,
          "date":"2018-01-03",
          "title":"App开发",
          "amount":200
        }
      ]
    }
  }
  render() {
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
            {this.state.records.map((record,i)=><Record record={record}/>)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Records;
