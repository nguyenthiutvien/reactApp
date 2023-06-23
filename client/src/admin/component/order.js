import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class Order extends React.Component {
  state = {
    bills: [],
    userEmail: '',
    totalAmount: '',
    purchaseDate: '',
    id:'',
    
  };

  componentDidMount() {
    this.fetchOrders();
  }

  fetchOrders = () => {
    axios
      .get('https://645de9688d08100293f1eb54.mockapi.io/bill')
      .then(response => {
        this.setState({ bills: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  
  

  render() {
    return (
      <div className="container">
        <h1>Bill Management</h1>
        <div className="order-list">
          <h2>Bill</h2>
          <table>
            <thead>
              <tr>
              <th>ID</th>
                <th>Customer Email</th>
                <th>Tổng tiền</th>
                <th>Ngày đặt</th>
              
               
              </tr>
            </thead>
            <tbody>
              {this.state.bills.map(bill => (
                <tr key={bill.id}>
                  <td>{bill.id}</td>
                  <td>{bill.userEmail}</td>
                  <td>{bill.totalAmount}</td>
                  <td>{bill.purchaseDate}</td>
                  
                 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}


export default Order