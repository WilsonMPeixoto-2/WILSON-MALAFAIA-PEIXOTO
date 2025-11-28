import React, { useState } from 'react';
import { AssetData, WriteOffReason } from '../types';
import { analyzeAssetImage, generateFormalJustification } from '../services/geminiService';

interface AssetFormProps {
  data: AssetData;
  onChange: (newData: AssetData) => void;
  onSubmit: () => void;
  onBack: () => void;
}

const AssetForm: React.FC<AssetFormProps> = ({ data, onChange, onSubmit, onBack }) => {
  const [isAnalyzingImage, setIsAnalyzingImage] = useState(false);
  const [isGeneratingText, setIsGeneratingText] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (field: keyof AssetData, value: any) => {
    onChange({ ...data, [field]: value });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64String = reader.result as string;
      handleInputChange('evidenceImage', base64String);

      setIsAnalyzingImage(true);
      setError(null);
      try {
        const analysis = await analyzeAssetImage(base64String);
        handleInputChange('conditionDescription', analysis);
      } catch (err) {
        setError("Falha ao analisar imagem.");
      } finally {
        setIsAnalyzingImage(false);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleGenerateJustification = async () => {
    if (!data.conditionDescription && !data.justification) {
      setError("Forneça notas sobre a condição ou um rascunho primeiro.");
      return;
    }
    setIsGeneratingText(true);
    setError(null);
    try {
      const formalText = await generateFormalJustification(
        data.reason,
        data.justification,
        data.conditionDescription,
        data.description || 'Bem Patrimonial'
      );
      handleInputChange('justification', formalText);
    } catch (err) {
      setError("Falha ao gerar justificativa.");
    } finally {
      setIsGeneratingText(false);
    }
  };

  return (
    <div className="p-8 md:p-12 animate-[fadeIn_0.3s_ease-out]">
      
      {/* Intro Section */}
      <section className="mb-12">
        <div className="flex justify-between items-start border-b-2 border-slate-100 pb-4 mb-6">
          <h2 className="text-[#003366] text-2xl font-bold flex items-center gap-3">
            <i className="fas fa-file-signature text-[#003366]"></i>
            INSTRUÇÃO DO PROCESSO
          </h2>
          <button 
             onClick={onBack}
             className="text-[#003366] font-bold uppercase text-xs border border-slate-200 px-3 py-2 rounded hover:bg-slate-50 transition flex items-center gap-2"
           >
             <i className="fas fa-arrow-left"></i> Voltar ao Guia
           </button>
        </div>

        <div className="font-serif text-slate-600 text-lg leading-relaxed space-y-4 text-justify">
          <p>
            <strong>Prezado(a) Gestor(a),</strong> utilize este formulário inteligente para instruir o processo de baixa. 
            O sistema analisa o estado do bem e redige a justificativa técnica 
            conforme os padrões da GAD/4ª CRE.
          </p>
        </div>
      </section>

      {/* STEP 1: IDENTIFICATION */}
      <section className="mb-12">
        <div className="grid grid-cols-[48px_1fr] gap-6">
          <div className="w-12 h-12 bg-[#003366] text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-md">1</div>
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Identificação da Unidade</h3>
            <p className="text-slate-500 mb-6">Preencha os dados conforme o cabeçalho oficial.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1">
                <label className="text-sm font-bold text-slate-700">Nome do Solicitante</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-[#003366] outline-none transition bg-slate-50"
                  value={data.requesterName}
                  onChange={(e) => handleInputChange('requesterName', e.target.value)}
                  placeholder="Ex: Ana Maria (Diretora)"
                />
              </div>
              <div className="space-y-1">
                 <label className="text-sm font-bold text-slate-700">Nome da Escola</label>
                 <input
                  type="text"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-[#003366] outline-none transition bg-slate-50"
                  value={data.unitName}
                  onChange={(e) => handleInputChange('unitName', e.target.value)}
                  placeholder="Ex: EM PRESIDENTE KENNEDY"
                />
              </div>
              <div className="col-span-full">
                 <div className="bg-[#f0f9ff] border-l-4 border-[#003366] p-4 rounded-r border-y border-r border-blue-100">
                    <div className="text-[#003366] font-extrabold text-sm mb-1 uppercase">
                      <i className="fas fa-pen mr-2"></i> Padrão de Designação (SEI)
                    </div>
                    <input
                      type="text"
                      className="w-full mt-2 font-mono font-bold text-[#003366] px-3 py-2 border border-blue-200 rounded bg-white"
                      value={data.unitDesignation}
                      onChange={(e) => handleInputChange('unitDesignation', e.target.value)}
                      placeholder="04.XX.XXX"
                    />
                    <p className="text-xs text-slate-500 mt-2">Digite apenas o código da designação. O sistema formatará o restante.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-t border-slate-100 my-10" />

      {/* STEP 2: ASSET DETAILS */}
      <section className="mb-12">
        <div className="grid grid-cols-[48px_1fr] gap-6">
          <div className="w-12 h-12 bg-[#003366] text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-md">2</div>
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Dados do Bem (SISBENS)</h3>
            <p className="text-slate-500 mb-6">Informações devem ser idênticas às da carga patrimonial.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
              <div className="space-y-1">
                <label className="text-sm font-bold text-slate-700">Nº Patrimônio (Plaqueta)</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-[#003366] outline-none transition bg-slate-50"
                  value={data.assetTag}
                  onChange={(e) => handleInputChange('assetTag', e.target.value)}
                  placeholder="123456"
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-bold text-slate-700">Descrição do Material</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-[#003366] outline-none transition bg-slate-50"
                  value={data.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Ex: Armário de Aço 2 portas"
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-bold text-slate-700">Motivo da Baixa</label>
                <div className="relative">
                  <select
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-[#003366] outline-none transition bg-slate-50 appearance-none"
                    value={data.reason}
                    onChange={(e) => handleInputChange('reason', e.target.value as WriteOffReason)}
                  >
                    {Object.values(WriteOffReason).map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                    <i className="fas fa-chevron-down"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-t border-slate-100 my-10" />

      {/* STEP 3: ANALYSIS */}
      <section className="mb-12">
        <div className="grid grid-cols-[48px_1fr] gap-6">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-700 text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-md">
            <i className="fas fa-magic"></i>
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Análise Técnica</h3>
            <p className="text-slate-500 mb-6">Carregue a foto para análise automática de danos e geração de laudo.</p>

            <div className="bg-[#f8fafc] border-l-[5px] border-[#003366] p-6 rounded-r border border-slate-200">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 
                 {/* Upload */}
                 <div>
                    <div className="font-bold text-[#003366] uppercase text-sm mb-3">1. Evidência Fotográfica</div>
                    <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-slate-300 border-dashed rounded-lg cursor-pointer bg-white hover:bg-slate-50 hover:border-[#003366] transition group">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            {data.evidenceImage ? (
                                <img src={data.evidenceImage} alt="Preview" className="h-40 object-contain rounded" />
                            ) : (
                              <>
                                <i className="fas fa-camera text-3xl text-slate-400 mb-3 group-hover:text-[#003366] transition"></i>
                                <p className="text-sm text-slate-500 font-semibold">Clique para enviar foto</p>
                              </>
                            )}
                        </div>
                        <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                    </label>
                 </div>

                 {/* Result */}
                 <div>
                    <div className="flex justify-between items-center mb-3">
                      <div className="font-bold text-[#003366] uppercase text-sm">2. Laudo Visual</div>
                      {isAnalyzingImage && <span className="text-xs font-bold text-purple-600 animate-pulse"><i className="fas fa-circle-notch fa-spin mr-1"></i> Analisando...</span>}
                    </div>
                    <textarea 
                      className="w-full h-48 p-4 bg-white border border-slate-300 rounded-lg text-sm text-slate-700 font-medium resize-none focus:ring-2 focus:ring-[#003366] outline-none"
                      placeholder="O sistema identificará corrosão, quebras ou obsolescência automaticamente..."
                      value={data.conditionDescription}
                      onChange={(e) => handleInputChange('conditionDescription', e.target.value)}
                    ></textarea>
                 </div>

               </div>
            </div>

          </div>
        </div>
      </section>

      {/* STEP 4: JUSTIFICATION */}
      <section className="mb-12">
        <div className="grid grid-cols-[48px_1fr] gap-6">
          <div className="w-12 h-12 bg-[#003366] text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-md">4</div>
          <div className="w-full">
            <div className="flex justify-between items-center mb-2">
               <h3 className="text-xl font-bold text-slate-800">Justificativa para o Despacho</h3>
               <button 
                onClick={handleGenerateJustification}
                disabled={isGeneratingText}
                className="bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold uppercase px-4 py-2 rounded shadow transition flex items-center gap-2"
               >
                 {isGeneratingText ? <i className="fas fa-spinner fa-spin"></i> : <i className="fas fa-wand-magic-sparkles"></i>}
                 Redigir Justificativa
               </button>
            </div>
            <p className="text-slate-500 mb-6">Texto formal que irá compor o documento no SEI.</p>
            
            <textarea
              className="w-full p-5 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition font-serif text-white bg-slate-800 leading-relaxed h-40 shadow-inner placeholder-slate-400"
              value={data.justification}
              onChange={(e) => handleInputChange('justification', e.target.value)}
              placeholder="Clique no botão acima para gerar uma justificativa formal..."
            />
          </div>
        </div>
      </section>
      
      {error && (
        <div className="bg-red-50 text-red-700 p-4 rounded border border-red-200 mb-6 flex items-center gap-3">
          <i className="fas fa-exclamation-triangle"></i>
          {error}
        </div>
      )}

      {/* Action Button */}
      <div className="text-right">
        <button
          onClick={onSubmit}
          className="bg-[#003366] hover:bg-blue-900 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 flex items-center gap-3 ml-auto text-lg"
        >
          Visualizar Ofício
          <i className="fas fa-file-export"></i>
        </button>
      </div>
    </div>
  );
};

export default AssetForm;