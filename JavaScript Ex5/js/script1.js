function show1()
{
    var m = parseInt(document.getElementById("txt-m").value);
    var n = parseInt(document.getElementById("txt-n").value);

    while(m<=n)
    {
        console.log(m);
        m++;
    }
}

function show2()
{
    var m = parseInt(document.getElementById("txt-m").value);
    var n = parseInt(document.getElementById("txt-n").value);

    while(m<=n)
    {
        document.write(m);
        m++;
    }
}


function show3()
{
    var m = parseInt(document.getElementById("txt-m").value);
    var n = parseInt(document.getElementById("txt-n").value);

    var c = document.getElementById("container");
    c.innerHTML = "";

    while(m<=n)
    {
            //create p-tag using javascript
       var p = document.createElement("p");
       p.innerHTML = `<h2>${m}</h2>`;
       p.style = "border:1px solid;width:100px;text-align:center;margin:10px;display:inline-block;";

       //javascript is adding p tag sequentially in div tag
       c.append(p);

        m++;
    }
}