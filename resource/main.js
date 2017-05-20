/**
 * Created by achyutdev on 5/20/17.
 */
function showKota() {
    $(this).innerHTML("kota");
}


$(document).ready(function(){
    $("#hideKota").mouseover(showKota());
});