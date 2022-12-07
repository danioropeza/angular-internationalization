import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { I18NEXT_NAMESPACE_RESOLVER } from 'angular-i18next';

const routes: Routes = [
  {
    path: "events",
    loadChildren: () => import("./modules/events/events.module").then(m => m.EventsModule),
    data: {
      i18nextNamespaces: [
        "events/card",
        "events/events-list"
      ]
    },
    resolve: {
      i18next: I18NEXT_NAMESPACE_RESOLVER
    }
  },
  {
    path: "user",
    loadChildren: () => import("./modules/user/user.module").then(m => m.UserModule),
    data: {
      i18nextNamespaces: [
        "user/favorites",
        "user/profile",
        "user/stars"
      ]
    },
    resolve: {
      i18next: I18NEXT_NAMESPACE_RESOLVER
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
