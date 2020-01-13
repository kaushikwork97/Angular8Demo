import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WalletComponent } from './wallet/wallet.component';
import { HomeComponent } from './home/home.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import { NgxUiLoaderModule, NgxUiLoaderConfig } from 'ngx-ui-loader';
import { HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import {MatCheckboxModule} from '@angular/material/checkbox';





const appRoutes: Routes = [
  { path: 'wallet', component: WalletComponent },
  { path: '', component: HomeComponent },
  { path: 'exchange', component: ExchangeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  "fgsColor": "#ffffff",
  "fgsType": "double-bounce",
  "blur": 4,
  "pbColor": "ffffff",
};

@NgModule({
  declarations: [
    AppComponent,
    WalletComponent,
    HomeComponent,
    ExchangeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    PerfectScrollbarModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    HttpClientModule,
    MatMenuModule,
    MatCheckboxModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
