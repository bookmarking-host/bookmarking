	function postToform() {
		var field1 = $("#nameField").val();
		var field2 = $("#emailField").val();
		var field3 = $("#mobField").val();
		var field4 = $("#cinema option:selected").text();
		if(field1 == "") {
			alert('Please Fill Your Name');
			document.getElementById("nameField").focus();
			return false;
		}
		if(field2 == "") {
			alert('Please Fill Your Email');
			document.getElementById("emailField").focus();
			return false;
		}
		if(field3 == "" || field3.length > 10 || field3.length < 10) {
			alert('Please Fill Your Mobile Number');
			document.getElementById("mobField").focus();
			return false;
		}
		$.ajax({
			url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSf-SZZRVRfuXgDAXhBHR9SPdhrULweH0-2p7boYjTg9ZMSDcA/formResponse?",
			data: {
				"entry.1562541368": field1,
				"entry.356859670": field2,
				"entry.882151036": field3,
				"entry.1839829419": field4
			},
			type: "GET",
			dataType: "xml",
			success: function(d) {},
			error: function(x, y, z) {
				$('#success-msg').show();             
				$('#form').hide();
			}
		});
		return false;
	}