import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { IndexComponent } from './index/index.component';

export const mainRoutes=[
	{
        path:'',
        component:MainComponent,
        children:[{
            path:'',
            component:IndexComponent
        }]
    }
];