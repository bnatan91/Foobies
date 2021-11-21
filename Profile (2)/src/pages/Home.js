import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonText, IonToolbar } from '@ionic/react';
import styles from "./Home.module.scss";

import { arrowBackOutline, arrowForward, bookmarkOutline, chatboxEllipsesOutline, ellipsisHorizontal, imageOutline, personAddOutline } from "ionicons/icons";

const Home = () => {
	return (
		<IonPage className={ styles.home }>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">

						<IonButton color="light">
							<IonIcon icon={ arrowBackOutline } />
						</IonButton>
					</IonButtons>

					<IonButtons slot="end">

						<IonButton color="light">
							<IonIcon icon={ ellipsisHorizontal } />
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent>

				<div className={ styles.topHeader }></div>

				<IonGrid>
					<IonRow className="ion-justify-content-center">
						<IonCol size="12" className="ion-justify-content-center ion-align-items-center ion-text-center">
							<IonCard className={ styles.profileHeader }>

								<IonCardContent>
								<IonCardTitle slot= "start">Profile</IonCardTitle>
									<IonRow>
										<IonCard>
											<IonCol mode="ios" size="4">
												<img src="/assets/alan.jpg" alt="avatar" className={ styles.avatar } />
											</IonCol>
											<IonCol size="12">
													<IonText color="dark" className={ styles.profileName }>
														<p>Alan Montgomery</p>
													</IonText>
												</IonCol>
										</IonCard>
									</IonRow>
								</IonCardContent>
							</IonCard>
						</IonCol>
					</IonRow>
				</IonGrid>

				<IonGrid>
				<IonRow className={ styles.profileActionContainer }>
						<IonCol size="12">
							<IonCard className={ styles.profileActionCard }>
								<IonCardContent>
									<IonRow className="ion-justify-content-between">
										<IonCardSubtitle>history</IonCardSubtitle>
										<IonIcon icon={ arrowForward } />
									</IonRow>
								</IonCardContent>
							</IonCard>
						</IonCol>
					</IonRow>
				</IonGrid>
				<IonGrid>
				<IonRow className={ styles.profileActionContainer }>
						<IonCol size="12">
							<IonCard className={ styles.profileActionCard }>
								<IonCardContent>
									<IonRow className="ion-justify-content-between">
										<IonCardSubtitle>Favorite  Recipes</IonCardSubtitle>
										<IonIcon icon={ arrowForward } />
									</IonRow>
								</IonCardContent>
							</IonCard>
						</IonCol>
					</IonRow>
				</IonGrid>		
				<IonGrid>
				<IonRow className={ styles.profileActionContainer }>
						<IonCol size="12">
							<IonCard className={ styles.profileActionCard }>
								<IonCardContent>
									<IonRow className="ion-justify-content-between">
										<IonCardSubtitle>FAQ</IonCardSubtitle>
										<IonIcon icon={ arrowForward } />
									</IonRow>
								</IonCardContent>
							</IonCard>
						</IonCol>
					</IonRow>
				</IonGrid>
					
			</IonContent>
		</IonPage>
	);
};

export default Home;