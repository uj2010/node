function getAge(uriparams)
{
    let dob=new Date(uriparams["month"]+"/"+uriparams["date"]+"/"+uriparams["year"])
    let age=Math.abs(new Date(Date.now()-dob.getTime()).getUTCFullYear()-1970)
    let ageresp="<p>Hello "+uriparams["name"]+"</p><p>You are currently "+age+" years old</p>"
    return ageresp
}
function getAreaVol(uriparams)
{
    console.log(uriparams)
    //var metric  
    console.log(uriparams["object"]);
    switch(uriparams["object"])
    {
        case 'sphere': 
                     return VolArea(uriparams)

        case "circle":
                     return VolArea(uriparams)
        default:
            console.log("object is wrong")
    }
}
module.exports={
   getAge,
   getAreaVol
}
function VolArea(uriparams) {
    let metric = () => {
        switch (uriparams["metric"]) {
            case "volume":
                let vol = (4 / 3) * Math.PI * Math.pow(uriparams["radius"], 3)
                return vol

            case "surfaceArea":
                let sa = (4) * Math.PI * Math.pow(uriparams["radius"], 2)
                return sa
            case "area":
                    let ar = Math.PI * Math.pow(uriparams["radius"], 2)
                    return ar
            default:
                console.log("Not a valid metric")
        }
    }
    return metric()
}

