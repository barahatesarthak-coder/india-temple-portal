import mongoose from 'mongoose';

const PoojaScheduleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  time: { type: String, required: true },
  description: { type: String }
}, { _id: false });

const TransportationSchema = new mongoose.Schema({
  byAir: { type: String },
  byTrain: { type: String },
  byRoad: { type: String }
}, { _id: false });

const ContactSchema = new mongoose.Schema({
  phone: { type: String },
  email: { type: String },
  website: { type: String }
}, { _id: false });

const CoordinatesSchema = new mongoose.Schema({
  lat: { type: Number },
  lng: { type: Number }
}, { _id: false });

const TempleSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, index: true },
  hindiName: { type: String, trim: true },
  slug: { type: String, required: true, unique: true, index: true },
  deity: { type: String, required: true, trim: true, index: true },
  state: { type: String, required: true, trim: true, index: true },
  city: { type: String, required: true, trim: true, index: true },
  region: { type: String, required: true, index: true },
  category: { type: String, required: true, index: true },
  period: { type: String },
  architecturalStyle: { type: String },
  shortDescription: { type: String, required: true },
  historicalBackground: { type: String, required: true },
  historicalSignificance: { type: String },
  religiousSignificance: { type: String },
  architecture: { type: String },
  darshanTimings: { type: String, required: true },
  poojaSchedule: [PoojaScheduleSchema],
  rituals: { type: String },
  festivals: [{ type: String }],
  dressCode: { type: String },
  visitorGuidelines: [{ type: String }],
  bestTimeToVisit: { type: String },
  transportation: TransportationSchema,
  accommodation: { type: String },
  nearbyFacilities: [{ type: String }],
  coordinates: CoordinatesSchema,
  images: [{ type: String }],
  featured: { type: Boolean, default: false, index: true },
  status: { type: String, enum: ['approved', 'pending', 'rejected'], default: 'pending', index: true },
  circuits: [{ type: String }],
  contact: ContactSchema
}, {
  timestamps: true
});

// Text index for search
TempleSchema.index({
  name: 'text',
  deity: 'text',
  state: 'text',
  city: 'text',
  shortDescription: 'text',
  historicalBackground: 'text'
});

export const Temple = mongoose.models.Temple || mongoose.model('Temple', TempleSchema);
export default Temple;
