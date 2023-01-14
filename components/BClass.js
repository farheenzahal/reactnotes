import React,{Component} from "react";

class BClass extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
        <>
        <p>class based component</p>
        <p>{this.props.name}</p>
        </>
        )
    }
}
export default BClass