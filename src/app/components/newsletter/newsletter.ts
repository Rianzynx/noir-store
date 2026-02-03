import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importante para o binding do input
import { LucideAngularModule, ArrowRight } from 'lucide-angular';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './newsletter.html'
})
export class Newsletter {
  readonly ArrowIcon = ArrowRight;
  email: string = "";

  onSubmit() {
    console.log("Subscribed:", this.email);
    // Chamada para backend
    alert("Inscrição realizada com sucesso!");
    this.email = ""; // Limpa o campo após o envio
  }
}