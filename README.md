# QuizAtlas Demo Repository

⚠️ **Demo-only repository with DB13 demo subset. The full schema, datasets, prompts, and internal workflows are not public and are available only through partnership discussions.**

This repository demonstrates how Korean CSAT (수능) exam questions can be transformed into structured JSON datasets using the **DB13 demo subset schema**.  
It provides minimal examples and walkthroughs to illustrate the potential of this structured approach for AI training and educational research.

👉 Sample JSON: `/schema/sample_item_set.en.json` (English) / `/schema/sample_item_set.ko.json` (Korean)  
👉 Demo walkthroughs: `/demo/walkthrough.en.md` and `/demo/walkthrough.ko.md`  

[한국어 README 보기 / Read Korean README](./README_KO.md)

![QuizAtlas Demo UI](./demo/images/demo.en.png)
*Sample visualization of structured CSAT question data in the DB13 format*

---

Why Korean CSAT Data Matters for Global AI in Education

Korea’s CSAT (수능) exam is not just a national test—it is one of the world’s most rigorously designed and openly released standardized exams:
	•	Passages are authored with input from domain professors, not only language teachers.
	•	Questions are reviewed by nationwide high school teachers.
	•	After the exam, all items and answers are officially published, with objections and revisions resolved transparently.
	•	This process has been repeated for 20+ years, across all subjects.

More than 70% of Korean students enter university through this exam, making it one of the most widely experienced standardized assessments worldwide.

On top of that, Korea’s private education market exceeded ₩29 trillion (~$21B USD) last year. Individual CSAT questions are so valued that publishers pay tens to hundreds of thousands of won per question for copyright.

👉 This makes CSAT data a unique international benchmark dataset for AI training, educational research, and learning analytics.
---

## Repository Structure
```
quizatlas-schema/
├── README.md                    # English readme (this file)
├── README_KO.md                 # Korean readme
├── schema/                      # Schema docs & sample JSON
├── demo/                        # Walkthrough guides
└── docs/                        # FAQ & notices
```

---

## DB13 Schema Highlights

### Single Questions
- Standalone items with rich metadata (difficulty, cognitive level, success rates)
- Multi-step explanations and hints
- Links to curriculum concepts

### Set Questions
- Multi-question groups with a shared passage
- Set-level analytics (time, difficulty progression, completion rate)
- Supports staged difficulty design

### AI-Friendly Features
- Composable subsets for targeted training
- Metadata-rich structure for analysis
- Versioning and extensibility
- Optional authoring notes

---

## Quick Start

### 1. Install dependencies & validate samples
```bash
npm ci                    # Install dependencies (recommended)
npm run validate:all      # Validate all samples
# Optional: validate specific language
npm run validate:en       # English samples only
npm run validate:ko       # Korean samples only
```

### 2. Explore the schema
- **Single questions** → [`/schema/single-question.en.md`](./schema/single-question.en.md)
- **Set questions** → [`/schema/set-question.en.md`](./schema/set-question.en.md)
- **Sample JSONs** → [`/schema/sample_item_set.en.json`](./schema/sample_item_set.en.json)

### 3. Read the walkthrough guide
- **Demo guide** → [`/demo/walkthrough.en.md`](./demo/walkthrough.en.md)

---

## Applications
- **AI Training**: Prepare structured, benchmark-grade data for LLMs
- **Educational Research**: Analyze difficulty, cognition, and pedagogy
- **Assessment Development**: Use as a design template for new items
- **Learning Analytics**: Track performance, success rates, misconceptions
- **Cross-Lingual Benchmarking**: Rare example of open, high-stakes exam data

---

## What's Included (Demo)
- Simplified DB13 demo subset schema docs (single & set items)
- Sample JSON (English & Korean)
- Demo-only schema checker (TypeScript/Zod)
- High-level transformation workflows (no prompts or automation scripts)

## What's Not Included (Security & IP)
- Full schema and extended fields
- Proprietary prompts, model configs, or generation workflows
- Bulk datasets or copyrighted passages
- Any personal or student-level data

---

## Example JSON Snippet
```json
{
  "questionId": "DEMO-2508-KOR-18",
  "questionType": "single",
  "content": {
    "stem": "Which of the following matches the passage?",
    "options": [
      {"id": "①", "text": "A", "isCorrect": false},
      {"id": "②", "text": "B", "isCorrect": true}
    ],
    "correctAnswer": "②"
  },
  "analysis": { "difficulty": "easy", "bloomsLevel": "comprehension" }
}
```

---

## Provenance & Licensing
- Sources are **publicly released** exam materials; this repo only demonstrates transformation structure.
- All original copyrights remain with their owners (e.g., KICE, publishers).
- quizatlas.project@gmail.com for details.

[LinkedIn](https://www.linkedin.com/in/jeonghyeon-lim-b06a8937b)

---

## About the Author
I am an **undergraduate student in Elementary Education (English Education track)** with a strong interest in how AI can transform learning and assessment.  

Although I am still a student, I have independently built:  
- **DB13 schema**, a structured format for exam questions with rich metadata.  
- **QuizAtlas**, a demo pipeline that converts Korea’s CSAT (수능) into structured datasets for AI training and educational research.  
- **Item generation workflows** and validation tools for scalable dataset creation.  

My goal is to bridge **educational expertise** and **practical AI applications**, showing how even students can create tools that researchers and companies may find valuable.


---


*This repository is for demo and partnership purposes only. Full datasets are not public.*