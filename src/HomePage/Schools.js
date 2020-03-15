import React, { Component } from 'react';

export class Schools extends Component {
  render() {
    return (
      <table className="table table-hover">
        <tbody>
          <tr>
            <td>
              <div
                onClick={this.props.click}
                style={{
                  width: '100px',
                  borderRight: '50px',
                  cursor: 'pointer'
                }}
              >
                {this.props.name}
              </div>
            </td>
            <td>
              <div>Endowment Size</div>
              {this.props.endowment}
            </td>
            <td>
              <div>Student Total</div>
              {this.props.population}
            </td>
            <td>
              <div>Semester Cost</div>
              {this.props.semester}
            </td>
            <td>
              <div style={{ width: '100px' }}>
                <div>Further Information</div>
                {this.props.financials}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Schools;
