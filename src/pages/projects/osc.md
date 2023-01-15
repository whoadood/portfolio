---
layout: ../../layouts/Project.astro
title: "Open Stick Community - Product Page"
description: "Produce page for the Open Stick community."
live: "https://osc-pp.netlify.app"
githubUrl: "https://github.com/whoadoo/osc-pp"
image:
  {
    url: "https://user-images.githubusercontent.com/82413454/212570091-062cf851-069a-4483-a810-f00aa081550a.png",
    alt: "OSC-PP demo image",
  }
tech:
  [
    {
      title: AstroJS,
      url: "https://user-images.githubusercontent.com/82413454/193375447-7692e583-a7a9-4ed6-b0e1-581915a1a3be.svg",
    },
    {
      title: TypeScript,
      url: "https://user-images.githubusercontent.com/82413454/201538286-f5eec681-c586-4fbb-90d8-b5037cfd2bed.svg",
    },
    {
      title: TailwindCSS,
      url: "https://user-images.githubusercontent.com/82413454/201538300-3f2d9faf-41ee-4ae5-b4af-c934e13e143d.svg",
    },
    {
      title: React,
      url: "https://user-images.githubusercontent.com/82413454/201538305-478bcc0b-8d60-4989-ac43-376836060306.svg",
    },
    {
      title: Netlify,
      url: "https://user-images.githubusercontent.com/82413454/191464749-4bd02ee4-030e-494d-a62f-0e5343b6753e.png",
    },
  ]
---

## About The Project

Open Stick Community - Product Page is a central hub for all related content to the Open Stick Community and GP2040-CE firmware for Raspberry Pi Pico microchips. Features include community project showcase with links to respective projects, A guides section for community written DIY guides to help new builders and experienced creators alike, A frequently asked questions page and a simple latency chart displaying response times in comparison to top chips and controllers in the maker space.

GP2040-CE is a gamepad firmware for the Raspberry Pi Pico and other boards based on the RP2040 microcontroller, and provides high performance with a rich feature set across multiple platforms. GP2040-CE is compatible with PC, MiSTer, Android, Raspberry Pi, Nintendo Switch, PS3 and PS4 (legacy controller support).

## Optimizations

There are some React components that could be optimized as just an Astro component without the need for loading React/JavaScript.

The version component uses React to ping the GitHub API and get the current version of GP2040-CE firmware. I believe using top level await in the frontmatter section of an Astro component could reduce the overall JavaScript sent to the client.

The Latency chart is made with Chart.js in conjunction with RE-Chart-2 and rendered via a React component. These charting libraries are heavy imports that could benefit from tree shaking to only get the required components to reduce bundle size. Additionally it is possible to avoid using charting libraries at all and just render a custom SVG element with rect elements, this method would also make the react component unnecessary.

## Lessons Learned

Volunteering for a community aligned with your passions can be a great way to contribute to open source!
