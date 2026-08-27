import mongoose from 'mongoose';

const FestivalSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, index: true },
  month: { type: String, required: true },
  season: { type: String },
  state: { type: String, required: true, index: true },
  associatedTemples: [{ type: String }],
  description: { type: String, required: true },
  significance: { type: String, required: true },
  rituals: { type: String },
  images: { type: String }
}, {
  timestamps: true
});

export const Festival = mongoose.models.Festival || mongoose.model('Festival', FestivalSchema);
export default Festival;
