import React from "react";
import Items from "./Components/items";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsArr: [
        {
          name: "Honda",
          title: "SuperCar",
          year: 2014,
          value: "Honda"
        },
        {
          name: "Yamaha",
          title: "SuperBike",
          year: 2017,
          value: "Yamaha"
        },
        {
          name: "Suzuki",
          title: "SuperBike",
          year: 2011,
          value: "Suzuki"
        },
        {
          name: "Kawasaki",
          title: "SuperBike",
          year: 2021,
          value: "Kawasaki"
        }
      ]
    };
    this.hendler = this.hendler.bind(this);
    this.Counter = this.Counter.bind(this);
  }
  hendler(name, value) {
    this.setState((prev) => ({
      ...prev,
      itemsArr: prev.itemsArr.map((i) => {
        if (i.name === name) {
          return {
            ...i,
            value: value
          };
        }
        return i;
      })
    }));
  }
  Counter(index) {
    this.setState((prevState) => ({
      ...prevState,
      itemsArr: prevState.itemsArr.map((e, i) => {
        if (i === index) {
          return {
            ...e,
            count: e.count + 1
          };
        }
        return e;
      })
    }));
  }
  render() {
    return (
      <div className="App">
        <Items
          list={this.state.itemsArr}
          Counter={this.Counter}
          hendler={this.hendler}
        />
      </div>
    );
  }
}
export default App;
