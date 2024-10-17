import mongoose, { Document, Schema } from 'mongoose';

export interface ILoan extends Document {
  fullName: string;
  loanAmount: string;
  loanTenure: string;
  reason: string;
  employmentStatus: string;
  employmentAddress: string;
  status: string;
  createdAt: Date;
}

const LoanSchema: Schema = new Schema({
  fullName: { type: String, required: true },
  loanAmount: { type: String, required: true },
  loanTenure: { type: String, required: true },
  reason: { type: String, required: true },
  employmentStatus: { type: String, required: true },
  employmentAddress: { type: String, required: true },
  status: { type: String, default: 'PENDING' }, // Default status is PENDING
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<ILoan>('Loan', LoanSchema);
