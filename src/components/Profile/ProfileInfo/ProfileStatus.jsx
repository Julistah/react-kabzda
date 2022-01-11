import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }

   toggleEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ?
                    <div>
                        <span onDoubleClick={ this.toggleEditMode }> {this.props.status} </span>
                    </div>

                    :
                    <div>
                        <input autoFocus={true} onBlur={ this.toggleEditMode } value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;
