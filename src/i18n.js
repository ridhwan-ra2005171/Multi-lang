import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(Backend)
  .init({
    debug: true,
    fallBackLng: "en",//basically if no lng code given
    returnObjects: true, //so it takes objects and strings
  });




// i18n
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     debug: true,
//     fallBackLng: "en",//basically if no lng code given
//     returnObjects: true, //so it takes objects and strings
//     resources: {
//       en: {
//         translation: {
//           greetings: "Hello, Welcome!",
//           description:{
//             line1: "You are currently reading this text in English, written by <1>{{author}}</1>",
//             line2: "You can change the language by clicking on the button above",
//           }
//         },
//       },
//       fr: {
//         translation: {
//           greetings: "Bonjour, Bienvenue!",
//           description:{
//             line1: "Vous lisez actuellement ce texte en francais, ecrit par <1>{{author}}</1>",
//             line2: "Vous pouvez changer la langue en cliquant sur le bouton ci-dessus",
//           }
//         },
//       },
//       de: {
//         translation: {
//           greetings: "Hallo, Willkommen!",
//           description:{
//             line1: "Sie lesen gerade diesen Text in Deutsch, geschrieben von {{author}}",
//             line2: "Sie können die Sprache ändern indem Sie auf den Button oben klicken",
//           }
//         },
//       },
//       ar: {
//         translation: {
//           greetings: "مرحبا, أهلا وسهلا!",
//           description:{
//             line1: "أنت في حال قراءة هذا النص بالعربية",
//             line2: "أنت تقرأ الآن هذا النص باللغة الإنجليزية، كتبه {{author}}",
//           }
//         },
//       },
//     },
//   });

  //we create locales folder for future proof. if there s alot to translate.