export type TableData = {
  id: number;
  [k: string]: any;
};

export type Consumidor = {
  id: number;
  nome: string;
  cpf: string | null;
  isento: boolean;
  codigo?: string;
};

export type Empresa = {
  id: number;
  nome: string;
  cnpj: string;
  responsavel: string;
};

export type Municipio = {
  id: number;
  nome: string;
};

export type Unidade = {
  id: number;
  nome: string;
  endereco: string;
  municipio: Municipio;
  ativa: boolean;
};

export type Contrato = {
  id: number;
  empresa: Empresa;
  tipo_refeicao: number;
  vigente: boolean;
  identificador: string;
  data_inicio: string;
  data_fim: string;
  contrato_unidades: ContratoUnidade[];
};

export type ContratoUnidade = {
  id: number;
  cota_diaria: number;
  preco: number;
  percentual_codigo: number;
  unidade: Unidade;
  contrato: number;
  tipo_refeicao: number;
};

export type Consumo = {
  dia: string;
  hora: string;
  consumidor: Consumidor;
  contrato: ContratoUnidade;
  tipo_documento: string;
};
