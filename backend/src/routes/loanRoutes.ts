import express, { Request, Response } from 'express';
import Loan from '../models/Loan';

// Define an interface for the loan update request body
interface LoanUpdate {
  status: string;  // Adjust this if you have more fields to update
}

const router = express.Router();

 // Update loan status
// Update loan status
router.put('/loans/:id', async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;  // Get ID from params
    const updatedData = req.body;  // Data from request body

    // Update the loan with the new data
    const loan = await Loan.findByIdAndUpdate(id, updatedData, { new: true });

    if (!loan) {
      return res.status(404).json({ message: 'Loan not found' });
    }

    res.status(200).json(loan);  // Return updated loan
  } catch (error) {
    console.error(error);  // Log the error for debugging
    res.status(500).json({ error: 'Failed to update loan' });
  }
});


 // Create a loan application
router.post('/apply', async (req: Request, res: Response) => {
  try {
    const loan = new Loan(req.body);
    await loan.save();
    res.status(201).json({ message: 'Loan application submitted successfully', loan });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit loan application' });
  }
});

// Get all loans
router.get('/loans', async (req: Request, res: Response) => {
  try {
    const loans = await Loan.find().sort({ createdAt: -1 });
    res.status(200).json(loans);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch loans' });
  }
});

router.delete('/delete-by-name/:fullName', async (req: Request, res: Response): Promise<any> => {
  const { fullName } = req.params;
  
  console.log('DELETE request received for:', fullName); // Confirm request in the console

  try {
    // Find and delete the loan by fullName
    const deletedLoan = await Loan.findOneAndDelete({ fullName });

    if (!deletedLoan) {
      return res.status(404).json({ message: `No loan found for ${fullName}` });
    }

    res.json({ message: `Loan record for ${fullName} has been successfully deleted.` });
  } catch (error) {
    console.error(error);  // Log the error for debugging
    res.status(500).json({ message: 'Error deleting loan record', error });
  }
});



export default router;
