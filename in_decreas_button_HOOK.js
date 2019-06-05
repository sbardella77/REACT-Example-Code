const txtStyle ={
  width:'30px',
  textAlign:'center'
}
function ButtonInc(props) {
  return( 
    <button onClick={props.onClickFunction} style={txtStyle}>
      +
    </button>
);
}

function ButtonDec(props) {
  return( 
    <button onClick={props.onClickFunction} style={txtStyle}>
      -
    </button>
);
}



function Display(props){
return(
  <input type="text" value={props.message} style={txtStyle} ></input>
  )
}

function App(){
    const [counter,setCounter ] = useState(0)
    const increaseCounter = () => setCounter(counter+1)
    const decreaseCounter = () => {
      if(counter > 0 ){
      setCounter(counter-1)
      }}
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
