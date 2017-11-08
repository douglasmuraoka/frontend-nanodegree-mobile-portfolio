// resizePizzas(size) is called when the slider in the "Our Pizzas" section of the website moves.
var resizePizzas = function(size) {
  window.performance.mark("mark_start_resize");   // User Timing API function

  // Changes the value for the size of the pizza above the slider
  function changeSliderLabel(size) {
    switch(size) {
      case "1":
        document.querySelector("#pizzaSize").innerHTML = "Small";
        return;
      case "2":
        document.querySelector("#pizzaSize").innerHTML = "Medium";
        return;
      case "3":
        document.querySelector("#pizzaSize").innerHTML = "Large";
        return;
      default:
        console.log("bug in changeSliderLabel");
    }
  }

  changeSliderLabel(size);

  // Changes the slider value to a percent width (represented by classes)
  function sizeSwitcher (size) {
    switch(size) {
      case "1":
        return 'small'; // 25%
      case "2":
        return 'medium'; // 33.33%
      case "3":
        return 'large'; // 50%
      default:
        console.log("bug in sizeSwitcher");
    }
  }

  // Iterates through pizza elements on the page and changes their widths
  function changePizzaSizes(size) {
    var pizzas = document.querySelectorAll(".randomPizzaContainer");
    var newSize = sizeSwitcher(size);
    for (var i = 0; i < pizzas.length; i++) {
      pizzas[i].firstElementChild.className = newSize;
    }
  }

  changePizzaSizes(size);

  // User Timing API is awesome
  window.performance.mark("mark_end_resize");
  window.performance.measure("measure_pizza_resize", "mark_start_resize", "mark_end_resize");
  var timeToResize = window.performance.getEntriesByName("measure_pizza_resize");
  console.log("Time to resize pizzas: " + timeToResize[timeToResize.length-1].duration + "ms");
};