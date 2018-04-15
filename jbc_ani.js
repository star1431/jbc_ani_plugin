
(function($){ 
	
	$.fn.jbc_ani = function(options){
	
		var op = $.extend({}, $.fn.jbc_ani.defaults, options);

		this.parent().css({
				position:'relative',
			})
			this.css({
				position:'absolute',
				right:0,
				bottom:0,
				top:0,
				left:0,
			})
			this.children('nav').css({
				width:'100%',
				height:'100%',
				position:'absolute'
			})
			this.children('nav').hide();
			this.children('nav').find('img').css({
				position:'absolute',
				opacity:0
			})

			var jbc_class = $(this);
			var jbc_total = ($(this).children('nav').length - 1);

		return this.each(function() {		
			jbc_class.children('nav').find('img').css(
				op.location,op.start
			)
			var cnt_jbc = 0;
			function timer_jbc(){				
				if(cnt_jbc < jbc_total){
						cnt_jbc++;
					}else{
						cnt_jbc = 0;
					}
					jbc_moving();
				}

			var arg ={opacity:'1',}; 
			arg[op.location] = op.move
			var arg_s = {opacity:'0',};
			arg_s[op.location] = op.start
			
			function jbc_moving(){					
				jbc_class.children('nav').fadeOut(op.fadeOut,function  () {
					$(this).removeClass("jbc_on");
					$(this).find('img').animate(arg_s,op.animate)										
				});
				jbc_class.children('nav').eq(cnt_jbc).fadeIn(op.fadeIn,function  () {
					$(this).addClass("jbc_on");
					jbc_class.children('nav.jbc_on').children('img').animate(arg,op.animate)
				});

			};
			jbc_moving();

			var j_auto = setInterval(timer_jbc,op.all_speed);
			if(op.auto == 'false'){
				var j_stops = (op.all_speed*jbc_total)
				setTimeout(function(){
					clearInterval(j_auto)
				},j_stops)
			} else if(op.auto == 'true') {
				
			}

	});
			
	};
	$.fn.jbc_ani.defaults = {
		location:'left',
		start:-50,
		move:0,
		all_speed:2500,
		animate:500,
		fadeOut:700,
		fadeIn:500,
		auto:'true',

	};

})(jQuery);