import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {CartComponent} from "./cart/cart.component";
import {CafeComponent} from "./cafe/cafe.component";

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'about',component: AboutComponent},
  {path:'contacts', component: ContactsComponent},
  {path:'cart', component: CartComponent},
  {path:'cafe/:id', component: CafeComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
