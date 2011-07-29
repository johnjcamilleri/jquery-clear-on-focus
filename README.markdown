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
