import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { FatFooterComponent } from './fat-footer/fat-footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { HeroComponent } from './hero/hero.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { HeroContactFormComponent } from './hero-contact-form/hero-contact-form.component';
import { HeroAboutMeComponent } from './hero-about-me/hero-about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutMeComponent,
    ProjectCardComponent,
    FatFooterComponent,
    ProjectsComponent,
    HeroComponent,
    HomePageComponent,
    ErrorPageComponent,
    AboutPageComponent,
    ProjectsPageComponent,
    ContactPageComponent,
    BlogPageComponent,
    HeroContactFormComponent,
    HeroAboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
