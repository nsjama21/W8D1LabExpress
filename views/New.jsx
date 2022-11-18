const React = require('react')

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>New Fruit Page</h1>
        <nav>
          <a href="/fruits">Home Page</a>
        </nav>
        {/* NOTE: action will be the route, method will be the HTTP verb */}
        <form action="/fruits" method="POST">
          Name: <input type="text" name="name" /><br/>
          Color: <input type="text" name="color" /><br/>
          Is Ready To Eat: <input type="checkbox" name="readyToEat" /><br/>
          <input type="submit" value="Create Fruit" />
        </form>
      </div>
    )
  }
}

module.exports = New