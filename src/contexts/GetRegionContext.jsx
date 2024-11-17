/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { data as dataTranslate } from "../data/dataTranslate";
import Loading from "../components/Loading";

const GetRegionContext = createContext();

function GetRegionProvider({ children }) {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "id",
  );
  const [data, setData] = useState(dataTranslate[1]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getRegion() {
      try {
        setIsLoading(true);
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();

        let detectedLanguage = "id";

        if (
          data.country === "SA" ||
          data.country === "AE" ||
          data.country === "EG"
        ) {
          detectedLanguage = "ar";
          setData(dataTranslate[2]);
        } else if (data.country !== "ID") {
          detectedLanguage = "en";
          setData(dataTranslate(0));
        } else {
          detectedLanguage = "id";
          setData(dataTranslate[1]);
        }

        setLanguage(detectedLanguage);
        localStorage.setItem("language", detectedLanguage);
      } catch (error) {
        console.error("Gagal mendeteksi lokasi:", error);
      } finally {
        setIsLoading(false);
      }
    }

    if (!localStorage.getItem("language")) {
      getRegion();
    }
  }, [language]);

  return (
    <GetRegionContext.Provider value={{ language, data }}>
      {isLoading ? <Loading /> : children}
    </GetRegionContext.Provider>
  );
}

function useLanguage() {
  const context = useContext(GetRegionContext);
  if (context === undefined)
    throw new Error("GetRegionContext was used outside of GetRegionProvider");
  return context;
}

export { GetRegionProvider, useLanguage };
