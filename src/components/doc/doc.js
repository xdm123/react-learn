import React, {Component} from 'react'

class Doc extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div key={this.props.location.key}>Doc</div>
    )
  }
}

export default Doc