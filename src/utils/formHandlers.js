// src/utils/formHandlers.js

export const handleInputChange = (e, formData, setFormData) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const isFormValid = (formData, requiredFields = []) => {
  return requiredFields.every(field => formData[field]?.trim() !== '');
};
