import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
  { path:'', component: LandingPageComponent },
  { path:'search/:search-term', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {useHash: true, scrollPositionRestoration: "top"}
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
