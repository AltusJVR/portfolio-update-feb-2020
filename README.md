 [![Netlify Status](https://api.netlify.com/api/v1/badges/4dfedd28-4879-42f2-893a-ea351ecb2a11/deploy-status)](https://app.netlify.com/sites/altus-portfolio/deploys)
 
 - [1. How to use:](#1-how-to-use)
 - [2. Important SCSS](#2-important-scss)
     - [2.1. Colors](#21-colors)
       - [2.1.1 _colors.scss](#211-_colorsscss)
     - [2.2  Fonts](#22--fonts)
       - [2.2.1 _fonts.scss](#221-_fontsscss)
     - [2.3 Typography](#23-typography)
       - [2.3.1 _typo.scss](#231-_typoscss)


# 1. How to use:
  `npm run start` - starts a  dev server on port:8080, writes files to tmp. When running this command, clears the tmp folder.

  `npm run deploy` - deploy - not used on dev machine. Use with [Netlify]([httlinkps://](https://www.netlify.com/)).
    
  `npm run dev` - Builds and bundles project on local dev machine. Use live server (VS Code) to preview project. When running this command the first time clears the dist folder.

  `npm run port` - Opens a websocket tunnel go to [NGROK]([https://link](https://ngrok.com/)) for more information. Use this for a live preview on any other devce on the same network.


# 2. Important SCSS


#### 2.1. Colors

##### 2.1.1 _colors.scss

In this file, there is a map for helper color classes, for example social media icons. 

```scss
$social-icons-map:(
instagram:  rgb(245, 180, 77),
github:     rgb(0,0,0),
javasc:     rgb(218, 195, 27),
nodejs:     rgb(117, 170, 100),
parceljs:   rgb(33, 54, 74),
bootstrap:  rgb(83, 59, 120),
linked:     rgb(10, 102, 194),
html:       rgb(228, 77, 38),
css:        rgb(38, 77, 228),
scss:       rgb(199, 100, 148),
git:        rgb(233, 78, 49),
gitlab:     rgb(219, 65, 40),
gulp:       rgb(211, 68, 70),
react:      rgb(79, 176, 202),
database:   rgb(64, 144, 66),
netlify:    rgb(62, 169, 188),
heroku:     rgb(57, 0, 149),
link:       rgb(62, 62, 62),
);

@each $social, $value in $social-icons-map {
  .#{$social}{
    color: $value;
  }
}
```

#### 2.2  Fonts
##### 2.2.1 _fonts.scss
Font pairing maps
```scss
$oxygen-map:(
  import1: fi.$oxygen,
  import2: fi.$noto-serif,
  heading: $oxygen,
  heading-ls: 1000,
  h-w: 'light',
  h-s: $font-style,
  body:$noto-serif,
  body-weight: 'regular',
  b-s: $font-style,
);
```
#### 2.3 Typography
##### 2.3.1 _typo.scss

Important Variables are defined here. Such as the font and background color for the project. 

There is a few loops that set a font family ffor the body and all heading elements. The font pairing is changed by changing the `$font-theme: 12;` number (1 -12). These loops also set line height and letter spacing as defined in the paiting map.

Have a look at the _fonts.scss file a for all the font pairing details.

```scss
/* Set a font pairing map from fonts on the body */
body {
  font-family: map-get($map: $use-map, $key: body);
  font-weight: checkMapFontWeight($use-map, body-weight);
  font-style: map-get($map: $use-map, $key: #{b-s} );
  background-color: $bg-clr;
  color: $font-clr;
  font-size: $body-font-size;
  line-height: $body-lh;
}

/* set a font for all headings from a font pairing map */
@each $heading in fonts.$heading {
  /* #{$heading} destrcutures $Heading map from _fonts */
  #{$heading} {
    font-family: map-get($map: $use-map, $key: heading);
    font-weight: checkMapFontWeight($use-map, h-w );
    font-style: map-get($map: $use-map, $key: #{h-s});
    color:$h-font-clr;
    font-size: map-get($map: fonts.$heading-size, $key: $heading );
    letter-spacing: map-get($map: $heading-ls, $key: #{$heading} );
  }
}
```

