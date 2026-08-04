import { useState } from 'react';
import { COURSES } from '../data/mockData';
import { INSTITUTION_SHORT_NAME } from '../config/institutionConfig';

const useAdmissionForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    gender: '',
    email: '',
    phone: '',
    parentName: '',
    parentPhone: '',
    address: '',
    state: '',
    pincode: '',
    deptPreference: '',
    coursePreference: '',
    qualifyingExam: '',
    qualifyingScore: '',
    passingYear: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDepartmentChange = (deptId) => {
    setFormData((prev) => ({
      ...prev,
      deptPreference: deptId,
      coursePreference: '' // reset course when department shifts
    }));
  };

  const executeSubmit = (e, callback) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Simulate API registration lag
    setTimeout(() => {
      const applicationNumber = `${INSTITUTION_SHORT_NAME}-ADM-2026-${Math.floor(100000 + Math.random() * 900000)}`;
      if (callback) {
        callback(applicationNumber, formData.email);
      }
      
      // Clear data states
      setFormData({
        fullName: '',
        dob: '',
        gender: '',
        email: '',
        phone: '',
        parentName: '',
        parentPhone: '',
        address: '',
        state: '',
        pincode: '',
        deptPreference: '',
        coursePreference: '',
        qualifyingExam: '',
        qualifyingScore: '',
        passingYear: ''
      });
      setSubmitted(false);
    }, 1200);
  };

  // Filter available courses according to dynamic department input
  const filteredCourses = COURSES.filter(
    (c) => !formData.deptPreference || c.deptId === formData.deptPreference
  );

  return {
    formData,
    submitted,
    filteredCourses,
    handleInputChange,
    handleDepartmentChange,
    executeSubmit
  };
};

export default useAdmissionForm;
