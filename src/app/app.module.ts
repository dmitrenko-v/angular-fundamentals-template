import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '@shared/shared.module';
import { AppComponent } from '@app/app.component';
import { NotAuthorizedGuard } from '@app/auth/guards/not-authorized.guard';
import { AuthorizedGuard } from '@app/auth/guards/authorized.guard';
import { CoursesStoreService } from '@app/services/courses-store.service';
import { CoursesService } from '@app/services/courses.service';
import {AppRoutingModule} from "@app/app-routing.module";
import {AuthModule} from "@app/auth/auth.module";
import {AuthService} from "@app/auth/services/auth.service";
import {SessionStorageService} from "@app/auth/services/session-storage.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    FontAwesomeModule,
    AppRoutingModule,
      AuthModule
  ],
  providers: [AuthorizedGuard, NotAuthorizedGuard, CoursesService, CoursesStoreService, AuthService, SessionStorageService, {provide: "Window", useValue: window}],
  bootstrap: [AppComponent],
})
export class AppModule {}
