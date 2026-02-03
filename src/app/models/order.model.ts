export interface Order {
  id: string;
  date: string;
  status: 'Entregue' | 'Processando' | 'Cancelado';
  total: string;
  items: number;
}