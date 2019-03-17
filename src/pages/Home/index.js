import React from "react";
import "./style.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [
        { name: "fryzjer", date: 666 },
        { name: "kosmetyczka", date: 123 },
        { name: "masaż", date: 544 }
      ],
      filteredData: [],
      isFiltered: false
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
    console.log("Filtered:", this.state.filteredData.length);
    console.log("Initial:", this.state.userData.length);
    console.log("Filtered?:", this.state.isFiltered);
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
          onChange={this.handleKeyPress}
        />
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
