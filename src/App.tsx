import { Redirect, Route } from 'react-router-dom';
import {IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/custom-tab-bar.css'
import React from "react";
import {home, medkit, person, restaurant} from "ionicons/icons";
import Recipe from "./pages/Recipe";
import Profile from "./pages/Profile";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>

        <IonRouterOutlet>
          <Route exact path="/home" component={Home}/>
          <Route exact path={'/recipe/:id'} component={Recipe}/>
          <Route exact path={'/profile'} component={Profile}/>
          <Redirect exact path={'/'} to={'/home'}/>
        </IonRouterOutlet>

        <IonTabBar slot={'bottom'}>
          <IonTabButton tab={'home'} href={'/home'}>
            Home <IonIcon icon={home}/>
          </IonTabButton>
          <IonTabButton tab={'cook'}>
            cook <IonIcon icon={restaurant}/>
          </IonTabButton>
          <IonTabButton tab={'health'}>
            Health<IonIcon icon={medkit}/>
          </IonTabButton>
          <IonTabButton tab={'profile'} href={'/profile'}>
            Profile <IonIcon icon={person}/>
          </IonTabButton>
        </IonTabBar>

      </IonTabs>

    </IonReactRouter>
  </IonApp>
);

export default App;
