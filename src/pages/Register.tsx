import { IonBackButton, IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { addCircle } from 'ionicons/icons';
import React, { useState } from 'react';
import Gamepad from "../assets/gamepad.svg"

const Register: React.FC = () => {
  const router = useIonRouter();

  const [introSeen, setIntroSeen] = useState(false);

  const doRegister = (event: any) => {
    event.preventDefault();
    console.log("registered");  
    router.goBack()
  };

  return (
    <IonPage>

    <IonHeader>
      <IonToolbar color={"primary"}>

        <IonButton slot="start">
          <IonBackButton defaultHref="/"></IonBackButton>
        </IonButton>

        <IonTitle>Create Account</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent scrollY={false}>

      <img src={Gamepad} alt="gamepad logo" width={"50%"} />

      <IonCard>
        <IonCardContent>
          <form onSubmit={doRegister}>
            <IonInput label="Email" type='email' placeholder='email@example.com' labelPlacement="floating" fill='outline'></IonInput>

            <IonInput className="ion-margin-top" label="Password" type="password" placeholder='password' labelPlacement="floating" fill='outline'></IonInput>

            <IonButton type="submit" color={'secondary'} expand="block" className="ion-margin-top" routerLink="/register">
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