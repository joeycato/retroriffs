---
title: A.S.I.M.O.V.
tags: [ai, c++]
date: 1998-05-11
path: stuff/asimov
cover: ./asimov.jpg
excerpt: An HTML5 cave exploration game
---

**A.S.I.M.O.V.** (_Automated Stellar Image Mapping and Object Visualization_) is a proof-of-concept expert system I created that imports bitmaps of the starry night, and then employs constellation recognition algorithms to identify them.

To achieve accurate recognition I applied a series of programmatic filters to each image beforehand, then devised a comparison algorithm which compared the triangle meshes of the star points. By relying on the familiar principle of similarity of triangles, I was able to find matches on sample photos, regardless of scale and orientation.

<img src="asimov2.jpg" style="width:640px" />
