import { createRouter, createWebHistory } from "vue-router";
import Invoices from "../pages/Invoices";
import InvoiceChanges from "../pages/InvoiceChanges";
import Items from "../pages/Items";
import Types from "../pages/Types";
import Countries from "../pages/Countries";

const routes = [
  {path: "/invoices", component: Invoices},
  {path: "/invoices-change", component: InvoiceChanges},
  {path: "/items", component: Items},
  {path: "/types", component: Types},
  {path: "/countries", component: Countries}
]

export default createRouter({
  history: createWebHistory(),
  routes
});