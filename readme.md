# M-PageTransition

M-PageTransition is a jQuery plugin that allows you to easily have your web pages fade to and from a designated color.

## Install and Usage

Clone the repo and import `m-pagetransition.js` and `m-pagetransition-styles.css` into your project.

Now add the `m-pagetransition` class to your body element (this will add visibility: hidden to your body to prevent flickering on page loads).

Now call `mPageTransition()` on your `body` element. You are done!

``` javascript
$(document).ready(function() {
    $('body').mPageTransition();
});
```

#### Custom settings

To configure the color and fade times you can pass a settings object in the mPageTransition function.

``` javascript
$(document).ready(function() {
    $('body').mPageTransition({
        "color": "#007db8",
        "fadeInTime": 350,
        "fadeOutTime": 700
    });
});
```

## Examples

Clone the repo and in the `examples` directory open the `index.html` file for a local demo.

Soon there will be a live example!

## Options

These can be passed via an object to the `mPageTansition()` method to configure the settings of the plugin.

| Class     | Description       |
|------------|-----------------------------------------------------|
| color     | String - The color value (hex or css supported color value) that the page will fade to      |
| fadeOutTime    | Number (milliseconds) - The time it takes for the page to fade off            |
| fadeInTime    | Number (milliseconds) - The time it takes for the page to fade on            |
