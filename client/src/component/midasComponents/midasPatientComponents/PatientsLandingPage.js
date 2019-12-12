import React,{useState} from 'react';
import PatientPersonalDetails from './PatientPersonalDetails';
import PatientPainProfile from './PatientPainProfile';
import PatientSymptomProfile from './PatientSymptomProfile';
import PatientGetWellSoon from './PatientGetWellSoon';

const PatientsLandingPage = () => {

    const [patientFormData, setPatientFormData] = useState({
      step:1,  
      name:'',
      mobile:'',
      gender:'',
      age:'',
      painParameter1:'',
      painParameter2:'',
      painParameter3:'',
      painParameter4:'',
      painParameter5:'',
      symptomParameter1:'',
      symptomParameter2:'',
      symptomParameter3:'',
      symptomParameter4:'',
      symptomParameter5:''
    });

    const {
        name,
        mobile,
        gender,
        age,
        painParameter1,
        painParameter2,
        painParameter3,
        painParameter4,
        painParameter5,
        symptomParameter1,
        symptomParameter2,
        symptomParameter3,
        symptomParameter4,
        symptomParameter5
    } = patientFormData;

    const {step} = patientFormData;

    const values = {name,
                    mobile,
                    gender,
                    age,
                    painParameter1,
                    painParameter2,
                    painParameter3,
                    painParameter4,
                    painParameter5,
                    symptomParameter1,
                    symptomParameter2,
                    symptomParameter3,
                    symptomParameter4,
                    symptomParameter5}
    
    const nextStep = () => {
        setPatientFormData({...patientFormData, step:step+1})
    }
    
    const previousStep = () => {
        setPatientFormData({...patientFormData,step:step -1})
    }

    const onChange = input => e => {
        setPatientFormData({
            ...patientFormData,
            [input]:e.target.value
        })
    }   
    console.log(step);

    switch (step) {
        case 1:
            return(
                <PatientPersonalDetails 
                nextStep ={nextStep}
                values = {values}
                onChange ={onChange}/>
            )
        case 2:
            return(
                <PatientPainProfile
                values={values}
                nextStep={nextStep}
                previousStep={previousStep}
                onChange={onChange}/>
            )    
        case 3:
            return(
                <PatientSymptomProfile
                values={values}
                nextStep={nextStep}
                previousStep={previousStep}
                onChange={onChange}
                />
            )
        case 4:
            return(
                <PatientGetWellSoon/>
            )    
    
        default:
            break;
    }
   
};

export default PatientsLandingPage;
