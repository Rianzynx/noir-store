import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, User, Package, ChevronRight, LogOut } from 'lucide-angular';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule], 
  templateUrl: './profile.html'
})
export class ProfilePage {
  readonly UserIcon = User;
  readonly PackageIcon = Package;
  readonly ChevronIcon = ChevronRight;
  readonly LogoutIcon = LogOut;
}