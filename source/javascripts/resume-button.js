jQuery(document).ready(function(){
	$(".serious").hide();
	$("input[name='kind']").change(function() {
		if ($("input[name='kind']:checked").val() == 'fun') {
			$(".serious").hide();
			$(".fun").show();
		}	else {
			$(".fun").hide();
			$(".serious").show();
		}
	});
});