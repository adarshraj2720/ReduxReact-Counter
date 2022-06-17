import {connect} from 'react-redux'
import {increment,decrement,reset} from '../store/action'
import Step from './step'

function App(props){
    return(
        <>
        <h1>Counter</h1>
        <h2>{props.count}</h2>
        <button onClick={() =>props.dispatch(increment())}>
            Increment+
        </button>
        <button onClick={() =>props.dispatch(decrement())}>
            decrement-
        </button>
        <button onClick={() =>props.dispatch(reset())}>
            reset
        </button>
        <Step/>
        </>
    )
}

function Count(state){
    return{
        count:state.value,
    }
}


export default connect(Count)(App)