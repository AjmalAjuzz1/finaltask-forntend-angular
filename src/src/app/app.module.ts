import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminDepartmentComponent } from './admin-department/admin-department.component';
import { EmployeeDepartmentComponent } from './employee-department/employee-department.component';
import { ListEmpComponent } from './admin-department/list-list/list-list.component';
import { CreateUpdateEmpComponent } from './admin-department/create-update-employee/create-update-employee.component';
import { PublicService } from './services/public.service';
import { RegisterEmpComponent } from './admin-department/register/register.component';
import { NavbarEmpComponent } from './admin-department/navbar/navbar.component';
import { LeaveManagementComponent } from './admin-department/leave-management/leave-management.component';
import { ListLeaveComponent } from './employee-department/list-leave/list-leave.component';
import { ApplyLeaveComponent } from './employee-department/apply-leave/apply-leave.component';
import { ViewEmpComponent } from './admin-department/view/view.component';
import { NavbarComponent } from './employee-department/navbar/navbar.component';
import { SidnavComponent } from './sidnav/sidnav.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    AdminDepartmentComponent,
    EmployeeDepartmentComponent,
    ListEmpComponent,
    CreateUpdateEmpComponent,
    RegisterEmpComponent,
    NavbarEmpComponent,
    LeaveManagementComponent,
    ListLeaveComponent,
    ApplyLeaveComponent,
    ViewEmpComponent,
    NavbarComponent,
    SidnavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [PublicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
