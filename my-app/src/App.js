import { Component } from "react";
import MyList from "./components/MyList";


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      isVisible: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleFocus() {
    this.ref.focus()
  }

  handleChange({ target }) {

    this.setState({ value: target.value })
    target.value.split(' ').includes('реакт')
      ? this.setState({ isVisible: true })
      : this.setState({ isVisible: false })
  }

  handleSubmit(e) {
    e.preventDefault()
    alert(`данные: "${this.state.value}" отправлены на сервер`)
    this.setState({value: ''})
  }
  componentDidMount() {
    console.log('componentDidMount--')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate--')
  }

  static getDerivedStateFromPros() {
    console.log(' getDerivedStateFromProps--')
  }

  static getDerivedStateFromError() {
    console.log(' getDerivedStateFromError--')
  }

  componentDidCatch() {
    console.log('componentDidCatch--')
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate--')
    return null
  }

  componentWillUnmount() {
    console.log('componentWillUnmount--')
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate--')
    return true
  }

  render() {
    console.log('render--')
    return (
      <>
        <div>
          <input
            ref={input => this.ref = input}
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button
            disabled={this.state.isVisible}
            onClick={this.handleSubmit}>
            submit
          </button>
          <button
            onClick={this.handleFocus}>
            onFocus
          </button>
        </div>
        <MyList />
      </>
    )
  }
}

export default App;
