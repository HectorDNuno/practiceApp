import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import { addCircle } from "ionicons/icons";
import React from "react";
import Profile from "../assets/profile.svg";

const Register: React.FC = () => {
  const router = useIonRouter();

  const doRegister = (event: any) => {
    event.preventDefault();
    console.log("registered");
    router.goBack();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"primary"}>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>Create Account</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent scrollY={false}>
        <IonGrid fixed>
          <IonRow class="ion-justify-content-center">
            <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
              <div className="ion-text-center ion-padding">
                <img src={Profile} alt="gamepad logo" width={"20%"} />
              </div>
            </IonCol>
          </IonRow>

          <IonRow class="ion-justify-content-center">
            <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
              <IonCard>
                <IonCardContent>
                  <form onSubmit={doRegister}>
                    <IonInput
                      label="Email"
                      type="email"
                      placeholder="email@example.com"
                      labelPlacement="floating"
                      fill="outline"
                    ></IonInput>
                    <IonInput
                      className="ion-margin-top"
                      label="Password"
                      type="password"
                      placeholder="password"
                      labelPlacement="floating"
                      fill="outline"
                    ></IonInput>
                    <IonButton
                      type="submit"
                      color={"secondary"}
                      expand="block"
                      className="ion-margin-top"
                      routerLink="/register"
                    >
                      Create account
                      <IonIcon icon={addCircle} slot="end"></IonIcon>
                    </IonButton>
                  </form>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Register;
