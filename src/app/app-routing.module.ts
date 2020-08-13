import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmchartComponent } from './amchart/amchart.component';
import { VirtualScrollingComponent } from './virtual-scrolling/virtual-scrolling.component';
import { TypographyComponent } from './typography/typography.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TabsComponent } from './tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SelectComponent } from './select/select.component';
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './list/list.component';
import { InputComponent } from './input/input.component';
import { IconsComponent } from './icons/icons.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { DialogComponent } from './dialog/dialog.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { BadgeComponent } from './badge/badge.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { DatatableComponent } from './datatable/datatable.component';

const routes: Routes = [
  { path: 'autocomplete', component: AutocompleteComponent },
  { path: 'badge', component: BadgeComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'card', component: CardComponent },
  { path: 'checkbox', component: CheckboxComponent },
  { path: 'datatable', component: DatatableComponent },
  { path: 'datepicker', component: DatepickerComponent }, 
  { path: 'dialog', component: DialogComponent }, 
  { path: 'dialog-example', component: DialogComponent }, 
  { path: 'expansion-panel', component: ExpansionPanelComponent }, 
  { path: 'gridlist', component: GridListComponent }, 
  { path: 'icons', component: IconsComponent }, 
  { path: 'input', component: InputComponent }, 
  { path: 'list', component: ListComponent }, 
  { path: 'menu', component: MenuComponent }, 
  { path: 'progress-spinner', component: ProgressSpinnerComponent }, 
  { path: 'radio', component: RadiobuttonComponent }, 
  { path: 'select', component: SelectComponent }, 
  { path: 'snackbar', component: SnackbarComponent }, 
  { path: 'stepper', component: StepperComponent }, 
  { path: 'tabs', component: TabsComponent }, 
  { path: 'toolbar', component: ToolbarComponent },
  { path: 'tooltip', component: TooltipComponent }, 
  { path: 'typography', component: TypographyComponent }, 
  { path: 'virtual-scrolling', component: VirtualScrollingComponent },
  { path: 'amchart', component: AmchartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
