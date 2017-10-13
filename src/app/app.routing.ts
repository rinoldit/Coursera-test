import { Routes, RouterModule } from '@angular/router';
import { ComponentOneComponent } from './ComponentOne/ComponentOne.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { DummyComponent } from './Dummy/Dummy.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'prefix'  },

  {path: 'dog', component: ComponentOneComponent,
  children: [{path: 'cat', loadChildren: 'app/#AppModule'}] },
   {path: 'cat', component: ComponentTwoComponent },
  {path: 'home', component: DummyComponent}
];

export const AppRoutes = RouterModule.forRoot(routes);

export const vv = [ComponentOneComponent, ComponentTwoComponent, DummyComponent];
