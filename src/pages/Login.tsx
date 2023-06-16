import {
  IonButton,
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
import { logIn, personCircle } from "ionicons/icons";
import React from "react";

const Login: React.FC = () => {
  const router = useIonRouter();

  const doLogin = (event: any) => {
    event.preventDefault();
    console.log("logged in");
    // router.push("/home", "root");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"primary"}>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent scrollY={false}>
        <IonCard>
          <IonCardContent>
            <form onSubmit={doLogin}>
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

              <IonButton type="submit" expand="block" className="ion-margin-top">
                Login
                <IonIcon icon={logIn} slot="end"></IonIcon>
              </IonButton>

              <IonButton color={"secondary"} expand="block" className="ion-margin-top" routerLink="/register">
                Create account
                <IonIcon icon={personCircle} slot="end"></IonIcon>
              </IonButton>
            </form>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;
