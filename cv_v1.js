for (var i=1; i<15; i++) {
	var tmp = "#skill-" + String(i);
	$(tmp).mouseenter(function(){
		var tmp2 = "#" + this.id + "-points";
		$(this).addClass("skill-highlight");
		$(tmp2).addClass("skill-highlight");
	});
	$(tmp).mouseleave(function(){
		var tmp2 = "#" + this.id + "-points";
		$(this).removeClass("skill-highlight");
		$(tmp2).removeClass("skill-highlight");
	});

	tmp = "#skill-" + String(i) + "-points";
	$(tmp).mouseenter(function(){
		var tmp2 = "#" + this.id.substring(0,this.id.length-7);
		$(this).addClass("skill-highlight");
		$(tmp2).addClass("skill-highlight");
	});
	$(tmp).mouseleave(function(){
		var tmp2 = "#" + this.id.substring(0,this.id.length-7);
		$(this).removeClass("skill-highlight");
		$(tmp2).removeClass("skill-highlight");
	});
}