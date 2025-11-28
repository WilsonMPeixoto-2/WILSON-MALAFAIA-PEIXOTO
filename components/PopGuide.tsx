import React from 'react';

interface PopGuideProps {
  onAction: () => void;
}

const PopGuide: React.FC<PopGuideProps> = ({ onAction }) => {
  return (
    <div className="flex flex-col h-full bg-white animate-[fadeIn_0.3s_ease-out]">
      
      {/* Header */}
      <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
        <div>
          <p className="text-[#003366] font-bold uppercase tracking-wide text-sm md:text-base">Procedimento Operacional Padrão - Baixa de Bens no SEI! RIO</p>
        </div>
        <div className="flex items-center gap-3">
           <button 
             onClick={onAction}
             className="bg-[#003366] text-white font-bold text-sm px-6 py-3 rounded hover:bg-blue-900 transition shadow flex items-center gap-2 uppercase tracking-wide"
           >
             Acessar Ferramenta <i className="fas fa-arrow-right"></i>
           </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 space-y-16 font-sans text-slate-800 leading-relaxed">

        {/* Intro Section */}
        <section className="bg-slate-50 p-8 rounded-lg border-l-4 border-[#003366]">
          <h3 className="text-[#003366] font-bold text-xl mb-4">Prezados(as) Diretores(as),</h3>
          <p className="mb-4 text-justify text-slate-700 leading-7">
            A 4ª Coordenadoria Regional de Educação, por intermédio da Gerência de Administração (GAD), coloca à disposição das unidades escolares este Procedimento Operacional Padrão (POP) para formalização da Baixa de Bens patrimoniais no SEI!RIO.
          </p>
          <p className="mb-4 text-justify text-slate-700 leading-7">
            O objetivo deste material é padronizar os passos, reduzir dúvidas e conferir maior segurança jurídica, transparência e rastreabilidade às baixas encaminhadas à 4ª CRE, contribuindo para a boa gestão dos bens sob responsabilidade de cada unidade escolar.
          </p>
          <p className="text-justify text-slate-700 leading-7">
            Ao final, apresentamos um checklist sintético concebido para apoiar a rotina administrativa das escolas, sem substituir o juízo crítico e a responsabilidade de cada gestão.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-center border-t border-slate-200 pt-6">
            <div>
              <div className="font-bold text-[#003366]">Fátima das Graças Lima Barros</div>
              <div className="text-xs uppercase text-slate-500 font-semibold tracking-wider">Coordenadora – E/4ª CRE</div>
            </div>
            <div>
               <div className="font-bold text-[#003366]">Bianca Barreto da Fonseca Coelho</div>
               <div className="text-xs uppercase text-slate-500 font-semibold tracking-wider">Gerente – E/4ª CRE/GAD</div>
            </div>
          </div>
        </section>

        {/* Step 1: Abertura */}
        <section>
          <h3 className="text-2xl font-bold text-[#003366] mb-8 flex items-center gap-4 border-b border-slate-100 pb-4">
            <span className="bg-[#003366] text-white w-12 h-12 rounded-lg flex items-center justify-center text-xl shadow-sm">1</span>
            Abertura do Processo
          </h3>
          
          <div className="space-y-10 pl-4 md:pl-16">
            {/* 1.1 */}
            <div>
              <h4 className="font-bold text-xl text-slate-900 mb-3">1. Selecionar “Iniciar Processo”</h4>
              <p className="text-slate-600 text-justify leading-7 mb-6">
                Após acessar o SEI!RIO com seu usuário e senha institucionais, localize, no menu lateral esquerdo, o comando “Iniciar Processo”. É por meio dessa funcionalidade que será criada a “capa” do processo de Baixa de Bens.
              </p>
              
              {/* Visual Mockup - Sidebar */}
              <div className="max-w-xs bg-slate-100 rounded-md border border-slate-300 shadow-sm p-4 select-none">
                 <div className="space-y-2">
                    <div className="flex items-center gap-3 text-slate-400">
                       <i className="fas fa-bars"></i>
                       <span className="font-semibold">Menu</span>
                    </div>
                    <div className="pl-7 space-y-2">
                       <div className="text-slate-500 text-sm">Controle de Processos</div>
                       <div className="bg-[#dbeafe] text-[#1e40af] px-3 py-2 rounded font-bold text-sm border-l-4 border-[#1e40af] shadow-sm flex items-center justify-between">
                          Iniciar Processo
                          <i className="fas fa-mouse-pointer text-[#1e40af]"></i>
                       </div>
                       <div className="text-slate-500 text-sm">Retorno Programado</div>
                    </div>
                 </div>
              </div>
            </div>

            {/* 1.2 */}
            <div>
              <h4 className="font-bold text-xl text-slate-900 mb-3">2. Localizar o Tipo de Processo</h4>
              <p className="text-slate-600 text-justify leading-7 mb-6">
                Na tela de seleção de tipos de processo, utilize o campo de busca por palavra-chave para localizar o tipo correspondente à baixa de bens. Digite <strong className="text-[#003366] bg-blue-50 px-1 rounded">Baixa de Materiais</strong> e selecione a opção correta.
              </p>

              {/* Visual Mockup - Search */}
              <div className="max-w-md bg-white rounded-lg border border-slate-300 shadow-sm p-6 select-none">
                  <label className="block text-[#003366] font-bold mb-2">Escolha o Tipo do Processo:</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      value="Baixa de Materiais" 
                      readOnly 
                      className="w-full border border-slate-300 rounded px-3 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <div className="absolute top-full left-0 w-full bg-blue-50 border border-blue-200 mt-1 rounded shadow-lg z-10">
                       <div className="px-4 py-2 text-[#003366] font-bold flex items-center gap-2 bg-blue-100">
                          <i className="fas fa-check"></i> Baixa de Materiais
                       </div>
                       <div className="px-4 py-2 text-slate-400">Baixa de Material Bibliográfico</div>
                    </div>
                  </div>
              </div>
            </div>

             {/* 1.3 */}
             <div>
              <h4 className="font-bold text-xl text-slate-900 mb-3">3. Preencher os Dados do Processo</h4>
              <p className="text-slate-600 mb-6 text-justify leading-7">
                Ao confirmar o Tipo de Processo, será exibida a tela “Iniciar Processo”. Utilize sempre um padrão na Especificação que permita a rápida identificação da unidade e do objeto.
              </p>
              
              {/* Visual Mockup - SEI Form (Image 3 Style) */}
              <div className="bg-white border border-slate-300 rounded-lg shadow-sm p-6 space-y-6 max-w-3xl">
                 
                 {/* Field 1 */}
                 <div>
                    <label className="block text-lg font-bold text-slate-800 mb-1">Tipo do Processo:</label>
                    <div className="bg-slate-100 border border-slate-300 px-4 py-3 rounded text-slate-600 text-lg">
                       Baixa de Materiais
                    </div>
                 </div>

                 {/* Field 2 */}
                 <div>
                    <label className="block text-lg font-bold text-slate-800 mb-1">
                       Especificação: <span className="text-sm font-normal text-[#003366]">(Utilize o padrão sugerido pela 4ª CRE)</span>
                    </label>
                    <div className="border border-slate-400 rounded px-4 py-4 shadow-inner">
                       <div className="font-mono font-bold text-lg text-black">
                          BAIXA DE BENS – E/4ª CRE (04.XX.XXX)
                       </div>
                       <div className="font-mono font-bold text-lg text-black mt-1">
                          NOME DA ESCOLA .
                       </div>
                    </div>
                 </div>

                 {/* Field 3 */}
                 <div>
                    <label className="block text-lg font-bold text-slate-800 mb-1">Classificação por Assuntos:</label>
                    <div className="border border-slate-300 rounded px-4 py-3 flex justify-between items-center bg-white">
                       <span className="text-lg text-slate-700">03.08.01 - Baixa de bem patrimonial</span>
                       <span className="text-slate-400 font-bold">X</span>
                    </div>
                 </div>

                 {/* Field 4 */}
                 <div>
                    <label className="block text-lg font-bold text-slate-800 mb-1">Interessados:</label>
                    
                    {/* Blue Info Box */}
                    <div className="bg-[#e0f2fe] border-l-4 border-[#0284c7] p-4 mb-3 rounded-r">
                       <div className="flex items-center gap-2 font-bold text-[#0c4a6e] mb-1">
                          <i className="fas fa-info-circle"></i> Finalidade do campo
                       </div>
                       <p className="text-[#075985] text-sm leading-snug">
                          Permite registrar a GAD (Gerência de Administração) para que receba o processo.
                       </p>
                    </div>

                    <div className="border border-slate-300 rounded px-2 py-2 flex items-center gap-2 bg-slate-100">
                       <span className="bg-slate-200 border border-slate-300 px-2 py-1 rounded text-sm text-slate-600 flex items-center gap-2">
                          10729 - Gerência de Administração (E/4ª CRE/GAD) <i className="fas fa-times cursor-pointer"></i>
                       </span>
                    </div>
                 </div>

              </div>

              <p className="text-slate-600 mt-6 text-justify leading-7">Preencha os demais campos (como Observações) conforme a necessidade da unidade. Após concluir, clique em <strong>Salvar</strong>.</p>
            </div>
          </div>
        </section>

        {/* Step 2: Relação & Documentos Externos */}
        <section>
          <h3 className="text-2xl font-bold text-[#003366] mb-8 flex items-center gap-4 border-b border-slate-100 pb-4">
            <span className="bg-[#003366] text-white w-12 h-12 rounded-lg flex items-center justify-center text-xl shadow-sm">2</span>
            Registrar a Relação de Bens Inservíveis
          </h3>
          <div className="space-y-10 pl-4 md:pl-16">
            <div>
              <h4 className="font-bold text-xl text-slate-900 mb-3">1. Elaborar a Relação de Bens</h4>
              <p className="text-slate-600 text-justify leading-7">
                Elabore uma relação com os bens a serem baixados, preferencialmente em planilha, constando número de tombamento, descrição resumida, estado de conservação e eventual observação relevante.
              </p>
              <div className="mt-4 bg-blue-50 p-4 rounded text-sm text-[#003366] border border-blue-100 inline-block">
                <i className="fas fa-info-circle mr-2"></i>
                Salve a planilha em formato PDF e nomeie o documento de forma clara: <br/>
                <code className="font-bold bg-white px-2 py-1 rounded mt-2 block w-fit">RELACAO_BAIXA_E4CRE04xxxxx_MesAno.pdf</code>
              </div>
            </div>

            {/* External Document Guide (Image 4 Style) */}
            <div className="border border-blue-200 rounded-xl overflow-hidden shadow-sm">
                <div className="bg-[#003366] text-white p-4 font-bold text-lg flex items-center gap-3">
                   <i className="fas fa-file-upload"></i>
                   PROCEDIMENTO PARA INSERÇÃO DE DOCUMENTOS EXTERNOS
                </div>
                <div className="p-6 bg-white space-y-6">
                   <p className="text-slate-700 text-justify">
                      Documentos que não foram produzidos originalmente no ambiente do SEI!RIO (como planilhas convertidas em PDF) devem ser inseridos como <strong>Documento Externo</strong>.
                   </p>
                   
                   <div className="bg-[#f0f9ff] border border-blue-200 rounded p-4 text-sm text-[#003366]">
                      <strong>Importante:</strong> Para demonstrativos gerados digitalmente (planilhas, PDFs de sistemas), o campo <em>Formato</em> deve ser preenchido como <strong>Nato-digital</strong>.
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border border-slate-200 rounded p-4">
                         <div className="text-xs font-bold text-slate-400 uppercase mb-1">Tipo de Documento</div>
                         <div className="font-bold text-slate-800 text-lg">Documento Externo</div>
                      </div>
                      <div className="border border-slate-200 rounded p-4">
                         <div className="text-xs font-bold text-slate-400 uppercase mb-1">Nome na Árvore</div>
                         <div className="font-bold text-slate-800 text-lg">RELAÇÃO DE BENS - Mês/Ano</div>
                      </div>
                      <div className="border border-slate-200 rounded p-4">
                         <div className="text-xs font-bold text-slate-400 uppercase mb-1">Data do Documento</div>
                         <div className="font-bold text-slate-800 text-lg">Data de emissão</div>
                      </div>
                      <div className="border border-slate-200 rounded p-4">
                         <div className="text-xs font-bold text-slate-400 uppercase mb-1">Formato</div>
                         <div className="font-bold text-slate-800 text-lg">Nato-digital</div>
                      </div>
                   </div>
                </div>
            </div>
          </div>
        </section>

        {/* Step 3: Despacho */}
        <section>
          <h3 className="text-2xl font-bold text-[#003366] mb-8 flex items-center gap-4 border-b border-slate-100 pb-4">
            <span className="bg-[#003366] text-white w-12 h-12 rounded-lg flex items-center justify-center text-xl shadow-sm">3</span>
            Despacho da Direção
          </h3>
          <div className="space-y-10 pl-4 md:pl-16">
            <div>
              <h4 className="font-bold text-xl text-slate-900 mb-3">1. Incluir o Despacho</h4>
              <p className="text-slate-600 text-justify leading-7 mb-8">
                Após anexar a relação de bens, inclua um <strong>Despacho</strong> no processo. Classificar corretamente o motivo da baixa é fundamental. Utilize o quadro abaixo como guia:
              </p>
              
              {/* Definition Table */}
              <div className="overflow-x-auto rounded-lg border border-slate-200 shadow-sm mb-10">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="bg-[#003366] text-white">
                      <th className="p-4 font-bold uppercase w-1/4">Categoria</th>
                      <th className="p-4 font-bold uppercase w-1/3">Descrição</th>
                      <th className="p-4 font-bold uppercase">Palavra-Chave</th>
                      <th className="p-4 font-bold uppercase">Exemplo Prático</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="bg-slate-50">
                      <td className="p-4 font-bold text-[#003366]">DESUSO</td>
                      <td className="p-4 text-slate-700">O bem está em bom estado e funciona, mas não tem mais aplicação prática na unidade.</td>
                      <td className="p-4 font-bold text-slate-500">Inútil</td>
                      <td className="p-4 text-slate-700 italic">• Máquina de escrever antiga<br/>• Retroprojetor</td>
                    </tr>
                    <tr className="bg-blue-50/50">
                      <td className="p-4 font-bold text-[#003366]">IMPRESTABILIDADE</td>
                      <td className="p-4 text-slate-700">O bem está quebrado, danificado ou avariado, e seu conserto é antieconômico.</td>
                      <td className="p-4 font-bold text-slate-500">Quebrado</td>
                      <td className="p-4 text-slate-700 italic">• Fogão com ferrugem grave<br/>• Bebedouro vazando</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-4 font-bold text-[#003366]">OBSOLESCÊNCIA</td>
                      <td className="p-4 text-slate-700">O bem funciona, mas está tecnologicamente ultrapassado.</td>
                      <td className="p-4 font-bold text-slate-500">Ultrapassado</td>
                      <td className="p-4 text-slate-700 italic">• Computador Windows 7<br/>• TV de Tubo</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Model Text */}
              <div className="bg-white border-2 border-slate-200 rounded-lg p-6 relative">
                 <div className="absolute -top-3 left-6 bg-slate-200 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-600 rounded">
                    Modelo Sugerido para o Texto
                 </div>
                 <div className="font-serif text-slate-800 space-y-4 pt-2">
                    <p>Srª Coordenadora,</p>
                    <p>Após conferência e levantamento, foi verificado que existem nesta Unidade Escolar os bens listados abaixo, os quais não se encontram mais em condições de uso [ou: não possuem mais utilidade para as atividades desta unidade], conforme laudo técnico em anexo.</p>
                    <p>Desta forma, solicitamos a V.S.ª. a autorização para a baixa patrimonial dos referidos bens.</p>
                    
                    <div className="border border-black mt-4 p-2 text-xs font-mono">
                       <div className="grid grid-cols-[1fr_2fr_1fr] border-b border-black font-bold bg-gray-100 p-1">
                          <div>Nº do Inventário</div>
                          <div>Bem (Descrição)</div>
                          <div>Quantidade</div>
                       </div>
                       <div className="grid grid-cols-[1fr_2fr_1fr] p-1 border-b border-gray-300">
                          <div>160500000XXXXXX</div>
                          <div>FOGÃO INDUSTRIAL 3 BOCAS</div>
                          <div>1</div>
                       </div>
                       <div className="grid grid-cols-[1fr_2fr_1fr] p-1">
                          <div>160500000YYYYYY</div>
                          <div>ARQUIVO DE AÇO 4 GAVETAS</div>
                          <div>1</div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 4: Checklist */}
        <section className="bg-slate-50 p-8 rounded-lg border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold text-[#003366] mb-6 flex items-center gap-3">
            <i className="fas fa-clipboard-check"></i> 4. Checklist Final da Baixa de Bens
          </h3>
          
          <p className="text-slate-700 mb-6 font-semibold text-justify leading-7">
            Antes de encaminhar o processo de baixa à 4ª CRE, utilize o checklist a seguir para garantir padronização, completude e segurança documental:
          </p>

          <ul className="space-y-4">
            {[
              'Verifique se o Tipo do Processo foi corretamente selecionado como "Baixa de Materiais".',
              'Confirme se a Especificação segue o padrão "BAIXA DE BENS – E/4ª CRE (04.xx.xxx) – Nome da Escola".',
              'Certifique-se de que a Classificação por Assuntos está adequada (03.08.01 – Baixa de bem patrimonial).',
              'Verifique se a relação de bens está anexada como Documento Externo e devidamente nomeada.',
              'Confirme se o Despacho da Direção foi redigido com clareza e devidamente assinado.',
              'Garanta que o campo Interessados inclua, no mínimo, a unidade escolar e a GAD/4ª CRE.',
              'Verifique se não há documentos pendentes de assinatura na árvore do processo.'
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <i className="fas fa-check-square text-[#003366] text-lg"></i>
                </div>
                <span className="text-slate-700 text-justify leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 font-bold text-[#003366] bg-white p-4 rounded border border-slate-200 text-center">
            Estando tudo correto, tramitar o processo à GAD para providências.
          </div>
        </section>

        {/* Footer Address */}
        <footer className="bg-slate-50 p-8 rounded text-center text-sm text-slate-500 border-t border-slate-200 mt-8">
          <h4 className="font-bold text-[#003366] uppercase mb-2 tracking-wide">4ª Coordenadoria Regional de Educação</h4>
          <p className="mb-1">Rua Professor Luís Rondelli, 150 – Olaria – Rio de Janeiro – RJ – CEP 21021-630</p>
          <p className="mb-1">Tel.: (21) 3975-5844 | (21) 3393-3476</p>
          <p className="mb-3">E-mail: gad4cre@rioeduca.net</p>
          <p className="font-semibold text-[#003366]">Horário de Atendimento: Segunda a Sexta, das 9h às 17h</p>
          <div className="mt-6 pt-6 border-t border-slate-200 text-xs text-slate-400">
            © 2025 Gerência de Administração - Documento Oficial. Uso institucional restrito.
          </div>
        </footer>

      </div>
      
      <div className="p-6 border-t border-slate-100 flex justify-center bg-white sticky bottom-0 z-10 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <button 
          onClick={onAction}
          className="w-full md:w-auto px-8 py-4 bg-[#003366] text-white font-bold rounded-lg hover:bg-blue-900 transition shadow-lg flex items-center justify-center gap-3 text-lg uppercase tracking-wide transform hover:-translate-y-1"
        >
           Ir para a Ferramenta <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default PopGuide;