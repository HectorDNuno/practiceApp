import { Preferences } from "@capacitor/preferences";
import React, { useEffect, useState } from "react";
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
import { logIn, personCircle, videocam } from "ionicons/icons";
import Intro from "../components/Intro";

const INTRO_KEY = "intro-seen";

const Login: React.FC = () => {
  const router = useIonRouter();
  const [introSeen, setIntroSeen] = useState(true);

  useEffect(() => {
    const checkStorage = async () => {
      const seen = await Preferences.get({ key: INTRO_KEY });
      console.log("seen value:", seen);
      setIntroSeen(seen.value === "true");
    };

    checkStorage();
  }, []);

  const doLogin = (event: any) => {
    event.preventDefault();
    console.log("logged in");
    // router.push("/home", "root");
  };

  const finishIntro = async () => {
    setIntroSeen(true);
    Preferences.set({ key: INTRO_KEY, value: "true" });
  };

  const seeIntroAgain = () => {
    setIntroSeen(false);
    Preferences.remove({ key: INTRO_KEY });
  };

  return (
    <>
      {!introSeen ? (
        <Intro onFinish={finishIntro} />
      ) : (
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

                  <IonButton onClick={seeIntroAgain} expand="block" size="small" fill="clear" color={"medium"}>
                    Watch intro again
                    <IonIcon icon={videocam} slot="end"></IonIcon>
                  </IonButton>
                </form>
              </IonCardContent>
            </IonCard>
          </IonContent>
        </IonPage>
      )}
    </>
  );
};

export default Login;
