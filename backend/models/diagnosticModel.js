import mongoose from 'mongoose';

const diagnosticSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    availability: { type: Number, required: true },
    duration: { type: String, required: true },
    shortDescription: { type: String, required: true },
    description: { type: String, required: true },
    instructions: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Diagnostic = mongoose.model('Diagnoses', diagnosticSchema);
export default Diagnostic;
