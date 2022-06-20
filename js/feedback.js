function postToform() {
                var field1 = $("#nameField").val();
                var field2 = $("#emailField").val();
                var field3 = $("#mobField").val();
                var field4 = $("#cinema option:selected").text();
 				var field5 = $("#suggestion").val();
				if(field1 == ""){
					alert('Please Fill Your Name');
					document.getElementById("nameField").focus();
					return false;
				}
				if(field2 == ""){
					alert('Please Fill Your Email');
					document.getElementById("emailField").focus();
					return false;
				}
				if(field3 == "" || field3.length > 10 || field3.length < 10){
					alert('Please Fill Your Mobile Number');
					document.getElementById("mobField").focus();
					return false;
				}

                $.ajax({
                    url: "https://docs.google.com/forms/d/e/1FAIpQLSerqGc4IgpisUZXEmjVloJEI3e_rRdTEP2njTpwwt38udiK8A/formResponse?",
data: {"entry.2068933832": field1, "entry.829486952": field2, "entry.365399180": field3, "entry.1136261082":field4,"entry.524798750": field5},
                    type: "GET",
                    dataType: "xml",
                    success: function(d)
					{
					},
					error: function(x, y, z)
						{

							$('#success-msg').show();
							$('#form').hide();
							
						}
                });
				return false;
            }
