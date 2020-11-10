# CatchingPhysics Creative Commons open educational resource

Catching physics is s series of short accessible stories that physics tells about the world, designed for children. They're my best attempts, but you may be able to do better. This repository provides the source files, so you can adapt and try again.

## the founding philosophy and links to the first three, live

Physics stories have particular purpose – to be a reliable guide for thinking about the world and acting in the world. So the stories are tested. The stories are often both simple and not obvious. They exercise our capacity to re-imagine the world: to see it anew.
[Hearing](https://slowthinkingphysics.net/catchingPhysics/Hg01.html)

Just as everyone learns to see the world differently as they grow up, so physics has evolved: some ways of reasoning about the world have somewhat limited success, although these ways may still be workable within a limited scope. And similarly to the realisation that our parents can't do everything, we appreciate that physics is one story about how the world is. It just happens to be a very good one, in that it's a reliable guide to action, an inspiration to the imagination, and paradigm for coherence and consistency.
[Seeing](https://slowthinkingphysics.net/catchingPhysics/Sg01.html)

Physics is suitable for many things but always open to adaption.  It'll always be an unfinished story, although many parts are rather polished. It's the best we have for now.
[Controlling](https://slowthinkingphysics.net/catchingPhysics/Cg01.html)

## And the rest

There are now 13 readers, covering many of the significant ideas in introductory physics.

[catching Physics jump off](https://slowthinkingphysics.net/readcatchingPhysics)

## What catching physics made of 

Scripted graphics source files are in p5js, using the physics diagram language (pdl) environment.
Web pages are created in the physics markup language (pml).

More-or-less complete(they're live projects, so...) manuals for both are included in the build directory.

# Directories in catchingPhysicsCC

~/catchingPhysicsCC/BuildScripts
~/catchingPhysicsCC/catchingPhysics
~/catchingPhysicsCC/StorypdlSourceFiles
~/catchingPhysicsCC/StorypmlSourceFiles
~/catchingPhysicsCC/__support

Static graphics live in  ~/catchingPhysicsCC/catchingPhysicsBuild/__graphics/
Pdl graphics live in ~/catchingPhysicsCC/catchingPhysicsBuild/__PDLgraphics/

The source files are theses two folders of static graphics and the two folders of code / markup (StorypdlSourceFiles and StorypmlSourceFiles).

## To create

Download the directories to your system.

Install nodejs
Install FileHound
Install marked
Install xregexp
Set the constant basePath in both scripts to the path of the catchingPhysicsCC directory.

### Run two scripts:

node ./catchingPhysicsCC/BuildScripts/catchingPhysicsBuild.js
writes the html files into catchingPhysicsCC/catchingPhysics/

node ./catchingPhysicsCC/BuildStory/WrapcatchingPhysicsGraphic.js
creates the scripted graphics directories in catchingPhysicsCC/catchingPhysics/
(Delete these directories before rebuilding).

### Copy
catchingPhysicsCC/__support/
catchingPhysicsCC/catchingPhysics/

To the same directory on a web server.


--
You can adapt the scripts to easily adjust the relative paths, to allow you to choose where to put the different kinds of files, to suit your tastes. This arrangement is tested and works!

---

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.

