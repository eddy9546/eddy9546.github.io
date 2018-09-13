/*
	Telephasic by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
$(function() { // document ready

  var calendar = $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'agendaWeek,agendaDay'
    },
    defaultView: 'agendaWeek',
    defaultTimedEventDuration: '01:00',
    allDaySlot: false,
    scrollTime: '08:00',
    businessHours: {
      start: '9:00',
      end: '18:00',
    },
    lang: /^en-/.test(navigator.language) ? 'en' : 'zh-cn',
    eventOverlap: function(stillEvent, movingEvent) {
      return true;
    },
    events: [{
      title: '技术部周例会',
      start: '2015-05-22T15:00+08:00'
    }, {
      title: '运营部',
      start: '2015-05-22T12:00+08:00'
    }],
    editable: true,
    selectable: true,
    selectHelper: true,
    select: function(start, end) {
      var duration = (end - start) /1000;
      if(duration == 1800) {
        // set default duration to 1 hr.
      	end = start.add(30, 'mins');
        return calendar.fullCalendar('select', start, end);
      }
      var title = prompt('Event Title:');
      var eventData;
      if (title && title.trim()) {
        eventData = {
          title: title,
          start: start,
          end: end
        };
        calendar.fullCalendar('renderEvent', eventData);
      }
      calendar.fullCalendar('unselect');
    },
    eventRender: function(event, element) {
      var start = moment(event.start).fromNow();
      element.attr('title', start);
    },
    loading: function() {
      
    }
  });

});
(function($) {

	skel.breakpoints({
		normal: '(max-width: 1280px)',
		narrow: '(max-width: 1080px)',
		narrower: '(max-width: 820px)',
		mobile: '(max-width: 736px)',
		mobilep: '(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on narrower.
			skel.on('+narrower -narrower', function() {
				$.prioritize(
					'.important\\28 narrower\\29',
					skel.breakpoint('narrower').active
				);
			});

		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Dropdowns.
			$('#nav > ul').dropotron({
				mode: 'fade',
				speed: 300,
				alignment: 'center',
				noOpenerFade: true
			});

		// Off-Canvas Navigation.

			// Navigation Button.
				$(
					'<div id="navButton">' +
						'<a href="#navPanel" class="toggle"></a>' +
					'</div>'
				)
					.appendTo($body);

			// Navigation Panel.
				$(
					'<div id="navPanel">' +
						'<nav>' +
							'<a href="index.html" class="link depth-0">Home</a>' +
							$('#nav').navList() +
						'</nav>' +
					'</div>'
				)
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						resetScroll: true,
						resetForms: true,
						side: 'top',
						target: $body,
						visibleClass: 'navPanel-visible'
					});

			// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#navButton, #navPanel, #page-wrapper')
						.css('transition', 'none');

	});

<script src="http://beckie.awctechnology.co.uk/EdmundMartei/wp-content/plugins/h5p/h5p-php-library/js/h5p-resizer.js" charset="UTF-8"></script>
