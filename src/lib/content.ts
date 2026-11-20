export const INSTAGRAM_URL = "https://www.instagram.com/learndiamonds/";
export const INSTAGRAM_HANDLE = "@learndiamonds";
export const EMAIL = "Will@LearnDiamonds.com";
export const PHONE_DISPLAY = "617-755-7490";
export const PHONE_TEL = "+16177557490";

export const NAV = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#discover", label: "Discover" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
] as const;

export type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  caption: string;
  area: string;
  mobileAspect: string;
};

export const GALLERY: GalleryItem[] = [
  {
    src: "/images/model-coat.jpg",
    alt: "A woman in a black coat and ivory turtleneck wearing a diamond line necklace and a diamond ring.",
    title: "In black",
    caption: "A diamond line at the collar. A ring at the hand.",
    area: "area-a",
    mobileAspect: "aspect-[3/4]",
  },
  {
    src: "/images/diamond-macro.jpg",
    alt: "Macro photograph of a round brilliant diamond on a black ground.",
    title: "Brilliance",
    caption: "A single stone, held in the light.",
    area: "area-b",
    mobileAspect: "aspect-square",
  },
  {
    src: "/images/orange-gem.jpg",
    alt: "An orange oval gemstone in a gold setting with a diamond halo.",
    title: "Amber fire",
    caption: "Color, as vivid as the house allows.",
    area: "area-c",
    mobileAspect: "aspect-square",
  },
  {
    src: "/images/model-ivory.jpg",
    alt: "A woman in ivory silk wearing a diamond drop earring and a diamond necklace.",
    title: "Ivory",
    caption: "Couture jewelry, composed for the portrait.",
    area: "area-d",
    mobileAspect: "aspect-[3/4]",
  },
  {
    src: "/images/gold-rose.jpg",
    alt: "A sculptural gold and diamond rose brooch on dark stone.",
    title: "In metal",
    caption: "Jewelry with the presence of a small sculpture.",
    area: "area-e",
    mobileAspect: "aspect-square",
  },
  {
    src: "/images/green-gem.jpg",
    alt: "A vivid green cushion-cut gemstone in a gold setting.",
    title: "Green",
    caption: "A note of color against charcoal.",
    area: "area-f",
    mobileAspect: "aspect-square",
  },
  {
    src: "/images/diamond-ring.jpg",
    alt: "Close photograph of an oval diamond ring on a hand, with a black silk sleeve.",
    title: "On the hand",
    caption: "An oval diamond, worn close.",
    area: "area-g",
    mobileAspect: "aspect-[4/3]",
  },
  {
    src: "/images/earring-crop.jpg",
    alt: "Close crop of a diamond drop earring on an ear.",
    title: "At the ear",
    caption: "Light, gathered in a single drop.",
    area: "area-h",
    mobileAspect: "aspect-[3/4]",
  },
  {
    src: "/images/gemstones-still.jpg",
    alt: "Orange, green, purple, and blue gemstones arranged on ivory silk with small diamonds.",
    title: "A palette",
    caption: "Orange, green, purple, and blue — precious color.",
    area: "area-i",
    mobileAspect: "aspect-[4/3]",
  },
  {
    src: "/images/loupe-still.jpg",
    alt: "A jeweler’s loupe, a loose diamond, and an ivory glove on black velvet.",
    title: "The loupe",
    caption: "The instruments of a closer look.",
    area: "area-j",
    mobileAspect: "aspect-[4/3]",
  },
];
