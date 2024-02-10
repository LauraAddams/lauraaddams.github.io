import { StaticImageData } from "next/image";

import kngthumb from "base/public/projects/know-your-glow-thumb.png";
import kngroutine from "base/public/projects/know-your-glow-routine.gif";
import knghighlights from "base/public/projects/know-your-glow-highlights.gif";
import kngingredients from "base/public/projects/know-your-glow-ingredients.png";
import kngsearch from "base/public/projects/know-your-glow-search.png";

import samesamethumb from "base/public/projects/same-same-thumb.png";
import samesamecreation from "base/public/projects/same-same-creation.gif";
import samesamemood from "base/public/projects/same-same-mood.png";
import samesamecompleted from "base/public/projects/same-same-completed.png";
import samesameprompt from "base/public/projects/same-same-prompt.png";

import yumyumthumb from "base/public/projects/yum-yum-thumb.png";
import yumyumsearch from "base/public/projects/yum-yum-search.png";
import yumyumresults from "base/public/projects/yum-yum-results.png";
import yumyumdetail from "base/public/projects/yum-yum-detail.png";

import spooksythumb from "base/public/projects/spooksy-thumb.png";
import spooksylanding from "base/public/projects/spooksy-landing.png";
import spooksysearch from "base/public/projects/spooksy-search.gif";
import spooksydetail from "base/public/projects/spooksy-detail.png";
import spooksyconfirmation from "base/public/projects/spooksy-confirmation.png";

interface Project {
  thumbnail: StaticImageData;
  gallery: { src: StaticImageData; alt: string }[];
}

export const knowYourGlow: Project = {
  thumbnail: kngthumb,
  gallery: [
    { src: kngroutine, alt: "Know Your Glow routine" },
    { src: knghighlights, alt: "Know Your Glow highlights" },
    { src: kngingredients, alt: "Know Your Glow ingredients" },
    { src: kngsearch, alt: "Know Your Glow search" },
  ],
};

export const sameSame: Project = {
  thumbnail: samesamethumb,
  gallery: [
    { src: samesamecreation, alt: "Same Same creation" },
    { src: samesamemood, alt: "Same Same mood" },
    { src: samesameprompt, alt: "Same Same prompt" },
    { src: samesamecompleted, alt: "Same Same completed" },
  ],
};

export const yumYum: Project = {
  thumbnail: yumyumthumb,
  gallery: [
    { src: yumyumsearch, alt: "yumyum search for recipes" },
    { src: yumyumresults, alt: "yumyum recipe results" },
    { src: yumyumdetail, alt: "yumyum recipe detail" },
  ],
};

export const spooksy: Project = {
  thumbnail: spooksythumb,
  gallery: [
    { src: spooksylanding, alt: "Spooksy landing page" },
    { src: spooksydetail, alt: "Spooky product detail" },
    { src: spooksysearch, alt: "Spooksy search" },
    { src: spooksyconfirmation, alt: "Spooksy order confirmation" },
  ],
};
