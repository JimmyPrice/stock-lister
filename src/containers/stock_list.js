import  React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class StockList extends Component {

    renderData(stockData){
        
        //TODO Map consts to chart data

        return(
            <tr key ={name}>
                <td> <Chart data = {open} color = 'black' units = '%'/> </td>
                <td> <Chart data = {high} color = 'black' units = '%'/> </td>
                <td> <Chart data = {low} color = 'black' units = '%'/> </td>
                <td> <Chart data = {close} color = 'black' units = '%'/> </td>
                <td> <Chart data = {volume} color = 'black' units = '%'/> </td>
                
            </tr>
        )
    }
    
  render() {
    return (
    <table className = 'table table-hover'>
        <thead>
            <tr>
                <th> Open </th>
                <th> High </th>
                <th> Low </th>
                <th> Close </th>
                <th> Volume </th>
            </tr>
        </thead>

        <tbody>
            
            { this.props.stock.map(this.renderData) }
        </tbody>
    </table>
    )
  }
}

function mapStateToProps({ stock }){
    //state.stock because stock reducer is assigned to the stock key
    return{ stock }
}

export default connect(mapStateToProps)(StockList);
