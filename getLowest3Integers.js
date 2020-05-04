    function getData(){
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        // site doesn’t configure Access-Control-*
        const url = "https://www.iwillfearnoevil.com/screen/string.txt"; 
        var data = fetch(proxyurl + url)
        .then(response => response.text())
        .then(contents => {
          var arr = contents.split('\n');
          console.log(arr);
          var rawData = arr.filter(function(element) {
             return !isNaN(element) && element !== "";
          });
          var data = rawData.map(Number)
          //remove duplicates and sort
          console.log(data);
          data.splice(0, data.length, ...(new Set(data)));
          data.sort();
          console.log(data);
          for(var i = 0; i < 3; i++){
            document.getElementById('c' + (i + 1)).innerHTML = data[i];
          }
        })
        .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
    }

    function populateTables(){
        var tableIntegers = document.getElementById("integerTable");
        // Create an empty <tr> element and add it to the 1st position of the table:
        var row = tableIntegers.insertRow(tableIntegers.rows.length);
        // Insert new cells (<td> elements) at  the "new" <tr> element:
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.id = "c1";
        cell2.id = "c2";
        cell3.id = "c3";
        getData();

    }