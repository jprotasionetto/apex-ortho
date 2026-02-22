export interface GuideSection {
  id: string;
  title: string;
  content: string[];
  keyPoints?: string[];
  colorCode?: 'safe' | 'caution' | 'danger' | 'info';
}

export interface GuideData {
  id: string;
  name: string;
  description: string;
  sections: GuideSection[];
  clinicalPearl?: string;
  pitfall?: string;
  references?: string[];
}
