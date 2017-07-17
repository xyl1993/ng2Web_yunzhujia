import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

export const appRoutes=[
	{
		path:'',
		redirectTo:'main',
		pathMatch:'full'
	},
	{
		path:'main',
		loadChildren:'./main/main.module#MainModule'
	},
	{
		path:'**',//fallback router must in the last
		loadChildren:'./main/main.module#MainModule'
	}
];
