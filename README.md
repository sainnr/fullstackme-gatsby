<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://fullstackme.co.uk">
    <img alt="FullStack Me" src="https://fullstackme.co.uk/icons/icon-96x96.png" width="60" />
  </a>
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby starter by FullStack Me
</h1>

Power up your blog with the Gatsby starter prepared by FullStack Me!
Apart from blazing-fast [Gatsby](https://www.gatsbyjs.org/) frontend generator,
this starter ships with the configuration ready for connecting to a headless CMS [Strapi](https://strapi.io).
With the combination like this, you can easily make your own blog backed by a robust, NodeJS-driven CMS
that communicates all the data into Gatsby generator via GraphQL at a supreme efficiency.

## 🚀 Quick start

1.  **Create a Gatsby site**

    Use the Gatsby CLI to create a new site, specifying this starter.

    ```sh
    cd my-blog
    gatsby new gatsby-ui https://github.com/sainnr/fullstackme-gatsby
    ```

    Your Gatsby site is now ready to go, but it needs some data first.

1.  **Kick-off Strapi backend**

    Use CLI to spin off your Strapi CMS as described in the official docs, or try these steps below:
    
    ```sh
    cd my-blog
    npm install strapi@beta -g
    cd strapi-cms
    strapi develop
    ```
    
    Check out your new CMS admin panel at `http://localhost:1337/admin`!

1.  **Start your Gatsby UI**

    Generate your pages with Gatsby and fill them out with some data from CMS:

    ```sh
    cd my-blog/gatsby-ui/
    gatsby develop
    ```

    Yay! Your website is now running at `http://localhost:8000`.

## 🎓 Next steps

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). 
You can also check for more [official and community-created starters](https://www.gatsbyjs.org/docs/gatsby-starters/).

Also don't forget to check latest & greatest official [Strapi docs](https://strapi.io/documentation).

## 💫 Deploy

One of the options is put your Gatsby frontend to Netlify and push the Strapi CMS backend to Heroku.
Of course, you are always free to go with any setup, be it a web-app container or a dedicated VM for the blog.