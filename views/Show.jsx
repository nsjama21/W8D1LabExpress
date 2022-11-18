const React = require("react");

class Show extends React.Component {
  render() {
    const {name, color, readyToEat} = this.props.fruit
    return (
      <div>
        <h1>Show Page</h1>

        <div>
          <p>The {name} is {color}.</p>
          {readyToEat? "It is ready to eat!" : "It is not ready to eat... dont touch that"}
        </div> 
      </div>
    )
  }
}
// We can write javascript code within the curly brackets

module.exports = Show