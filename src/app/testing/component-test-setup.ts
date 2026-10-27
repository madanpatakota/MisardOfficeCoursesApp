import { Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrService } from 'ngx-toastr';
import { JSArticleService } from '../features/articles/javascript-articles/javascript-article.service';

export function configureComponentTest(component: Type<unknown>): void {
  TestBed.configureTestingModule({
    declarations: [component],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterTestingModule,
      HttpClientTestingModule
    ],
    providers: [
      JSArticleService,
      {
        provide: ToastrService,
        useValue: {
          info: () => undefined,
          success: () => undefined,
          warning: () => undefined,
          error: () => undefined
        }
      }
    ],
    schemas: [NO_ERRORS_SCHEMA]
  });
}
