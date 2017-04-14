$(document).ready(function() {
    $('.selectpicker').nextAll().css({ 'background': '#ccc' });
    $('.selectpicker').change(function() {
        $(this).nextAll().attr('disabled', 'disabled').css({ "background": "#ccc" }).find('option:first').attr("selected", "selected");
        $(this).next().removeAttr('disabled', 'disabled').css({ "background": "white" }).children().removeAttr("selected", "selected");
    })
})