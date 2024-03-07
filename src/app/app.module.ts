import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, 
  NbMenuModule, NbCardModule, NbIconModule, NbButtonModule, 
  NbToastrModule, NbDatepickerModule, NbPopoverModule, NbSpinnerModule ,NbFormFieldModule,NbInputModule} from '@nebular/theme';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
   
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbMenuModule.forRoot(),
    NbCardModule,
    NbSidebarModule ,NbFormFieldModule,NbInputModule,
    NbMenuModule, NbCardModule, NbIconModule, NbButtonModule, 
    NbToastrModule, NbDatepickerModule, NbPopoverModule, NbSpinnerModule],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
  