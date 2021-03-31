import React, { Component } from 'react';
import { Table } from 'reactstrap';
import {Helmet} from 'react-helmet';
import backg from "../book.jpg";

class Books extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="container">
         <h1 style={{color: "red"}}>Hello Student!</h1>
         <Helmet>
                <style>{'body { background-color: skyblue; }'}</style>
            </Helmet>
      <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Book Name</th>
          <th>Author</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </Table>
    
    <div 
       style={{
              background: `url(${backg})`,
            }}>
        </div>
    </div>
     );
  }
}
 
export default Books;