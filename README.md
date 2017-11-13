## Website Performance Optimization Project

The goal is to optimize the critical rendering path and make the index.html page render as quickly as possible by applying the techniques from the [Critical Rendering Path course](https://www.udacity.com/course/ud884); and to optimize frames per second in pizza.html, to make it reach 60 FPS or higher.

### Getting started

Instructions to get started:

* Clone this repository
* This project requires npm to build. To install it, check instructions at [npm](https://www.npmjs.com/)
* Allow build.sh execution with
  ```bash
  $> chmod +x build.sh
  ```

* Run build.sh to install Grunt and its plugins. If you are having problems with grunt-responsive-images, check the [plugin page](https://github.com/andismith/grunt-responsive-images)
* To inspect the site, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

* Open a browser and visit localhost:8080
* Happy inspecting :)

### Optimizations applied

#### index.html
* Images are transformed to .webp and also compressed
* CSS files are minified and inlined (if blocking critical rendering path). Rules optimized to avoid tree traversing. Removed Google font link.
* JS files are minified and loaded asynchronously
* HTML file is minified (minification is also applied on inlined CSS and JS)

#### views/pizza.html
* Removed forced synchronous layout when animating pizzas (document.documentElement.scrollTop was called for every pizza element)
* Added will-change: transform at mover class
* Resize pizza function separated in a new asynchronous JS file, to avoid blocking initial page loading
* Resize pizza function optimized, avoiding unnecessary calculations for every element resized
* Random pizzas creation optimized, reducing the need of defining every DOM element attribute manually and using queries only when really needed
* CSS transform: translateX (which is hardware optimized) used instead of basicLeft when animating pizzas
* Reduced number of pizzas animated from 200 to 24, which is the number of visible pizzas

### License

The content of this repository is licensed under a [MIT License](https://opensource.org/licenses/MIT).