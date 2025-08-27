# DB13 단일 문제 스키마 (간소화된 데모)

## 개요

단일 문제는 공유 지문이 필요하지 않은 독립적인 시험 문항입니다. 완전하고 자체 완결적인 내용으로 특정 개념이나 기능에 집중합니다.

## 핵심 구조 (데모 예시)

```jsonc
{
  "questionId": "DEMO-2411-MATH-Q0001-XXab12",
  "questionType": "single",
  "examInfo": {
    "examName": "샘플 시험 (데모용)",
    "subject": { "group": "수학", "detail": "확률과 통계" }
  },
  "content": {
    "stem": "2 + 3의 값은?",
    "options": [
      { "id": "①", "text": "5", "isCorrect": true, "explanation": "2 + 3 = 5이다." },
      { "id": "②", "text": "6", "isCorrect": false, "explanation": "계산이 틀렸다." }
    ],
    "correctAnswer": "①"
  },
  "analysis": {
    "difficulty": "쉬움",
    "cognitiveLevel": "이해",
    "scorePoint": 2,
    "timeEstimatesSeconds": {
      "expected": 45,
      "reading": 10,
      "solving": 35
    }
  },
  "references": [
    {
      "type": "교과서",
      "title": "고등학교 수학 I (한국 교육과정)",
      "relevance": "높음"
    }
  ]
}
```

## 필수 필드

- **questionId**: DB13 형식을 따르는 고유 식별자
- **questionType**: `"single"` 이어야 함
- **content.stem**: 주요 문제 텍스트
- **content.options**: 정답 여부 표시가 있는 선택지 배열
- **content.correctAnswer**: 정답 선택지 식별자

## 선택사항이지만 권장되는 필드

- **hints**: 학습 지원을 위한 단계적 힌트 시스템
- **explanations**: 다층 설명 (간단, 상세, 단계별)
- **analysis**: 난이도, 인지 수준, 시간 데이터
- **references**: 교육 자료와 인용
- **creatorNotes**: 교육 팁과 일반적인 학생 오류

## 주요 이점

1. **교육적 가치**: 풍부한 메타데이터가 개인 맞춤형 학습 지원
2. **AI 훈련**: 기계 학습에 최적화된 구조화 형식
3. **분석**: 인구 통계 전반의 성과 추적
4. **품질 관리**: 내장된 검증 및 확인 필드

## 사용 사례 예시

- 객관식 문제
- 참/거짓 문제
- 간단한 계산 문제
- 어휘나 문법 문항
- 개념 식별 과제

---
이 파일은 간소화된 데모입니다. 전체 DB13 명세서의 상세 문서는 공개되지 않으며, 파트너십 논의의 일환으로 요청 시 일부 제공될 수 있습니다.