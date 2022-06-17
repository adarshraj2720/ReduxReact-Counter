import { connect } from "react-redux";
import { updatestep } from "../store/action";

function Step(props){
    function handleclick(step){
        props.dispatch(updatestep(step))
    }

    return(
        <>
        <button onClick={()=>handleclick(5)}>
            5
        </button>
        <button onClick={()=>handleclick(10)}>
            10
        </button>
        <button onClick={()=>handleclick(15)}>
            15
        </button>
        </>
    )
}

function mapStateToProps(state){
    return{
        step:state.step
    }
}

export default connect(mapStateToProps)(Step)