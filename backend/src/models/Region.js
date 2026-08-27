import mongoose from 'mongoose';

const RegionSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true, index: true },
  name: { type: String, required: true },
  states: [{ type: String }]
}, {
  timestamps: true
});

export const Region = mongoose.models.Region || mongoose.model('Region', RegionSchema);
export default Region;
