import React, { useEffect } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab2.css";

const Tab2: React.FC = () => {
  const appJS =
    "https://www.topdanmark.dk/hybridapps/onsa-content/20200526T091901H69c22c6/static/js/index.js";
  const appSnip =
    '<onsa-content data-basename="/forsikringer/indboforsikring-koeb/"></onsa-content>';

  useEffect(() => {
    const script = document.createElement("script");
    script.src = appJS;
    script.async = true;
    document.body.appendChild(script);
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div dangerouslySetInnerHTML={{ __html: appSnip }} />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
