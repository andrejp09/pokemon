import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {AppComponent} from './app.component';
import {ListagemPokemonComponent} from './listagem-pokemon/listagem-pokemon.component';
import {ListagemPokemonService} from './services/listagem-pokemon.service';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
    declarations: [
        AppComponent,
        ListagemPokemonComponent
    ],
    imports: [
        NgbPaginationModule,
        MatCardModule,
        MatToolbarModule,
        MatProgressSpinnerModule,
        BrowserAnimationsModule,
        BrowserModule
    ],
    providers: [ListagemPokemonService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
