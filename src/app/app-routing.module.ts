import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RaiseVoteComponent } from './raise-vote/raise-vote.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { VoteResultComponent } from './vote-result/vote-result.component';
import { VoteComponent } from './vote/vote.component';



const routes: Routes = [
{path:"",component:LoginComponent},
{path:"main",component:MainComponent,
children:[
  {path:"",component:VoteComponent,
children:[
  {path:"raise-vote",component:RaiseVoteComponent},
  {path:"vote-result",component:VoteResultComponent}
]
},
  {path:"register-user",component:RegisterUserComponent}
]

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
