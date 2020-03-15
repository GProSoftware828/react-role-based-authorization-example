import React from 'react';
import axios from '../apis/firebase';
import Schools from './Schools';
import ChosenSchools from './ChosenSchools';
import ls from 'local-storage';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listOfSchools: [],
      listOfSchoolsChosen: ls.get('listOfSchoolsChosen') || [
        {
          endowment: '1,500,000,000',
          name: 'Favorite School',
          population: '1',
          semester: '5,000',
          financials: 'google.com'
        },
        {
          endowment: '1,500,000,000',
          name: 'Favoriter School',
          population: '1',
          semester: '5,000',
          financials: 'google.com'
        }
      ]
    };
    this.deselectSchool = this.deselectSchool.bind(this);
  }

  componentDidMount() {
    axios.get('schoolsListed.json').then(response => {
      const schools = Object.values(response.data);
      this.setState({ listOfSchools: schools });
    });
    ls.set('listOfSchoolsChosen', this.state.listOfSchoolsChosen);
  }

  schoolChosen(school) {
    this.setState({
      listOfSchoolsChosen: [...this.state.listOfSchoolsChosen, school]
    });
    ls.set('listOfSchoolsChosen', this.state.listOfSchoolsChosen);
  }

  deselectSchool(item) {
    const newSelections = this.state.listOfSchoolsChosen.filter(school => {
      return school !== item;
    });
    if (1 === 1) {
      this.setState({
        listOfSchoolsChosen: [...newSelections]
      });
      localStorage.setItem(
        'listOfSchoolsChosen',
        JSON.stringify([...newSelections])
      );
    }
    localStorage.setItem(
      'listOfSchoolsChosen',
      JSON.stringify([...newSelections])
    );
  }

  render() {
    return (
      <div>
        <ChosenSchools
          listOfSchoolsChosen={this.state.listOfSchoolsChosen}
          deselectSchool={this.deselectSchool}
        />
        <div className="jumbotron">
          <div className="row">
            <div className="col-lg-4">List of Schools</div>
            <div>Categories YTBD</div>
          </div>
          <div className="row">
            <div style={{ height: '2rem' }}></div>
          </div>
          <small>Click Name to Select</small>
          <div className="row">
            <div style={{ height: '1rem' }}></div>
          </div>
          <div className="">
            {this.state.listOfSchools.map(item => (
              <Schools
                name={item.name}
                endowment={item.endowment}
                population={item.population}
                populations={item.populations}
                semester={item.semester}
                financials={item.financials}
                click={() => this.schoolChosen(item)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export { HomePage };
