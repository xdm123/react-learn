import React, {Component} from 'react'

class Support extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div key={this.props.location.key}>Support</div>
    )
  }
}

export default Support