import { HomePage, ContactsPage, AboutPage, ProductsPage, ProductDetailsPage } from "./Pages";
import App from "./App/index";

export const routes = [
  {
    component: App,
    routes: [
      {
        path: "/",
        exact: true,
        component: HomePage,
      },
      {
        path: "/contacts",
        component: ContactsPage,
      },
      {
        path: "/about",
        component: AboutPage,
      },
      {
        path: "/products",
        exact: true,
        component: ProductsPage,
      },
      {
        path: "/products/:id/product_details",
        component: ProductDetailsPage,
      },
    ],
  },
];
