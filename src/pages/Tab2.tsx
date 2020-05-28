import React from "react";
import useScript from "../components/useScript";
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
    "https://www.topdanmark.dk/hybridapps/get-quote-app/20200506T084812H69afff0/static/js/index.js";

  const scriptDone = () => {
    console.log("script loaded");
    const apiAwsBase = "https://api.webplatform-prod-01.topdanmark.cloud";
    const wso2host = "wso2prod.topdanmark.local";
    const appId = "get-quote-app";
    const logger = "https://api.webplatform-prod-01.topdanmark.cloud/log";
    new GetQuote(
      {
        appId: appId,
        flow: "GET_QUOTE",
        endpoints: {
          resources:
            "https://www.topdanmark.dk/rest/resourcebundle/dk.getquote",
          submit: {
            method: "POST",
            url: apiAwsBase + "/insurance-service/send-mail",
            headers: {
              "X-top-brand": "TD",
              "X-top-dscm": "",
              "Content-Type": "application/json",
            },
          },
          receipt: {
            method: "POST",
            url: apiAwsBase + "/objects",
          },
          openTimes: {
            method: "POST",
            url: apiAwsBase + "/ragnarok-call-me-api/timings",
            headers: {
              "x-top-appname": appId,
              "x-top-category": "open-times",
              "x-top-host": wso2host,
            },
            body: {
              subject: null,
            },
          },
          submitGenesys: {
            method: "POST",
            url: apiAwsBase + "/ragnarok-call-me-api/submit",
            headers: {
              "x-top-appname": appId,
              "x-top-category": "submit-genesys",
              "x-top-host": wso2host,
            },
          },
          log: logger,
        },
        logLevel: "debug",
        defaultCategory: "LOCAL_DEV",
        trackingHandler: null, //topContext.trackingHandlerFactory(appId),
      },
      document.getElementById("get-quote-app")
    );
  };

  const scriptError = (error: Error) => {
    console.error(error);
  };

  useScript(appJS, scriptDone, scriptError);

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
        <div id="get-quote-app" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
