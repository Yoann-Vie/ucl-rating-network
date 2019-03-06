import React from "react";

const ToggleButton = (props) => {
        return <button style={{
            backgroundColor: "red",
            height: 50,
            width: '25%'
        }} onClick={props.onClick}>ToggleButton currently : {props.theme}</button>
}

export default ToggleButton;