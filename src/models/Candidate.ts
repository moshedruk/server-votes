import mongoose, { model, Schema } from "mongoose";

export interface ICandidate extends Document {
    name: string;
    image: string;
    votes?: number;
  }
  
  const candidateSchema = new Schema<ICandidate>({
    name: {
      type: String,
      unique: true,
    },
    image: String,
    votes: {
      type: Number,
      default: 0,
    },
  });
  const CandidateModle:mongoose.Model<ICandidate> = model("Candidate", candidateSchema);
  export default CandidateModle