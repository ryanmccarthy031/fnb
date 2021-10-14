# Food Not Bombs: Raleigh

## Development

```bash
# install Gridsome globally
yarn global add @gridsome/cli

# cd into the project directory
cd fnb-raleigh

# install dependencies
yarn install 

# Start local dev server
yarn develop
```

## Forestry (Content Management)

Changes to site content can be made through Forestry.

Changes you make will be commited back to the repo and automatically deployed.

<p>
  <a href="https://app.forestry.io/quick-start?repo=ryanmccarthy031/fnb-raleigh&amp;provider=github&amp;engine=vuepress" rel="nofollow"><img src="https://camo.githubusercontent.com/2455e97e4e989374a355fb0bea7ad364f2561c92/68747470733a2f2f6173736574732e666f7265737472792e696f2f696d706f72742d746f2d666f7265737472794b2e737667" alt="Import this project into Forestry" data-canonical-src="https://assets.forestry.io/import-to-forestryK.svg" style="max-width:100%;"></a>
</p>

## Deploy with Netlify

Import your site in Netlify

1. Create a new site in Netlify and import your repository.
2. Set the build command to: `gridsome build`
3. Set the publish directory to: `dist`

That's it, now your site gets deployed automatically on `git push` or when saving documents from Forestry.
