import React,{Fragment} from 'react';
import { Link, Redirect } from 'react-router-dom';
import './styles/patientSymptomProfile.scss';
import axios from 'axios';

const PatientSymptomProfile = ({onChange,nextStep,previousStep,values}) => {

  const {
    name,
    mobile,
    gender,
    age,
    painParameter1,
    painParameter2,
    painParameter3,
    painParameter4,
    symptomParameter1,
    symptomParameter2,
    symptomParameter3,
    symptomParameter4
  } = values;

  const onSubmit =async e => {

    e.preventDefault();

    const newPatient = {
      name,
      mobile,
      gender,
      age,
      painParameter1:painParameter1*1,
      painParameter2:painParameter2*1,
      painParameter3:painParameter3*1,
      painParameter4:painParameter4*1,
      symptomParameter1:symptomParameter1*1,
      symptomParameter2:symptomParameter2*1,
      symptomParameter3:symptomParameter3*1,
      symptomParameter4:symptomParameter4*1

    }
    
    console.log(newPatient);
    console.log(JSON.stringify(newPatient));
    try {
      const config ={
        headers:{'Content-Type':'application/json'}
      }
      const body = JSON.stringify(newPatient);

      const res = await axios.post('/api/v1/midasPatients', body, config);
      console.log(res);
      console.log(res.status);

      nextStep();
      
    } catch (error) {
      console.log(error)
    }

  }

    return (
        <Fragment>
            <form  name="toggle_boxes">
          <h2>symptom parameter 1</h2>
          
          <div class="flavor">
            <input type="radio"
              id="radio_vanilla" 
              name="symptomParameter1" 
              value = "0"
              onChange={onChange('symptomParameter1')}
              checked= {symptomParameter1==="0"}/>
            <label for="radio_vanilla" class="option11">Very Good</label>
            
            <input 
              type="radio" 
              id="radio_chocolate" 
              name="symptomParameter1" 
              value="50"
              onChange={onChange('symptomParameter1')}
              checked= {symptomParameter1==="50"} />
            <label for="radio_chocolate" class="option12">Okay</label>
            
            <input 
              type="radio" 
              id="radio_strawberry" 
              name="symptomParameter1" 
              value="100"
              onChange={onChange('symptomParameter1')}
              checked= {symptomParameter1==="100"} />
            <label for="radio_strawberry" class="option13">Very bad</label>
          </div>          
          <h2>symptom parameter 2</h2>
          <div class="toppings">
            <input 
              type="radio" 
              id="check_caramel" 
              name="symptomParameter2" 
              value="0"
              onChange={onChange('symptomParameter2')}
              checked= {symptomParameter2==="0"} />
            <label for="check_caramel" class="option21">Very Good</label>
            
            <input 
              type="radio" 
              id="check_coconut" 
              name="symptomParameter2" 
              value="50"
              onChange={onChange('symptomParameter2')}
              checked= {symptomParameter2==="50"} />
            <label for="check_coconut" class="option22">Okay</label>
            
            <input 
              type="radio" 
              id="check_sprinkles" 
              name="symptomParameter2" 
              value="100"
              onChange={onChange('symptomParameter2')}
              checked= {symptomParameter2==="100"} />
            <label for="check_sprinkles" class="option23">Very bad</label>
          </div>
          
            <h2>symptom parameter 3</h2>
          <div class="toppings1">
            <input 
              type="radio" 
              id="check_caramel1" 
              name="symptomParameter3" 
              value="0"
              onChange={onChange('symptomParameter3')}
              checked= {symptomParameter3==="0"} />
            <label for="check_caramel1" class="option31">Very Good</label>
            
            <input 
              type="radio" 
              id="check_coconut1" 
              name="symptomParameter3" 
              value="50"
              onChange={onChange('symptomParameter3')}
              checked= {symptomParameter3==="50"} />
            <label for="check_coconut1" class="option32">Okay</label>
            
            <input 
              type="radio" 
              id="check_sprinkles1" 
              name="symptomParameter3" 
              value="100"
              onChange={onChange('symptomParameter3')}
              checked= {symptomParameter3==="100"}/>
            <label for="check_sprinkles1" class="option33">Very bad</label>
          </div>
          
          <h2>symptom parameter 4</h2>
          <div class="toppings2">
            <input 
              type="radio" 
              id="check_caramel2" 
              name="symptomParamter4" 
              value="0"              
              onChange={onChange('symptomParameter4')}
              checked= {symptomParameter4==="0"} />
            <label for="check_caramel2" class="option41">Very Good</label>
            
            <input 
              type="radio" 
              id="check_coconut2" 
              name="symptomParamter4" 
              value="50"
              onChange={onChange('symptomParameter4')}
              checked= {symptomParameter4==="50"}/>
            <label for="check_coconut2" class="option42">Okay</label>
            
            <input 
              type="radio" 
              id="check_sprinkles2" 
              name="symptomParamter4" 
              value="100"
              onChange={onChange('symptomParameter4')}
              checked= {symptomParameter4==="100"} />
            <label for="check_sprinkles2" class="option43">Very bad</label>
          </div>
          <div class="submit">
            <input 
              type="submit" 
              value="Submit"
              onClick={onSubmit}
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

export default PatientSymptomProfile
