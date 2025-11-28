import React from 'react';
import { AssetData } from '../types';

interface PreviewModalProps {
  data: AssetData;
  isOpen: boolean;
  onClose: () => void;
}

const PreviewModal: React.FC<PreviewModalProps> = ({ data, isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 bg-[#003366]/50 z-[100] flex items-center justify-center p-4 overflow-y-auto backdrop-blur-sm">
      <div className="bg-white w-full max-w-4xl rounded-xl shadow-2xl flex flex-col max-h-[95vh]">
        {/* Header - No Print */}
        <div className="flex justify-between items-center p-4 border-b border-slate-200 print:hidden bg-slate-50 rounded-t-xl">
          <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <i className="fas fa-file-alt text-[#003366]"></i> Visualização do Despacho
          </h2>
          <div className="flex items-center gap-3">
             <button onClick={handlePrint} className="flex items-center gap-2 bg-[#003366] text-white px-5 py-2 rounded font-bold text-sm hover:bg-blue-900 transition shadow-sm">
               <i className="fas fa-print"></i> Imprimir / PDF
             </button>
             <button onClick={onClose} className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-slate-200 text-slate-500 transition">
               <i className="fas fa-times"></i>
             </button>
          </div>
        </div>

        {/* Printable Content */}
        <div className="p-12 overflow-y-auto print:p-0 print:overflow-visible font-serif text-black">
          <div className="max-w-[210mm] mx-auto bg-white print:w-full">
            
            {/* Header Oficial */}
            <div className="text-center mb-8 pb-4 border-b-2 border-black">
              <h1 className="font-bold text-lg uppercase leading-tight">Prefeitura da Cidade do Rio de Janeiro</h1>
              <h2 className="font-bold text-md uppercase leading-tight">Secretaria Municipal de Educação</h2>
              <h3 className="font-bold text-md uppercase leading-tight">4ª Coordenadoria Regional de Educação</h3>
              <p className="text-sm mt-1 font-semibold">Gerência de Administração - GAD</p>
            </div>

            {/* Subject Line */}
            <div className="mb-10">
              <div className="flex justify-between items-start">
                 <div>
                    <p className="mb-1 text-sm"><strong>Processo SEI:</strong> ____________________________</p>
                    <p className="text-sm"><strong>Unidade Escolar:</strong> {data.unitDesignation || '________'} {data.unitName || '________________'}</p>
                 </div>
                 <div className="text-right">
                    <p className="font-bold border border-black px-2 py-1 text-sm inline-block">ASSUNTO: BAIXA PATRIMONIAL</p>
                 </div>
              </div>
            </div>

            {/* Body Text */}
            <div className="mb-8 text-justify leading-relaxed text-sm">
              <p className="mb-6">
                <strong>Senhora Coordenadora,</strong>
              </p>
              <p className="mb-4">
                Após conferência do inventário físico, foi verificado que existem nesta Unidade Escolar bens que não se encontram mais em condições de uso para as atividades educacionais ou administrativas, conforme detalhado na tabela abaixo.
              </p>
              <p className="mb-4">
                Solicitamos, portanto, a abertura de processo administrativo para a <strong>BAIXA</strong> dos referidos itens, em conformidade com o Procedimento Operacional Padrão da 4ª CRE.
              </p>
            </div>

            {/* Asset Table */}
            <div className="mb-8">
              <p className="font-bold mb-2 uppercase text-xs border-l-4 border-black pl-2">1. Detalhamento do Bem</p>
              <table className="w-full border-collapse border border-black text-xs">
                <thead>
                  <tr className="bg-gray-100 print:bg-gray-200">
                    <th className="border border-black p-2 text-center w-24">Patrimônio</th>
                    <th className="border border-black p-2 text-left">Descrição do Material</th>
                    <th className="border border-black p-2 text-center w-32">Motivo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-black p-2 text-center font-mono font-bold">{data.assetTag || 'S/N'}</td>
                    <td className="border border-black p-2">{data.description}</td>
                    <td className="border border-black p-2 text-center uppercase">{data.reason.split('(')[0]}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Justification Box */}
            <div className="mb-8">
              <p className="font-bold mb-2 uppercase text-xs border-l-4 border-black pl-2">2. Justificativa Técnica</p>
              <div className="border border-black p-4 text-sm text-justify">
                {data.justification || '(Justificativa não gerada)'}
              </div>
            </div>

            {/* Signatures */}
            <div className="mt-20 pt-8 page-break-inside-avoid">
               <div className="text-center w-1/2 mx-auto">
                 <div className="border-t border-black pt-2"></div>
                 <p className="font-bold text-sm uppercase">{data.requesterName || 'Diretor(a)'}</p>
                 <p className="text-xs">Direção / Gestão Patrimonial</p>
                 <p className="text-xs mt-1">Matrícula: ________________</p>
               </div>
               
               <div className="text-right mt-12">
                 <p className="text-sm">Rio de Janeiro, {new Date().toLocaleDateString('pt-BR')}</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;