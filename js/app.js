var showContent = function(msec, date, time, theDate) {
	// var saveMsec = msec
	var ss = Math.floor(msec / 1000);
	var hh = Math.floor(msec / 1000 / 60 / 60);
	var mm = Math.floor(hh * 60);
	var dd = Math.floor(hh / 24)
	var momo = Math.floor(dd / 30)
	var yy = Math.floor(momo / 12)
		// console.log(yy, momo, dd, hh, mm, ss)
	data = [yy, momo, dd, hh, mm, ss, msec]
		// console.log(msec)
	$(".display").addClass("well")
	$("#displayContainer").css("display", "block")
	var displays = $(".panel")
	for (i = 0; i < data.length; i++) {
		if (i > 3) {
			$(displays[i]).text("~" + data[i])
		} else {
			$(displays[i]).text(data[i])
		}
		// console.log(data[i], "is going into ", displays[i], ". This is the ", i, "th rotation.")
	}
	// $("#refresh").click(function() {
	// for (e = 0; e < 61; e++) {
	// 	setTimeout(function() {
	// 		for (i = 0; i < 1001; i++) {
	// 			setTimeout(function() { $(displays[displays.length - 1]).text(data[displays.length - 1] + 1) }, 1)
	// 		}
	// 		$(displays[displays.length - 2]).text(data[displays.length - 2] + 1)
	// 	}, 1000)
	// }
	setTimeout(function() {
		updateNumbers(date, time, theDate)
	}, 6000)

}


var updateNumbers = function(date, time, theDate) {
		console.log("User was born at", time, "on", date)
		if (theDate == null) {
			var year = date.slice(0, 4)
			var day = date.slice(-1)
			var month = date.slice(5, 7)
			month -= 1
				// console.log(year, month, day)
				// console.log(day, month, year, time)
			var hour = time.slice(0, 2);
			if (hour[0] == "0") {
				hour = hour[1]
			}
			// console.log(hour)
			// console.log(hour)
			var minute = time.slice(-2);
			// console.log(minute)
			console.log(year, month, day, hour, minute)
				// var year = year.splice(2, year.length);
			theDate = new Date(year, month, day, hour, minute, 0, 0)
		}
		// console.log(theDate)
		var currentTime = new Date()
		var month = (currentTime.getMonth() + 1).toString()
		if (month.length < 2) {
			var month = '0' + month;
		}
		var day = (currentTime.getDate()).toString()
		if (day.length < 2) {
			var day = '0' + day;
		}
		var year = (currentTime.getFullYear()).toString()
			// var year = year.slice(2, year.length);
		var hour = currentTime.getHours()
		var minute = currentTime.getMinutes()
			// console.log(year, month, day, "is today's stuff")
		month -= 1
			// date = month.toString() + day.toString() + year
		var thisDate = new Date(year, month, day, hour, minute)
			// console.log(thisDate)
		var msec = thisDate - theDate
		showContent(msec, date, time, theDate)
	}
	// new Date(year, month, day, hours, minutes, seconds, milliseconds)

$(document).ready(function() {

	// console.log(date, time)
	$("#submit").click(function() {
		var date = $("#bday").val()
		var time = $("#btime").val()
		if (date.length != 10 || time.length != 5) {
			confirm("Complete all data please!")
		} else {
			$("#inputContainer").css("display", "none")
			updateNumbers(date, time, null)
		}
		return false
	})
	return false;
})
