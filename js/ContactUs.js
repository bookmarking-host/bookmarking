function postToform() {
                var field1 = $("#nameField").val();
                var field2 = $("#emailField").val();
                var field3 = $("#mobField").val();
                var field4 = $("#cinema option:selected").text();
 				
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
                    url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSez2o3dHXpTBiYJ54pKSgC1BsQhjLm3ObL8j8lvAyN6nHA-2g/formResponse?",
					data: {"entry.1290358533": field1, "entry.1182909353": field2, "entry.1945587663": field3, "entry.186602591": field4},
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