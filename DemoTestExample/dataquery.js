var baseUrl = "http://wi3.technikum-wien.at:8080/ExampleWebServices/jsonRest/";

function LoadOverviewProjectData(onError, onSuccess) {
    $.ajax({
        type: "GET",
        url: baseUrl + "projectoverview?appToken=1234&deviceId=1234",
        data: "",
        dataType: 'jsonp',
        cache: false,
        success: onSuccess,
        error: onError
    })
}

function LoadOverviewDetailsData(detError, detSuccess) {
    $.ajax({
        type: "GET",
        url: baseUrl + "projectdetails?appToken=1234&deviceId=1234&projectId=1",
        datas: "",
        dataType: 'jsonp',
        cache: false,
        success: detSuccess,
        error: detError
    })
}