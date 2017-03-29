$(document).ready(function()
{
  $('#hiddenContent').hide();

  $("#advancedSearchButton").click(function()
  {
    if($('#hiddenContent').is(':visible'))
    {
      $('#hiddenContent').hide();
      $('#advancedSearchButton').html("Advanced Search <i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i>");
    }
    else
    {
      $('#hiddenContent').show();
      $('#advancedSearchButton').html("Advanced Search <i class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i>");
    }
  });
});
