# DB13 Single Question Schema (Simplified Demo)

## Overview

Single questions are standalone exam items that do not require shared passages. They focus on specific concepts or skills with complete, self-contained content.

## Core Structure (Demo Example)

```jsonc
{
  "questionId": "DEMO-2411-MATH-Q0001-XXab12",
  "questionType": "single",
  "examInfo": {
    "examName": "Sample Exam (Demo Only)",
    "subject": { "group": "Mathematics", "detail": "Probability and Statistics" }
  },
  "content": {
    "stem": "What is the value of 2 + 3?",
    "options": [
      { "id": "①", "text": "5", "isCorrect": true, "explanation": "2 + 3 = 5." },
      { "id": "②", "text": "6", "isCorrect": false, "explanation": "Incorrect calculation." }
    ],
    "correctAnswer": "①"
  },
  "analysis": {
    "difficulty": "easy",
    "cognitiveLevel": "comprehension",
    "scorePoint": 2,
    "timeEstimatesSeconds": {
      "expected": 45,
      "reading": 10,
      "solving": 35
    }
  },
  "references": [
    {
      "type": "textbook",
      "title": "High School Mathematics I (Korean curriculum)",
      "relevance": "high"
    }
  ]
}
```

## Required Fields

- **questionId**: Unique identifier following DB13 format
- **questionType**: Must be `"single"`
- **content.stem**: The main question text
- **content.options**: Array of answer choices with correctness indicators
- **content.correctAnswer**: The correct option identifier

## Optional but Recommended Fields

- **hints**: Progressive hint system for learning support
- **explanations**: Multi-level explanations (brief, detailed, step-by-step)
- **analysis**: Difficulty, cognitive level, timing data
- **references**: Educational resources and citations
- **creatorNotes**: Teaching tips and common student errors

## Key Benefits

1. **Educational Value**: Rich metadata supports personalized learning
2. **AI Training**: Structured format optimal for machine learning
3. **Analytics**: Performance tracking across demographics
4. **Quality Control**: Built-in verification and validation fields

## Example Use Cases

- Multiple choice questions  
- True/false questions  
- Short calculation problems  
- Vocabulary or grammar items  
- Concept identification tasks  

---

This file is a simplified demo. Detailed documentation of the full DB13 specification is not publicly released, but can be partially shared upon request as part of partnership discussions.