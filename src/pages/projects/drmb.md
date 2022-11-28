---
layout: ../../layouts/Project.astro
title: "Dont Read Me Bro"
description: "Cli tool for quickly generating a readme file."
live: "https://www.npmjs.com/package/drmb"
githubUrl: "https://github.com/whoadoo/drmb"
image:
  {
    url: "https://user-images.githubusercontent.com/82413454/204176279-2f3702c1-a8b5-42ae-a9ad-c154d89e9f8f.png",
    alt: "DRMB demo image",
  }
tech:
  [
    {
      title: NodeJS,
      url: "https://user-images.githubusercontent.com/82413454/201538353-5621b947-de71-4193-807c-67b55e44166e.svg",
    },
    {
      title: TypeScript,
      url: "https://user-images.githubusercontent.com/82413454/201538286-f5eec681-c586-4fbb-90d8-b5037cfd2bed.svg",
    },
    {
      title: NPM,
      url: "https://user-images.githubusercontent.com/82413454/201538380-39242308-f3af-4c54-80bb-6a360e5eb71d.svg",
    },
  ]
---

<a name="readme-top" />
<br />

<div align="center">
  <a href="https://github.com/whoadood/drmb">
    <img src="https://user-images.githubusercontent.com/82413454/200122755-b2f370cb-2dc0-4e56-8a78-2c1f7096f666.png" alt="drmb logo">
  </a>

<strong>drmb</strong>

  <p align="center">
    simple elegant readme generator for busy developers
    <br />
    <a href="https://github.com/drmb/drmb"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://www.npmjs.com/package/drmb">View Demo</a>
    ·
    <a href="https://github.com/whoadood/drmb/issues">Report Bug</a>
    ·
    <a href="https://github.com/whoadood/drmb/issues">Request Feature</a>
  </p>
</div>

<div align="center">

[![GitHub Stars](https://img.shields.io/github/stars/whoadood/drmb.svg)](https://github.com/whoadood/drmb/stargazers) [![GitHub Issues](https://img.shields.io/github/issues/whoadood/drmb.svg)](https://github.com/whoadood/drmb/issues) [![Current Version](https://img.shields.io/badge/version-1.0.0-green.svg)](https://github.com/whoadood/drmb) [![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://github.com/whoadood/drmb)

</div>

## Buy me a coffee

Whether you use this project, have learned something from it, or just like it, please consider supporting it by buying me a coffee, so I can dedicate more time on open-source projects like this :)

<a href="https://www.buymeacoffee.com/whoadood" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

## About The Project

<!-- project main image -->

<br>
<!-- project description here -->

DRMB is a README generator for developers who want the hard work put into their project reflected in the projects README. Engineering software at any scale is a lot of work, DRMB is aimed at alleviating some of the workload by offering an elegant, simple solution for project README files. Simply enter the project details an viola!

### Built With

<!-- project technologies icons -->

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

To get the project running on your local machine, you will need Node.js and the following installation guide to get started.

### Prerequisites

![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)

```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/whoadood/drmb.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run in dev mode (rollup compile on save)
   ```sh
   npm run dev
   ```
4. Link binary command
   ```sh
   npm link
   ```
5. Run CLI
   ```sh
   drmb
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

<!-- project demo images -->

![drmb-demo](https://user-images.githubusercontent.com/82413454/200122848-efb7ec04-694f-4e59-a7f2-70ee37a711eb.png)

<!-- project usage guide -->

- run command `npx drmb` from project root
- enter github username
- enter this project name
- enter this project url
- enter a description for this project
- let the magic happen

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Roadmap

<!-- future plans for project -->

- [ ] Add templates
- [ ] Fine tune input prompts
- [ ] Add prompt for templates with preview links

<!-- link to github issues -->
<!-- See the [open issues](https://github.com/[github-username]/[github-project-name]/issues) for a full list of proposed features (and known issues). -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Optimizations

<!-- optimization plans -->

While I think prompting users for full descriptions for sections of the readme seems a bit unwieldy for the command line, I do believe there is a happy medium not yet reached, prompting for more accurate details would be a nice to have.

With multiple template options it would be good quality of life to have a set of prompts that work across all templates, however, I think it will have to be fleshed out with specific set of prompts for each template.

## Lessons Learned

<!-- a few paragraphs about project learnings -->

I have been dealing with imposter syndrome a lot lately and it was suggested to me to tinker around in node making command line interfaces. After revisiting how the event loop works, a lot of node documentation and a handful of tutorials I have made the first project that makes me feel like a programmer. Blocking / non-blocking, synchronous / asynchronus, call stack / queue, cant say that I know a whole lot more about them than I did, but there's definitely an improvement. 🤷

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
