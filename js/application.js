// Here's the initial data. Again: don't worry about persistence :)
data = [
  { name: "Mark-Paul Gosselaar", photo_url: "" },
  { name: "Delta Burke", photo_url: "img/avatars/delta.png" },
  { name: "Alf", photo_url: "img/avatars/alf.png" },
  { name: "Jaleel White", photo_url: "img/avatars/jaleel.png" },
  { name: "Ralph Macchio", photo_url: "img/avatars/ralph.png" },
  { name: "Candace Cameron", photo_url: "img/avatars/candace.png" },
  { name: "Patrick Duffy", photo_url: "img/avatars/pduff.png" },
  { name: "Arnold Schwartzengger", photo_url: "img/avatars/arnold.png" }
];

function hoverNclose() {

	$('.image').hover(
		function() {
			$(".close", $(this)).show();
			$(this).css('opacity', '0.8');
		}, function() {
			$(".close", $(this)).hide();
			$(this).css('opacity', '1');
	});

	$('.close').on('click', function(e){
		$(this).parent().hide();
	});
}

function displayJson(new_card) {
	console.log(new_card);
	var image = $('<img>');
	var imageContainer = $('<div class="image">');
	var imageName = $('<div class="name">').text(new_card.name);
	var imgClose = $('<img class="close">');
	image.attr('src', new_card.photo_url || 'img/default.png');
	imgClose.attr('src', 'img/close.png');
	imageContainer.append(image).append(imageName).append(imgClose);
	$('#show_cards').prepend(imageContainer);
	hoverNclose();
}

$(document).on('ready', function(){
	// console.log(data);
	// data = data.reverse();

	$.each(data, function(idx, obj){
		displayJson(obj);
	
	});

	hoverNclose();

});

$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};


$(function() {
    $('form').submit(function(e) {
    	e.preventDefault();
        console.log(data);

        var new_card = $('form').serializeObject();
        console.log(new_card);

        data.unshift(new_card);       
        console.log(data);

        displayJson(new_card);

	});
});

