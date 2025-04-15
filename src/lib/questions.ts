
import { Question } from '../types/assessment';

// Primary screening questions (brief assessment covering major domains)
export const primaryQuestions: Question[] = [
  // Mood Assessment (PHQ-2)
  {
    id: 'phq2_1',
    text: 'Over the past two weeks, how often have you felt little interest or pleasure in doing things?',
    type: 'choice',
    options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'],
    category: 'mood',
    tier: 'primary',
    weight: 1,
    followUpTrigger: {
      condition: 'value',
      value: 1,
      threshold: 1,
    },
  },
  {
    id: 'phq2_2',
    text: 'Over the past two weeks, how often have you felt down, depressed, or hopeless?',
    type: 'choice',
    options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'],
    category: 'mood',
    tier: 'primary',
    weight: 1,
    followUpTrigger: {
      condition: 'value',
      value: 1,
      threshold: 1,
    },
  },
  // Anxiety Screening (GAD-2)
  {
    id: 'gad2_1',
    text: 'Over the past two weeks, how often have you felt nervous, anxious, or on edge?',
    type: 'choice',
    options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'],
    category: 'anxiety',
    tier: 'primary',
    weight: 1,
    followUpTrigger: {
      condition: 'value',
      value: 1,
      threshold: 1,
    },
  },
  {
    id: 'gad2_2',
    text: 'Over the past two weeks, how often have you been unable to stop or control worrying?',
    type: 'choice',
    options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'],
    category: 'anxiety',
    tier: 'primary',
    weight: 1,
    followUpTrigger: {
      condition: 'value',
      value: 1,
      threshold: 1,
    },
  },
  // Cognitive Function
  {
    id: 'cognitive_1',
    text: 'Have you experienced difficulties with memory, concentration, or problem-solving that interfere with daily activities?',
    type: 'choice',
    options: ['Not at all', 'Rarely', 'Sometimes', 'Often', 'Very often'],
    category: 'cognitive',
    tier: 'primary',
    weight: 1,
    followUpTrigger: {
      condition: 'value',
      value: 2,
      threshold: 2,
    },
  },
  // Stress Assessment
  {
    id: 'stress_1',
    text: 'How often have you felt overwhelmed in the past month?',
    type: 'choice',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very often'],
    category: 'stress',
    tier: 'primary',
    weight: 1,
  },
  {
    id: 'stress_2',
    text: 'On a scale of 1-10, how would you rate your overall mental health in the past month?',
    type: 'scale',
    options: Array.from({ length: 10 }, (_, i) => String(i + 1)),
    category: 'stress',
    tier: 'primary',
    weight: 1,
  },
  // Sleep and Energy
  {
    id: 'sleep_1',
    text: 'Have you had trouble falling or staying asleep, or sleeping too much?',
    type: 'choice',
    options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'],
    category: 'sleep',
    tier: 'primary',
    weight: 1,
  },
  {
    id: 'sleep_2',
    text: 'Have you been feeling tired or having little energy?',
    type: 'choice',
    options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'],
    category: 'sleep',
    tier: 'primary',
    weight: 1,
  },
];

// Secondary targeted assessment questions (presented adaptively based on primary responses)
export const secondaryQuestions: Question[] = [
  // Depression Module (PHQ-9 additional items)
  {
    id: 'phq9_3',
    text: 'Over the past two weeks, how often have you had trouble with appetite or eating too much/too little?',
    type: 'choice',
    options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'],
    category: 'mood',
    tier: 'secondary',
    weight: 1,
  },
  {
    id: 'phq9_4',
    text: 'Over the past two weeks, how often have you felt bad about yourself or that you are a failure?',
    type: 'choice',
    options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'],
    category: 'mood',
    tier: 'secondary',
    weight: 1,
  },
  {
    id: 'phq9_5',
    text: 'Over the past two weeks, how often have you had trouble concentrating?',
    type: 'choice',
    options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'],
    category: 'mood',
    tier: 'secondary',
    weight: 1,
  },
  {
    id: 'phq9_6',
    text: 'Over the past two weeks, how often have you moved or spoken so slowly that other people could have noticed?',
    type: 'choice',
    options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'],
    category: 'mood',
    tier: 'secondary',
    weight: 1,
  },
  {
    id: 'phq9_7',
    text: 'Over the past two weeks, how often have you had thoughts that you would be better off dead or of hurting yourself in some way?',
    type: 'choice',
    options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'],
    category: 'mood',
    tier: 'secondary',
    weight: 3, // Higher weight for suicidal ideation
  },
  // Anxiety Module (additional items)
  {
    id: 'gad7_3',
    text: 'Do you experience physical symptoms like muscle tension, headaches, or stomach problems when anxious?',
    type: 'choice',
    options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'],
    category: 'anxiety',
    tier: 'secondary',
    weight: 1,
  },
  {
    id: 'gad7_4',
    text: 'How often do your worry patterns interfere with daily activities or relationships?',
    type: 'choice',
    options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'],
    category: 'anxiety',
    tier: 'secondary',
    weight: 1,
  },
  {
    id: 'gad7_5',
    text: 'How often do you find it difficult to control the worry?',
    type: 'choice',
    options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'],
    category: 'anxiety',
    tier: 'secondary',
    weight: 1,
  },
  // Psychosis Screening
  {
    id: 'psych_1',
    text: 'Have you had experiences that others might find unusual or hard to believe?',
    type: 'choice',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very often'],
    category: 'cognitive',
    tier: 'secondary',
    weight: 2,
  },
  {
    id: 'psych_2',
    text: 'Do you sometimes have difficulty organizing your thoughts or making sense of things?',
    type: 'choice',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very often'],
    category: 'cognitive',
    tier: 'secondary',
    weight: 2,
  },
  // Substance Use
  {
    id: 'substance_1',
    text: 'How often do you use alcohol or other substances to cope with emotions or stress?',
    type: 'choice',
    options: ['Never', 'Monthly or less', '2-4 times a month', '2-3 times a week', '4+ times a week'],
    category: 'substance',
    tier: 'secondary',
    weight: 2,
  },
  {
    id: 'substance_2',
    text: 'Has your use of alcohol or other substances affected your daily responsibilities?',
    type: 'choice',
    options: ['Never', 'Less than monthly', 'Monthly', 'Weekly', 'Daily or almost daily'],
    category: 'substance',
    tier: 'secondary',
    weight: 2,
  },
];

// Open-text response component for qualitative data and NLP analysis
export const openEndedQuestions: Question[] = [
  {
    id: 'open_1',
    text: 'Please briefly describe what concerns you most about your mental health right now.',
    type: 'text',
    category: 'stress',
    tier: 'primary',
    weight: 2,
  },
  {
    id: 'open_2',
    text: 'How have these feelings or experiences affected your daily life?',
    type: 'text',
    category: 'stress',
    tier: 'primary',
    weight: 2,
  },
];
