import React from "react";
import "react-dates/initialize";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import CalendardIcon from "../../image/calendar.png";
import "react-dates/lib/css/_datepicker.css";
import "./style.css";

const userData = [
  { name: "Fryzjer Jacek", date: "04/12/2019" },
  { name: "Fryzjer Jan", date: "04/12/2019" },
  { name: "Kosmetyczka Andżela", date: "04/12/2019" },
  { name: "Kosmetyczka Daria", date: "04/15/2019" },
  { name: "Masażystka Nicola", date: "04/16/2019" },
  { name: "Masażystka Samanta", date: "04/12/2019" }
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
              <div className="actionArea">Zarezerwuj</div>
              <p><strong>{user.name}</strong> <span>(Dostępność: {user.date})</span></p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Home;
