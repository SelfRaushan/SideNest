const ProductCategory = require('../models/ProductCategory');
const FormSubmission = require('../models/FormSubmission');

const getProducts = async (req, res) => {
  try {
    const products = await ProductCategory.find();
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Server error fetching products.' });
  }
};

const submitForm = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !subject) {
      return res.status(400).json({ message: "Name, email, and subject are required." });
    }

    const newSubmission = new FormSubmission({ name, email, phone, subject, message });

    await newSubmission.save();

    return res.status(201).json({ message: "Form submitted successfully." });
  } catch (error) {
    console.error('Form submission error:', error);
    res.status(500).json({ message: "Server error." });
  }
};

module.exports = { getProducts, submitForm };
