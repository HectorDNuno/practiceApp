import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonChip,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";
import { trashBinSharp } from "ionicons/icons";
import React, { useState } from "react";

const List: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useIonViewWillEnter(async () => {
    const users = await getUsers();
    console.log(users);
    setUsers(users);
    setLoading(false);
  });

  const getUsers = async () => {
    const data = await fetch("https://randomuser.me/api?results=10");
    const users = await data.json();
    return users.results;
  };

  const clearList = () => {};

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"primary"}>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>

          <IonTitle>List</IonTitle>

          <IonButtons slot="end">
            <IonButton>
              <IonIcon slot="icon-only" icon={trashBinSharp} />
            </IonButton>
          </IonButtons>
        </IonToolbar>

        <IonToolbar color={"primary"}>
          <IonSearchbar />
        </IonToolbar>
      </IonHeader>

      <IonContent>
        {users.map((user, index) => (
          <IonCard key={index}>
            <IonCardHeader>
              <IonCardSubtitle>{user.login.username}</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent className="ion-no-padding">
              <IonItem lines="none">
                <IonAvatar slot="start">
                  <IonImg src={user.picture.thumbnail} />
                </IonAvatar>
                <IonLabel>
                  {user.name.first} {user.name.last}
                  <p> {user.email} </p>
                </IonLabel>

                <IonChip slot="end" color={"secondary"}>
                  {user.location.country}
                </IonChip>
              </IonItem>
            </IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default List;
