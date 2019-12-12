import React from 'react';
import './styles/patientPersonalDetails.scss'

const PatientPersonalDetails = ({values,onChange,nextStep}) => {

  const nextPage = (e) => {
    console.log("I am in nextpage")
    e.preventDefault();
    nextStep();
}
    return (
        <div>
            <form onSubmit={nextPage}>
  <div class="name">
    <input 
      type="text" 
      name="name" 
      placeholder="Your name"
      value={values.name}
      onChange ={onChange('name')} />

    <input 
      type="text" 
      name="mobile" 
      placeholder="Enter Mobile number"
      value={values.mobile}
      onChange={onChange('mobile')}/>  
    <input 
      type="text" 
      name="age" 
      placeholder="Enter age"
      value={values.age}
      onChange ={onChange('age')}/>
    <input 
    type="text" 
    name="gender" 
    placeholder="Enter gender"
    value= {values.gender}
    onChange ={onChange('gender')}/>
  </div>

  <div class="submit">
    <input 
      type="submit" 
      value="Next"
      />
  </div>
</form>  
        </div>
    )
}

export default PatientPersonalDetails
