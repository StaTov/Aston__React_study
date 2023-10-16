import { Component } from "react";
import ShowValue from "./components/ShowValue";


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }

    this.showValue = this.showValue.bind(this)
  }

  showValue() {
    const data = this.input.value
    this.setState(prevState => ({ value: data }))
  }

  componentDidMount() {
    console.log('componentDidMount--')
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate--')
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(' getDerivedStateFromProps--')
    return null
  }

  static getDerivedStateFromError(error) {
    console.log(`${error} getDerivedStateFromError--`)
  }

  componentDidCatch(errorStr, info) {
    console.log('componentDidCatch--')
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate--')
    return null
  }

  componentWillUnmount() {
    console.log('componentWillUnmount--')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate--')
    return true
  }

  render() {
    console.log('render--')
    return (
      <>
        <div>
          <input ref={(input => this.input = input)} />
          <button onClick={this.showValue}>show_value</button>
        </div>
        <ShowValue value={this.state.value} />
      </>
    )
  }
}

export default App;
