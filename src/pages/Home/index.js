import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Icon from './icon';
import {Form, Input, FormGroup, Container, Label} from 'reactstrap';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {SingleDatePicker} from 'react-dates';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.userData = [
      { name: "fryzjer", date: 666 },
      { name: "kosmetyczka", date: 123 },
      { name: "masaż", date: 544 }
    ]

    this.state = {
      userData : this.userData,
      filteredData: [],
      isFiltered: false,
      date: null,
      focused: null
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(event) {
    const { value } = event.target;
    const update = this.state.userData.filter(userData =>
      userData.name.includes(value)
    );
    this.setState({ filteredData: update, isFiltered: true });
    if (value === "") {
      this.setState({ isFiltered: false });
    }
  }

  render() {
    let renderData = "";
    if (this.state.filteredData.length !== 0) {
      renderData = this.state.filteredData;
    } else {
      if (!this.state.isFiltered) {
        renderData = this.state.userData;
      } else {
        renderData = [];
      }
    }

    return (
      <div>
        <input
          type="text"
          id="searchCharacters"
          onChange={this.handleKeyPress} />
          <Form>
            <FormGroup>
            <SingleDatePicker
                          // showClearDate={true}
                          customInputIcon={
                            <svg className="icon icon-small">
                              <Icon
                                icon="ICON_CALENDER"
                                className="icon icon-large"
                              />
                            </svg>
                          }
                          inputIconPosition="after"
                          small={true}
                          block={false}
                          numberOfMonths={1}
                          date={this.state.date}
                          onDateChange={date => this.handleDateChange(date)}
                          focused={this.state.focused}
                          onFocusChange={({ focused }) =>
                            this.setState({ focused })
                          }
                          openDirection="up"
                          hideKeyboardShortcutsPanel={true}
                        />
            </FormGroup>
          </Form>

        <ul>
          {renderData.map(user => (
            <li key={user.name}>
              <span>{user.name}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Home;
 