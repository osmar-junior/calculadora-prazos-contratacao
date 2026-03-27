/**
 * config.js — Parâmetros da Calculadora de Prazos de Contratação
 * TRE-RN | Seção de Tecnologia da Informação
 *
 * MANUTENÇÃO:
 * - Para alterar prazos padrão, edite o objeto `PRAZOS_PADRAO`.
 * - Para alterar acréscimos por situação, edite o objeto `ACRESCIMOS`.
 * - Os acréscimos de múltiplas condições são somados linearmente.
 * - `usarDiasUteis`: true = dias úteis | false = dias corridos
 * - `feriados`: lista de feriados nacionais/regionais no formato "YYYY-MM-DD".
 *   Só é considerada quando `usarDiasUteis = true`.
 */

const CONFIG = {

  // ─── Modo de contagem de dias ────────────────────────────────────────────────
  usarDiasUteis: false, // true = dias úteis | false = dias corridos

  // ─── Feriados (relevantes apenas quando usarDiasUteis = true) ────────────────
  // Formato: "YYYY-MM-DD". Inclua nacionais e regionais do RN.
  feriados: [
    // Nacionais 2025
    "2025-01-01", "2025-04-18", "2025-04-21", "2025-05-01",
    "2025-06-19", "2025-09-07", "2025-10-12", "2025-11-02",
    "2025-11-15", "2025-11-20", "2025-12-25",
    // Nacionais 2026
    "2026-01-01", "2026-04-03", "2026-04-21", "2026-05-01",
    "2026-06-04", "2026-09-07", "2026-10-12", "2026-11-02",
    "2026-11-15", "2026-11-20", "2026-12-25",
    // Estaduais RN
    "2025-06-29", "2025-10-03",
    "2026-06-29", "2026-10-03",
  ],

  // ─── Prazos padrão (em dias) ─────────────────────────────────────────────────
  // Ordem das fases: ETP → TR → FASE_SELECAO → FORMALIZACAO → PRAZO_ENTREGA
  prazoesPadrao: {
    ETP:           20,
    TR:            10,
    FASE_SELECAO:  30,
    FORMALIZACAO:   5,
    PRAZO_ENTREGA:  5,
  },

  // ─── Tipos de contratação ─────────────────────────────────────────────────────
  tiposContratacao: [
    { id: 1,  label: "Contratação de TIC (equipamento)" },
    { id: 2,  label: "Contratação de TIC (software)" },
    { id: 3,  label: "Contratação de TIC (serviço)" },
    { id: 4,  label: "Aquisição de material - pronta-entrega" },
    { id: 5,  label: "Aquisição de material - pronta-entrega com amostra" },
    { id: 6,  label: "Aquisição de material - SRP" },
    { id: 7,  label: "Aquisição de material - SRP com amostra" },
    { id: 8,  label: "Aquisição de material - fornecimento contínuo" },
    { id: 9,  label: "Contratação de serviços diversos" },
    { id: 10, label: "Contratação de serviço de engenharia" },
    { id: 11, label: "Contratação de serviço para terceirização de mão de obra" },
    { id: 12, label: "Contratação de facilities" },
  ],

  // ─── Faixas de itens a contratar ─────────────────────────────────────────────
  faixasItens: [
    { id: 1, label: "Até 10"    },
    { id: 2, label: "Mais de 10" },
    { id: 3, label: "Mais de 25" },
    { id: 4, label: "Mais de 50" },
  ],

  // ─── Acréscimos por situação ──────────────────────────────────────────────────
  // Cada entrada define o acréscimo (em dias) por fase para uma dada condição.
  // Fases não informadas equivalem a acréscimo 0.
  acrescimos: {

    // Novidade? SIM
    novidade: {
      ETP:           30,
      TR:            15,
      FASE_SELECAO:  45,
      FORMALIZACAO:   5,
      PRAZO_ENTREGA: 30,
    },

    // Por tipo de contratação (chave = id do tipo)
    tipoContratacao: {
      1:  { ETP: 10, TR: 5, FASE_SELECAO: 20 },
      2:  { ETP: 10, TR: 5, FASE_SELECAO: 10 },
      3:  { ETP: 10, TR: 5, FASE_SELECAO: 10 },
      4:  { ETP:  0, TR: 0, FASE_SELECAO:  0 },
      5:  { ETP:  0, TR: 0, FASE_SELECAO: 30 },
      6:  { ETP:  0, TR: 0, FASE_SELECAO: 15 },
      7:  { ETP:  0, TR: 0, FASE_SELECAO: 30 },
      8:  { ETP:  0, TR: 0, FASE_SELECAO:  0 },
      9:  { ETP:  0, TR: 0, FASE_SELECAO:  0 },
      10: { ETP: 10, TR: 5, FASE_SELECAO: 20 },
      11: { ETP: 10, TR: 5, FASE_SELECAO: 20 },
      12: { ETP: 20, TR:10, FASE_SELECAO: 30 },
    },

    // Assinatura de contrato ou ARP? SIM
    assinaturaContrato: {
      FORMALIZACAO: 10,
    },

    // Prazo para entrega (dias corridos informados pelo usuário)
    // O acréscimo em PRAZO_ENTREGA é o próprio valor informado.
    // Tratado diretamente no código — não editar aqui.

    // Por faixa de itens (chave = id da faixa)
    itensAContratar: {
      1: { FASE_SELECAO:  4 },
      2: { FASE_SELECAO:  6, FORMALIZACAO: 2 },
      3: { FASE_SELECAO:  8, FORMALIZACAO: 3 },
      4: { FASE_SELECAO: 15, FORMALIZACAO: 4 },
    },
  },
};
