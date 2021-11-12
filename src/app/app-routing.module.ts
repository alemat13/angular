import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
<<<<<<< HEAD
=======
// import { ListPokemonComponent }   from './list-pokemon.component';
// import { DetailPokemonComponent } from './detail-pokemon.component';
>>>>>>> 87dfb420bff1264644c0b549a902730777ac60c7
import { PageNotFoundComponent }  from './page-not-found.component'

// routes
const appRoutes: Routes = [
	{ path: '', redirectTo: 'pokemons', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }
