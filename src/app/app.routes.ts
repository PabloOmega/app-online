import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { LoginComponent } from './pages/login/login.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { TodosComponent } from './pages/todos/todos.component';
import { outputGuard } from './guards/output.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'pokemons', component: PokemonsComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
    { path: 'todos', component: TodosComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])), canDeactivate: [outputGuard] },
    { path: 'login', component: LoginComponent },
];
