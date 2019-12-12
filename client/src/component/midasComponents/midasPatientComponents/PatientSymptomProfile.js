import React,{Fragment} from 'react';
import './styles/patientSymptomProfile.scss'

const PatientSymptomProfile = () => {
    return (
        <Fragment>
            <form  name="toggle_boxes">
          <h2>Symptom parameter 1</h2>
          
          <div class="flavor">
            <input type="radio" id="radio_vanilla" name="flavor" value="vanilla" />
            <label for="radio_vanilla" class="option11">Very Good</label>
            
            <input type="radio" id="radio_chocolate" name="flavor" value="chocolate" />
            <label for="radio_chocolate" class="option12">Okay</label>
            
            <input type="radio" id="radio_strawberry" name="flavor" value="strawberry" />
            <label for="radio_strawberry" class="option13">Very bad</label>
          </div>
          
          <h2>Symptom parameter 2</h2>
          <div class="toppings">
            <input type="radio" id="check_caramel" name="toppings" value="caramel" />
            <label for="check_caramel" class="option21">Very Good</label>
            
            <input type="radio" id="check_coconut" name="toppings" value="coconut" />
            <label for="check_coconut" class="option22">Okay</label>
            
            <input type="radio" id="check_sprinkles" name="toppings" value="sprinkles" />
            <label for="check_sprinkles" class="option23">Very bad</label>
          </div>
          
            <h2>Symptom parameter 3</h2>
          <div class="toppings1">
            <input type="radio" id="check_caramel1" name="toppings1" value="caramel" />
            <label for="check_caramel1" class="option31">Very Good</label>
            
            <input type="radio" id="check_coconut1" name="toppings1" value="coconut" />
            <label for="check_coconut1" class="option32">Okay</label>
            
            <input type="radio" id="check_sprinkles1" name="toppings1" value="sprinkles" />
            <label for="check_sprinkles1" class="option33">Very bad</label>
          </div>
          
          <h2>Symptom parameter 4</h2>
          <div class="toppings2">
            <input type="radio" id="check_caramel2" name="toppings2" value="caramel" />
            <label for="check_caramel2" class="option41">Very Good</label>
            
            <input type="radio" id="check_coconut2" name="toppings2" value="coconut" />
            <label for="check_coconut2" class="option42">Okay</label>
            
            <input type="radio" id="check_sprinkles2" name="toppings2" value="sprinkles" />
            <label for="check_sprinkles2" class="option43">Very bad</label>
          </div>
          
          
        </form>

        </Fragment>
    )
}

export default PatientSymptomProfile
