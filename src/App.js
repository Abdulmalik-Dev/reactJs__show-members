import React, { Component } from "react";
// Members Data
import TeamInfo from "./TeamInfo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      // Members Data
      teamMembers: [...TeamInfo],
      // To Add a Members One By One
      newArray: [],
      // The Members Appeared
      numberOfMembers: 1,
    };

    this.Cards = this.Cards.bind(this);
    this.showMemeber = this.showMemeber.bind(this);
  }
  // The Cards
  Cards() {
    // To Appear All Members
    const members = this.state.newArray.map((ele) => {
      return (
        <div
          style={{
            border: ele.wesite ? "3px solid yellow" : "3px solid red",
          }}
          className="card p-3 m-2"
          key={ele.id}
        >
          <img src={ele.img} className="card-img-top" alt="" />
          <div className="card-body">
            <div className="card-text">
              <p>Name: {ele.name}</p>
              <p>Job Name: {ele.jobName}</p>
              <p>Email: {ele.email}</p>
              <p>{ele.wesite}</p>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, 50%)",
        }}
      >
        {members}
      </div>
    );
  }

  // To Appear The Members One By One
  showMemeber() {
    // Check If The Members Number Did Appear To The Last
    if (this.state.numberOfMembers <= this.state.teamMembers.length) {
      // Change The States
      this.setState({
        numberOfMembers: this.state.numberOfMembers + 1,
        newArray: this.state.teamMembers.slice(0, this.state.numberOfMembers),
      });
    }
    // Change Button Style When Appear All Members
    else {
      document.querySelector(
        ".btn"
      ).style.cssText = `background-color: lightgray;
        cursor: not-allowed;`;
    }
  }

  render() {
    // The Cards
    let cards = this.Cards();
    return (
      <div className="container">
        <p className="bg-dark text-white pr-3 pl-3 pt-2 pb-2 text-center fs-1">
          My Team
        </p>
        {/* The Button  */}
        <button className="btn btn-warning w-100" onClick={this.showMemeber}>
          Next Member
        </button>
        {/* All The Members Will Appear Her  */}
        <div
          style={{
            width: "100%",
          }}
        >
          {cards}
        </div>
      </div>
    );
  }
}

export default App;
