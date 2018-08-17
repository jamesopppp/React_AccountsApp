import React, { Component } from 'react';
import Record from './Record';
// import { getJSON } from 'jquery';
import * as RecordsAPI from '../utils/RecordsAPI';
import RecordForm from './RecordForm';

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

  addRecord(record) {
     this.setState({
      error: null,
      isLoaded: true,
      records: [
        ...this.state.records,
        record
      ]
     })
  }

  updateRecord(record, data) {
    const recordIndex = this.state.records.indexOf(record);
    const newRecords = this.state.records.map((item,index) => {
      if(index !== recordIndex) {
        return item;
      }

      return {
        ...item,
        ...data
      };
    });
    this.setState({
      records: newRecords
    })
  }

  deleteRecord(event){
    event.preventDefault();
    RecordsAPI.remove(this.props.record.id).then(
      response => console.log(response.data)
    ).catch(
      error => console.log(error.message)
    )
  }

  render() {
    const { error, isLoaded, records } = this.state;
    let recordsComponent;

    if (error){
      recordsComponent = <div>Error: {error.message}</div>;
    } else if (!isLoaded){
      recordsComponent = <div>Loading...</div>;
    } else {
      recordsComponent = (
          <table className="table table-bordered">
            <thead>
              <tr>
                <td>Date</td>
                <td>Title</td>
                <td>Amount</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {records.map((record)=>{
                <Record 
                  key={record.id}
                  record={record} 
                  handleEditRecord={this.updateRecord.bind(this)}
                  handleDeleteRecord={this.deleteRecord.bind(this)}
                />
              })}
            </tbody>
          </table>
      );
    }
    return(
      <div>
        <h2>Records</h2>
        <RecordForm handleNewRecord={this.addRecord.bind(this)}/>
        {recordsComponent}
      </div>
    );
  }
}

export default Records;
