type BlockType = "h" | "h3" | "p" | "sub" | "quote" | "list" | "table";

interface Block {
  type: BlockType;
  text?: string;
  items?: string[];
  rows?: { label: string; cols: string[] }[];
  headers?: string[];
}

interface SlideData {
  number: number;
  title: string;
  blocks: Block[];
}

const slides: SlideData[] = [
  {
    number: 1,
    title: "O Diagnóstico",
    blocks: [
      { type: "h", text: "Você tem um Porsche na garagem... mas está andando de bicicleta." },
      { type: "h3", text: "Ativos" },
      { type: "list", items: ["10 anos treinando Léo Santana", "320+ títulos fisiculturismo", "49K seguidores", "6 produtos digitais", "Esposa nutricionista 52K seguidores"] },
      { type: "h3", text: "Gaps" },
      { type: "list", items: ["Site fora do ar", "Zero anúncios pagos", "Sem lista de email", "Sem funil de vendas", "Produtos desorganizados", "Quiz bloqueando vendas"] },
      { type: "p", text: "Você tem o que 99% dos personais no Brasil nunca vão ter. Mas olha o que está acontecendo com tudo isso hoje." },
    ],
  },
  {
    number: 2,
    title: "Legendários — A Oportunidade",
    blocks: [
      { type: "list", items: ["50.000 homens já participaram", "19.000 só em 2025", "13 países", "~R$1.490 por inscrição"] },
      { type: "h3", text: "Quem já passou por lá" },
      { type: "p", text: "Thiago Nigro, Eliezer, Kaká Diniz, Neymar Pai" },
      { type: "h3", text: "Trekking Fit" },
      { type: "p", text: "Fechado para o público geral — oportunidade bloqueada." },
      { type: "quote", text: "Você está vendendo guarda-chuva só pra quem já está molhado, quando tem uma cidade inteira vendo nuvem de chuva." },
    ],
  },
  {
    number: 3,
    title: "Dois Públicos",
    blocks: [
      { type: "h", text: "Você não tem UM público. Você tem DOIS." },
      { type: "h3", text: "Persona 01 — MARCOS (O Cara do Shape)" },
      { type: "list", items: ["Quer ficar grande e definido", "Olha pro Léo e pensa: 'eu quero ficar assim'", "Busca hipertrofia e estética"] },
      { type: "h3", text: "Persona 02 — THIAGO (O Cara da Montanha)" },
      { type: "list", items: ["Quer completar o Legendários sem ir pro hospital", "Busca condicionamento e resistência", "Precisa aguentar 72h na montanha com 14kg nas costas"] },
      { type: "table", headers: ["", "Marcos", "Thiago"], rows: [
        { label: "Idade", cols: ["25-40 anos", "28-50 anos"] },
        { label: "Quer", cols: ["Shape de gigante", "Completar o Legendários com segurança"] },
        { label: "Maior medo", cols: ["Minha genética não ajuda", "Vou passar mal na montanha"] },
        { label: "Como convencer", cols: ["Se o Léo treina na estrada e mantém esse shape, funciona pra qualquer rotina.", "Em janeiro de 2025, um homem morreu no retiro. Preparação não é opcional."] },
      ]},
    ],
  },
  {
    number: 4,
    title: "A Escadinha — Coração da Estratégia",
    blocks: [
      { type: "list", items: [
        "1. GRÁTIS — Presente Digital (PDF) — R$0",
        "2. ENTRADA — eBooks (Dieta GG / Trekking) — R$37–47",
        "3. PROGRAMA — Protocolo GG / Trekking Fit 8 semanas — R$297",
        "4. PREMIUM — Consultoria VIP 90 dias — R$2.997",
        "5. RECORRENTE — Comunidade GG Mensal — R$47–97/mês",
      ]},
      { type: "p", text: "Cada degrau resolve um pedaço do problema. E quando o cliente resolve aquele pedaço, ele sente que precisa do próximo." },
    ],
  },
  {
    number: 5,
    title: "O Presente Grátis — Primeiro Degrau",
    blocks: [
      { type: "h3", text: "Linha GG" },
      { type: "p", text: "PDF: 'Os 3 Exercícios Secretos do Shape do Gigante'. Pessoa entra o email, recebe automaticamente." },
      { type: "h3", text: "Linha Trekking" },
      { type: "p", text: "PDF: 'Checklist: Você Está Pronto pra Montanha?'. Mesmo mecanismo." },
      { type: "p", text: "Funciona 24h por dia, 7 dias por semana. Enquanto você dorme, o presente está capturando emails." },
      { type: "quote", text: "Hoje quando alguém te descobre no Instagram... ele vai embora. Com o presente grátis, esse cara é SEU." },
    ],
  },
  {
    number: 6,
    title: "Emails Automáticos — A Novela",
    blocks: [
      { type: "p", text: "Sequência de 5 emails que roda sozinha após o download do PDF:" },
      { type: "list", items: [
        "Dia 1: Boas-vindas + PDF + Curiosidade",
        "Dia 2: O Drama — momento mais difícil",
        "Dia 3: A Virada — a descoberta do método",
        "Dia 4: Benefícios inesperados",
        "Dia 5: A Oferta — urgência + preço especial",
      ]},
      { type: "quote", text: "Essa sequência roda sozinha. Enquanto você está dormindo, ela está vendendo." },
    ],
  },
  {
    number: 7,
    title: "Produto de Entrada — Primeiro Dinheiro",
    blocks: [
      { type: "p", text: "Checkout: eBook 'Dieta do GG' por R$47, com order bump do eBook Trekking Fit por R$27 (de R$37)." },
      { type: "p", text: "Após compra: upsell para o Protocolo GG Completo com preço especial. 'Esta oferta só aparece UMA VEZ.'" },
      { type: "h3", text: "Filosofia" },
      { type: "quote", text: "O objetivo do primeiro produto NÃO é dar lucro. É transformar um CURIOSO em COMPRADOR. Quem pagou, presta atenção. Quem pagou, confia mais. Quem pagou, compra de novo." },
    ],
  },
  {
    number: 8,
    title: "O Programa Completo — Onde o Resultado Acontece",
    blocks: [
      { type: "h3", text: "Stack de Valor" },
      { type: "list", items: [
        "Protocolo GG completo via App MFIT — R$997",
        "Vídeos demonstrativos de cada exercício — R$497",
        "Módulo de Mobilidade e Performance — R$297",
        "Divisão de Elite por grupo muscular — R$197",
      ]},
      { type: "p", text: "Valor total: R$1.988 (riscado). Preço real: R$297. Garantia de 7 dias." },
      { type: "quote", text: "A pessoa assiste a aula, aprende, e quando vê o valor de tudo junto, o preço de R$297 parece muito pouco." },
    ],
  },
  {
    number: 9,
    title: "Consultoria VIP — Produto Premium",
    blocks: [
      { type: "p", text: "90 dias de acompanhamento, programa 100% personalizado, ajustes semanais, WhatsApp direto, 4 calls em vídeo, integração com Camila (nutrição)." },
      { type: "h3", text: "Comparativo" },
      { type: "p", text: "Presencial: R$200/sessão × 3x/sem × 4 sem = R$2.400/MÊS. Consultoria GG Online: R$2.997 por 3 MESES." },
      { type: "p", text: "Máximo 15–20 alunos simultâneos. Página de aplicação com filtro." },
    ],
  },
  {
    number: 10,
    title: "Comunidade GG — Dinheiro Todo Mês",
    blocks: [
      { type: "p", text: "Plataforma com treinos mensais, lives Q&A, ranking de desafios, e comunidade ativa." },
      { type: "h3", text: "Projeção de Receita Recorrente" },
      { type: "list", items: ["Mês 1: R$5K", "Mês 3: R$10K", "Mês 6: R$15K", "Mês 12: R$20K"] },
      { type: "h3", text: "Cálculo" },
      { type: "p", text: "300 membros × R$47/mês = R$14.100 TODO MÊS." },
      { type: "h3", text: "Planos" },
      { type: "list", items: ["Plano Base: R$47/mês — Treinos + Lives + Desafios", "Plano Completo: R$97/mês — Tudo + Plano alimentar da Camila"] },
      { type: "p", text: "Sem lançar nada novo, sem campanha, sem stress." },
    ],
  },
  {
    number: 11,
    title: "Felipe + Camila — Dupla Imbatível",
    blocks: [
      { type: "p", text: "Felipe (Treino) + Camila (Nutrição) = Método GG Completo." },
      { type: "p", text: "Camila aparece em todos os degraus da escadinha exceto o Grátis. Cross-sell no checkout: 'Adicionar Plano Alimentar por Camila Marinho — + R$97'." },
      { type: "quote", text: "Qualquer pessoa que treina sabe que resultado é treino + dieta. Vocês são a solução completa." },
    ],
  },
  {
    number: 12,
    title: "Tráfego — Como Vão Te Encontrar",
    blocks: [
      { type: "h3", text: "3 Canais" },
      { type: "list", items: [
        "Instagram/Facebook Ads — R$30–50/dia",
        "YouTube — Bastidores do Treino do Gigante",
        "Legendários — Comunidades e eventos",
      ]},
      { type: "p", text: "Fluxo: Canais → Página de Captura → Lista de Email → Escadinha." },
      { type: "quote", text: "Hoje você pesca com a mão. Com anúncios, é uma rede que trabalha 24 horas." },
      { type: "p", text: "R$30–50/dia = menos que o custo de 1 sessão de personal." },
    ],
  },
  {
    number: 13,
    title: "O Site — Quartel-General",
    blocks: [
      { type: "sub", text: "⚠️ felipemarinho.com.br está FORA DO AR. Quando alguém pesquisa 'Felipe Marinho personal' no Google, cai em NADA." },
      { type: "p", text: "O novo site será o hub central: apresentação profissional, todos os programas (GG, TF, VIP), resultados de alunos, links para redes." },
      { type: "p", text: "90% do público acessa via mobile — design mobile-first." },
      { type: "quote", text: "Seu site é onde TUDO se conecta." },
    ],
  },
  {
    number: 14,
    title: "Marca Pessoal — A História Que Vende",
    blocks: [
      { type: "h3", text: "Timeline" },
      { type: "list", items: [
        "Personal na orla de Salvador",
        "320+ títulos no fisiculturismo",
        "O encontro com Léo Santana",
        "Construção do Método GG",
        "Explosão digital: 49K seguidores, 6 produtos",
      ]},
      { type: "h3", text: "Posicionamento" },
      { type: "p", text: "'A Bruxa do Treino' — Intenso, direto, sem frescura." },
      { type: "quote", text: "Manifesto GG: 'Chega de treinar no escuro. Chega de planilha genérica. O método que mantém o Gigante no topo existe — e agora é seu. Bem-vindo ao Protocolo GG.'" },
      { type: "p", text: "As pessoas não compram de empresas. Compram de PESSOAS." },
    ],
  },
  {
    number: 15,
    title: "Abrir o Trekking Fit — Vitória Rápida",
    blocks: [
      { type: "h3", text: "Antes" },
      { type: "p", text: "Quiz de qualificação bloqueia vendas: 'Não conhece o Legendários? Não pode comprar.'" },
      { type: "h3", text: "Depois" },
      { type: "p", text: "Quiz aberto: todos os caminhos levam à compra." },
      { type: "list", items: ["Custo: R$0", "Tempo: 1 hora", "Impacto: até 5× mais vendas"] },
      { type: "quote", text: "Tem UMA coisa que dá pra fazer AMANHÃ e já mudar o cenário." },
    ],
  },
  {
    number: 16,
    title: "Calendário de Vendas — Legendários = Lançamento",
    blocks: [
      { type: "p", text: "Retiros acontecem a cada 2 meses (Jan, Mar, Mai, Jul, Set, Nov). Cada retiro anunciado dispara uma campanha de vendas do Trekking Fit." },
      { type: "h3", text: "Ciclo Perpétuo" },
      { type: "p", text: "Retiro Anunciado → Campanha Trekking Fit → Preparação → Retiro → Depoimentos → Próximo Retiro → (repete)" },
      { type: "quote", text: "Cada retiro anunciado é um lançamento sem precisar criar produto novo." },
    ],
  },
  {
    number: 17,
    title: "YouTube — O Conteúdo Que Ninguém Pode Copiar",
    blocks: [
      { type: "h3", text: "Ideias de Vídeo" },
      { type: "list", items: [
        "Como é treinar Léo Santana antes de um show",
        "A dieta do Léo em turnê — revelada",
        "O treino que o Léo mais odeia (e por que funciona)",
        "3 exercícios que todo Legendário precisa dominar",
      ]},
      { type: "h3", text: "Estrutura" },
      { type: "p", text: "Gancho (15s) → Conteúdo (8–12min) → CTA (15s)" },
      { type: "quote", text: "NINGUÉM mais no Brasil pode fazer isso. É conteúdo impossível de copiar." },
    ],
  },
  {
    number: 18,
    title: "Anúncios — O Outdoor Digital",
    blocks: [
      { type: "h3", text: "Funil de Anúncios (com R$50/dia)" },
      { type: "list", items: [
        "5.000 pessoas veem",
        "150 clicam",
        "50 dão o email",
        "3 compram no Mês 1",
        "10 compram em 6 meses",
      ]},
      { type: "h3", text: "ROI" },
      { type: "p", text: "Investe R$1.500/mês → Volta R$3.000–5.000." },
      { type: "quote", text: "É matemática, não sorte. R$50/dia em ads = preço de 1 sessão de personal. Mas trabalha 24h." },
    ],
  },
  {
    number: 19,
    title: "Os Números — Projeção 6 Meses",
    blocks: [
      { type: "table", headers: ["Mês", "Frontend", "Programa", "VIP", "Comunidade", "Total Receita", "Investimento Ads"], rows: [
        { label: "Mês 1", cols: ["R$1K", "—", "—", "—", "R$1K", "R$3K"] },
        { label: "Mês 2", cols: ["R$3K", "—", "—", "—", "R$3K", "R$4K"] },
        { label: "Mês 3", cols: ["R$4K", "R$4K", "—", "R$2K", "R$10K", "R$6K"] },
        { label: "Mês 4", cols: ["R$5K", "R$7K", "R$4K", "R$4K", "R$20K", "R$8K"] },
        { label: "Mês 5", cols: ["R$6K", "R$12K", "R$8K", "R$9K", "R$35K", "R$10K"] },
        { label: "Mês 6", cols: ["R$10K", "R$18K", "R$15K", "R$7K", "R$50K", "R$12K"] },
      ]},
      { type: "sub", text: "Projeção conservadora baseada em benchmarks do mercado fitness brasileiro. Estes NÃO são resultados garantidos — são metas baseadas em dados de mercado. Resultados dependem de execução." },
    ],
  },
  {
    number: 20,
    title: "O Roadmap — Ordem de Execução",
    blocks: [
      { type: "h3", text: "FASE 0 — DESBLOQUEIO (Semana 1–2)" },
      { type: "list", items: ["Reativar site", "Criar 2 PDFs grátis", "2 páginas de captura", "5 emails automáticos", "Abrir quiz Trekking"] },
      { type: "h3", text: "FASE 1 — LIGAR A MÁQUINA (Mês 1–2)" },
      { type: "list", items: ["Anúncios R$30–50/dia", "Order bumps nos eBooks", "Emails semanais", "Primeiros vídeos YouTube"] },
      { type: "h3", text: "FASE 2 — ACELERAR (Mês 3–4)" },
      { type: "list", items: ["Webinar Protocolo GG", "Página Consultoria VIP", "Escalar ads"] },
      { type: "h3", text: "FASE 3 — EXPANDIR (Mês 5–6)" },
      { type: "list", items: ["Comunidade GG", "Integrar Camila", "Ads R$300–500/dia"] },
    ],
  },
  {
    number: 21,
    title: "O Risco de Não Fazer Nada",
    blocks: [
      { type: "h3", text: "Cenário A — Faz" },
      { type: "list", items: ["Escada completa", "50K/mês no mês 6", "Comunidade crescendo", "YouTube bombando", "Dono do mercado Legendários"] },
      { type: "h3", text: "Cenário B — Não Faz" },
      { type: "list", items: ["Mesmos 49K seguidores em 1 ano", "Zero emails", "Outro personal planta a bandeira", "Site continua fora do ar", "Oportunidade Léo Santana desperdiçada"] },
      { type: "quote", text: "A pergunta não é 'posso fazer isso?' É 'posso me dar ao luxo de NÃO fazer?'" },
    ],
  },
  {
    number: 22,
    title: "O Sistema Completo — Resumo",
    blocks: [
      { type: "p", text: "Dois públicos (GG + Trekking) alimentados por 3 canais (Ads, YouTube, Legendários), passando pela escadinha completa:" },
      { type: "list", items: [
        "GRÁTIS — R$0",
        "ENTRADA — R$37–47",
        "PROGRAMA — R$297",
        "PREMIUM — R$2.997",
        "RECORRENTE — R$47–97/mês",
      ]},
      { type: "p", text: "Camila presente em todos os degraus exceto o Grátis. Meta Mês 6: R$50K/mês." },
    ],
  },
  {
    number: 23,
    title: "CTA Final",
    blocks: [
      { type: "h", text: "O mercado não espera." },
      { type: "p", text: "O próximo passo é uma conversa de 1 hora. Sem compromisso." },
      { type: "p", text: "Contato: gabriel@dtcoproducoes.com.br" },
      { type: "quote", text: "A única coisa que eu te peço: não deixa essa apresentação virar mais um PDF bonito na gaveta." },
      { type: "sub", text: "DT Coproduções · Gabriel Di Tullio" },
    ],
  },
];

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "h":
      return <h2 key={i} className="text-2xl font-bold text-black mt-4 mb-2">{block.text}</h2>;
    case "h3":
      return <h3 key={i} className="text-lg font-bold text-black mt-3 mb-1">{block.text}</h3>;
    case "p":
      return <p key={i} className="text-sm text-gray-700 leading-relaxed mb-2">{block.text}</p>;
    case "sub":
      return <p key={i} className="text-xs text-gray-500 italic mb-2">{block.text}</p>;
    case "quote":
      return (
        <blockquote key={i} className="border-l-4 border-orange-500 pl-4 my-3 italic text-sm text-gray-600">
          {block.text}
        </blockquote>
      );
    case "list":
      return (
        <ul key={i} className="list-disc list-inside space-y-1 mb-2 text-sm text-gray-700">
          {block.items?.map((item, j) => <li key={j}>{item}</li>)}
        </ul>
      );
    case "table":
      return (
        <table key={i} className="w-full text-xs border-collapse my-3">
          {block.headers && (
            <thead>
              <tr>
                {block.headers.map((h, j) => (
                  <th key={j} className="border border-gray-300 bg-gray-100 px-2 py-1 text-left font-bold text-gray-700">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {block.rows?.map((row, j) => (
              <tr key={j}>
                <td className="border border-gray-300 px-2 py-1 font-semibold text-gray-700 bg-gray-50">
                  {row.label}
                </td>
                {row.cols.map((col, k) => (
                  <td key={k} className="border border-gray-300 px-2 py-1 text-gray-600">
                    {col}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    default:
      return null;
  }
}

const FelipeMarinhoExport = () => {
  return (
    <div className="bg-white text-black min-h-screen font-sans">
      <div className="max-w-3xl mx-auto p-8">
        {/* Header */}
        <div className="mb-8 border-b-2 border-orange-500 pb-6">
          <h1 className="text-3xl font-bold text-black mb-2">
            Felipe Marinho — Diagnóstico de Posicionamento Digital
          </h1>
          <p className="text-sm text-gray-500">
            Documento de exportação · Todos os 23 slides
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Preparado por Gabriel Di Tullio · DT Coproduções · 2026
          </p>
        </div>

        {/* Slides */}
        {slides.map((slide, i) => (
          <div key={i} className="mb-8">
            {i > 0 && <hr className="border-gray-200 mb-6" />}
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
              SLIDE {String(slide.number).padStart(2, "0")}
            </p>
            <h2 className="text-xl font-bold text-black mb-3">{slide.title}</h2>
            {slide.blocks.map((block, j) => renderBlock(block, j))}
          </div>
        ))}

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-400">
            Documento confidencial · DT Coproduções · 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default FelipeMarinhoExport;
