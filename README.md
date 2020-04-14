# quick-router

> Simple JavaScript router that let's you declaratively handle route-based rendering in your html alone.

## Reasoning

Sometimes you just want to have a few pages but only need one html file.
Well that's the exact use case this was designed for.
This library is really only useful for examples or really, really small web projects.
Please do not use this in production (or if you do please send me the site so I can see how much destruction it's caused).

## Getting Started

Just add this script tag to your head element:
```html
<head>
    ...
    <script src="TODO"></script>
</head>
```

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
## Running the tests

Check the [examples](https://github.com/Jdender/quick-router/tree/master/examples) and see if they run correctly.
It's a bit primitive but, let's be honest, we don't need to extensively test a library this small.

## Dependencies

All this needs to run is plan old ES5 JavaScript.

### Development Only

* [TypeScript](https://www.typescriptlang.org/) - Strongly Typed Superset of JavaScript
* [Yarn v1](https://classic.yarnpkg.com/lang/en/) - Package Management
* [http-server](https://github.com/http-party/http-server) - Local example testing

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/Jdender/quick-router/tags).

## Authors

* **Jdender~** - *Creator* - [Jdender](https://github.com/Jdender)

See also the list of [contributors](https://github.com/Jdender/quick-router/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thanks to [PurpleBooth](https://github.com/PurpleBooth) for their [README template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2).
