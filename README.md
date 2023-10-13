# volto-tags-block

[![Releases](https://img.shields.io/github/v/release/eea/volto-tags-block)](https://github.com/eea/volto-tags-block/releases)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-tags-block%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-tags-block/job/master/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-tags-block-master&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-tags-block-master)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-tags-block-master&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-tags-block-master)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-tags-block-master&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-tags-block-master)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-tags-block-master&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-tags-block-master)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-tags-block%2Fdevelop&subject=develop)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-tags-block/job/develop/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-tags-block-develop&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-tags-block-develop)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-tags-block-develop&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-tags-block-develop)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-tags-block-develop&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-tags-block-develop)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-tags-block-develop&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-tags-block-develop)


[Volto](https://github.com/plone/volto) add-on

## Features

![Tags Block](https://github.com/eea/volto-tags-block/raw/master/docs/tags-block.png)
![Tags Block Demo](https://github.com/eea/volto-tags-block/raw/master/docs/volto-tags.gif)

## Getting started

### Try volto-tags-block with Docker

      git clone https://github.com/eea/volto-tags-block.git
      cd volto-tags-block
      make
      make start

Go to http://localhost:3000

### Add volto-tags-block to your Volto project

1. Make sure you have a [Plone backend](https://plone.org/download) up-and-running at http://localhost:8080/Plone

   ```Bash
   docker compose up backend
   ```

1. Start Volto frontend

* If you already have a volto project, just update `package.json`:

   ```JSON
   "addons": [
       "@eeacms/volto-tags-block"
   ],

   "dependencies": {
       "@eeacms/volto-tags-block": "*"
   }
   ```

* If not, create one:

   ```
   npm install -g yo @plone/generator-volto
   yo @plone/volto my-volto-project --canary --addon @eeacms/volto-tags-block
   cd my-volto-project
   ```

1. Install new add-ons and restart Volto:

   ```
   yarn
   yarn start
   ```

1. Go to http://localhost:3000

1. Happy editing!

## Release

See [RELEASE.md](https://github.com/eea/volto-tags-block/blob/master/RELEASE.md).

## How to contribute

See [DEVELOP.md](https://github.com/eea/volto-tags-block/blob/master/DEVELOP.md).

## Copyright and license

The Initial Owner of the Original Code is European Environment Agency (EEA).
All Rights Reserved.

See [LICENSE.md](https://github.com/eea/volto-tags-block/blob/master/LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)
