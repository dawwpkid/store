
import React, { useState, useMemo } from 'react';
import { Subject, Resource } from './types';
import { SYLLABUS, INITIAL_RESOURCES } from './constants';
import Navbar from './components/Navbar';
import SubjectCard from './components/SubjectCard';
import ResourceList from './components/ResourceList';
import AIAssistant from './components/AIAssistant';
import UploadModal from './components/UploadModal';

const App: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<Subject>(Subject.PURE_MATH);
  const [selectedTopic, setSelectedTopic] = useState<string>(SYLLABUS[Subject.PURE_MATH][0]);
  const [resources, setResources] = useState<Resource[]>(INITIAL_RESOURCES);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredResources = useMemo(() => {
    return resources.filter(res => {
      const matchesSearch = res.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });
  }, [resources, searchQuery]);

  const handleSubjectChange = (sub: Subject) => {
    setSelectedSubject(sub);
    setSelectedTopic(SYLLABUS[sub][0]);
  };

  const handleUpload = (newRes: Resource) => {
    setResources(prev => [newRes, ...prev]);
  };

  return (
    <div className="min-h-screen pb-20">
      <Navbar 
        onShowUpload={() => setIsUploadOpen(true)} 
        onHome={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
      />

      <main className="max-w-7xl mx-auto px-4 mt-8">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            A-Level Excellence <span className="text-blue-600">Starts Here.</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            The dedicated hub for Zimbabwean Science students. Access peer-contributed notes, 
            worksheets, and exam resources aligned strictly with the ZIMSEC syllabus.
          </p>
        </div>

        {/* Search & Subject Bar */}
        <div className="mb-10 space-y-6">
          <div className="relative max-w-xl">
            <span className="absolute inset-y-0 left-4 flex items-center text-slate-400">🔍</span>
            <input 
              type="text" 
              placeholder="Search all resources..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-slate-200 shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <SubjectCard 
              subject={Subject.PURE_MATH} 
              icon="📐" 
              onClick={() => handleSubjectChange(Subject.PURE_MATH)} 
              isActive={selectedSubject === Subject.PURE_MATH}
            />
            <SubjectCard 
              subject={Subject.CHEMISTRY} 
              icon="🧪" 
              onClick={() => handleSubjectChange(Subject.CHEMISTRY)} 
              isActive={selectedSubject === Subject.CHEMISTRY}
            />
            <SubjectCard 
              subject={Subject.PHYSICS} 
              icon="⚛️" 
              onClick={() => handleSubjectChange(Subject.PHYSICS)} 
              isActive={selectedSubject === Subject.PHYSICS}
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Syllabus Sidebar */}
          <aside className="lg:w-72 shrink-0">
            <div className="sticky top-24 bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Syllabus Topics</h4>
              <nav className="space-y-1 overflow-y-auto max-h-[60vh] pr-2 custom-scrollbar">
                {SYLLABUS[selectedSubject].map(topic => (
                  <button
                    key={topic}
                    onClick={() => setSelectedTopic(topic)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      selectedTopic === topic 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {topic}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1 min-w-0">
            {/* Header for selected topic */}
            <div className="mb-8">
              <div className="flex items-center gap-2 text-sm text-blue-600 font-bold uppercase tracking-wider mb-2">
                <span>{selectedSubject}</span>
                <span>/</span>
                <span>Topic Guide</span>
              </div>
              <h2 className="text-3xl font-black text-slate-800">{selectedTopic}</h2>
            </div>

            {/* AI Assistant Section */}
            <AIAssistant subject={selectedSubject} topic={selectedTopic} />

            {/* Resources Section */}
            <ResourceList resources={filteredResources} topic={selectedTopic} />
          </div>
        </div>
      </main>

      {isUploadOpen && (
        <UploadModal 
          onClose={() => setIsUploadOpen(false)} 
          onUpload={handleUpload}
        />
      )}

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-6 right-6 sm:hidden z-40">
        <button 
          onClick={() => setIsUploadOpen(true)}
          className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl active:scale-90 transition-transform text-2xl"
        >
          +
        </button>
      </div>

      <footer className="mt-20 border-t border-slate-200 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 opacity-50">
            <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center text-white font-bold text-lg">Z</div>
            <span className="font-bold text-slate-800">ZimStudy Hub</span>
          </div>
          <p className="text-slate-400 text-sm">© 2024 ZimStudy Hub. For Zimbabwean Students, By Students.</p>
          <div className="flex gap-4 text-slate-400 text-sm">
            <a href="#" className="hover:text-blue-600">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
