import React, { Component } from 'react'
import {withRouter} from "react-router-dom"; 
import store from '../../store/index.js'
import {CHANGE_LEFT_NAV_INDEX} from '../../store/actionTypes.js'
import './nav.css'

class Nav extends Component {
  constructor(props){
    super(props);
    this.state = {
      focused:false,
      inputValue:'',
      rightNavIndex:3,
      leftNavIndex:store.getState(),
      leftNavMouseDownStyle:5,
      navleft:['文档','教程','博客','社区'],
      path:['#/doc','#/tutorial','#/blog','#/support']
    }
    this.inputOnFocus = this.inputOnFocus.bind(this);
    this.inputOnBlur = this.inputOnBlur.bind(this);
    this.inputOnChange = this.inputOnChange.bind(this);
    this.clearBtnMousedown = this.clearBtnMousedown.bind(this);
    this.navRightMouseEnter = this.navRightMouseEnter.bind(this);
    this.navRightMouseLeave = this.navRightMouseLeave.bind(this);
    this.leftNavClick = this.leftNavClick.bind(this);
    this.returnHomePage = this.returnHomePage.bind(this);
    this.leftNavMouseDown = this.leftNavMouseDown.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange)
  }
  render(){
    return (
      <div className='head-wrap'>
        <div className='head-middle'>
          <a className='head-logo' onClick={this.returnHomePage}>
            <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K' />
            <span>React</span>
          </a>
          <ul className='head-nav'>
            {
              this.state.navleft.map((item,index) => {
                return (
                  <li
                  key={index}
                  data-index={index}
                  data-path={this.state.path[index]}
                  onClick={this.leftNavClick}
                  onMouseDown={this.leftNavMouseDown}
                  className={this.state.leftNavIndex.leftIndex == index ? 'head-left-nav-style' : '' + this.state.leftNavMouseDownStyle == index ? 'left-nav-down-style' : ''}
                  >
                    {item}
                    {
                      this.state.leftNavIndex.leftIndex == index && (
                        <span></span>
                      )
                    }
                  </li>
                )
              })
            }
          </ul>
          <ul className='head-nav-right'>
            <li 
            data-index='0' 
            className={this.state.rightNavIndex == 0 ? 'head-right-nav-color' : ''}
            onMouseLeave={this.navRightMouseLeave}
            onMouseEnter={this.navRightMouseEnter}>v16.8.6</li>
            <li 
            data-index='1' 
            className={this.state.rightNavIndex == 1 ? 'head-right-nav-color' : ''}
            onMouseLeave={this.navRightMouseLeave}
            onMouseEnter={this.navRightMouseEnter}>多语言</li>
            <li 
            data-index='2' 
            className={this.state.rightNavIndex == 2 ? 'head-right-nav-color' : ''}
            onMouseLeave={this.navRightMouseLeave}
            onMouseEnter={this.navRightMouseEnter}>Github</li>
          </ul>
          <div className={`head-search ${!this.state.focused ? '' : 'head-input-bg'}`}>
            <label htmlFor='head-search-input'>
            <span></span>
            </label>
            <input 
            onFocus={this.inputOnFocus}
            onBlur={this.inputOnBlur}
            value={this.state.inputValue}
            onChange={this.inputOnChange}
            id='head-search-input' 
            placeholder='搜索' 
            className={`head-input ${!this.state.focused ? '' : 'head-input-focus'}`} />
            {
              this.state.focused && (
                  <p  
                  onMouseDown={this.clearBtnMousedown}
                  className='clear-input-btn'></p>
              )
            }
          </div>
        </div>
      </div>
    )
  }
  inputOnFocus(){
    this.setState({
      focused:true
    })
  }
  inputOnBlur(){
    this.setState({
      focused:false
    })
  }
  inputOnChange(e){
    this.setState({
      inputValue:e.target.value
    })
    console.log(this.state.inputValue);
  }
  clearBtnMousedown(e){
    e.preventDefault() //点击时避免输入框失去焦点
    this.setState({
      inputValue:''
    })
  }
  navRightMouseEnter(e){
    console.log(e.target.dataset.index);
    this.setState({
      rightNavIndex:e.target.dataset.index
    })
  }
  navRightMouseLeave(){
    this.setState({
      rightNavIndex:3
    })
  }
  leftNavClick(e){
    const action = {
      type:CHANGE_LEFT_NAV_INDEX,
      value:e.target.dataset.index
    }
    store.dispatch(action)
    // this.setState({
    //   leftNavIndex:e.target.dataset.index
    // });
    // console.log(this.props)
    this.props.history.push(e.target.dataset.path)
  }
  returnHomePage(){
    this.setState({
      leftNavIndex:5,
      leftNavMouseDownStyle:5
    })
    this.props.history.push('/')
  }
  leftNavMouseDown(e){
    this.setState({
      leftNavMouseDownStyle:e.target.dataset.index
    })
  }
  handleStoreChange(){
    this.setState({
      leftNavIndex:store.getState()
    })
  }
  componentDidMount(){
    
  }
}

export default withRouter(Nav)