import fs from 'fs';
import path from 'path';

// We can execute server side code here. This code will never end up inside of a client side bundle. It's NodeJS code
// that's been enhanced a little bit by Next.js to look more like Express.
export default function handler(req) {
    if (req.method === 'POST') {
        return res
            .status(201)
            .json({
                message: 'Success',
                feedback: saveFeedback(req)
            });
    }

    return res
        .status(200)
        .json({
            data: readExistingFeedback()
        });
}

function saveFeedback(req) {
    const email = req.body.email;
    const feedback = req.body.feedback;

    const newFeedback = {
        id: Date.now(),
        email,
        feedback
    };

    const data = readExistingFeedback();
    data.push(newFeedback);
    fs.writeFileSync(getFilePath(), JSON.stringify(data));

    return newFeedback;
}

function getFilePath() {
    return path.join(process.cwd(), 'data', 'feedback.json');
}

export function readExistingFeedback() {
    const fileData = fs.readFileSync(getFilePath());
    return JSON.parse(fileData.toString());
}
