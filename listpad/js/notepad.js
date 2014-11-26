$(document).ready(function () {

	//global var
	var listCount = 0;

	$('#newListItemForm').on('submit', function(e) {

		listCount += 1;

		e.preventDefault();

		$newItem = $('#itemDescription').val();
		$('ul#list').append('<li>' + '<span class="number">' + listCount + ':' + '</span>' + $newItem + '</li>')
		$('#itemDescription').val('');
	});

	//create event on document since new list items will be created.
	//re-number the list items that still remain.
	//pass in element so event registers new elements that have been added since page load.
	$(document).on('click', 'li', function () {
		listCount = 0;

		$(this).remove();
		$('.number').each(function() {
			
			listCount +=1
			$(this).text(listCount + ':');
		})
	})



})