export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface ChatContext {
  diagnosis?: string;
  severity?: string;
  previousRecommendations?: string[];
}