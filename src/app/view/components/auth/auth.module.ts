import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
    imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
