/**
 * DEMO-ONLY SCHEMA VALIDATOR
 * 
 * This validator checks only the simplified demo schema structure.
 * The full DB13 specification is not public and contains many additional fields.
 * 
 * This is a non-normative demo schema for demonstration purposes only.
 */

import { z } from "zod";
import fs from "fs";

// Define demo schema (intentionally simplified)
const OptionSchema = z.object({
  identifier: z.string(),
  text: z.string(),
  isCorrect: z.boolean(),
  explanation: z.string().optional(),
});

const QuestionSchema = z.object({
  questionNumber: z.number(),
  stem: z.string(),
  options: z.array(OptionSchema).min(2),
  correctAnswer: z.string(),
  scorePoint: z.number().optional(),
});

const DemoSetSchema = z.object({
  questionId: z.string().regex(/^DEMO-\d{4}-[A-Z]{2,3}-S\d{4}-[A-Z]{2}demo$/),
  questionType: z.literal("set"),
  locale: z.string().optional(), // Optional locale field
  
  examInfo: z.object({
    examName: z.string(),
    subject: z.object({
      group: z.string(),
      detail: z.string(),
      code: z.string(),
    }),
  }),
  
  content: z.object({
    setTitle: z.string(),
    commonPassage: z.object({
      title: z.string(),
      content: z.string().optional(), // Optional for demo
      textGenre: z.string().optional(),
      wordCount: z.number().optional(),
      readingLevel: z.string().optional(),
    }),
    questions: z.array(QuestionSchema).min(1),
  }),
  
  setAnalysis: z.object({
    totalQuestions: z.number(),
    estimatedTime: z.number().optional(),
    difficulty: z.string().optional(),
  }),
});

const DemoSingleSchema = z.object({
  questionId: z.string().regex(/^DEMO-\d{4}-[A-Z]{2,3}-Q\d{4}-[A-Z]{2}demo$/),
  questionType: z.literal("single"),
  locale: z.string().optional(),
  
  examInfo: z.object({
    examName: z.string(),
    subject: z.object({
      group: z.string(),
      detail: z.string(),
    }),
  }),
  
  content: z.object({
    stem: z.string(),
    options: z.array(OptionSchema).min(2),
    correctAnswer: z.string(),
  }),
  
  analysis: z.object({
    difficulty: z.string(),
    cognitiveLevel: z.string().optional(),
  }).optional(),
});

// Main validation function
function validateDemoSchema(filePath: string) {
  try {
    // Read and parse JSON
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    
    // Determine schema type and validate
    if (data.questionType === "set") {
      DemoSetSchema.parse(data);
      console.log(`✅ OK: ${filePath} - demo SET structure is valid.`);
    } else if (data.questionType === "single") {
      DemoSingleSchema.parse(data);
      console.log(`✅ OK: ${filePath} - demo SINGLE structure is valid.`);
    } else {
      throw new Error(`Unknown questionType: ${data.questionType}`);
    }
    
    // Display basic info
    console.log(`   - Question ID: ${data.questionId}`);
    console.log(`   - Type: ${data.questionType}`);
    console.log(`   - Locale: ${data.locale || "not specified"}`);
    
  } catch (error) {
    console.error(`❌ ERROR: ${filePath} - validation failed`);
    if (error instanceof z.ZodError) {
      console.error("Validation errors:", error.errors);
    } else {
      console.error(error);
    }
    process.exit(1);
  }
}

// CLI usage
if (process.argv.length < 3) {
  console.log("Usage: ts-node demo-validate.ts <json-file>");
  console.log("Example: ts-node demo-validate.ts schema/sample_item_set.en.json");
  process.exit(1);
}

validateDemoSchema(process.argv[2]);