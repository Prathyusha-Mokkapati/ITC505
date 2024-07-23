const fs = require('fs');

fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) throw err;

    let jsonData = JSON.parse(data);
    console.log('Original JSON:', jsonData);

    jsonData.year = 2012; // Modify the JSON data

    let updatedJsonData = JSON.stringify(jsonData, null, 2);
    console.log('Updated JSON:', updatedJsonData);
});
