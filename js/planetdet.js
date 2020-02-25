// myscript for 03-AJAX-01-Canada using AJAX for individual pagevar countryName;
var planetList = new Array();
var userName;
var studID;
var loginName;
var campus;
var rowID;
$(document).ready(function() 
{
    userName=localStorage.getItem("userName");
    studID=localStorage.getItem("studID");
    loginName=localStorage.getItem("loginName");
    campus=localStorage.getItem("campus");
    $("#User").html(`Created By/${userName}/${studID}`);
    $("#login").html(`${loginName}/${campus}`);

    // get local storage values	
    rowID=localStorage.getItem("rowID");
    console.log(rowID);
	planetList=JSON.parse(localStorage.getItem("planetList"));
	
    
    // fill in output fields
	$("#pname").append(planetList[rowID].planetName);
    $("#planetColor").append(planetList[rowID].planetColor);
    $("#planetRadiusKM").append(planetList[rowID].planetRadiusKM);
    $("#image").append(`<img src='../images/${planetList[rowID].image}'></img>`);
    $("#distInMillionsKMfS").append(planetList[rowID].distfromS);
    $("#distInMillionsKMfE").append(planetList[rowID].distfromE);
    
});