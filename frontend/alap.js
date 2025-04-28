//elso feladat
fetch("http://localhost:3000/szakmaLekerdez")
    .then(x => x.json())
    .then(y => feladat1(y));

function feladat1(y) {
    //console.log(y)
    let sz = "<ul>"
    for (const elem of y) {
        sz += `
        
            <li>${elem.szakmaNev}</li>
        
        `

    }
    sz += `</ul>`
    document.getElementById("felsorolas").innerHTML = sz

}


//masodikfeladat
fetch("http://localhost:3000/VerSzakLek")
    .then(x => x.json())
    .then(y => feladat2(y));

function feladat2(y){
    console.log(y)
    let sz=""
    for (const elem of y) {
        sz+=`
        <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="m-2 p-2 text-center arnyekolt">
        <span style="font-size:28px;font-weight:bold;">${elem.nev} </span>
        <span class="szakmaformazasa">${elem.szakmaNev} </span>

        </div>
        </div>
        `
    }
    
    document.getElementById("grideles").innerHTML = sz
}


//harmasfeladat


function szakmafelvitel(){
    let beid=document.getElementById("szakmaid").value
    let benev=document.getElementById("szakmanev").value
    if(beid=="" || benev==""){
        document.getElementById("eredmeny").innerHTML=`
        <span style="color:red">Kötelezo minden adatot megadni!</span>
        `
    }

    let adatok={
        "bevitel1": beid,
        "bevitel2": benev
    }

    fetch("http://localhost:3000/szakmaFelvitel",
    {
        method:POST,
        body: JSON.stringify(adatok),
        headers:{"Content-type":"application/json; charset-UTF-8"}
    }
    )
    .then(x => x.json())
    .then(y => {

        if (y=="Hiba") {
            document.getElementById("eredmeny").innerHTML=`
            <span style="color:red">Hiba</span>
            `
        }
        else
            document.getElementById("eredmeny").innerHTML=`
                <span style="color:red">A felvitel sikeres!</span>
            `

    });


}


//negyedik feladat

fetch("http://localhost:3000/szakmaLekerdez")
    .then(x => x.json())
    .then(y => feladat4(y));

function feladat4(y) {
    let sz = "<select>"
    for (const elem of y) {
        sz += `
        
            <option value="${elem.id}">${elem.szakmaNev}</option>
        
        `

    }
    sz += `</select>`
    document.getElementById("lenyiloszakma").innerHTML = sz

}

fetch("http://localhost:3000/orszaglekerdez")
    .then(x => x.json())
    .then(y => feladat4b(y));

function feladat4b(y) {
    let sz = "<select>"
    for (const elem of y) {
        sz += `
        
            <option value="${elem.id}">${elem.orszagNev}</option>
        
        `

    }
    sz += `</select>`
    document.getElementById("orszaglenyilo").innerHTML = sz

}

function versenyzofelvitel(){
    let benev=document.getElementById("szemelynevebemenet").value
    let beszakma=document.getElementById("lenyiloszakma").value
    let beorszag=document.getElementById("orszaglenyilo").value
    let bepont=document.getElementById("bepont").value

    let adatok={
        "bevitel1": benev,
        "bevitel2": beszakma,
        "bevitel3": beorszag,
        "bevitel4": bepont
    }

    fetch("http://localhost:3000/versenyzoFelvitel",
    {
        method:POST,
        body: JSON.stringify(adatok),
        headers:{"Content-type":"application/json; charset-UTF-8"}
    }
    )
    .then(x => x.json())
    .then(y => {

        if (y=="Hiba") {
            document.getElementById("eredmeny2").innerHTML=`
            <span style="color:red">Hiba</span>
            `
        }
        else
            document.getElementById("eredmeny2").innerHTML=`
                <span style="color:red">A felvitel sikeres!</span>
            `

    });


}


//ötös feladat

fetch("http://localhost:3000/versenyzo")
    .then(x => x.json())
    .then(y => feladat5(y));

function feladat5(y) {
    let sz = "<select id='selectversenyzo'>"
    for (const elem of y) {
        sz += `
        
            <option value="${elem.id}">${elem.nev}</option>
        
        `

    }
    sz += `</select>`
    document.getElementById("versenyzoneveklenyilo").innerHTML = sz

}

function versenyzotorles(){
    let belenyilo=document.getElementById("selectversenyzo").value
    

    let adatok={
        "bevitel1": belenyilo
    }

    fetch("http://localhost:3000/versenyzoTorles",
    {
        method:DELETE,
        body: JSON.stringify(adatok),
        headers:{"Content-type":"application/json; charset-UTF-8"}
    }
    )
    .then(x => x.json())
    .then(y => {

        if (y=="Hiba") {
            document.getElementById("eredmeny2").innerHTML=`
            <span style="color:red">Hiba</span>
            `
        }
        else
            document.getElementById("eredmeny2").innerHTML=`
                <span style="color:red">A törlés sikeres!</span>
            `

    });


}


//HATOS FELADAT

