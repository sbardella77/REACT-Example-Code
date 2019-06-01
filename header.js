import React, {Component} from 'react';
import Select from 'react-select'
import './styleHeader.css'


class myHeader extends Component{

state ={
    myCountry :
    [
        {id: 0 , region:'Country', country:'Country'},
        {id: 1 , region:'en', country:'USA'},
        {id: 2 , region:'de', country:'Germany'},
        {id: 3 , region:'fr', country:'France'},
        {id: 4 , region:'it', country:'Italy'},
        {id: 5 , region:'jp', country:'Japan'},
    
    ]

}

render(props){

    return(
            
        <div className="headerMenu navbar" id="myNav">
            
                <select class="form-control" id="idOpt">
                   
                    {this.state.myCountry.map((myVal) => 
                    <option value="myCountryVal">
                        {myVal.country}
                    </option>
                    
                         )
                        
    
                    }
                   
                </select> 
            
            
        </div>
        )
    }
}

    


export default myHeader  