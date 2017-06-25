# rigtools
Rambling Indie Games Development Tools

## What is rigtools?
rigtools is a small and powerful JavaScript library for rapid game development

## What is included in rigtools?
+ Data Structures
+ + Tree - A set of functions for working with hierarchial data in plain data objects suitable for use in state

## Sounds Great! How do I get rigtools?

First install the tools into your project using npm (TODO: write build process and publish to npm)

** For now, you need to git clone the repo and copy the contents of `src` into a directory called `rigtools` in your project **

```
npm install rigtools
```

Or, if you are not using npm, you can clone this repository with git
```
git clone https://github.com/RichardMarks/rigtools.git
```

## Okay, how do I use rigtools?
You can import everything,

```js
import rigtools from 'rigtools'

const tree = rigtools.ds.tree.createTree({ id: 'my-tree' })
```

or you can just import what you need.

```js
import { createTree } from 'rigtools/ds/tree'

const tree = createTree({ id: 'my-tree' })
```

## Is there documentation for rigtools?
Of course!

Such a great library would not be complete without documentation!

You can [read the latest documentation online](https://richardmarks.github.io/rigtools/)

Or you can generate them yourself and read them on your machine.

```
npm run docs
```

The documentation will be generated in the `docs` directory.

## Are there any rigtools examples? How do I do X with rigtools?
The documentation is full of examples for every function in the library.

If you need to figure out how to use the library for a particular case,
check out the issues on github, and search for what you are looking to do.
It's possible another user has already asked and gotten an answer!

If you don't see what you are looking for, feel free to [create an issue on github](https://github.com/RichardMarks/rigtools/issues/new) and label it `help wanted`

## Can I use rigtools commercially?
Yes, you can! There are some rules though. See license information below.

## What is the rigtools License?
See the LICENSE.md file in the repository, or just read it below.

> MIT License
>
> Copyright (c) 2017 Richard Marks, Rambling Indie Games LLC
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
