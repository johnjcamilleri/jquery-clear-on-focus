/**
 * jQuery Clear-on-Focus Plugin
 *
 *
 * @author John J. Camilleri
 * @version 1.0
 */
$(document).ready(function(){

	// Clear on focus
	$('.clear-on-focus')
		.addClass('unclicked')
		.each(function(){
			var elem=$(this);
			elem.attr('orig_value',elem.val());
		})
		.focusin(function(){
			var elem=$(this);
			if(elem.hasClass('unclicked')){
				elem.val('');
				elem.removeClass('unclicked');
				if(elem.hasClass('password')){
					this.type='password';
				}
			}
		})
		.focusout(function(){
			var elem=$(this);
			if(!elem.val()){
				elem.addClass('unclicked');
				if(elem.hasClass('password')){
					this.type='text';
				}
				elem.val(elem.attr('orig_value'));
			}
		})

});
