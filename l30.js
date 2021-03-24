let count = 1
function add_element() {
	count += 1
	if (count < 16) {
		let elem = document.createElement("div")
		elem.classList.add("circle")
		document.querySelector(".row").appendChild(elem)
	} else {
		alert('You can only remove!')
		count = 15
	}
}

function remove_element() {
	count -= 1
	if (count > 0) {
		let elem = document.querySelector(".circle")
		elem.remove()
	} else {
		alert('You can only add!')
		count = 1
	}
}