import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../../utils/pokemons';
import * as pokemonData from '../../../../public/json/pokemon-data.json';
import { EmailService } from '../../services/email/email.service';
import { PaypalService } from '../../services/paypal/paypal.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  pokemons: Pokemon[] = (pokemonData as any).default;

  constructor(private emailService: EmailService, private paypalService: PaypalService) {}

  ngOnInit(): void {
    
  }

  sendEmail(): void {
    const nombre = "Pablo";
    this.emailService.sendEmail(
      'psnavarrete@cecpiecuador.com', 
      'Pablo', 
      'Prueba', 
      `<h1>Hola ${nombre}</h1>`
    ).subscribe(response => console.log(response));
  }

  pay(): void{

    const total = 49.99;

    this.paypalService.getAccessToken()
      .subscribe(accessToken => {
        this.paypalService.createWebProfile(accessToken.access_token, 'Pago-' + Math.random())
          .subscribe(webProfile => {
            this.paypalService.createPayment(
              accessToken.access_token,
              webProfile.id,
              "http://localhost:4200/pokemons",
              "http://localhost:4200/login",
              total
            ).subscribe(payment => {
              window.location.href = payment.links[1].href;
            })
          });
      })
  }
} 
