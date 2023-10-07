# ✨ Glowup Vibes ✨

## The most goated Babel plugin

This plugin was high key inspired by an Instagram reel by @justin.makes.things: https://www.instagram.com/reel/Cwn5KYtIWDm/

I was shook. I thought it hit different so I said "bet" and started flexin on em. IYKYK fam.

Here's my stitch on Instagram: https://www.instagram.com/reel/Cxvwz76vBus/

Or, watch my YouTube short #likeAndSubscribe

[![Video](https://img.youtube.com/vi/vgcbwv_3WDU/hqdefault.jpg)](https://www.youtube.com/watch?v=vgcbwv_3WDU)

## What does it do?

It transpiles internet slang into valid JavaScript.

This was a fun project to increase my AST rizz. I'm a Babel simp now 👉👈

## How to use it

* Install `npm install babel-plugin-glowup-vibes --save`
* Set up babel and add `babel-plugin-glowup-vibes` to your list of plugins
* Highkey start flexing. Use the options outlined in [Options](#options). Running your build command should be a major W. Look for big JavaScript vibes wherever you set the output to go (in our example below, it'll be in `lib/compiled.js`)

In case you need more detailed instructions than that:

To set up babel, create a `babel.config.json` file and add the following to it:
```
{
    "presets": [
        [
            "@babel/preset-env",
            {
                "targets": {
                    "edge": "17",
                    "firefox": "60",
                    "chrome": "67",
                    "safari": "11.1"
                },
                "useBuiltIns": "usage",
                "corejs": "3.6.5"
            }
        ]
    ],
    "plugins": ["babel-plugin-glowup-vibes"]
}
```

Add something like this to your `package.json` file:
```
"scripts": {
    "build": "babel ./src/script.js --out-file ./lib/compiled.js"
},
```

## Options

Your Code | JS
--- | ---
noCap | true
cap | false
onGod | true
ghosted | return null
lowkey.stan("message") | console.log("message")
lowkey.sus("message") | console.warn("message")
lowkey.cringe("message") | console.error("message")
throw new L("message") | throw new Error("message")
yeet(new L("message")) | throw new Error("message")
PERIODT | break
fuck around | try
find out | catch
either way | finally

## Contributing

I welcome PRs if you can think of ways to make this even more bussin.

When you submit a PR, don't forget to update the table in the README along with the appropriate code in example.js.

Note: this was designed using Babel 7 and I haven't tested it on anything else. I super don't guarantee that this is totally flawless - it's one of those toy projects that I'll probably publish and forget about.

## License

You're free to use this according to the MIT license.

Copyright (c) 2023, Christina Martinez

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
