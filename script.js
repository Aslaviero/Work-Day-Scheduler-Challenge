$(document).ready(function () {
        // used moment.js to show current day and time
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")); 
    // save button on click for text added to the text area
    $(".saveBtn").on("click", function () {
       
        
        var text = $(this).siblings(".description").val(); 
        var time = $(this).parent().attr("id"); 

    //    Local storage to save text added into text area for scheduler
        localStorage.setItem(time, text);
        
    })
    // created function to save each hour without having to repeat myself with code. 
    var hours = $(".description")
    hours.each(function(){
        console.log($(this))
        $(this).val(localStorage.getItem($(this).parent().attr("id")));
    })
   

    function timeTracker() {
      
        var currentHour = moment().hour(); 

       
        $(".time-block").each(function () {
            var hourBlock = parseInt($(this).attr("id").split("hour")[1]);
            

           
            if (hourBlock < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (hourBlock === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    timeTracker(); 
})