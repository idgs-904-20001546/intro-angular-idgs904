import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { IricComponent } from "./school/iric/iric.component";
import { OperasbasComponent } from "./school/forms/operasbas/operasbas.component";
import { StudentReactiveComponent } from "./forms/student-reactive/student-reactive.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/school',
        pathMatch: 'full',
    },
    {
        path: 'school',
        component: IricComponent
    },
    {
        path: 'operations',
        component: OperasbasComponent
    },
    {
        path: 'reactive-student',
        component: StudentReactiveComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}