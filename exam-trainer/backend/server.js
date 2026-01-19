const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { parseMarkdown } = require('./parser');

const app = express();
const PORT = 3001;
const EXAMS_DIR = path.resolve(__dirname, '../../exams');

app.use(cors());
app.use(express.json());

// Get list of exams
app.get('/api/exams', (req, res) => {
    try {
        const files = fs.readdirSync(EXAMS_DIR).filter(file => file.endsWith('.md'));
        res.json(files);
    } catch (error) {
        console.error("Error reading exams dir:", error);
        res.status(500).json({ error: "Failed to list exams" });
    }
});

// Get specific exam parsed
app.get('/api/exams/:filename', (req, res) => {
    const filePath = path.join(EXAMS_DIR, req.params.filename);
    if (!fs.existsSync(filePath)) {
        return res.status(404).json({ error: "Exam not found" });
    }

    try {
        const content = fs.readFileSync(filePath, 'utf-8');
        const questions = parseMarkdown(content);
        res.json({ filename: req.params.filename, questions });
    } catch (error) {
        console.error("Error parsing exam:", error);
        res.status(500).json({ error: "Failed to parse exam" });
    }
});

// Update exam
app.post('/api/exams/:filename', (req, res) => {
    const filePath = path.join(EXAMS_DIR, req.params.filename);
    const { questions } = req.body; // Expects full list of questions

    if (!questions || !Array.isArray(questions)) {
        return res.status(400).json({ error: "Invalid questions data" });
    }

    try {
        const newContent = require('./parser').stringifyQuestions(questions);
        fs.writeFileSync(filePath, newContent, 'utf-8');
        res.json({ success: true });
    } catch (error) {
        console.error("Error saving exam:", error);
        res.status(500).json({ error: "Failed to save exam" });
    }
});

app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
    console.log(`Serving exams from: ${EXAMS_DIR}`);
});
