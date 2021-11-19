import {
  IonBadge,
  IonButton,
  IonButtons, IonCard, IonCardContent, IonCardTitle, IonCol,
  IonContent, IonGrid,
  IonHeader,
  IonIcon, IonImg,
  IonPage,
  IonRow, IonSearchbar,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import {bookmark} from "ionicons/icons";
import React, {useEffect, useState} from "react";
import homeStyle from './Home.module.scss'
import {Autoplay, FreeMode, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react/swiper-react";
import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css';

import {foodHeader, foodRecipes} from "../_recipes/food-recipes";

import {HomeHit} from "../data/response-recipe";
const Home: React.FC = () => {

  const [categorySelected, setCategorySelected] = useState<string>('chicken');
  const [slideHeader, setSlideHeader] = useState<Array<string>>([]);
  const [dataSlider, setDataSlider] = useState<Array<HomeHit>>([]);

  useEffect(() => {
    console.log(categorySelected);

    switch (categorySelected.toLowerCase()){
      case "chicken" : setDataSlider(foodRecipes.chicken.hits); break;
      case "egg" : setDataSlider(foodRecipes.egg.hits); break;
      case "fish" : setDataSlider(foodRecipes.fish.hits); break;
      case "meat" : setDataSlider(foodRecipes.meat.hits); break;
      case "pasta" : setDataSlider(foodRecipes.pasta.hits); break;
      case "rice" : setDataSlider(foodRecipes.rice.hits); break;
      default : setDataSlider(foodRecipes.chicken.hits); break;
    }

  }, [categorySelected]);

  useEffect(() => {
    // console.log(foodRecipes.chicken.hits);
    setSlideHeader(foodHeader)
  }, []);
// splash screen - login page - homepage
  return (
    <IonPage>
      <IonHeader className={'ion-no-margin'}>
        <IonToolbar>
          <IonTitle>
            Home Page
            <p className={'ion-no-margin'}>Name </p>
          </IonTitle>

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

        <IonGrid>
          <IonRow>
            <IonCol>
              <div className={homeStyle.search}>
                <IonSearchbar placeholder={'I am hungry'}/>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
        <h1>Food</h1>
        <Swiper
          modules={[FreeMode]}
          freeMode={true}
          slidesPerView={3}>
          {slideHeader.map((header, index) => {
            return (
              <SwiperSlide
                key={index}
                onClick={() => setCategorySelected(header)}>
                <IonCard>
                  <IonCardContent>
                    <IonCardTitle className={'title ion-text-center'}>
                      {header}
                    </IonCardTitle>
                  </IonCardContent>
                </IonCard>
              </SwiperSlide>
            )
          })}
        </Swiper>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={2}
          loop={true}
          lazy={true}
          pagination={{clickable: true}}
          autoplay={{"delay": 3000, "disableOnInteraction": false}}
        >
          {
            dataSlider.map((recipe, index) => {
            return (
              <SwiperSlide key={index} className={'ion-margin-bottom'}>
                <IonCard onClick={() => console.log(recipe.recipe.label)}>
                  <IonImg src={recipe.recipe.image} alt={recipe.recipe.label} className={'image'}/>
                  <IonCardContent>
                    <IonCardTitle className={'title'}>{recipe.recipe.label}</IonCardTitle>
                  </IonCardContent>
                </IonCard>
              </SwiperSlide>
            )
          }
          )}
        </Swiper>

        {/*<Swiper*/}
        {/*  modules={[FreeMode]}*/}
        {/*  freeMode={true}*/}
        {/*  slidesPerView={3}*/}
        {/*  // onClick={(swiper, event) => {console.log(swiper); console.log(event);}}*/}
        {/*>*/}
        {/*  {dummyHeader.map((header, index) => {*/}
        {/*    return (*/}
        {/*      <SwiperSlide key={index} onClick={() => setCategorySelected(header.name)}>*/}
        {/*        <IonCard>*/}
        {/*          <IonCardContent>*/}
        {/*            <IonCardTitle className={'title ion-text-center'}>*/}
        {/*              {header.name}*/}
        {/*            </IonCardTitle>*/}
        {/*          </IonCardContent>*/}
        {/*        </IonCard>*/}
        {/*      </SwiperSlide>*/}
        {/*    )*/}
        {/*  })}*/}
        {/*</Swiper>*/}

        {/*<Swiper*/}
        {/*  modules={[Pagination, Autoplay]}*/}
        {/*  spaceBetween={10}*/}
        {/*  slidesPerView={2}*/}
        {/*  loop={true}*/}
        {/*  lazy={true}*/}
        {/*  pagination={{clickable: true}}*/}
        {/*  autoplay={{"delay": 3000, "disableOnInteraction": false}}*/}
        {/*>*/}

        {/*  {dummySlider.map((card, index) => {*/}
        {/*    return (*/}
        {/*      <SwiperSlide key={index} className={'ion-margin-bottom'}>*/}
        {/*        <IonCard>*/}
        {/*          <img src={card.photoUrl} alt={card.name} className={'image'}/>*/}
        {/*          <IonCardContent>*/}
        {/*            <IonCardTitle className={'title'}>{card.name}</IonCardTitle>*/}
        {/*          </IonCardContent>*/}
        {/*        </IonCard>*/}
        {/*      </SwiperSlide>*/}
        {/*    )*/}
        {/*  })}*/}

        {/*</Swiper>*/}


      </IonContent>
    </IonPage>
  );
};

export default Home;
