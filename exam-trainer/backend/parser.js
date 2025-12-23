const fs = require('fs');
const path = require('path');

function parseMarkdown(content) {
    const parts = content.split('----------------------------------------');
    const questions = [];

    parts.forEach((part) => {
        // Basic cleanup
        const lines = part.split('\n').map(line => line.trim());
        if (lines.length < 10) return; // Skip empty/short parts

        const questionObj = {
            originalContent: part, // Keep for potential reconstruction or debugging
            id: null,
            topic: null,
            questionText: "",
            options: [],
            answer: null,
            suggestedAnswer: null
        };

        // Extract ID and Topic
        const qNumLine = lines.find(l => l.startsWith('Question #:'));
        if (qNumLine) questionObj.id = qNumLine.split(':')[1].trim();

        const topicLine = lines.find(l => l.startsWith('Topic #:'));
        if (topicLine) questionObj.topic = topicLine.split(':')[1].trim();

        // extract text. Stratagem: Find [All XXX Questions] and start reading until "Suggested Answer" or options
        let capturingText = false;
        let textLines = [];
        let optionStartRegex = /^[A-Z]\.\s/;

        // Find the start anchor
        let startIndex = lines.findIndex(l => l.includes('[All') && l.includes('Questions]'));
        if (startIndex === -1) startIndex = 0; // Fallback if anchor missing

        for (let i = startIndex + 1; i < lines.length; i++) {
            const line = lines[i];
            if (!line) continue;

            if (line.startsWith('Suggested Answer:')) {
                questionObj.suggestedAnswer = line.split(':')[1].trim().split(' ')[0]; // B 🗳️ -> B
                break;
            }
            if (optionStartRegex.test(line)) {
                break;
            }
            textLines.push(line);
        }
        questionObj.questionText = textLines.join('\n');

        // Extract Options
        lines.forEach((line, idx) => {
            if (optionStartRegex.test(line)) {
                // Check if next lines are part of this option (until next option or blank)
                // For simplicity, assume options are single paragraphs or split by blank lines
                // Let's just grab the whole line for now.
                // If multi-line options exist, this might need better logic.
                // Looking at the sample: 
                // A. Privacy and Security
                // <blank>
                // B. Fairness
                // It seems options are 1 line or effectively separated.
                questionObj.options.push(line);
            }
        });

        // Extract Answer
        const answerLine = lines.find(l => l.startsWith('**Answer:'));
        if (answerLine) {
            questionObj.answer = answerLine.split(':')[1].trim().replace(/\*\*/g, '');
        }

        // Fallback if no explicit answer but suggested exists
        if (!questionObj.answer && questionObj.suggestedAnswer) {
            questionObj.answer = questionObj.suggestedAnswer;
        }

        // Capture footer (from Answer line to end)
        // If we found answerLine, footer is everything after.
        // If not, maybe just the last few lines?
        // Let's just create a generic footer if we can't find it to avoid data loss on crucial parts?
        // Or try to slice from **Answer:**
        const answerIdx = lines.findIndex(l => l.startsWith('**Answer:'));
        if (answerIdx !== -1) {
            questionObj.footer = lines.slice(answerIdx + 1).join('\n');
        } else {
            questionObj.footer = "";
        }


        if (questionObj.questionText && questionObj.options.length > 0) {
            questions.push(questionObj);
        }
    });

    return questions;
}

function stringifyQuestions(questions) {
    return questions.map(q => {
        const optionsText = q.options.join('\n\n');
        // Default footer if missing
        const footer = q.footer || `\n**Timestamp: ${new Date().toLocaleString()}**\n\n[View on ExamTopics](https://www.examtopics.com)`;

        return `## Exam GH-300 topic ${q.topic} question ${q.id} discussion

Actual exam question from

Microsoft's
GH-300

Question #: ${q.id}
Topic #: ${q.topic}

[All GH-300 Questions]

${q.questionText}
Suggested Answer: ${q.answer} 🗳️ 

${optionsText}

**Answer: ${q.answer}**
${footer}`;
    }).join('\n\n----------------------------------------\n\n');
}

module.exports = { parseMarkdown, stringifyQuestions };
