import {
  IonBadge,
  IonButton,
  IonButtons, IonCol,
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
import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css';

import {foodHeader, foodRecipes} from "../_recipes/food-recipes";
import {drinksHeader, drinksRecipes} from "../_recipes/drinks-recipes";

import {HomeHit} from "../data/response-recipe";
import HeaderSlide from "../components/HeaderSlide";
import DataSlider from "../components/DataSlider";
import {useHistory} from "react-router";
const Home: React.FC = () => {

  const history = useHistory();

  // Food Slider
  const [foodDataSlider, setFoodDataSlider] = useState<Array<HomeHit>>([]);
  // Drinks Slider
  const [drinksDataSlider, setDrinksDataSlider] = useState<Array<HomeHit>>([])
  // dessert Slider
  const [dessertDataSlider, setDessertDataSlider] = useState<Array<HomeHit>>([])

  const foodCategoryHandler = (selectedCategory: string) => {
    console.log(selectedCategory);
    switch (selectedCategory.toLowerCase()){
      case "chicken" : setFoodDataSlider(foodRecipes.chicken.hits); break;
      case "egg" : setFoodDataSlider(foodRecipes.egg.hits); break;
      case "fish" : setFoodDataSlider(foodRecipes.fish.hits); break;
      case "meat" : setFoodDataSlider(foodRecipes.meat.hits); break;
      case "pasta" : setFoodDataSlider(foodRecipes.pasta.hits); break;
      case "rice" : setFoodDataSlider(foodRecipes.rice.hits); break;
      default : setFoodDataSlider(foodRecipes.chicken.hits); break;
    }
  }

  const drinksCategoryHandler = (selectedCategory: string) => {
    console.log(selectedCategory);
    switch (selectedCategory.toLowerCase()) {
      case 'boba': setDrinksDataSlider(drinksRecipes.boba.hits); break;
      case 'cocktail': setDrinksDataSlider(drinksRecipes.cocktail.hits); break;
      case 'coffee': setDrinksDataSlider(drinksRecipes.coffee.hits); break;
      case 'juice': setDrinksDataSlider(drinksRecipes.juice.hits); break;
      case 'milk': setDrinksDataSlider(drinksRecipes.milk.hits); break;
      case 'milkshake': setDrinksDataSlider(drinksRecipes.milkshake.hits); break;
      case 'thai tea': setDrinksDataSlider(drinksRecipes.thai_tea.hits); break;
      default: setDrinksDataSlider(drinksRecipes.boba.hits); break;
    }
  }

  const goToRecipeHandler = (href: string) => {
    // console.log(href);  // Raw URL to JSON
    const id = href.split('?')[0].split('/')[6];
    // console.log(id);
    history.push(`/recipe/${id}`);
  }

  useEffect(() => {
    setFoodDataSlider(foodRecipes.chicken.hits);
    setDrinksDataSlider(drinksRecipes.boba.hits);
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

        <h3>Food</h3>
        <HeaderSlide
          slideHeader={foodHeader}
          setCategory={foodCategoryHandler}/>

        <DataSlider
          slideData={foodDataSlider}
          goToRecipe={goToRecipeHandler}/>

        <h3>Drinks</h3>
        <HeaderSlide
          slideHeader={drinksHeader}
          setCategory={drinksCategoryHandler}/>

        <DataSlider
          slideData={drinksDataSlider}
        goToRecipe={goToRecipeHandler}/>




        <br/><br/>

      </IonContent>
    </IonPage>
  );
};

export default Home;
