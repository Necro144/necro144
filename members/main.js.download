function getUrlParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}
         
/* This is not really needed, the same can be achieved without loading jquery
$(document).ready(function(){
    $("select").live("change",function(){
        if(getUrlParameter("steamid") != null){
            window.location.href = ($(this).attr("value") == "jb") ? "index.php?steamid=" + getUrlParameter("steamid") : "index.php?server=" + $(this).attr("value") + "&steamid=" + getUrlParameter("steamid");
        }
        else {
            window.location.href = ($(this).attr("value") == "jb") ? "index.php" : "index.php?server=" + $(this).attr("value");
        }
    });
});
*/

function selectServerCheck()
{
        var aUrlChars = new Array("?", "&");
        var i = 0;
        window.location.href = "index.php" + aUrlChars[i++] + "server="
                               + document.getElementById("selectServers").value + ((getUrlParameter("steamid") != null) ? (aUrlChars[i]
                               + "steamid=" + getUrlParameter("steamid")) : "");
}

