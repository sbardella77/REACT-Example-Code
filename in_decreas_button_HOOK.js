
function ButtonInc(props) {
  return( 
    <button onClick={props.onClickFunction}>
      +
    </button>
);
}

function ButtonDec(props) {
  return( 
    <button onClick={props.onClickFunction}>
      -
    </button>
);
}



function Display(props){
return(
  <div>{props.message}</div>
  )
}

function App(){
    const [counter,setCounter ] = useState(0)
    const increaseCounter = () => setCounter(counter+1)
    const decreaseCounter = () => setCounter(counter-1)
  return(
  <div>
        <ButtonInc onClickFunction={increaseCounter}/>
        <Display message={counter}/>
        <ButtonDec onClickFunction={decreaseCounter}/>

      
  </div>
  );
}


ReactDOM.render(
<App/>,
  document.getElementById('mountNode'),
);
