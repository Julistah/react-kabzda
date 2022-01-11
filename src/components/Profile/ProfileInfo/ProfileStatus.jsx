import React from "react";
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }

   toggleEditMode() {
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
                        <span onDoubleClick={ this.toggleEditMode.bind(this) }> {this.props.status} </span>
                    </div>

                    :
                    <div>
                        <input autoFocus={true} onBlur={ this.toggleEditMode.bind(this) } value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;
