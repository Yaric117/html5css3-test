$(document).ready(function () {
    $(".menu-button_link:nth-child(2)").click(function () {
        $(".header_input").slideToggle("slow");
        $(this).toggleClass("active");
    });
});


$({blurRadius: 5}).animate({blurRadius: 0}, {
	duration: 1000,
	easing: 'swing',
	step: function() {
		$(".statistics_list_explanation_item").css({
			"-webkit-filter": "blur("+this.blurRadius+"px)",
			"filter": "blur("+this.blurRadius+"px)"
		});
 	} 
 }); 
 var comma_separator_number_step = $.animateNumber.numberStepFactories.separator('');
$(".statistics_list_explanation_item").each(function() {
	var tcount = $(this).data("count");
	$(this).animateNumber({ number: tcount,
		easing: 'easeInQuad',
		"font-size": "40px",
		numberStep: comma_separator_number_step},
		1000);
}); 






