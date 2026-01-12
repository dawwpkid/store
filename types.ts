
export enum Subject {
  PURE_MATH = 'Pure Mathematics',
  CHEMISTRY = 'Chemistry',
  PHYSICS = 'Physics'
}

export enum ResourceType {
  NOTES = 'Notes',
  WORKSHEETS = 'Worksheets',
  EXAM_QUESTIONS = 'Exam Questions',
  MARKING_SCHEMES = 'Marking Schemes'
}

export interface Resource {
  id: string;
  title: string;
  subject: Subject;
  topic: string;
  type: ResourceType;
  uploaderName: string;
  uploadDate: string;
  fileUrl: string;
  fileSize: string;
  description?: string;
  tags?: string[];
}

export interface Topic {
  id: string;
  name: string;
  subject: Subject;
}

export interface AIResponse {
  explanation: string;
  studyOrder: string[];
  youtubeRecommendations: Array<{
    title: string;
    url: string;
    description: string;
  }>;
}
