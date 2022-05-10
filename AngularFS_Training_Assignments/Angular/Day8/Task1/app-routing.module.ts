import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusSPAComponent } from './aboutus-spa/aboutus-spa.component';
import { CategoriesSPAComponent } from './categories-spa/categories-spa.component';
import { ContactSPAComponent } from './contact-spa/contact-spa.component';
import { HomeSPAComponent } from './home-spa/home-spa.component';
import { LoginSPAComponent } from './login-spa/login-spa.component';
import { MobileSPAComponent } from './mobile-spa/mobile-spa.component';
import { ProductSPAComponent } from './product-spa/product-spa.component';

const routes: Routes = [
  { path : "", component: HomeSPAComponent  },
  { path : "Categories", component: CategoriesSPAComponent  },
  { path : "AboutUs", component: AboutusSPAComponent  },
  { path : "ContactUs", component: ContactSPAComponent  },
  { path : "Login", component: LoginSPAComponent  },
  { path : "Mobile", component: MobileSPAComponent  },
  { path : "TV", component: ProductSPAComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
