var userName;
var studID;
var loginName;
var campus;
var planetName;
var planetList = new Array();
var rowID;
class Planet {
	constructor (name, color, radius,pic,distfromS,distfromE) {
        this.planetName = name; 
        this.planetColor=color;
        this.planetRadiusKM=radius;
        this.image=pic;
        this.distfromS=distfromS;
        this.distfromE=distfromE;
	}
}

$(document).ready(function()
{
	$.ajax(
		{
			type:"GET",
			url:"data/planetsPlusPersonal.json",
			datatype: "json",
			success:loadJSON,
			error:function(e)
			{
				alert(`${e.status} - ${e.statusText}`);
			}
        }
          );
});

function loadJSON(data)
{
    console.log(data);
    userName=data.personal.myFullName;
    studID=data.personal.myStudentNumber;
    loginName=data.personal.myLoginName;
    campus=data.personal.myCampus;

    planetName=data.solarSystem.planets.planetName;

    for(let pl of data.solarSystem.planets)
    {
			//pList.push(new Prov(prov.name,prov.type,prov.capital,prov.pic, cities));
		//End of IF
        planetList.push(new Planet(pl.planetName,pl.planetColor,
            pl.planetRadiusKM,pl.image,pl.distInMillionsKM.fromSun,pl.distInMillionsKM.fromEarth));
    }//End of IF

    console.log(planetList);

    localStorage.setItem("userName",userName);
    localStorage.setItem("studID",studID);
    localStorage.setItem("loginName",loginName);
    localStorage.setItem("campus",campus);

    console.log(studID);
    mainScreen(data);
}       

function mainScreen(data)
{
    $("#User").html(`Created By/${userName}/${studID}`);
    $("#login").html(`${loginName}/${campus}`);
    
	for(x=0;x<planetList.length;x++)
	{
		$("#planetList").append(
            `
                <section section-id='${x}'>
					<a href='pages/planetDetail.html'><img src="images/${planetList[x].image}"></a>
				</section>
			`
			);
            console.log(x);
    }//End Of Loop
    
}

$(document).on("click", "#planetList > section", function() {
    localStorage.setItem("rowID",$(this).closest("section").attr("section-id"));
	localStorage.setItem("planetList",JSON.stringify(planetList));
});

