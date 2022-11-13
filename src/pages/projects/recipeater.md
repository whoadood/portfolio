---
layout: ../../layouts/Project.astro
title: "Recipeater"
description: "Create, save and revisit all your favorite recipes with ease."
githubUrl: "https://github.com/whoadoo/recipeater"
image:
  {
    url: "https://astro.build/assets/blog/astro-1-release-update/cover.jpeg",
    alt: "The Astro logo with the word One.",
  }
tech:
  [
    {
      title: NextJS,
      url: "https://user-images.githubusercontent.com/82413454/201538333-c8ae76a8-799b-42df-a71e-8dcc5b1b9617.svg",
    },
    {
      title: TypeScript,
      url: "https://user-images.githubusercontent.com/82413454/201538286-f5eec681-c586-4fbb-90d8-b5037cfd2bed.svg",
    },
    {
      title: tRPC,
      url: "https://user-images.githubusercontent.com/82413454/191451583-210c833a-671e-4103-93fd-1004215e39f4.png",
    },
    {
      title: TailwindCSS,
      url: "https://user-images.githubusercontent.com/82413454/201538300-3f2d9faf-41ee-4ae5-b4af-c934e13e143d.svg",
    },
  ]
---

# Create T3 App

This is an app bootstrapped according to the [init.tips](https://init.tips) stack, also known as the T3-Stack.

## Why are there `.js` files in here?

As per [T3-Axiom #3](https://github.com/t3-oss/create-t3-app/tree/next#3-typesafety-isnt-optional), we take typesafety as a first class citizen. Unfortunately, not all frameworks and plugins support TypeScript which means some of the configuration files have to be `.js` files.

We try to emphasize that these files are javascript for a reason, by explicitly declaring its type (`cjs` or `mjs`) depending on what's supported by the library it is used by. Also, all the `js` files in this project are still typechecked using a `@ts-check` comment at the top.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with the most basic configuration and then move on to more advanced configuration.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next-Auth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [TailwindCSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

Also checkout these awesome tutorials on `create-t3-app`.

- [Build a Blog With the T3 Stack - tRPC, TypeScript, Next.js, Prisma & Zod](https://www.youtube.com/watch?v=syEWlxVFUrY)
- [Build a Live Chat Application with the T3 Stack - TypeScript, Tailwind, tRPC](https://www.youtube.com/watch?v=dXRRY37MPuk)
- [Build a full stack app with create-t3-app](https://www.nexxel.dev/blog/ct3a-guestbook)
- [A first look at create-t3-app](https://dev.to/ajcwebdev/a-first-look-at-create-t3-app-1i8f)

## How do I deploy this?

### Vercel

We recommend deploying to [Vercel](https://vercel.com/?utm_source=t3-oss&utm_campaign=oss). It makes it super easy to deploy NextJs apps.

- Push your code to a GitHub repository.
- Go to [Vercel](https://vercel.com/?utm_source=t3-oss&utm_campaign=oss) and sign up with GitHub.
- Create a Project and import the repository you pushed your code to.
- Add your environment variables.
- Click **Deploy**
- Now whenever you push a change to your repository, Vercel will automatically redeploy your website!

### Docker

You can also dockerize this stack and deploy a container. See the [Docker deployment page](https://create-t3-app-nu.vercel.app/en/deployment/docker) for details.

## Useful resources

Here are some resources that we commonly refer to:

- [Protecting routes with Next-Auth.js](https://next-auth.js.org/configuration/nextjs#unstable_getserversession)
