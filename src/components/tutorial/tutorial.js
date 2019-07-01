import React, {Component} from 'react'

class Tutorial extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div key={this.props.location.key}>Tutorial</div>
    )
  }
}

export default Tutorial