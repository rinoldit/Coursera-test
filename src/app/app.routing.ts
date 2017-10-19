import { Routes, RouterModule } from '@angular/router';
import { ComponentOneComponent } from './ComponentOne/ComponentOne.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { DummyComponent } from './Dummy/Dummy.component';
import { DoctorListComponent } from './doctorList/doctorList.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'  },
  {path: 'dog', component: ComponentOneComponent},

  // children: [{path: 'cat', loadChildren: 'app/#AppModule'}],
  {path: 'cat', component: ComponentTwoComponent },
  {path: 'home', component: DummyComponent},
  {path: 'doctors-list', component: DoctorListComponent}
];

export const AppRoutes = RouterModule.forRoot(routes);

export const vv = [ComponentOneComponent, ComponentTwoComponent, DummyComponent];
