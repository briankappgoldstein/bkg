module.exports = function(eleventyConfig) {
    
    // Copy `src/style.css` to `_site/style.css`
    

    // Layouts
    eleventyConfig.addLayoutAlias('base', 'base.njk')
    eleventyConfig.addLayoutAlias('page', 'page.njk')
    eleventyConfig.addLayoutAlias('post', 'post.njk')

    // Pass-through files
    eleventyConfig.addPassthroughCopy('src/site.webmanifest')
    eleventyConfig.addPassthroughCopy('src/robots.txt')
    eleventyConfig.addPassthroughCopy('src/assets/images')
    eleventyConfig.addPassthroughCopy("src/style.css");
    
    return {
      // When a passthrough file is modified, rebuild the pages:
      passthroughFileCopy: true,
      dir: {
        input: "src",
        includes: "_includes",
        layouts: "_includes/layouts",
        data: "_data",
        output: "_site"
      }
    };
  };