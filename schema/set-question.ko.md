# DB13 세트 문제 스키마 (간소화된 데모)

## 개요

세트 문제는 **공통된 지문이나 자료**를 공유하는 관련 문항들의 그룹입니다. 종합적인 이해력과 분석적 추론 능력을 평가하도록 설계되었습니다.

## 핵심 구조 (데모 예시)

```jsonc
{
  "questionId": "DEMO-2411-KOR-S0001-AD12xy",
  "questionType": "set",
  "examInfo": {
    "examName": "샘플 시험 (데모용)",
    "subject": { "group": "국어", "detail": "문학" }
  },
  "content": {
    "setTitle": "현대소설 독해 세트",
    "commonPassage": {
      "title": "김동인, '감자'",
      "content": "이 발췌는 복녀의 고투를 묘사한다...",
      "textGenre": "현대소설",
      "wordCount": 850,
      "readingLevel": "고등"
    },
    "questions": [
      {
        "questionNumber": 1,
        "stem": "이 글의 서술자에 대한 설명으로 가장 적절한 것은?",
        "options": [
          {
            "identifier": "①",
            "text": "전지적 작가 시점으로 서술되고 있다.",
            "isCorrect": true,
            "explanation": "서술자가 등장인물의 내면을 모두 알고 있는 전지적 서술의 특징을 보인다."
          },
          {
            "identifier": "②", 
            "text": "1인칭 주인공 시점으로 서술되고 있다.",
            "isCorrect": false,
            "explanation": "'나'와 같은 1인칭 지시어가 없으므로 해당 없다."
          }
        ],
        "correctAnswer": "①",
        "scorePoint": 2
      },
      {
        "questionNumber": 2,
        "stem": "복녀의 감정 변화에 대한 설명으로 가장 적절한 것은?",
        "options": [
          {
            "identifier": "①",
            "text": "절망 → 분노 → 체념",
            "isCorrect": true,
            "explanation": "지문에서 복녀의 감정이 이 순서로 변화하는 것을 확인할 수 있다."
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
    "difficulty": "중간",
    "estimatedTimeMinutes": 8,  
    "timeDistributionSeconds": {
      "passageReading": 180,  
      "questionSolving": 300,
      "total": 480
    }
  }
}
```

## 필수 필드

- **questionId**: 고유 식별자 (세트의 경우 "S" 표시 필수)
- **questionType**: 항상 `"set"`
- **content.commonPassage**: 공유되는 텍스트 또는 자료
- **content.questions**: 관련 문항들의 배열
- **setAnalysis.totalQuestions**: 세트 내 문제 수

## 주요 특징

### 공통 지문
- **공유 콘텐츠**: 모든 문항이 같은 지문에 연결됨
- **풍부한 메타데이터**: 장르, 길이, 난이도 포함
- **다양한 형태**: 문학, 정보 텍스트, 도표, 차트 지원

### 점진적 설계
- **난이도 구성**: 문항이 점차 복잡해질 수 있음
- **기능 진행**: 기초 이해에서 고차원 분석까지
- **인지 계층**: 블룸의 분류법에 따른 구성

### 세트 수준 분석
- **시간 관리**: 읽기와 문제 해결 시간을 별도 추적
- **상관관계 분석**: 문항 간 관계 탐색
- **성공 패턴**: 문항 유형별 성과 경향 기록 가능

## 교육적 이점

1. **실제적 평가**: 실제 읽기와 추론 과업 반영
2. **종합적 평가**: 여러 기능을 함께 측정
3. **효율적 시험**: 하나의 지문으로 여러 문항 지원
4. **전략적 사고**: 계획과 시간 할당 장려

## 일반적인 세트 유형

- **문학 분석**: 소설, 시, 희곡
- **정보 독해**: 과학, 사회, 시사
- **자료 해석**: 차트, 그래프, 통계
- **교과 통합**: 여러 영역 결합

---

이 파일은 간소화된 데모입니다. 전체 DB13 명세서의 상세 문서는 공개되지 않으며, 파트너십 논의의 일환으로 요청 시 일부 제공될 수 있습니다.