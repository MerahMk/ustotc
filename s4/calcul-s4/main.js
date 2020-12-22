
function divideBy() 
{               
    m3 = document.getElementById("m3").value;
    ov = document.getElementById("ov").value;
    eln = document.getElementById("eln").value;
    ett = document.getElementById("ett").value;
    proba = document.getElementById("proba").value;
    info = document.getElementById("info").value;
    tpelnett = document.getElementById("tpelnett").value;
    tpov = document.getElementById("tpov").value;
    dge = document.getElementById("dge").value;
    dee = document.getElementById("dee").value;
    ang = document.getElementById("ang").value;
    
    document.getElementById("final");
    var addition = (+(m3*3) + +(ov*2) + +(eln*2) + +(ett*2) + +(proba*2) + +(info*1) + +(tpelnett*1) + +(tpov*1) + +(dge*1) + +(dee*1) + +(ang*1)) / 17;
    final.innerHTML = addition.toFixed(2);
}