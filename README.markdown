# jQuery Clear-on-focus

 - Version 1.0
 - Updated 29/07/2011

Instead of using `<label>` elements for each of your form's fields, use the input's value attribute to set the label.
Clear-on-Focus will then take care of clearing the value when a user clicks or focuses the field.
If they leave the field blank, the original message is reset back.
Also works correctly for Password fields.

## Example usage

	<input type="text" name="username" value="Enter username" class="clear-on-focus" />
	<input type="text" name="password" value="Enter password" class="clear-on-focus password" />

_See also demo.html_

## Compatibility

[sblackstone](https://github.com/sblackstone) pointed out that the password field feature doesn't work
correctly with IE, and offered this alternative (please not I have not tested this):

    if (!check_init("password-on-focus", e)) { return; } 
    ele.hide();
    newElement = $("<input>")
        .attr('type', 'text')
        .val(ele.val())
    newElement.originalElement = ele;
    ele.val('').after(newElement);
    newElement.bind("focus", function(eve) {
      e = $(eve.target);
      $(e).hide();
      ele.show().focus();
    });

## Relevance

HTML5's `placeholder` attribute for input fields makes this plugin is largely obsolete, 
though I will still leave it here for developers in non-HTML5 environments.
