import {
  IonBadge,
  IonButton,
  IonButtons, IonCard, IonCardContent, IonCardTitle, IonCol,
  IonContent, IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow, IonSearchbar,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import {bookmark} from "ionicons/icons";
import React, {useEffect, useState} from "react";
import homeStyle from './Home.module.scss'
import {dummySlider, dummyHeader} from "../data/dummy";
import {Autoplay, FreeMode, Pagination} from "swiper";
import { Swiper, SwiperSlide} from "swiper/react/swiper-react";
import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css';

import {chickenFood} from "../_recipes/food/chicken";
import {foodRecipes} from "../_recipes/food-recipes";
import {Recipe} from "../data/response-recipe";

const Home: React.FC = () => {

  const [categorySelected, setCategorySelected] = useState<string>('chicken');
  const [slideFoodRecipe, setSlideFoodRecipe] = useState([]);

  useEffect(() => {
    console.log(categorySelected);

    const tempFood = () => {
      switch (categorySelected){
        case 'chicken': return foodRecipes.chicken.hits
        case 'egg' : return foodRecipes.egg.hits
      }
    }
    // setSlideFoodRecipe(foodRecipes.chicken.hits)
    // CHANGE TEST
    // INI BERUBAH BREE

  }, [categorySelected])

  useEffect(() => {
    console.log(foodRecipes.chicken.hits);
  },[])

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
              <div className={ homeStyle.search }>
                <IonSearchbar placeholder={'I am hungry'}/>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>

        <Swiper
          modules={[FreeMode]}
          freeMode={true}
          slidesPerView={3}
        >
          {dummyHeader.map((header, index) => {
            return (
              <SwiperSlide key={index} onClick={() => setCategorySelected(header.name)}>
                <IonCard>
                  <IonCardContent>
                    <IonCardTitle className={'title ion-text-center'}>
                      {header.name}
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
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {/*{chickenFood.hits.}*/}
          {chickenFood.hits.map((recipe, index) => {
            return(
              <SwiperSlide key={index} className={'ion-margin-bottom'}>
                <IonCard onClick={() => console.log(recipe.recipe.label)}>
                  <img src={ recipe.recipe.image } alt={recipe.recipe.label} className={'image'}/>
                  <IonCardContent>
                    <IonCardTitle className={'title'}>{recipe.recipe.label}</IonCardTitle>
                  </IonCardContent>
                </IonCard>
              </SwiperSlide>
            )
          })}

          {/*{dummySlider.map((card,index) => {*/}
          {/*  return(*/}
          {/*    <SwiperSlide key={index} className={'ion-margin-bottom'}>*/}
          {/*      <IonCard>*/}
          {/*        <img src={ card.photoUrl } alt={card.name} className={'image'}/>*/}
          {/*        <IonCardContent>*/}
          {/*          <IonCardTitle className={'title'}>{card.name}</IonCardTitle>*/}
          {/*        </IonCardContent>*/}
          {/*      </IonCard>*/}
          {/*    </SwiperSlide>*/}
          {/*  )*/}
          {/*})}*/}

        </Swiper>

        <Swiper
          modules={[FreeMode]}
          freeMode={true}
          slidesPerView={3}
          // onClick={(swiper, event) => {console.log(swiper); console.log(event);}}
        >
          {dummyHeader.map((header, index) => {
            return (
              <SwiperSlide key={index} onClick={() => setCategorySelected(header.name)}>
                <IonCard>
                  <IonCardContent>
                    <IonCardTitle className={'title ion-text-center'}>
                      {header.name}
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
          // onSwiper={(swiper) => console.log(swiper)}
        >

          {dummySlider.map((card,index) => {
            return(
              <SwiperSlide key={index} className={'ion-margin-bottom'}>
                <IonCard>
                  <img src={ card.photoUrl } alt={card.name} className={'image'}/>
                  <IonCardContent>
                    <IonCardTitle className={'title'}>{card.name}</IonCardTitle>
                  </IonCardContent>
                </IonCard>
              </SwiperSlide>
            )
          })}

        </Swiper>



      </IonContent>
    </IonPage>
  );
};

export default Home;
