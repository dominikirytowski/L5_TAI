import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component"
import {BlogComponent} from "./components/blog/blog.component"
import {ContactComponent} from "./components/contact/contact.component"

const routes: Routes = [
  {
	path: 'home',
	component: HomeComponent,
  },
  {
	path: 'contact',
	component: ContactComponent,
},
{
         path: 'blog',
	component: BlogComponent,

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


