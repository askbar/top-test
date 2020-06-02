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
  // let [appJS, setAppJS] = useState("");

  const pushEvent = () => {};
  const scriptDoneApp = () => {
    console.log("app loaded");
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
        trackingHandler: { pushEvent }, //topContext.trackingHandlerFactory(appId),
      },
      document.getElementById("get-quote-app")
    );
  };

  // useScript(
  //   "https://code.jquery.com/jquery-3.4.1.min.js",
  //   null,
  //   null,
  //   "sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=",
  //   true
  // );
  useScript(
    "https://flos.webplatform-prod-01.topdanmark.cloud/core/20200226T090223H49dd678/js/flos-core.js"
  );
  useScript(
    "https://flos.webplatform-prod-01.topdanmark.cloud/web-components/1.1.12/build/flos-webcomponents.js"
  );
  useScript(
    "https://flos.webplatform-prod-01.topdanmark.cloud/core/20200226T090223H49dd678/js/vendor/bootstrap.min.js"
  );
  useScript(
    "https://flos.webplatform-prod-01.topdanmark.cloud/web-components/1.1.12/build/flos-webcomponents.esm.js"
  );
  //  useScript("https://cdn.topdanmark.dk/latest/js/tds-global.bundle.js");

  useScript(
    "https://www.topdanmark.dk/hybridapps/get-quote-app/20200506T084812H69afff0/static/js/index.js",
    scriptDoneApp
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Køb</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Køb</IonTitle>
          </IonToolbar>
        </IonHeader>

        <link
          rel="stylesheet"
          href="https://flos.webplatform-prod-01.topdanmark.cloud/core/latest/css/flos-core.css"
        />
        <div
          className="inline-svg hidden"
          data-src="https://cdn.topdanmark.dk/latest/images/Svg/product-icons.svg"
        ></div>
        <div id="get-quote-app" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
