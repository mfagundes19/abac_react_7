import React from "react";

class FormLabel extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return  (
            <div>
                <label for={this.props.name}>{this.props.text}:</label>
            </div>
        );
    }
}

export default FormLabel;