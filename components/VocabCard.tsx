import React from 'react';
import { VocabItem } from '../types';
import { PronunciationButton } from './PronunciationButton';

interface VocabCardProps {
  item: VocabItem;
}

export const VocabCard: React.FC<VocabCardProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow p-4 flex flex-col justify-between h-full">
      <div className="flex justify-between items-start mb-2">
        <div>
          <span className={`text-xs font-semibold px-2 py-1 rounded-full uppercase tracking-wide
            ${item.category === 'cleaning' ? 'bg-teal-100 text-teal-700' : 
              item.category === 'laundry' ? 'bg-purple-100 text-purple-700' :
              item.category === 'kitchen' ? 'bg-orange-100 text-orange-700' :
              item.category === 'bathroom' ? 'bg-cyan-100 text-cyan-700' :
              'bg-slate-100 text-slate-700'
            }`}>
            {item.category}
          </span>
        </div>
        <PronunciationButton text={item.english} />
      </div>
      
      <div className="mt-2">
        <div className="flex flex-col mb-1">
          <h3 className="text-xl font-bold text-slate-900 leading-tight">{item.english}</h3>
          {item.pronunciation_guide && (
            <span className="text-sm text-slate-500 font-mono mt-1">/{item.pronunciation_guide}/</span>
          )}
        </div>
        <p className="text-lg text-slate-600 font-burmese mt-2 border-t border-slate-100 pt-2">{item.burmese}</p>
      </div>
    </div>
  );
};