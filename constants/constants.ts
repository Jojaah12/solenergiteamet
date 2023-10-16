export const HERODATA: { HEADING: string; SUBHEADING: string } =
  Object.freeze({
    HEADING: "Solceller & Takbyte",
    SUBHEADING:
      "Vi är specialister på solcellslösningar och erbjuder en helhetslösning för solel. Vår engagerade personal arbetar internt för att säkerställa kontroll över hela processen. Du kan känna dig trygg med att köpa din lösning av oss.",
  });

export const CONTENTBANNERDATA: {
  HEADING: string;
  SUBHEADING: string;
} = Object.freeze({
  HEADING: "Ta reda på mer om våra solcellslösningar",
  SUBHEADING:
    "Vi är experter på solcellsinstallationer & Takbyte för olika typer av fastigheter, såsom villor, företag och bostadsrättsföreningar. Välj det område som intresserar dig och upptäck dess unika fördelar.",
});

export const STEPBANNERDATA: { HEADING: string; SUBHEADING: string } =
  Object.freeze({
    HEADING: "Ta reda på mer om våra solcellslösningar",
    SUBHEADING:
      "Vi förstår att solceller kan vara överväldigande. Därför har vi utformat en steg-för-steg-guide som visar hur en solcellsinstallation med en komplett helhetsleverantör fungerar. Låt oss guida er genom processen!",
  });

export const CONTENTCARDDATA: readonly {
  readonly ID: number;
  readonly CARDTITLE: string;
  readonly CARDSUBTITLE: string;
  readonly CARDTEXT: string;
  readonly CARDIMAGE: string;
  readonly HREF: string;
}[] = Object.freeze([
  {
    ID: 1,
    CARDTITLE: "Villa",
    CARDSUBTITLE: "",
    CARDTEXT:
      "Optimera er villa med solenergi! Minska kostnader och bli mer hållbara. Kontakta oss nu för skräddarsydda solpanelslösningar.",
    CARDIMAGE: "/images/content-1.jpg",
    HREF: "/",
  },
  {
    ID: 2,
    CARDTITLE: "Företag",
    CARDSUBTITLE: "",
    CARDTEXT:
      "Optimera er villa med solenergi! Minska kostnader och bli mer hållbara. Kontakta oss nu för skräddarsydda solpanelslösningar.",
    CARDIMAGE: "/images/content-3.jpg",
    HREF: "/",
  },
  {
    ID: 3,
    CARDTITLE: "Takbyte",
    CARDSUBTITLE: "",
    CARDTEXT:
      "Optimera er villa med solenergi! Minska kostnader och bli mer hållbara. Kontakta oss nu för skräddarsydda solpanelslösningar.",
    CARDIMAGE: "/images/content-3.jpg",
    HREF: "/takbyte",
  },
  {
    ID: 4,
    CARDTITLE: "Bostadsrättsföreningar",
    CARDSUBTITLE: "",
    CARDTEXT:
      "Optimera er villa med solenergi! Minska kostnader och bli mer hållbara. Kontakta oss nu för skräddarsydda solpanelslösningar.",
    CARDIMAGE: "/images/content-3.jpg",
    HREF: "/takbyte",
  },
]);

export const TAKBYTEHEADERDATA: {
  HEADING: string;
  SUBHEADING: string;
} = Object.freeze({
  HEADING: "Takbyte",
  SUBHEADING:
    "Det kan många gånger vara lönsamt att montera solceller på villan i samband med att man lägger ett nytt tak",
});

export const TAKBYTECONTENTDATA: readonly {
  readonly ID: number;
  readonly BLOCKTITLE: string;
  readonly BLOCKTEXT: string;
  readonly BLOCKIMAGE: string;
}[] = Object.freeze([
  {
    ID: 1,
    BLOCKTITLE: "Hur fungerar taktintegrerade solceller?",
    BLOCKTEXT:
      "Det kan många gånger vara lönsamt att montera solceller på villan i samband med att man lägger ett nytt tak Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    BLOCKIMAGE: "/images/green.jpg",
  },
  {
    ID: 2,
    BLOCKTITLE: "Hur fungerar taktintegrerade solceller?",
    BLOCKTEXT:
      "Det kan många gånger vara lönsamt att montera solceller på villan i samband med att man lägger ett nytt tak Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    BLOCKIMAGE: "/images/green.jpg",
  },
]);
