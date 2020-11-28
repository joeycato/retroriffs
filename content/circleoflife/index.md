---
title: Circle of Life
author: joey cato
date: 2020-11-20 20:00
cover: ""
categories:
    - WebDev
    - Nostalgia
tags:
    - apps
    - d3js
    - dataviz
    - 3D
---

Created my first D3JS app just for fun! It's an interactive timeline of ages and life spans from past Academy Award winners ( best actors and actresses )

The life span is represented by a circular progress bar ( whereas white circles denote those who are still living. )

The data itself was sourced from Wikidata using SPARQL ( to fetch the data and portrait images )

**UPDATE**: Noticed this app was quite laggy on my older iPad, so I replaced most of the SVG rendering code with HTML5 canvas instead. Wow, what a difference it made! Now the performance is super smooth!

![circleoflife](circleoflife.gif)

App link: https://circleoflife.surge.sh/
