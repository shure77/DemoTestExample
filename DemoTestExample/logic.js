function loadProjectData(data) {
    $.each(data, function (index, value) {
        var projectName = value['title'];
        var projectDate = value['date'];
        var projectId = value['projectId'];
        var projectRow = "<tr class='getDetails'> <td class='projectName'>" + projectName + "</td><td>"+ projectDate + "</td></tr>";
        $(".addProjectRow").append(projectRow);
        
    });

};

function switchView(newView) {
    for (i = 0; i < views.length; i++) {
        if (newView == views[i]) {
            $("#" + newView).show();
        } else {
            $("#"+ views[i]).hide()
        }
    }
}

function bindGetDetails() {
    $(".getDetails").click(function () {
        LoadOverviewDetailsData(detError, detSuccess);
        function detSuccess(datas) {
            loadDetailsData(datas);
            switchView("getDetails");
            console.log("Success");
        }
        function detError(datas) {
            console.log("Error");
        }
    });
      
}

function loadDetailsData(datas) {
    console.log(datas);
    var description = datas['description'];
    var contractor = datas['contractor'];
    var street = datas['street'];
    var zip = datas['zip'];
    var city = datas['city'];
    var buildingCity = datas['buildingCity'];
    var buildingZip = datas['buildingZip'];
    var buildingstreet = datas['buildingstreet'];
    var buildingtype = datas['buildingtype'];
    var mail = datas['mail'];
    var phone = datas['phone'];

    $(".description").append("<td class='des'>" + description + "</td>");
    $(".contractor").append("<td class='con'>" + contractor + "</td>");
    $(".street").append("<td class='str'>" + street + "</td>");
    $(".zip").append("<td class='zip'>" + zip + "</td>");
    $(".city").append("<td class='cit'>" + city + "</td>");
    $(".phone").append("<td class='pho'>" + phone + "</td>");
    $(".email").append("<td class='ema'>" + mail + "</td>");
    $(".buildingtype").append("<td class='buiT'>" + buildingtype + "</td>");
    $(".buildingstreet").append("<td class='buiS'>" + buildingstreet + "</td>");
    $(".buildingzip").append("<td class='buiZ'>" + buildingZip + "</td>");
    $(".buildingCity").append("<td class='buiC'>" + buildingCity + "</td>");
}

/**wenn ich die Reihe in der Tabelle anklicke, möchte ich diese Detaildaten sehen. Dazu muss ich die Daten (data) nach
 * dem Namen filtern. Ich hole mir den Projektnamen mit this.innerHtml aus dem html raus und suche den Projektnamen in den
 * Daten (data). Dazu muss ich über die Daten (data) iterieren. Wenn die werte übereinstimmen, dann hole ich mir diese ID!
 * **/
function parseProjectId(data) {
    var projectName = (this.innerHTML);
    $.each(data, function (index, value) {
        if (projectName === value['title']) {
            var projectId = value['projectId'];
            control.log(projectId);          
        };
    });
    return projectId;
}

