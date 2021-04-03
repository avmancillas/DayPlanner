var hourlytime = [
    {id: "0", hour: "09", time: "09", meridiem: "am", reminder: "" },
    {id: "1", hour: "10", time: "10", meridiem: "am", reminder: "" },
    {id: "2", hour: "11", time: "11", meridiem: "am", reminder: "" },
    {id: "3", hour: "12", time: "12", meridiem: "am", reminder: "" },
    {id: "4", hour: "01", time: "13", meridiem: "pm", reminder: "" },
    {id: "5", hour: "02", time: "14", meridiem: "pm", reminder: "" },
    {id: "6", hour: "03", time: "15", meridiem: "pm", reminder: "" },
    {id: "7", hour: "04", time: "16", meridiem: "pm", reminder: "" },
    {id: "8", hour: "05", time: "17", meridiem: "pm", reminder: "" }
]

function getHeaderDate() {
    var currentHeaderDate = moment().format("MMMM Do YYYY, h:mm:ss a");
    $("#currentDay").text(currentHeaderDate);
}
getHeaderDate();

function saveReminders() {
    localStorage.setItem("hourlytime", JSON.stringify(hourlytime));
}

function displayReminders() {
    hourlytime.forEach(function (_thisHour) {
        $(`#${_thisHour.id}`).val(_thisHour.reminder);
    })
}



function init() {
    var storedtime = JSON.parse(localStorage.getItem("hourlytime"));

    if (storedtime) {
        hourlytime = storedtime;
    }

    saveReminders();
    displayReminders();
}

hourlytime.forEach(function(thisHour) {
    
     var hourRow = $("<form>").attr({
       "class": "row"
    });
    $(".container").append(hourRow);

  
    var hourField = $("<div>")
        .text(`${thisHour.hour}${thisHour.meridiem}`)
        .attr({
            "class": "col-md-2 hour"
    });

    
    var hoursection = $("<div>")
        .attr({
            "class": "col-md-9 description p-0"
        });
    var schedulerData = $("<textarea>");
    hoursection.append(schedulerData);
    schedulerData.attr("id", thisHour.id);
    if (thisHour.time < moment().format("HH")) {
        schedulerData.attr ({
            "class": "past", 
        })
    } else if (thisHour.time === moment().format("HH")) {
        schedulerData.attr({
            "class": "present"
        })
    } else if (thisHour.time > moment().format("HH")) {
        schedulerData.attr({
            "class": "future"
        })
    }

    
    var saveButton = $("<i class='far fa-save fa-lg'></i>")
    var savePlanner = $("<button>")
        .attr({
            "class": "col-md-1 saveBtn"
    });
    savePlanner.append(saveButton);
    hourRow.append(hourField, hoursection, savePlanner);
})


init();



$(".saveBtn").on("click", function() {
    event.preventDefault();
    console.log(this);
    var text =$(this).siblings(".description").val();
    var time =$(this).parent().attr("id");

    localStorage.setItem(time,text);
    
})