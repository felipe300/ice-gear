$(() => {
	loadColors('first', 'bg-success', 'darkgreen')
	loadColors('second', 'bg-warning', 'yellowgreen')
	loadColors('third', 'bg-primary', 'darkblue')

	function loadColors ($ele, $bootstrapColor, $textcolor) {
		$(`.${$ele}i`).on({
			click: function () {
				$(`.${$ele}`)
					.addClass($bootstrapColor)
				$(`.${$ele} > label`)
					.css("color", $textcolor)
				$("input")
					.css("color", $textcolor)
			},
			mouseleave: function () {
				$(`.${$ele}`)
					.removeClass($bootstrapColor)
				$(`.${$ele} > label`)
					.css("color", "#E35865")
			},
			mouseenter: function () {
				$(this)
					.css("cursor", "pointer")
			}
		})
	}
})
