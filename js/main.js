$(document).ready(function () {
  $('#fib-form').on("submit", function (event) {
    event.preventDefault();

    var inputLength = parseInt($('input').val());

    if (isNaN(inputLength)) {
      $('#flash-error').text('Input is not a number')
    } else if (inputLength <= 0) {
      $('#flash-error').text('Input must be greater than 0')
    } else {
      $('#flash-error').text('')

      calculateFibs(inputLength)
    }
  })
});

var calculateFibs = function (length) {
  var fibs;

  if (length === 1) {
    fibs = [0];
  } else {
    fibs = [0, 1];
    for (var i = 2; i < length; i++) {
      var nextFib = fibs[i - 2] + fibs[i - 1];
      fibs[i] = nextFib;
    }
  }

  $('#fib-list').text(fibs.join(", "));
};
