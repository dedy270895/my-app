import React from "react";

//nama komponen harus PAscalCase
const ButtonFunction = ({warna,tulisan = "Standart"}) => {
    //destructering bisa diatas bisa dibawah
    //const {warna, tulisan} = props;//props bisa langsung dipake tapi manggilnya props.datanya Ex. props.warna
    return  <button style={{color : warna}}>
        {tulisan}
    </button>
}

export default ButtonFunction;