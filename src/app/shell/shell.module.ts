import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '@app/shared/shared.module';

import { ShellComponent } from './shell.component';

@NgModule({
  imports: [CommonModule, TranslateModule, NgbModule, RouterModule, SharedModule],
  declarations: [ShellComponent]
})
export class ShellModule {}
