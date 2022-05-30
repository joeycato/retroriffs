---
title: Paris, Texas 1982 Flyover Panorama
tags: [video, ffmpeg]
date: 2021-03-28
img: ./flyover.png
excerpt: Reverse-engineering panoramas from old video footage
---

# Reverse-engineering panoramas from old video footage

April of this year marks the 40th anniversary of a deadly F4 tornado that devastated my hometown of Paris, Texas.

The 1982 event attracted nationwide attention. Included in that coverage was this B-roll video footage from a KXAS-TV/NBC Action News story. The second half of video is a flyover of Downtown Paris ( which was largely spared by the tornado's destructive path. )

https://texashistory.unt.edu/ark:/67531/metadc1178840/

I was curious if was possible to somehow automatically generate a panorama from the video footage. After all, the helicopter's flight was mostly straight and parallel to a huge swath of the downtown area.

After trying a few half-clever approaches I found that relying on a slit-scan approach proved to be the most effective.
If you're not familiar with slit-scan technology, this article explains it better than I can :)


### Enhanced via upscaling, stabilizing, color-correcting, slowing down and adding reverse loop.
https://www.youtube.com/watch?v=lqO0zlxoFPs

### Main one I shared:
Enhancements: Upscaling, stabilizing, color-correcting, lens distortion removal, slowing down and adding reverse loop. )
https://www.youtube.com/watch?v=kOFGTWdO2Bg

### 2D Top-Down Oblique Perspective Panorama of Downtown Paris, Texas in 1982
https://www.youtube.com/watch?v=aqpCRPcJtXI


# Video details

Video footage from a helicopter fly-over of Paris, Texas ( downtown area between 19th St SW and 3rd St SE )

Source:
Pulled from KXAS-TV/NBC Fort Worth station B-roll video footage that was prepared to accompany a news story

Enhancements: Upscaling, stabilizing, color-correcting, lens distortion removal, slowing down and adding reverse loop. )

Extracted panoramas ( using slit-scan sampling on a fixed position within the video frame )
Wide shot: https://i.imgur.com/Mys7nX8.png
Downtown shot: https://i.imgur.com/zG5BAuc.png

Intermediate slit-scan results 
(non-aligned)
https://i.imgur.com/mktcZnj.png
(aligned)
https://i.imgur.com/EwAvoZt.png

Other panoramas ( generated from Photoshop stitching of wider slices ):
https://i.imgur.com/RRLWLoC.jpg
https://i.imgur.com/1oNJg8t.png
https://i.imgur.com/mxKZRWk.png
https://i.imgur.com/NLZV0Cb.png

Images with descriptions: https://imgur.com/a/amY6egL

Exported Photogrammetry 3D model snapshots:
https://i.imgur.com/CLJsNvd.jpg
https://i.imgur.com/W9lBpe4.jpg
https://i.imgur.com/R29bUUw.png

Original video:
https://texashistory.unt.edu/ark:/675...

Special Thanks to UNT Libraries Special Collections for allowing me to access the original footage and run this experiment.


[![Synced roadtrip from Paris, Texas](fakethumb.png)](https://www.youtube.com/watch?v=ojo1l0Wf2EI "Watch Video")
