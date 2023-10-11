import { Component } from "react";

class ShowValue extends Component {
    render() {
        return (
            <>
                <div>{this.props.value}</div>
            </>
        )
    }
}

export default ShowValue;