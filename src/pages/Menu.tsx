import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonMenu,
  IonMenuToggle,
  IonPage,
  IonRouterOutlet,
  IonSplitPane,
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
    <IonSplitPane contentId="main">
      <IonMenu contentId="main">
        <IonHeader>
          <IonToolbar color={"secondary"}>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding">
          {paths.map((item, index) => (
            <IonMenuToggle key={index} autoHide={false}>
              <IonItem detail={false} routerLink={item.url} routerDirection="none">
                <IonIcon slot="start" icon={item.icon} />
                {item.name}
              </IonItem>
            </IonMenuToggle>
          ))}
        </IonContent>
      </IonMenu>

      <IonRouterOutlet id="main">
        <Route exact path="/app/list" component={List} />
        <Route exact path="/app/settings" component={Settings} />
        <Route exact path="/app">
          <Redirect to="/app/list" />
        </Route>
      </IonRouterOutlet>
    </IonSplitPane>
  );
};

export default Menu;
