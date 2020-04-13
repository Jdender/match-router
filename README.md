# match-router
A simple JavaScript router that let's you declaratively handle route-based rendering in your html alone

## Reasoning
Sometimes you just want to have a few pages but only need one html file.
Well that's the exact use case this was designed for.
This library is really only useful for examples or really, really small web projects.
Please do not use this in production (or if you do please send me the site so I can see how much destruction it's caused)

## Getting Started
Just add this script tag to your head element:
```html
<head>
    ...
    <script defer src="TODO"></script>
</head>
```
Make sure you add the `defer` attribute or you could also put the script at the end of the body instead.

## Usage
Simply create a parent element with `id="route-matcher"` then just add your routes as a `data-route` attribute onto your child elements.
Any element who's route doesn't match the current one will be set to `display: hidden`.
```html
<!-- Just use normal hash urls -->
<nav>
    <a href="#home  ">Home</a>
    <a href="#images">Images</a>
    <a href="#about ">About</a>
</nav>
<!-- Then just tell the script what to do! -->
<div id="route-matcher">
    <div data-route="home  ">Welcome home!</div>
    <div data-route="images">Take a look around</div>
    <div data-route="about ">Who's idea was this?</div>
</div>
```
