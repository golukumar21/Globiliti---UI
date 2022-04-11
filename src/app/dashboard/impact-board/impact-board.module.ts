import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ImpactBoardComponent } from './impact-board.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ImpactBoardComponent,
      },

    ]),
  ],
  declarations: [],
  providers: [],
})
export class ImpactBoardModule {}
