(function($,W,D)
{
    var JQUERY4U = {};

    JQUERY4U.UTIL =
    {
        setupFormValidation: function()
        {
            //form validation rules
            $("form").validate({

                rules: {
                    username: {
                    required: true,
                    minlength: 7,
                    maxlength: 26
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    password: {
                        required: true,
                        minlength: 9,
                        atLeastOne: true
                    },

                messages: {
                    username: "Please enter a username between 7 and 26 characters.",
                    password: {
                        required: "Please provide a password",
                        minlength: "Please enter a password with at least 9 characters.",
                        atLeastOne: "Please use at least one letter and one number."
                    },
                    email: "Please enter a valid email address",
                },
                submitHandler: function(form) {
                    form.submit();
                }
              }
            });
        }
   };

    //when the dom has loaded setup form validation rules
    $(D).ready(function($) {
        JQUERY4U.UTIL.setupFormValidation();
    });

})(jQuery, window, document);

jQuery.validator.addMethod('atLeastOne', function (value, element) {
  return /[a-z].*[0-9]|[0-9].*[a-z]/i.test(value);
}, "The password should contain at least one letter and one number.");
