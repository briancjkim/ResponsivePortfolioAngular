import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { WorkComponent } from "./work/work.component";
import { ContactComponent } from "./contact/contact.component";
import { WorkDetailComponent } from "./work-detail/work-detail.component";

const routes: Routes = [
  { path: "", component: HomeComponent, data: { title: "Home" } },
  { path: "about", component: AboutComponent, data: { title: "Home" } },
  { path: "work", component: WorkComponent, data: { title: "Home" } },
  { path: "work/:id", component: WorkDetailComponent, data: { title: "Home" } },
  { path: "contact", component: ContactComponent, data: { title: "Home" } },
  { path: "", redirectTo: "/", pathMatch: "prefix", data: { title: "Home" } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
