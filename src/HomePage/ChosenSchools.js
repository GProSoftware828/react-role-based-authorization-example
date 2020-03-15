import React, { Component } from 'react';
import Schools from './Schools';

class ChosenSchools extends Component {
  render() {
    return (
      <div>
        {!this.props.listOfSchoolsChosen.length ? null : (
          <div>
            <h3>Chosen Interests:</h3>
            <small>Click Name to Deselect</small>
            {this.props.listOfSchoolsChosen.map(item => (
              <Schools
                name={item.name}
                endowment={item.endowment}
                population={item.population}
                populations={item.populations}
                semester={item.semester}
                financials={item.financials}
                key={item.name}
                click={() => this.props.deselectSchool(item)}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default ChosenSchools;
