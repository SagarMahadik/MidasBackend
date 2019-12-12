import React,{Fragment} from 'react';
import './styles/patientPainProfile.scss'

const PatientPainProfile = ({values,onChange,nextStep, previousStep}) => {
    const {
      painParameter1,
      painParameter2,
      painParameter3,
      painParameter4
    } = values;
    return (
      
        <Fragment>
             <form  name="toggle_boxes">
          <h2>Pain parameter 1</h2>
          
          <div class="flavor">
            <input type="radio"
              id="radio_vanilla" 
              name="painParameter1" 
              value = "0"
              onChange={onChange('painParameter1')}
              checked= {painParameter1==="0"}/>
            <label for="radio_vanilla" class="option11">Very Good</label>
            
            <input 
              type="radio" 
              id="radio_chocolate" 
              name="painParameter1" 
              value="50"
              onChange={onChange('painParameter1')}
              checked= {painParameter1==="50"} />
            <label for="radio_chocolate" class="option12">Okay</label>
            
            <input 
              type="radio" 
              id="radio_strawberry" 
              name="painParameter1" 
              value="100"
              onChange={onChange('painParameter1')}
              checked= {painParameter1==="100"} />
            <label for="radio_strawberry" class="option13">Very bad</label>
          </div>          
          <h2>pain parameter 2</h2>
          <div class="toppings">
            <input 
              type="radio" 
              id="check_caramel" 
              name="painParameter2" 
              value="0"
              onChange={onChange('painParameter2')}
              checked= {painParameter2==="0"} />
            <label for="check_caramel" class="option21">Very Good</label>
            
            <input 
              type="radio" 
              id="check_coconut" 
              name="painParameter2" 
              value="50"
              onChange={onChange('painParameter2')}
              checked= {painParameter2==="50"} />
            <label for="check_coconut" class="option22">Okay</label>
            
            <input 
              type="radio" 
              id="check_sprinkles" 
              name="painParameter2" 
              value="100"
              onChange={onChange('painParameter2')}
              checked= {painParameter2==="100"} />
            <label for="check_sprinkles" class="option23">Very bad</label>
          </div>
          
            <h2>pain parameter 3</h2>
          <div class="toppings1">
            <input 
              type="radio" 
              id="check_caramel1" 
              name="painParameter3" 
              value="0"
              onChange={onChange('painParameter3')}
              checked= {painParameter3==="0"} />
            <label for="check_caramel1" class="option31">Very Good</label>
            
            <input 
              type="radio" 
              id="check_coconut1" 
              name="painParameter3" 
              value="50"
              onChange={onChange('painParameter3')}
              checked= {painParameter3==="50"} />
            <label for="check_coconut1" class="option32">Okay</label>
            
            <input 
              type="radio" 
              id="check_sprinkles1" 
              name="painParameter3" 
              value="100"
              onChange={onChange('painParameter3')}
              checked= {painParameter3==="100"}/>
            <label for="check_sprinkles1" class="option33">Very bad</label>
          </div>
          
          <h2>pain parameter 4</h2>
          <div class="toppings2">
            <input 
              type="radio" 
              id="check_caramel2" 
              name="painParamter4" 
              value="0"              
              onChange={onChange('painParameter4')}
              checked= {painParameter4==="0"} />
            <label for="check_caramel2" class="option41">Very Good</label>
            
            <input 
              type="radio" 
              id="check_coconut2" 
              name="painParamter4" 
              value="50"
              onChange={onChange('painParameter4')}
              checked= {painParameter4==="50"}/>
            <label for="check_coconut2" class="option42">Okay</label>
            
            <input 
              type="radio" 
              id="check_sprinkles2" 
              name="painParamter4" 
              value="100"
              onChange={onChange('painParameter4')}
              checked= {painParameter4==="100"} />
            <label for="check_sprinkles2" class="option43">Very bad</label>
          </div>
          <div class="submit">
            <input 
              type="submit" 
              value="Next"
              onClick={nextStep}
            />
          </div>
          <div class="submit">
            <input 
              type="submit" 
              value="Previous"
              onClick={previousStep}
            />
          </div>          
          
        </form>

        </Fragment>
       
        
    )
}

export default PatientPainProfile
