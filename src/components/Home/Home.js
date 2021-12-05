import React, {useState} from "react";

const HomeDisplay = (props) =>{

    const [home, setHome] = useState("")


    const changeHandler = (event) =>{
        setHome(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        props.postComment(home)
    }

    return(
        <form> 
            <input type ="search" id="form1" ClassName="form-controle" onChange = {changeHandler} value={comment} />
            <label ClassName ="form-label" htmlFor="form1"></label> 
            <button type= "submit" onClick= {submitHandler}> Submit</button> 
        </form>
        
    )
}  


export default HomeDisplay;