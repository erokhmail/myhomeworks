$(function () {
    $('select, input[type="file"]').styler();
});

const inputImg = document.getElementById('imgInput')
const img = document.getElementById('img')

function getImg(event){
    const file = event.target.files[0]; // 0 = get the first file
    // console.log(file);
    let url = window.URL.createObjectURL(file);
    // console.log(url)
    img.src = url
}
inputImg?.addEventListener('change', getImg)

$(document).ready(function() {
$('#resetbtn').on('click', function(e) {
    var $el = $('#imgInput-styler');
    $el.wrap('<form>').closest(
    'form').get(0).reset();
    $el.unwrap();
});
});