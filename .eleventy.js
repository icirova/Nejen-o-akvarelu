module.exports=function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("clanky/images");
    eleventyConfig.addPassthroughCopy("random-gallery");

    // eleventyConfig.addPassthroughCopy("**/*.js");

    eleventyConfig.addFilter("limit", function (arr, limit) {
        return arr.slice(0, limit);
    });

    eleventyConfig.addFilter("formatDate", function (date) {
        if (!date) {
            return "";
        }

        return new Intl.DateTimeFormat("cs-CZ", {
            day: "numeric",
            month: "numeric",
            year: "numeric",
            timeZone: "UTC",
        }).format(date);
    });

    eleventyConfig.addFilter("sample", function (arr, limit) {
        const shuffled = [...arr];

        for (let i = shuffled.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
        }

        return shuffled.slice(0, limit);
    });

    return{
        templateFormats: ["njk", "html", "md"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    }
};
