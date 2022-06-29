import React, {Component} from "react";

class ButtonClass extends Component {

    constructor (props){
        super(props);
    }//jika hanya sperti ini tidak perlu di tulis sebetulnya karena cuma manggil super

    render() {//panggil fungsi render
        //cara pemanggilan 2 - > const {text} = this.props; lalu pnaggil {text}
        return <button>{this.props.text}</button>
    }
}

//default props
ButtonClass.defaultProps = {
    text: "Default"
}

export default ButtonClass;