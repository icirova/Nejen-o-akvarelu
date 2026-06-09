const authorLink = "https://pixabay.com/cs/users/ractapopulous-24766/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2561511";
const authorName = "🎨JL G";

module.exports = [
    {
        src: "/random-gallery/1.webp",
        alt: "peří",
    },
    {
        src: "/random-gallery/2.webp",
        alt: "oko",
    },
    {
        src: "/random-gallery/3.webp",
        alt: "lev",
    },
    {
        src: "/random-gallery/4.webp",
        alt: "pozadí",
    },
    {
        src: "/random-gallery/5.webp",
        alt: "pozadí",
    },
    {
        src: "/random-gallery/6.webp",
        alt: "pozadí",
    },
    {
        src: "/random-gallery/7.webp",
        alt: "kolo",
    },
    {
        src: "/random-gallery/8.webp",
        alt: "přístav",
    },
    {
        src: "/random-gallery/9.webp",
        alt: "dobroty",
    },
    {
        src: "/random-gallery/10.webp",
        alt: "auto",
    },
    {
        src: "/random-gallery/11.webp",
        alt: "auto",
    },
    {
        src: "/random-gallery/12.webp",
        alt: "kočky",
    },
    {
        src: "/random-gallery/13.webp",
        alt: "kočka",
    },
    {
        src: "/random-gallery/14.webp",
        alt: "budka",
    },
    {
        src: "/random-gallery/15.webp",
        alt: "květiny",
    },
    {
        src: "/random-gallery/16.webp",
        alt: "kytka v květináči",
    },
    {
        src: "/random-gallery/17.webp",
        alt: "kytice",
    },
    {
        src: "/random-gallery/18.webp",
        alt: "dívka s květinou",
    },
    {
        src: "/random-gallery/19.webp",
        alt: "dívka s deštníkem",
    },
    {
        src: "/random-gallery/20.webp",
        alt: "hrozny",
    },
    {
        src: "/random-gallery/21.webp",
        alt: "ozdoby",
    },
    {
        src: "/random-gallery/22.webp",
        alt: "obličej s maskou",
    },
    {
        src: "/random-gallery/23.webp",
        alt: "motorka",
    },
    {
        src: "/random-gallery/24.webp",
        alt: "les",
    },
].map((image) => ({
    ...image,
    authorLink,
    authorName,
}));
