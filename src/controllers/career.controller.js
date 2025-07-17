import Careers from "../models/careers.js";

// get all careers
export const getAllCareers = async (req, res) => {

    try {
        const careersList = await Careers.find();
        res.json(careersList);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
// get career by id
// create career
// update career
// delete career
