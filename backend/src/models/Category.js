import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true, index: true },
  name: { type: String, required: true },
  description: { type: String }
}, {
  timestamps: true
});

export const Category = mongoose.models.Category || mongoose.model('Category', CategorySchema);
export default Category;
