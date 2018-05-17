

function createTable() {

    alert('Success! Your request is submitted.');
    var head1 = '<h3>Your recorded response</h3>'
    var theader = '<table border="1.5">\n';
    var tbody = '';
    
    var npt = document.querySelectorAll('input');
    for (var i = 0; i < npt.length; ++i) {
        if (i == 3) {
            
            var slct = document.querySelectorAll('select');
            for(var j=0; j<slct.length;++j){


            tbody += '<tr>';
            tbody += '<td>' + String(slct[j].name) + '</td>';
            tbody += '<td>' + String(slct[j].value) + '</td>';
            tbody += '</tr>\n';
        }
        }
        tbody += '<tr>';
        tbody += '<td>' + String(npt[i].name) + '</td>';
        tbody += '<td>' + String(npt[i].value) + '</td>';
        tbody += '</tr>\n';
    }
    

    var tfooter = '</table>';
    console.log(theader + tbody + tfooter);

    var new_head = '<h2 class="titl">NO DUES FORM</h2><br> '
    document.getElementById('left').innerHTML = new_head;
    document.getElementById('wrapper').innerHTML = head1 + theader + tbody + tfooter;
    var body = document.getElementsByTagName("body")[0];
    var mydiv = document.createElement("div");
    mydiv.classList.add('resubmit');
    var aTag = document.createElement('a');
    aTag.setAttribute('href', "index.html");
    aTag.innerHTML = "Resubmit the form";
    mydiv.appendChild(aTag);
    body.appendChild(mydiv);
    return false;
}




 