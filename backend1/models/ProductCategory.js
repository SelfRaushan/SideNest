const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  price: String,
  image: String,
  previewImages: [String],
  link: String,
});

const productCategorySchema = new mongoose.Schema({
  category: { type: String, required: true, unique: true },
  items: [itemSchema],
});

const ProductCategory = mongoose.model('ProductCategory', productCategorySchema);

module.exports = ProductCategory;
