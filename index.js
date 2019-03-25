
function validate() {
	var missing = []
	if($("#firstname").val() == "")
		missing.push("firstname")
	if($("#lastname").val() == "")
		missing.push("lastname")
	if($("#subject").val() == "")
		missing.push("subject")
	if(missing.length>0) {
		$("#formerrors").css("color", "red")
		$("#formerrors").html("You are missing: " + missing)
	} else {
		$("#formerrors").css("color", "green")
		$("#formerrors").html("Thank you for submitting!")
	}
}
