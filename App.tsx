import React, { useState, useEffect } from 'react';
import { INITIAL_VOCAB } from './constants';
import { VocabItem, Category } from './types';
import { VocabCard } from './components/VocabCard';
import { generateVocabList } from './services/geminiService';
import { BookOpen, Search, Sparkles, Home, Filter, Menu, X } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState<'household' | 'generator'>('household');
  const [vocabList, setVocabList] = useState<VocabItem[]>(INITIAL_VOCAB);
  const [filter, setFilter] = useState<Category>('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Generator State
  const [generatorTopic, setGeneratorTopic] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedList, setGeneratedList] = useState<VocabItem[]>([]);

  // Filter Logic
  const filteredVocab = vocabList.filter(item => {
    const matchesCategory = filter === 'all' || item.category === filter;
    const matchesSearch = item.english.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.burmese.includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  const handleGenerate = async () => {
    if (!generatorTopic.trim()) return;
    
    setIsGenerating(true);
    try {
      const newItems = await generateVocabList(generatorTopic);
      const formattedItems: VocabItem[] = newItems.map((item, idx) => ({
        id: `gen-${Date.now()}-${idx}`,
        english: item.english,
        burmese: item.burmese,
        category: (item.category as any) || 'general'
      }));
      setGeneratedList(formattedItems);
    } catch (error) {
      alert("Failed to generate vocabulary. Please try again or check your API key.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg text-white">
              <BookOpen size={24} />
            </div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">Learn English</h1>
          </div>
          
          <nav className="flex space-x-1 bg-slate-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('household')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                activeTab === 'household' 
                  ? 'bg-white text-blue-700 shadow-sm' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Household Essentials
            </button>
            <button
              onClick={() => setActiveTab('generator')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all flex items-center gap-1 ${
                activeTab === 'generator' 
                  ? 'bg-white text-purple-700 shadow-sm' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sparkles size={16} />
              AI Generator
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        
        {activeTab === 'household' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <Home className="text-blue-500" size={20} />
                <h2>Household Essentials</h2>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input 
                    type="text" 
                    placeholder="Search vocab..." 
                    className="pl-9 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                {/* Filter */}
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <select
                    className="pl-9 pr-8 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none bg-white w-full sm:w-48 cursor-pointer"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value as Category)}
                  >
                    <option value="all">All Categories</option>
                    <option value="cleaning">Cleaning</option>
                    <option value="laundry">Laundry</option>
                    <option value="kitchen">Kitchen</option>
                    <option value="bathroom">Bathroom</option>
                  </select>
                </div>
              </div>
            </div>

            {filteredVocab.length === 0 ? (
              <div className="text-center py-12 text-slate-500">
                <p>No vocabulary found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredVocab.map((item) => (
                  <VocabCard key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'generator' && (
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="bg-purple-50 border border-purple-100 rounded-2xl p-8 text-center">
              <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm text-purple-600">
                <Sparkles size={24} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Expand Your Vocabulary</h2>
              <p className="text-slate-600 mb-6">Enter a topic (e.g., "Cooking", "Garden", "Office") and AI will generate a custom vocabulary list with Burmese meanings for you.</p>
              
              <div className="flex gap-2 max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Enter a topic..."
                  className="flex-1 px-4 py-3 rounded-xl border border-purple-200 focus:ring-2 focus:ring-purple-500 outline-none"
                  value={generatorTopic}
                  onChange={(e) => setGeneratorTopic(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
                />
                <button
                  onClick={handleGenerate}
                  disabled={isGenerating || !generatorTopic}
                  className="bg-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isGenerating ? 'Generating...' : 'Generate'}
                </button>
              </div>
            </div>

            {generatedList.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900">Generated Results for "{generatorTopic}"</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {generatedList.map((item) => (
                    <VocabCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

      </main>

      <footer className="bg-white border-t border-slate-200 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p>Vocabulary curated for learning English with Burmese translations.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;