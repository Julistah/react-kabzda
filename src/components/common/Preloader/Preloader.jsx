import React from "react";
import preloader from "../../../assets/gif/loading.gif"

let PreLoader = () => {
    return <div style={{backgroundColor: 'white'}}>
        <img src={preloader} alt={'loading'}/>
    </div>
}

export default PreLoader;