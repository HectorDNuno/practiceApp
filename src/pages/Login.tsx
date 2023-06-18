import { Preferences } from "@capacitor/preferences";
import React, { useEffect, useState } from "react";
import {
  IonButton,
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
  useIonLoading,
  useIonRouter,
} from "@ionic/react";
import { logIn, personCircle, videocam } from "ionicons/icons";
import Intro from "../components/Intro";

const INTRO_KEY = "intro-seen";

const Login: React.FC = () => {
  const router = useIonRouter();
  const [introSeen, setIntroSeen] = useState(true);
  const [present, dismiss] = useIonLoading();

  useEffect(() => {
    const checkStorage = async () => {
      const seen = await Preferences.get({ key: INTRO_KEY });
      console.log("seen value:", seen);
      setIntroSeen(seen.value === "true");
    };

    checkStorage();
  }, []);

  const doLogin = async (event: any) => {
    event.preventDefault();
    await present("Logging in...");

    setTimeout(async () => {
      dismiss();
      router.push("/app", "root");
    }, 2000);
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

          <IonContent scrollY={false} className="ion-padding">
            <IonGrid fixed>
              <IonRow class="ion-justify-content-center">
                <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
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
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonContent>
        </IonPage>
      )}
    </>
  );
};

export default Login;
