import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppLayoutModule } from './layout/app.layout.module';
import { Interceptor } from './interceptor';

@NgModule({
    declarations: [AppComponent],
    imports: [AppRoutingModule, AppLayoutModule, HttpClientModule],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
