import mongoose from 'mongoose';

const ItinerarySchema = new mongoose.Schema({
  day: { type: String, required: true },
  location: { type: String, required: true },
  activities: { type: String, required: true }
}, { _id: false });

const CircuitSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, index: true },
  region: { type: String, required: true, index: true },
  duration: { type: String, required: true },
  distance: { type: String },
  difficulty: { type: String },
  description: { type: String, required: true },
  spiritualSignificance: { type: String },
  templeIds: [{ type: String }],
  itinerary: [ItinerarySchema],
  travelTips: [{ type: String }],
  coverImage: { type: String }
}, {
  timestamps: true
});

export const Circuit = mongoose.models.Circuit || mongoose.model('Circuit', CircuitSchema);
export default Circuit;
