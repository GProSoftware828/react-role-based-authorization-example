import React from 'react';
import axios from '../apis/firebase';

class AdminPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      endowment: '',
      semester: '',
      population: '',
      financials: ''
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEndowment = this.handleChangeEndowment.bind(this);
    this.handleChangeSemester = this.handleChangeSemester.bind(this);
    this.handleChangePopulation = this.handleChangePopulation.bind(this);
    this.handleChangeFinancials = this.handleChangeFinancials.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {}

  handleChangeName(e) {
    this.setState({ name: e.target.value });
  }
  handleChangeEndowment(e) {
    this.setState({ endowment: e.target.value });
  }
  handleChangeSemester(e) {
    this.setState({ semester: e.target.value });
  }
  handleChangePopulation(e) {
    this.setState({ population: e.target.value });
  }
  handleChangeFinancials(e) {
    this.setState({ financials: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const school = {
      name: this.state.name,
      endowment: this.state.endowment,
      semester: this.state.semester,
      population: this.state.population,
      financials: this.state.financials
    };
    axios.post('schoolsListed.json', school);
    console.log('entered info: ', school);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <div>Education Institution Name:</div>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChangeName}
            />
          </label>
          <label>
            <div>Endowment Size:</div>
            <input
              type="text"
              value={this.state.endowment}
              onChange={this.handleChangeEndowment}
            />
          </label>
          <label>
            <div>Cost Per Semester:</div>
            <input
              type="text"
              value={this.state.semester}
              onChange={this.handleChangeSemester}
            />
          </label>
          <label>
            <div>Student Population:</div>
            <input
              type="text"
              value={this.state.population}
              onChange={this.handleChangePopulation}
            />
          </label>
          <label>
            <div>School Rankings:</div>
            <div>Coming Soon</div>
          </label>
          <label>
            <div>Out of Pocket Expenses and Financial Information:</div>
            <input
              type="text"
              value={this.state.financials}
              onChange={this.handleChangeFinancials}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export { AdminPage };
