import {
  IonBadge,
  IonButton,
  IonButtons, IonCard, IonCardContent, IonCardTitle, IonCol,
  IonContent, IonGrid,
  IonHeader,
  IonIcon, IonNote,
  IonPage,
  IonRow, IonSearchbar,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import {bookmark} from "ionicons/icons";
import React from "react";
import homeStyle from './Home.module.scss'
import {dummySlider, dummyHeader} from "../data/dummy";
import {Autoplay, FreeMode, Pagination} from "swiper";
import { Swiper, SwiperSlide} from "swiper/react/swiper-react";
import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css';

const Home: React.FC = () => {

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
                <IonSearchbar
                  placeholder={'I am hungry'}/>
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
              <SwiperSlide key={index}>
                <IonCard>
                  <IonCardContent>
                    <IonCardTitle className={'title ion-text-center'}>{header.name}</IonCardTitle>
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
          onSwiper={(swiper) => console.log(swiper)}>

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
