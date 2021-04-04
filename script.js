//current date and time header setting
var currentHeaderDate = moment().format("dddd,MMM Do YYYY");
$("#currentDay").append(currentHeaderDate);

var currentHeaderTime = moment().format("LT");
$("#currentTime").append(currentHeaderTime);

var now = new Date ().getHours();

//set to local storage
$(document).ready(function(){
    $(".saveBtn").on("click", function() {
        console.log(this);
        var plannertext =$(this).siblings(".description").val();
        var plannertime =$(this).parent().attr("id");

        localStorage.setItem(plannertime,plannertext);
    })
    //get hour 9 from local storage
    $("#hour 9 .description").val(localStorage.getItem("hour 9"));
    //get hour 10 from local storage
    $("#hour 10 .description").val(localStorage.getItem("hour 10"));
    //get hour 11 from local storage
    $("#hour 11 .description").val(localStorage.getItem("hour 11"));
    //get hour 12 from local storage
    $("#hour 12 .description").val(localStorage.getItem("hour 12"));
    //get hour 1 from local storage
    $("#hour 1 .description").val(localStorage.getItem("hour 1"));
    //get hour 2 from local storage
    $("#hour 2 .description").val(localStorage.getItem("hour 2"));
    //get hour 3 from local storage
    $("#hour 3 .description").val(localStorage.getItem("hour 3"));
    //get hour 4 from local storage
    
    $("#hour 4 .description").val(localStorage.getItem("hour 4"));
    //get hour 5 from local storage
    $("#hour 5 .description").val(localStorage.getItem("hour 5"));
    
    
    //setting for past,present,future 
    function timeTracker() {
        var currentTime = moment().hour();
        
        $(".time-block").each(function(){
            var timeSection = parseInt($(this).attr("id").split("hour")[1]);

            if (timeSection < currentTime) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
                
            }

            else if (timeSection === currentTime){
                $(this).addClass("present");
                $(this).removeClass("past");
                $(this).removeClass("future");
               
            }
            else{
                $(this).addClass("future");
                $(this).removeClass("present");
                $(this).removeClass("past");
                
            }
            
        })
    }
    timeTracker();

})