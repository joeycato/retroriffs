<h1 align="center">
  Retro Riffs Blog
</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/a0a6e226-6c7a-43e0-bab6-0c658c8abca5/deploy-status)](https://app.netlify.com/sites/flexible-gatsby/deploys)

A simple minimalist Gatsby starter for your blog. [Demo](https://flexible-gatsby.netlify.com/).

Inspired by [flexible-jekyll](https://github.com/artemsheludko/flexible-jekyll).

![home-page-screenshot](./static/promo-img.jpg)

![home-page-screenshot](./static/home-page.jpg)

![blog-page-screenshot](./static/post-example.jpg)

## Setup

npm install -g gatsby-cli

mkdir .cache

## Quick Start 🚀

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```sh
    # create a new Gatsby site using the-plain-gatsby starter
    gatsby new my-blog https://github.com/wangonya/flexible-gatsby
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd my-blog/
    gatsby develop
    ```

3.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Edit `gatsby.config.js` to update site metadata.

    Add blog posts in markdown in `content/blog`. Example blog posts have been provided.

## Special Thanks

This blog was forked from https://github.com/wangonya/flexible-gatsby

Note: Run 'gatsby build" when code is final

## Migration Guide (v4 to v5)

Run these commands in PowerShell manually since the bash environment here has issues with the dependency resolution:

```
Remove-Item -Recurse -Force node_modules, package-lock.json -ErrorAction SilentlyContinue
npm install --legacy-peer-deps
npm run build
```

The core code changes are complete. The ajv issue is a transient dependency conflict that sometimes happens with Gatsby and should resolve with a clean install without the override.

Alternatively, if the build still fails, we can try using Yarn instead which sometimes handles these dependency conflicts better:

```
npm install -g yarn
Remove-Item -Recurse -Force node_modules, package-lock.json -ErrorAction SilentlyContinue
yarn install
yarn build
```

Local dev mode:

```
yarn develop
```
