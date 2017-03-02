;
$(document).ready(function() {
	$("#services .ser-box img").hover(function() {
			$(this).addClass("fadeInSerImg");
			$(this).next("h3").addClass("fadeInSerBox_h3");
		},
		function() {
			$(this).removeClass("fadeInSerImg");
			$(this).next("h3").removeClass("fadeInSerBox_h3");
		}
	);
	//给small-icons下面的img添加class,支持responsive
	$("#our-work .small-icons img").addClass("img-responsive");
	//给small-icons下面的img后添加一个兄弟div
	$("#our-work .small-icons").append(
		//		'<div class="hover-show">' + '<p>Portfolio name</p>' + '<i class="fa fa-plus fa-2x" aria-hidden="true"></i>' + '</div>'
		'<div class="hover-show">' +
		'<p>Portfolio name</p>' +
		'<i class="fa fa-plus fa-2x" aria-hidden="true"></i>' +
		'</div>'
	);
});