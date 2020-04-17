import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogPageComponent } from "./blog-page/blog-page.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { ContactPageComponent } from "./contact-page/contact-page.component";
import { ProjectsPageComponent } from "./projects-page/projects-page.component";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { AboutPageComponent } from "./about-page/about-page.component";

const routes: Routes = [
  { path:'', component: HomePageComponent},
  { path:'error', component: ErrorPageComponent},
  { path:'blog', component: BlogPageComponent},
  { path:'contact', component: ContactPageComponent},
  { path:'projects', component: ProjectsPageComponent},
  { path:'about', component: AboutPageComponent},
  { path:'**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
