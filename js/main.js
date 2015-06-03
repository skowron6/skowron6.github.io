// stick to the buttom
$(document).ready(sizeContent);
$(window).resize(sizeContent);
function sizeContent() {
	$('#newsletter').css('height', $(window).height() +'px');
	$('#optin').css('top', $(window).height() - 150 + 'px');
}

$(document).ready(function() {

	//snap to viewport
	function resizePages() {
		var h = $(window).height();
		var height  =  h < 600 ? 600 : h;
		$('.full-page-section').css('height',height);
		$('firstSection').css('height',height*0.98);
	}

	var scrollElement = 'html, body';
	//resize
	$(window).resize(function(e) {
		resizePages();
	});
	resizePages(); // end viewport

}); //end document

// text outline animation
window.signature = {
  initialize: function() {
    return $('svg').each(function() {
      var delay, i, len, length, path, paths, previousStrokeLength, results, speed;
      paths = $('path, circle, rect', this);
      delay = 0;
      results = [];
      for (i = 0, len = paths.length; i < len; i++) {
        path = paths[i];
        length = path.getTotalLength();
        previousStrokeLength = speed || 0;
        speed = length < 100 ? 20 : Math.floor(length);
        delay += previousStrokeLength + 0;
        results.push($(path).css('transition', 'none').attr('data-length', length).attr('data-speed', speed).attr('data-delay', delay).attr('stroke-dashoffset', length).attr('stroke-dasharray', length + ',' + length));
      }
      return results;
    });
  },
  animate: function() {
    return $('svg').each(function() {
      var delay, i, len, length, path, paths, results, speed;
      paths = $('path, circle, rect', this);
      results = [];
      for (i = 0, len = paths.length; i < len; i++) {
        path = paths[i];
        length = $(path).attr('data-length');
        speed = $(path).attr('data-speed');
        delay = $(path).attr('data-delay');
        results.push($(path).css('transition', 'stroke-dashoffset ' + speed + 'ms ' + delay + 'ms linear').attr('stroke-dashoffset', '0'));
      }
      return results;
    });
  }
};

$(document).ready(function() {
  window.signature.initialize();
  return $('button').on('click', function() {
    window.signature.initialize();
    return setTimeout(function() {
      return window.signature.animate();
    }, 200);
  });
});

$(window).load(function() {
  return window.signature.animate();
});