export interface VocabItem {
  id: string;
  english: string;
  burmese: string;
  pronunciation_guide?: string; // Phonetic or similar if needed
  category: 'cleaning' | 'laundry' | 'kitchen' | 'general' | 'bathroom';
}

export type Category = VocabItem['category'] | 'all';