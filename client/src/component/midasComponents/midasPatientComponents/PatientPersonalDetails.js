import React from 'react';
import './styles/patientPersonalDetails.scss'

const PatientPersonalDetails = () => {
    return (
        <div>
            <form action="#" id="js-form">
  <div class="name">
    <input type="text" name="name" placeholder="Your name" />
    <input type="text" name="mobile" placeholder="Enter Mobile number"/>  
    <input type="text" name="age" placeholder="Enter age"/>
    <input type="text" name="gender" placeholder="Enter gender"/>
  </div>

  <div class="submit">
    <input type="submit" value="Next" disabled/>
  </div>
</form>  
        </div>
    )
}

export default PatientPersonalDetails
