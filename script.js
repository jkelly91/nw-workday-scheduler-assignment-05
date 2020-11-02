$(document).ready(function(){

  // gets current date from moment.js
  $('#currentDay').text(moment().format('dddd, MMMM Do'))

  // assigns saveBtn to listen to time and text on click
  $('.saveBtn').on('click', function(){

    console.log(this)
    var text = $(this).siblings('.description').val()
    var time = $(this).parent().attr('id')

    // Save input in local storage
    localStorage.setItem(time, text)

  })

})