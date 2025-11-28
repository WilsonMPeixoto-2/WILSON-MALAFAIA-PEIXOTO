import React, { useState } from 'react';
import { AssetData, INITIAL_ASSET_DATA } from './types';
import AssetForm from './components/AssetForm';
import PreviewModal from './components/PreviewModal';
import PopGuide from './components/PopGuide';

const App: React.FC = () => {
  const [formData, setFormData] = useState<AssetData>(INITIAL_ASSET_DATA);
  const [showPreview, setShowPreview] = useState(false);
  const [currentView, setCurrentView] = useState<'guide' | 'tool'>('guide');

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800">
      
      {/* HEADER */}
      <header className="bg-white py-6 border-b-4 border-[#003366] text-center shadow-sm sticky top-0 z-50">
        <div className="text-[#003366] text-xl md:text-2xl font-extrabold uppercase tracking-tight">
          4ª Coordenadoria Regional de Educação
        </div>
        <div className="text-slate-500 text-sm md:text-base font-semibold uppercase mt-1 tracking-wide">
          Gerência de Administração (GAD)
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-[#003366] to-[#001a33] text-white py-16 px-4 md:px-8 pb-32">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          <div className="md:col-span-2">
            <div className="inline-block bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase border border-white/20 mb-6 backdrop-blur-sm tracking-wider">
              Procedimento Operacional Padrão Digital
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4">
              BAIXA DE BENS<br />INSERVÍVEIS
            </h1>
          </div>

          {/* Info Card in Hero */}
          <div className="hidden md:block bg-white/5 border-l-4 border-white/30 p-8 rounded-r-xl backdrop-blur-sm">
            <h3 className="text-white/70 text-xs font-bold uppercase tracking-widest mb-3">
              Plataforma Integrada
            </h3>
            <div className="flex items-center gap-4">
               <div className="text-2xl font-bold">Sistema SEI! RIO</div>
            </div>
          </div>

        </div>
      </section>

      {/* MAIN CONTENT WRAPPER (Floating Card) */}
      <div className="max-w-5xl w-full mx-auto px-4 md:px-6 relative z-10 -mt-20 mb-20">
        <div className="bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden">
          
          {currentView === 'guide' ? (
            <PopGuide onAction={() => setCurrentView('tool')} />
          ) : (
            <AssetForm 
              data={formData} 
              onChange={setFormData} 
              onSubmit={() => setShowPreview(true)}
              onBack={() => setCurrentView('guide')}
            />
          )}

        </div>

        {/* Footer inside wrapper to align */}
        <footer className="mt-8 text-center text-slate-400 text-sm font-medium">
          &copy; {new Date().getFullYear()} 4ª CRE - SME Rio. Todos os direitos reservados.
        </footer>
      </div>

      {/* MODALS */}
      <PreviewModal 
        data={formData} 
        isOpen={showPreview} 
        onClose={() => setShowPreview(false)} 
      />
    </div>
  );
};

export default App;