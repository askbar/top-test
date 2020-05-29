import { useEffect } from "react";

const useScript = (
  url: string,
  done?: Function | null,
  error?: Function | null,
  integrity?: string | null,
  crossOrigin?: boolean
) => {
  useEffect(() => {
    console.info(`start loading ${url}`);
    const script = document.createElement("script");

    script.src = url;
    script.async = true;
    if (crossOrigin) script.crossOrigin = "anonymous";
    if (typeof integrity === "string") script.integrity = integrity;

    script.addEventListener("onload", () =>
      console.info(`script loaded ${url}`)
    );

    if (typeof done === "function")
      script.addEventListener("load", () => done());
    else
      script.addEventListener("load", () =>
        console.info(`script loading ${url}`)
      );

    if (typeof error === "function")
      script.addEventListener("error", (e) => error(e));
    else
      script.addEventListener("error", (e) =>
        console.error(`script failed ${url}`)
      );

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

export default useScript;
