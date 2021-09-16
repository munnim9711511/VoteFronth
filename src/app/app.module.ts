import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { VoteComponent } from './vote/vote.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RaiseVoteComponent } from './raise-vote/raise-vote.component';
import { VoteResultComponent } from './vote-result/vote-result.component';
import { VoteReportComponent } from './vote-report/vote-report.component';
import { UrlService } from './url.service';
import { AjendaService } from './ajenda.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    VoteComponent,
    RegisterUserComponent,
    RaiseVoteComponent,
    VoteResultComponent,
    VoteReportComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UrlService,
    AjendaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
