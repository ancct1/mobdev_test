import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   //Changing the entry point to the tabs
    { path: '', loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
},]  
;

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
