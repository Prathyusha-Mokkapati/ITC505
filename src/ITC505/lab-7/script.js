function submitForm(event) {
    event.preventDefault();
    const noun = document.getElementById('noun').value;
    const verb = document.getElementById('verb').value;
    const adjective = document.getElementById('adjective').value;
    const place = document.getElementById('place').value;
    const pluralNoun = document.getElementById('pluralNoun').value;

    if (!noun || !verb || !adjective || !place || !pluralNoun) {
        document.getElementById('result').innerHTML = `
            <h1>Submission Failed</h1>
            <p>Please fill out ALL fields</p>
            <a href="#">Go Back to Form</a>
        `;
        return;
    }

    const madLib = `Once upon a time in ${place}, there was a ${adjective} ${noun} who loved to ${verb} with ${pluralNoun}.`;
    document.getElementById('result').innerHTML = `
        <h1>Submission Successful</h1>
        <p>${madLib}</p>
        <a href="#">Go Back to Form</a>
    `;
}
