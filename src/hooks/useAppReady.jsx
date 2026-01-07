import { useState , useEffect } from "react";

function useAppReady() {
    const [windowReady, setWindowReady] = useState(false);
  const [assetsReady, setAssetsReady] = useState(false);
  const [minTimeReady, setMinTimeReady] = useState(false);

  useEffect(() => {
    function onload() {
        setWindowReady(true);
    }
    
    if( document.readyState === "complete") {
        onload();
    }
    else {
        window.addEventListener("load",onload);
    }

    return () => window.removeEventListener("load", onload);
  },[]);

  useEffect(() => {
    const images = Array.from(document.images);
    let count = 0;

    if( images.length === 0 ) {
        document.fonts.ready.then(() => setAssetsReady(true));
        return;
    }

    function done() {
        count++;
        if(count === images.length) {
            document.fonts.ready.then(() => setAssetsReady(true));

        }    
    };

    images.forEach((img) => {
      if (img.complete) {
        done();
      } else {
        img.addEventListener("load", done);
        img.addEventListener("error", done);
      }
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", done);
        img.removeEventListener("error", done);
      });
    };
  },[]);

  useEffect(() => {
    const timer = setTimeout(() => setMinTimeReady(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return windowReady && assetsReady && minTimeReady;
}

export default useAppReady;