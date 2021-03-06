import React, {useEffect, useState} from "react";



const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status)
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    };
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    };

    return (
        <div>
            {!editMode
                ?
                <div>
                    <h3>Status: </h3><span onDoubleClick={activateEditMode}>  {status || "-----"} </span>
                </div>

                :
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onDoubleClick={deactivateEditMode}
                           value={status}/>
                </div>
            }
        </div>
    )
}

export default ProfileStatus;
