import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SidenavComponent } from './sidenav/sidenav.component';
import { DatatableComponent } from './datatable/datatable.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { BadgeComponent } from './badge/badge.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
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
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { DialogComponent } from './dialog/dialog.component';
import { DatepickerComponent } from './datepicker/datepicker.component';

import { CommonService } from './common.service';

import { MatTableExporterModule } from 'mat-table-exporter';

import { MaterialModule } from './material/material.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AmchartComponent } from './amchart/amchart.component';

@NgModule({
  declarations: [
    AppComponent,
    AutocompleteComponent,
    BadgeComponent,
    ButtonComponent,
    CardComponent,
    CheckboxComponent,
    DatatableComponent,
    DatepickerComponent,
    DialogComponent,
    DialogExampleComponent,
    ExpansionPanelComponent,
    GridListComponent,
    IconsComponent,
    InputComponent,
    ListComponent,
    MenuComponent,
    ProgressSpinnerComponent,
    RadiobuttonComponent,
    SelectComponent,
    SidenavComponent,
    SnackbarComponent,
    StepperComponent,
    TabsComponent,
    ToolbarComponent,
    TooltipComponent,
    TypographyComponent,
    VirtualScrollingComponent,
    AmchartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatTableExporterModule,
    FormsModule, 
    ReactiveFormsModule,
    ScrollingModule
  ],
  providers: [
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
