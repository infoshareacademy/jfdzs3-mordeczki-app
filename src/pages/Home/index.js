import React from "react";
import "react-dates/initialize";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import { Link } from 'react-router-dom';
import CalendardIcon from "../../image/calendar.png";
import "react-dates/lib/css/_datepicker.css";
import "./style.css";

const userData = [
  { id: "2", name: "Fryzjer Jacek", dateFrom: "06/10/2019", dateTo: "06/20/2019" },
  { id: "3", name: "Fryzjer Jan", dateFrom: "06/10/2019", dateTo: "06/20/2019" },
  { id: "4", name: "Kosmetyczka Andżela", dateFrom: "06/10/2019", dateTo: "06/20/2019" },
  { id: "5", name: "Kosmetyczka Daria", dateFrom: "06/10/2019", dateTo: "06/20/2019" },
  { id: "6", name: "Masażystka Nicola", dateFrom: "06/10/2019", dateTo: "06/20/2019" },
  { id: "7", name: "Masażystka Samanta", dateFrom: "06/10/2019", dateTo: "06/20/2019" }
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
      query: e.target.value.toString().toLowerCase()
    });
  };

  render() {
    const filteredData = userData.filter(
      user =>
        user.name.includes(this.state.query).toString().toLowerCase() &&
        user.dateFrom <= this.state.date.format("L").toString() &&
        user.dateTo >= this.state.date.format("L").toString() 
        
    );

    console.log(this.state.date.format("L").toString());
    console.log(userData[0].date);

    return (
      <div className="HomeContainer">
        <div className="profileUserMenu">
          <p>Witaj: Login</p>
          <p>EDYTUJ</p>
        </div>
        <div className="searchAvatar">
          <img src={CalendardIcon} />
        </div>

        <div className="searcherHolder">
          <input
            className="searcher"
            onChange={this.handleInputChange}
            placeholder="Szukaj usługi..."
          />
          <SingleDatePicker
            numberOfMonths={1}
            onDateChange={date => this.setState({ date })}
            onFocusChange={({ focused }) => this.setState({ focused })}
            focused={this.state.focused}
            date={this.state.date}
          />
          <div className="iconArea">
            <img src={CalendardIcon} />
          </div>
        </div>

        <div className="recordsHolder">
          {filteredData.length === 0 && (
            <h3>
              Nie znaleziono usługodawcy.
              <br />
              Spróbuj w innym terminie...
            </h3>
          )}
          {filteredData.length !== 0 && this.state.query === "" && (
            <h3>Promowane w Twojej okolicy</h3>
          )}
        </div>
        <div className="records">
          {filteredData.map(user => (
            <div key={user.name} className="userRecord">
              <div className="iconArea">
                <img src={CalendardIcon} />
              </div>
              <Link className="actionArea" to={`/profile_provider/${user.id}/`}>Szczegóły</Link>
              <p><strong>{user.name}</strong> <span>(Dostępność: {user.dateFrom}-{user.dateTo})</span></p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Home;
