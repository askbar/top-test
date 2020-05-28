import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "../types.d.ts";
import "./Tab1.css";

const Tab1: React.FC = () => {
  const slots = [
    {
      id: 123,
      startTime: "2019-11-01T08:00:13.164Z",
      endTime: "2019-11-01T08:25:13.164Z",
    },
    {
      id: 234,
      startTime: "2019-11-01T09:00:13.164Z",
      endTime: "2019-11-01T09:20:13.164Z",
    },

    {
      id: 345,
      startTime: "2019-11-12T12:00:13.164Z",
      endTime: "2019-11-12T12:50:13.164Z",
    },
    {
      id: 567,
      startTime: "2019-11-12T13:00:13.164Z",
      endTime: "2019-11-12T13:20:13.164Z",
    },
    {
      id: 678,
      startTime: "2019-11-12T14:00:13.164Z",
      endTime: "2019-11-12T14:40:13.164Z",
    },
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <CalendarTimeSlot slots={slots} /> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
