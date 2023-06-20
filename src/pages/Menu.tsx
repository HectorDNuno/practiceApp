import {
  IonContent,
  IonHeader,
  IonItem,
  IonMenu,
  IonMenuToggle,
  IonPage,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { Redirect, Route } from "react-router";
import List from "./List";
import Settings from "./Settings";
import { cogSharp, homeSharp } from "ionicons/icons";

const Menu: React.FC = () => {
  const paths = [
    { name: "Home", url: "/app/list", icon: homeSharp },
    { name: "Settings", url: "/app/settings", icon: cogSharp },
  ];

  return (
    <IonPage>
      <IonMenu contentId="main">
        <IonHeader>
          <IonToolbar color={"secondary"}>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding">
          {paths.map((item, index) => {
            return (
              <IonMenuToggle key={index}>
                <IonItem routerLink={item.url} routerDirection="none">
                  {item.name}
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonContent>
      </IonMenu>

      <IonRouterOutlet id="main">
        <Route exact path="/app/list" component={List} />
        <Route exact path="/app/settings" component={Settings} />
        <Route exact path="/app" component={List}>
          <Redirect to="/app/list" />
        </Route>
      </IonRouterOutlet>
    </IonPage>
  );
};

export default Menu;
