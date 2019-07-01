import React, {Component} from 'react'

class Blog extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div key={this.props.location.key}>Blog</div>
    )
  }
}

export default Blog