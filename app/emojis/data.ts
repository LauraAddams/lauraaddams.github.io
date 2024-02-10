import niiice from "base/public/emojis/niiice.gif";
import cool from "base/public/emojis/cool-cool-cool.gif";
import okok from "base/public/emojis/ok-ok.gif";
import good from "base/public/emojis/good-wink.gif";
import gagging from "base/public/emojis/gagging.png";
import rainbowend from "base/public/emojis/rainbow-end.png";
import thumbsup from "base/public/emojis/thumbs-up.gif";
import thankyou from "base/public/emojis/thank-you.png";
import yay from "base/public/emojis/yay.gif";
import youaresogreat from "base/public/emojis/you-are-so-great.gif";
import ilovethis from "base/public/emojis/i-love-this.gif";
import peachhappy from "base/public/emojis/peach-happy.png";
import peachhide from "base/public/emojis/peach-hide.png";
import peachscream from "base/public/emojis/peach-scream.png";
import peachshocked from "base/public/emojis/peach-shocked.png";
import peachstretch from "base/public/emojis/peach-stretch.png";
import peachtongue from "base/public/emojis/peach-tongue.png";
import peachwink from "base/public/emojis/peach-wink.png";
import { StaticImageData } from "next/image";

export const emoijs: {
  image: StaticImageData;
  alt: string;
  name: string;
}[] = [
  {
    image: niiice,
    alt: "scrolling niiiiiice",
    name: "niiice",
  },
  {
    image: cool,
    alt: "flashing cool cool cool",
    name: "cool-cool-cool",
  },
  {
    image: okok,
    alt: "stacking ok",
    name: "ok-ok",
  },
  {
    image: good,
    alt: "good winking",
    name: "good-wink",
  },
  {
    image: gagging,
    alt: "gagging chihuahua",
    name: "gagging",
  },
  {
    image: rainbowend,
    alt: "ending half of the rainbow emoji",
    name: "rainbow-end",
  },
  {
    image: thumbsup,
    alt: "green hand giving a thumbs up",
    name: "thumbs-up",
  },
  {
    image: thankyou,
    alt: "thank you with smiley face",
    name: "thank-you-smile",
  },
  {
    image: yay,
    alt: "wiggly yay",
    name: "yay",
  },
  {
    image: youaresogreat,
    alt: "you are so great",
    name: "your-are-so-great",
  },
  {
    image: ilovethis,
    alt: "I love this",
    name: "i-love-this",
  },
];

export const peachpack: {
  image: StaticImageData;
  alt: string;
  name: string;
}[] = [
  {
    image: peachhappy,
    alt: "peach is happy",
    name: "peach-happy",
  },
  {
    image: peachhide,
    alt: "peach is hiding",
    name: "peach-hide",
  },
  {
    image: peachscream,
    alt: "peach screaming",
    name: "peach-scream",
  },
  {
    image: peachshocked,
    alt: "peach is shocked",
    name: "peach-shocked",
  },
  {
    image: peachstretch,
    alt: "peach stretching",
    name: "peach-stretch",
  },
  {
    image: peachtongue,
    alt: "peach tongue",
    name: "peach-tongue",
  },
  {
    image: peachwink,
    alt: "peach winking",
    name: "peach-wink",
  },
];
