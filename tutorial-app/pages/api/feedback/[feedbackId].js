import {readExistingFeedback} from "./index";

export default function handler(req, res) {
    const id = req.query.feedbackId;
    const data = readExistingFeedback();
    const feedback = data.find(feedback => feedback.id === id);
    return res.status(200).json({feedback});
}