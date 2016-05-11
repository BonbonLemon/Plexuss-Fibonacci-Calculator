$(document).ready(function () {
  $('#fib-form').on("submit", function (event) {
    event.preventDefault();

    var inputLength = parseInt($('input').val());

    if (isNaN(inputLength)) {
      $('#flash-error').text('Input is not a number')
    } else {
      $('#flash-error').text('')

      calculateFibs(inputLength)
    }
  })
});

var calculateFibs = function (length) {
  console.log(length);
};
