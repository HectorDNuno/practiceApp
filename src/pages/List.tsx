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
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonModal,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
  useIonAlert,
  useIonToast,
  useIonViewWillEnter,
} from "@ionic/react";
import { addSharp, trashBinSharp } from "ionicons/icons";
import React, { useEffect, useRef, useState } from "react";

const List: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showAlert] = useIonAlert();
  const [showToast] = useIonToast();
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const modal = useRef<HTMLIonModalElement>(null);
  const cardModal = useRef<HTMLIonModalElement>(null);
  const [presentingElement, setPresentingElement] = useState<HTMLElement | null>(null);
  const page = useRef(null);
  const [activeSegment, setActiveSegment] = useState<any>("details");

  useEffect(() => {
    setPresentingElement(page.current);
  }, []);

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

  const clearList = () => {
    showAlert({
      header: "Confirm",
      message: "Are you sure you want to delete all users?",
      buttons: [
        { text: "Cancel", role: "cancel" },
        {
          text: "Delete",
          handler: () => {
            setUsers([]);
            showToast({
              message: "All users deleted",
              duration: 2000,
              color: "danger",
            });
          },
        },
      ],
    });
  };

  const doRefresh = async (event: any) => {
    const data = await getUsers();
    setUsers(data);
    event.detail.complete();
  };

  return (
    <IonPage ref={page}>
      <IonHeader>
        <IonToolbar color={"primary"}>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>

          <IonTitle>List</IonTitle>

          <IonButtons slot="end">
            <IonButton onClick={clearList}>
              <IonIcon slot="icon-only" icon={trashBinSharp} />
            </IonButton>
          </IonButtons>
        </IonToolbar>

        <IonToolbar color={"primary"}>
          <IonSearchbar />
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonRefresher slot="fixed" onIonRefresh={(e) => doRefresh(e)}>
          <IonRefresherContent />
        </IonRefresher>

        {users.map((user, index) => (
          <IonCard key={index} onClick={() => setSelectedUser(user)}>
            <IonCardHeader>
              <IonCardSubtitle>@{user.login.username}</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent className="ion-no-padding">
              <IonItem lines="none">
                <IonAvatar slot="start">
                  <IonImg src={user.picture.large} />
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

        <IonModal
          breakpoints={[0, 0.5, 0.8]}
          initialBreakpoint={0.5}
          ref={modal}
          isOpen={selectedUser !== null}
          onIonModalDidDismiss={() => setSelectedUser(null)}
        >
          <IonHeader>
            <IonToolbar color={"tertiary"}>
              <IonButtons slot="start">
                <IonButton onClick={() => modal.current?.dismiss()}>Close</IonButton>
              </IonButtons>

              <IonTitle> {selectedUser?.login.username} </IonTitle>
            </IonToolbar>
            <IonToolbar color={"tertiary"}>
              <IonSegment value={activeSegment} onIonChange={(e) => setActiveSegment(e.detail.value!)}>
                <IonSegmentButton value="details">Details</IonSegmentButton>
                <IonSegmentButton value="calendar">Calendar</IonSegmentButton>
              </IonSegment>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            {activeSegment === "details" && (
              <>
                <p>
                  Name: {selectedUser?.name.first} {selectedUser?.name.last}
                </p>

                <p>Age: {selectedUser?.dob.age}</p>
                <p>Phone: {selectedUser?.phone}</p>
                <p>
                  Address: {selectedUser?.location.street.number} {selectedUser?.location.street.name}{" "}
                  {selectedUser?.location.city} {selectedUser?.location.state} {selectedUser?.location.postcode}
                </p>
              </>
            )}
          </IonContent>
        </IonModal>
      </IonContent>

      <IonModal ref={cardModal} trigger="card-modal" presentingElement={presentingElement!}>
        <IonHeader>
          <IonToolbar color={"tertiary"}>
            <IonButtons slot="start">
              <IonButton onClick={() => cardModal.current?.dismiss()}>Close</IonButton>
            </IonButtons>

            <IonTitle> Card Modal</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>Card Modal</IonContent>
      </IonModal>

      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton id="card-modal">
          <IonIcon icon={addSharp} />
        </IonFabButton>
      </IonFab>
    </IonPage>
  );
};

export default List;
