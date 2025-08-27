# DB13 Set Question Schema (Simplified Demo)

## Overview

Set questions are groups of related items that share a **common passage or stimulus**. They are designed to assess comprehensive understanding and analytical reasoning skills.

## Core Structure (Demo Example)

```jsonc
{
  "questionId": "DEMO-2411-KOR-S0001-AD12xy",
  "questionType": "set",
  "examInfo": {
    "examName": "Sample Exam (Demo Only)",
    "subject": { "group": "Language Arts", "detail": "Literature" }
  },
  "content": {
    "setTitle": "Modern Fiction Reading Set",
    "commonPassage": {
      "title": "Kim Dong-in, 'Potatoes'",
      "content": "This excerpt describes Bok-nyeo’s struggles with...",
      "textGenre": "Modern Fiction",
      "wordCount": 850,
      "readingLevel": "Upper Secondary"
    },
    "questions": [
      {
        "questionNumber": 1,
        "stem": "Which description best fits the narrator of the passage?",
        "options": [
          {
            "identifier": "①",
            "text": "The story is told from an omniscient perspective.",
            "isCorrect": true,
            "explanation": "The narrator reveals characters’ inner thoughts, typical of omniscient narration."
          },
          {
            "identifier": "②", 
            "text": "The story is told from a first-person perspective.",
            "isCorrect": false,
            "explanation": "There is no 'I' or first-person reference, so this is not the case."
          }
        ],
        "correctAnswer": "①",
        "scorePoint": 2
      },
      {
        "questionNumber": 2,
        "stem": "What is the most appropriate description of Bok-nyeo’s emotional change?",
        "options": [
          {
            "identifier": "①",
            "text": "Despair → Anger → Resignation",
            "isCorrect": true,
            "explanation": "The passage illustrates her emotions shifting in this sequence."
          }
        ],
        "correctAnswer": "①",
        "scorePoint": 3
      }
    ]
  },
  "setAnalysis": {
    "totalQuestions": 2,
    "totalScore": 5,
    "difficulty": "medium",
    "estimatedTimeMinutes": 8,  
    "timeDistributionSeconds": {
      "passageReading": 180,  
      "questionSolving": 300,
      "total": 480
    }
  }
}
```

## Required Fields

- **questionId**: Unique identifier (must include "S" indicator for set)
- **questionType**: Always `"set"`
- **content.commonPassage**: Shared text or stimulus
- **content.questions**: Array of related items
- **setAnalysis.totalQuestions**: Number of questions in the set

## Key Features

### Common Passage
- **Shared Content**: All items are linked to the same passage
- **Rich Metadata**: Includes genre, length, and difficulty level
- **Multiple Formats**: Supports literature, informational texts, diagrams, charts

### Progressive Design
- **Difficulty Gradation**: Items can increase in complexity
- **Skill Progression**: From basic comprehension to higher-level analysis
- **Cognitive Hierarchy**: Aligned with Bloom’s taxonomy

### Set-Level Analytics
- **Time Management**: Reading and solving time tracked separately
- **Correlation Analysis**: Explores relationships between items
- **Success Patterns**: Can record performance trends across question types

## Educational Benefits

1. **Authentic Assessment**: Reflects real reading and reasoning tasks
2. **Comprehensive Evaluation**: Measures multiple skills together
3. **Efficient Testing**: One passage supports several questions
4. **Strategic Thinking**: Encourages planning and time allocation

## Common Set Types

- **Literary Analysis**: Fiction, poetry, drama
- **Informational Reading**: Science, social studies, current events
- **Data Interpretation**: Charts, graphs, statistics
- **Cross-curricular**: Combining multiple domains

---

This file is a simplified demo. Detailed documentation of the full DB13 specification is not publicly released, but can be partially shared upon request as part of partnership discussions.