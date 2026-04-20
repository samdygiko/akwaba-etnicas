export type Lang = "en" | "fr" | "es";

export const aboutTranslations: Record<Lang, {
  label: string;
  pullQuote: string;
  body: string;
  findUs: string;
}> = {
  en: {
    label: "Our Story",
    pullQuote:
      "\u201cAkwaba\u201d \u2014 welcome, in the Akan tradition. An invitation to enter a space where African artistry meets everyday life.",
    body: "Akwaba \u00c9tnicas is a company specialising in the direct sale of visual and handcrafted art, beauty cosmetics, ethnic handcrafted accessories and ethnic fabrics, sourced through our travels across Africa and around the world. Our goal is to immerse you in our journeys through our visual art and our range of ethnic and handcrafted products.",
    findUs: "Find Us",
  },
  fr: {
    label: "Notre Histoire",
    pullQuote:
      "\u201cAkwaba\u201d \u2014 bienvenue, dans la tradition Akan. Une invitation \u00e0 entrer dans un espace o\u00f9 l\u2019art africain rencontre la vie quotidienne.",
    body: "Akwaba \u00c9tnicas est une entreprise sp\u00e9cialis\u00e9e dans la vente directe d\u2019art visuel et artisanal, de cosm\u00e9tiques de beaut\u00e9, d\u2019accessoires artisanaux ethniques et de tissus ethniques, sourc\u00e9s \u00e0 travers nos voyages en Afrique et autour du monde. Notre objectif est de vous immerger dans nos voyages \u00e0 travers notre art visuel et notre gamme de produits ethniques et artisanaux.",
    findUs: "Nous Trouver",
  },
  es: {
    label: "Nuestra Historia",
    pullQuote:
      "\u201cAkwaba\u201d \u2014 bienvenido, en la tradici\u00f3n Akan. Una invitaci\u00f3n a entrar en un espacio donde el arte africano se encuentra con la vida cotidiana.",
    body: "Akwaba \u00c9tnicas es una empresa especializada en la venta directa de arte visual y artesanal, cosm\u00e9ticos de belleza, accesorios artesanales \u00e9tnicos y tejidos \u00e9tnicos, obtenidos a trav\u00e9s de nuestros viajes por \u00c1frica y el mundo. Nuestro objetivo es sumergirte en nuestros viajes a trav\u00e9s de nuestro arte visual y nuestra gama de productos \u00e9tnicos y artesanales.",
    findUs: "Enc\u00fantranos",
  },
};
