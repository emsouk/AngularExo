import { Routes } from '@angular/router';
import { Home } from './home/home';


export const routes: Routes = [

    //Utilisation classique import en haut et on indique le composant pas Paresseux
    {
        path: 'home',
        component:Home
    },
    // Seconde manière de faire un route en version Lazy Loading
    {
        path: 'contact',
        loadComponent: ()=>import('./contact/contact').then(m=>m.Contact)
    },

    //pages lessons
    {
        path: 'text-interpolation',
        loadComponent: ()=>import('./lecon/text-interpolation/text-interpolation').then(m=>m.TextInterpolation)
    },
    {
        path: 'property-binding',
        loadComponent: ()=>import('./lecon/property-binding/property-binding').then(m=>m.PropertyBinding)
    },

     //pages exo
    {
        path: 'exo-binding',
        loadComponent: ()=>import('./exo/exo-property-binding/exo-property-binding').then(m=>m.ExoPropertyBinding)
    },
    {
        path: 'exo-event',
        loadComponent: ()=>import('./exo/exo-event-binding/exo-event-binding').then(m=>m.ExoEventBinding)
    },
    {
      path: 'list-rendering',
      loadComponent: ()=>import('./exo/list-rendering/list-rendering').then(m=>m.ListRendering)
    },
       {
      path: 'tp-directive',
      loadComponent: ()=>import('./tp/tp-directive/tp-directive').then(m=>m.TpDirective)
    },

    //Route Page notFound ( à laisser à la fin des routes sinom bug )
    //Dans angular la route avec le path: '**' doit etre en dernier sinom ça fait bugger les autres routes
    {
        path: '**',
        loadComponent: ()=>import('./shared/notfound/notfound').then(m=>m.Notfound)
    },


];

