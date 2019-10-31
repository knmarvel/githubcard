import React, { Component } from "react";
import { Button, Icon, Card } from 'semantic-ui-react';



class App extends Component {
  state = {
    user: {},
    active: false
  };
  handleToggle = event => {
    console.log("clicked!");
    if (this.state.active === true) {
      this.setState({ active: false });
    } else {
      fetch(`http://api.github.com/users/knmarvel`)
        .then(res => res.json())
        .then(user => {
          this.setState({ user, active: true });
        });
    }
  };
  render = () => {
    return (
      <React.Fragment>
    <Button onClick={this.handleToggle}> Toggle User</Button>
    {
      this.state.active === true && (
        <Card
          image={this.state.user.avatar_url}
          header={this.state.user.name}
          description={this.state.user.bio}
          extra = {<a href={this.state.user.followers_url}><Icon name="users"/> {this.state.user.followers} followers</a>}
        />
      )
  
    }
    </React.Fragment>
    )
     
  };
}

export default App;
