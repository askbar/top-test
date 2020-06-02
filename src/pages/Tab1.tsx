import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar, IonFab, IonFabButton, IonFabList, IonIcon 
} from "@ionic/react";
import { logoFacebook, logoTwitter, logoYoutube, logoPwa, logoNpm, logoIonic, logoGithub, logoJavascript, barcode, logoVimeo, logoChrome, logoReact } from 'ionicons/icons';
import "../types.d.ts";
import "./Tab1.css";
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

const Tab1: React.FC = () => {

  const openScanner = async () => {
    const data = await BarcodeScanner.scan();
    alert(`Barcode data: ${data.text}`);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Test</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonFab vertical="center" horizontal="center">
      <IonFabButton>Share</IonFabButton>
      <IonFabList side="top">
        <IonFabButton onClick={openScanner}>
          <IonIcon icon={barcode} />
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={logoTwitter} />
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={logoYoutube} />
        </IonFabButton>
      </IonFabList>

      <IonFabList side="end">
        <IonFabButton>
          <IonIcon icon={logoPwa} />
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={logoNpm} />
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={logoIonic} />
        </IonFabButton>
      </IonFabList>

      <IonFabList side="bottom">
        <IonFabButton>
          <IonIcon icon={logoGithub} />
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={logoJavascript} />
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={logoFacebook} />
        </IonFabButton>
      </IonFabList>

      <IonFabList side="start">
        <IonFabButton>
          <IonIcon icon={logoVimeo} />
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={logoChrome} />
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={logoReact} />
        </IonFabButton>
      </IonFabList>
    </IonFab>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
