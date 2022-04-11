import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ImpactBoardComponent } from './impact-board/impact-board.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ImpactBoardComponent,
      },
    ]),
  ],
  exports: [DashboardComponent, SidebarComponent, ImpactBoardComponent],
  declarations: [DashboardComponent, SidebarComponent, ImpactBoardComponent],
})
export class DashboardModule {}
