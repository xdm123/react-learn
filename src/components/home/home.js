import React, {Component} from 'react'

class Home extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div key={this.props.location.key}>home</div>
    )
  }
}

export default Home