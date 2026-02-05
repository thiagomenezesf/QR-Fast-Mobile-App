import { Event } from '../types/Event';

export type RootStackParamList = {
  // --- Auth / Login ---
  Login: undefined;
  Register: undefined;
  RecuperarSenha: undefined;

  // --- User Flow ---
  UserPage: undefined;
  UserPageNew: undefined;
  DetalhesEventos: { eventId: string };
  ComprarIngresso: { event: Event };
  ConfirmarCompra: { 
    event: Event; 
    quantity: number; 
    total: number; 
  };
  IngressosComprados: undefined;

  // --- Admin Flow ---
  Administração: undefined;
  Pessoas: undefined;
  PessoaDetalhes: { personId: string };
  Dashboard: undefined;
  Scanner: undefined;
};