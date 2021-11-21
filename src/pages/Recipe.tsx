import React, {useEffect} from "react";
import {
  IonBadge,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar, IonBackButton, IonRow, IonCardTitle, IonCardSubtitle, IonCol, IonGrid
} from "@ionic/react";
import recipeStyle from './Recipe.module.scss';
import {useParams} from "react-router";
import {bookmark, layersOutline, peopleOutline, timeOutline} from "ionicons/icons";

const Recipe: React.FC = () => {

  // https://stackoverflow.com/questions/63635997/how-to-access-route-params-from-react-router-dom-using-typescript-ex-some-ro
  const id = useParams<{id: string}>();

  useEffect(() => {
    console.log(id);
  },[]);

  return (
    <IonPage>
      <IonHeader className={'ion-no-margin'}>
        <IonToolbar>
          <IonButtons slot={'start'}>
            <IonBackButton/>
          </IonButtons>
          <IonTitle>Recipe Detail</IonTitle>

          <IonButtons slot={'end'}>
            <IonButton>
              <IonBadge slot={'start'}>0</IonBadge> &nbsp;
              Bookmark
              <IonIcon slot={'end'} icon={bookmark}/>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

        <div className={ recipeStyle.headerImage }>
          <img src={ 'assets/example/burgers1.png' } alt="main cover" />
          <div className={ `${ recipeStyle.headerInfo }` }>
            <h1>Burger</h1>
            <p>Western</p>
          </div>
        </div>

        <IonGrid>
          <h1>MASIH STATIC</h1>
          <IonRow className="ion-text-center">
            <IonCol size="4">
              <IonCardTitle>
                <IonIcon icon={ peopleOutline } />
              </IonCardTitle>
              <IonCardSubtitle>serves</IonCardSubtitle>
            </IonCol>
            <IonCol size="4">
              <IonCardTitle>
                <IonIcon icon={ timeOutline } />
              </IonCardTitle>
              <IonCardSubtitle>mins` : "N/A" </IonCardSubtitle>
            </IonCol>
            <IonCol size="4">
              <IonCardTitle>
                <IonIcon icon={ layersOutline } />
              </IonCardTitle>
              <IonCardSubtitle>12g</IonCardSubtitle>
            </IonCol>
          </IonRow>

          {/*<IonList>*/}
          {/*  <IonList */}
          {/*</IonList>*/}

        </IonGrid>

      </IonContent>
    </IonPage>
  )
}

export default Recipe;