import React, { useEffect } from "react";
//rafce
import {useTranslation} from "react-i18next";

const languages = [
  {
    code: "en",
    lang: "English",
  },
  {
    code: "fr",
    lang: "French",
  },
  {
    code: "de",
    lang: "German",
  },
  {
    code: "ar",
    lang: "Arabic",
  },
];



const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string | undefined) => {
    i18n.changeLanguage(lang);
};

  useEffect(()=>{
    // document.body.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.body.dir = i18n.dir() //this is auto detect rtl
  },[i18n, i18n.language])

  return <div className="btn-container">
    {
      languages.map((language) => {
        return (
          <button type="button" className={language.code === i18n.language ? "active" : ""} key={language.code} onClick={() => changeLanguage(language.code)}>
            {language.lang}
          </button>
        );
      })
    }
  </div>;
};

export default LanguageSelector;
