$(document).ready(function(){

  hideAll();
  $("#homeDiv").show();
    
  function hideAll() {
    $("#homeDiv").hide();
    $("#resumeDiv").hide();
    $("#skillsDiv").hide();
    $("#projectDiv").hide();
  }

  $(".homeNav").click(function(){
    hideAll();
    $("#homeDiv").show();
  });

  $(".resumeNav").click(function(){
    hideAll();
    $("#resumeDiv").show();
  });

  $(".skillsNav").click(function(){
    hideAll();
    $("#skillsDiv").show();
  });

  $(".projectNav").click(function(){
    hideAll();
    $("#projectDiv").show();
  });

});