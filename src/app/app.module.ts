import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { FormsModule } from '@angular/forms';
import { LoginAdminComponent } from './login-admin/login-admin.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeaderAdminComponent,
    LoginAdminComponent,
  ],
  imports: [
    FormsModule ,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
