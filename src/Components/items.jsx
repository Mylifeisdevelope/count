import React from "react";
import itemsCss from "./itemsCss.module.css";

class Items extends React.Component {
  constructor(props) {
      super(props);
      this.itemMap = this.itemMap.bind(this);
      this.handlerValue = this.handlerValue.bind(this);
      this.handlerCount = this.handlerCount.bind(this)
  }

  handlerValue(e) {
      console.log('e.target.value: ', e.target.value)
      this.props.hendler(e.target.name, e.target.value);
  };
  handlerCount(i) {
     this.props.Counter(i)
  }
  itemMap() {
      return this.props.list.map((elem, index) => {
          return (
              <div key={index} className={itemsCss.block}>
                  <h1 className={itemsCss.title}>{elem.value}</h1>
                  <p className={itemsCss.year}>{elem.year}</p>
                  <span className={itemsCss.name}>{elem.title}</span>
                  <div className={itemsCss.form}>
                      <button name={elem.count} onClick={() => this.handlerCount(index)} className={itemsCss.button}>Click</button>
                      <input
                          name={elem.name}
                          onChange={this.handlerValue}
                          type="text"
                          value={elem.value}
                      />
                      <span>{elem.count}</span>
                  </div>
              </div>
          );
      });
  }

  render() {
      return <div className={itemsCss.items}>{this.itemMap()}</div>;
  }
}

export default Items;
