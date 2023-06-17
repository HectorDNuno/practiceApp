import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
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
        <div className="ion-text-center ion-padding">
          <img src={Profile} alt="gamepad logo" width={"20%"} />
        </div>
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
      </IonContent>
    </IonPage>
  );
};

export default Register;
