import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { 
  LucideAngularModule, Mail, Phone, MapPin, Clock, 
  Send, MessageSquare, HelpCircle, Package 
} from 'lucide-angular';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, LucideAngularModule],
  templateUrl: './contact.html'
})
export class ContactPage {
  readonly icons = { Mail, Phone, MapPin, Clock, Send, MessageSquare, HelpCircle, Package };

  // Signals para gerenciar estado da UI
  openFaq = signal<number | null>(null);
  formSubmitted = signal(false);

  contactInfo = [
    { icon: Mail, title: "E-mail", details: "contato@noir.com.br", desc: "Responderemos em até 24h" },
    { icon: Phone, title: "Telefone", details: "+55 (11) 99999-0000", desc: "Seg-Sex, 9h às 18h" },
    { icon: MapPin, title: "Endereço", details: "Rua Oscar Freire, 123", desc: "Jardins, São Paulo - SP" },
    { icon: Clock, title: "Horário", details: "Seg-Sáb: 10h às 20h", desc: "Dom: 14h às 18h" },
  ];

  faqItems = [
    { q: "Qual o prazo de entrega?", a: "O prazo varia de 5 a 7 dias úteis para envio padrão." },
    { q: "Como funciona a troca?", a: "Você tem até 30 dias após o recebimento para solicitar." },
    { q: "Quais as formas de pagamento?", a: "Cartões de crédito em até 6x sem juros, PIX e boleto." },
    { q: "O frete é grátis?", a: "Sim, para compras acima de R$ 500,00 em todo o Brasil." },
  ];

  toggleFaq(index: number) {
    this.openFaq.update(val => val === index ? null : index);
  }

  onSubmit() {
    // Simulação de envio
    this.formSubmitted.set(true);
  }
}