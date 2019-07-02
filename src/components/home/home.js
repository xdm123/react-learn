import React, {Component} from 'react'
import store from '../../store/'
import { CHANGE_LEFT_NAV_INDEX } from '../../store/actionTypes.js'
import './home.css'


class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      btnindex:3
    }
    this.quickStart = this.quickStart.bind(this);
    this.quicklearn = this.quicklearn.bind(this);
    this.bannerBtnEnter = this.bannerBtnEnter.bind(this);
    this.bannerBtnLeave = this.bannerBtnLeave.bind(this);
  }
  render(){
    return (
      <div className='home-wrap'>
        <div className='home-banner'>
          <h1 className='home-banner-title'>React</h1>
          <p className='home-banner-p'>用于构建用户界面的 JavaScript 库</p>  
          <div className='home-banner-btn'>
            <p 
            className={`home-banner-left ${this.state.btnindex == 0 ? 'home-left-btn-bg' : ''} `}
            data-btnindex='0'
            onMouseEnter={this.bannerBtnEnter}
            onMouseLeave={this.bannerBtnLeave}
            onClick={this.quickStart}>快速开始</p>
            <p 
            className={`home-banner-right ${this.state.btnindex == 1 ? 'home-right-btn-bg' : ''}`}
            data-btnindex='1'
            onMouseEnter={this.bannerBtnEnter} 
            onMouseLeave={this.bannerBtnLeave}
            onClick={this.quicklearn}>入门教程></p>
          </div>
        </div>
        <ul className='home-info'> 
          <li>
            <p className='home-info-title'>声明式</p>
            <p className='home-info-item'>
              React 使创建交互式 UI 变得轻而易举。为你应用的每一个状态设计简洁的视图，当数据改变时 React 能有效地更新并正确地渲染组件。
            </p>
            <p className='home-info-item'>以声明式编写 UI，可以让你的代码更加可靠，且方便调试。</p>
          </li>
          <li>
            <p className='home-info-title'>组件化</p>
            <p className='home-info-item'>创建拥有各自状态的组件，再由这些组件构成更加复杂的 UI。</p>
            <p className='home-info-item'>组件逻辑使用 JavaScript 编写而非模版，因此你可以轻松地在应用中传递数据，并使得状态与 DOM 分离。</p>
          </li>
          <li>
            <p className='home-info-title'>一次学习&nbsp;随处编写</p>
            <p className='home-info-item'>无论你现在正在使用什么技术栈，你都可以随时引入 React 来开发新特性，而不需要重写现有代码。</p>
            <p className='home-info-item'>React 还可以使用 Node 进行服务器渲染，或使用 <a target='_blank' href='https://facebook.github.io/react-native/'>React Native</a> 开发原生移动应用。</p>
          </li>
        </ul>
      </div>
    )
  }
  quickStart(){
    const action = {
      type:CHANGE_LEFT_NAV_INDEX,
      value:0
    }
    store.dispatch(action);
    this.props.history.push('/doc')
  }
  quicklearn(){
    const action = {
      type:CHANGE_LEFT_NAV_INDEX,
      value:1
    }
    store.dispatch(action);
    this.props.history.push('/tutorial')
  }
  bannerBtnEnter(e){
    console.log(e.target.dataset.btnindex)
    this.setState({
      btnindex:e.target.dataset.btnindex
    })
  }
  bannerBtnLeave(){
    this.setState({
      btnindex:3
    })
  }
}

export default Home