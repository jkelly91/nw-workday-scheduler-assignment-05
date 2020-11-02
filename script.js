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

  // for each hour created this will load the data on the page when refreshed
  $('#hour9 .description').val(localStorage.getItem('hour9'))
  $('#hour10 .description').val(localStorage.getItem('hour10'))
  $('#hour11 .description').val(localStorage.getItem('hour11'))
  $('#hour12 .description').val(localStorage.getItem('hour12'))
  $('#hour13 .description').val(localStorage.getItem('hour13'))
  $('#hour14 .description').val(localStorage.getItem('hour14'))
  $('#hour15 .description').val(localStorage.getItem('hour15'))
  $('#hour16 .description').val(localStorage.getItem('hour16'))
  $('#hour17 .description').val(localStorage.getItem('hour17'))

})