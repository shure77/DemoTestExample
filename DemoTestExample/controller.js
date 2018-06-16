var views = ["page1", "getDetails", "createNew"];

$(document).ready(function () {

    switchView("page1");

    LoadOverviewProjectData(onError, onSuccess);
    function onSuccess(data) {
        loadProjectData(data);
        bindGetDetails();

        }
    function onError(data) {
        console.log("Error");
    };
  
    $(".createNew").click(function () {
        switchView("createNew");
    });

    $(".backButton").click(function () {
        $(".des").remove();
        $(".con").remove();
        $(".str").remove();
        $(".zip").remove();
        $(".cit").remove();
        $(".pho").remove();
        $(".ema").remove();
        $(".buiT").remove();
        $(".buiS").remove();
        $(".buiZ").remove();
        $(".buiC").remove();
        switchView("page1");

    });  
    
})