import React from "react";
import "react-dates/initialize";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

const userData = [
  { name: "fryzjer", date: '03/23/2019' },
  { name: "fryzjer2", date:  '03/24/2019' },
  { name: "fryzjer3", date:  '03/22/2019' },
  { name: "kosmetyczka", date:  '03/23/2019' },
  { name: "masaż", date:  '03/23/2019' }
];

class Home extends React.Component {
  state = {
    query: "",
    queryDate: "",
    focused: false,
    date: moment()
  };

  handleInputChange = e => {
    this.setState({
      query: e.target.value
    });
  };

  render() {
    const filteredData = userData.filter(
      user =>
        user.name.includes(this.state.query) &&
        user.date.includes(this.state.date.format("L").toString())
    );

    console.log(this.state.date.format("L").toString());
    console.log(userData[0].date);

    return (
      <div className="App">
        <input onChange={this.handleInputChange} />
        <SingleDatePicker
          numberOfMonths={1}
          onDateChange={date => this.setState({ date })}
          onFocusChange={({ focused }) => this.setState({ focused })}
          focused={this.state.focused}
          date={this.state.date}
        />

        <ul>
          {filteredData.map(user => (
            <li key={user.name}>
              <span>{user.name}</span>
            </li>
          ))}
          {null}
          {filteredData.length === 0 && <div>Nie znaleziono rekordów!</div>}
        </ul>
      </div>
    );
  }
}
export default Home;
