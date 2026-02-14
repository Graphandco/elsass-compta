const config = {
   locales: [
      // 'ar',
      "fr",
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
   ],
   translations: {
      fr: {
         "Auth.form.welcome.subtitle": "Connectez-vous à votre compte",
         "HomePage.header.subtitle": "Bienvenue sur votre tableau de bord",
         // Ajoute ici toutes les clés que tu veux surcharger
      },
   },
};

const bootstrap = (app) => {
   console.log(app);
};

export default {
   config,
   bootstrap,
};
