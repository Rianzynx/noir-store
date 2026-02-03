import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // Usando Signals para um estado reativo
  darkMode = signal<boolean>(false);

  constructor() {
    // Verifica se o usuário já tem uma preferência salva ou prefere dark no sistema
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      this.setDarkMode(true);
    }
  }

  toggleDarkMode() {
    this.setDarkMode(!this.darkMode());
  }

  private setDarkMode(isDark: boolean) {
    this.darkMode.set(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
}