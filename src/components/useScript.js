import { useEffect } from "react";

const useScript = (url, done, error) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = url;
    script.async = true;
    script.addEventListener("load", () => done());
    script.addEventListener("error", (e) => error(e));

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

export default useScript;
