function start() {
    navigator.mediaDevices.getUserMedia({ //asks the permission to access the mic//
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/lj_hApBc6/model.json", modelReady) //compares the model with our audio//
}

function modelReady() {
    console.log("Model Loaded!");
    classifier.classify(gotResults); // stores the results //
}

function gotResults(error, results) { // when the audio is right, in the console, it shows the result array//
    if (error) {
        console.log("Error")

    } else {
        console.log(results);
        randomNumber_r =Math.floor(Math.random() * 255) + 1;
        randomNumber_g =Math.floor(Math.random() * 255) + 1;
        randomNumber_b =Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").style.color = "rgb(" + randomNumber_r + "," + randomNumber_g + "," + randomNumber_b + ")";
        document.getElementById("accuracy_label").style.color = "rgb(" + randomNumber_r + "," + randomNumber_g + "," + randomNumber_b + ")";

        document.getElementById("result_label").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("accuracy_label").innerHTML = "Accuracy - " + (results[0].confidence * 100).toFixed(2);

        img1 = document.getElementById("alien1");
        img2 = document.getElementById("alien2");
        img3 = document.getElementById("alien3");
        img4 = document.getElementById("alien4");

        if (results[0].label == "Clap") {
            img1.src = "aliens-01.gif";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";

        }
        else if(results[0].label == "Bell") {
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.gif";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";

        }
        else if(results[0].label == "Snap") {
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.gif";
            img4.src = "aliens-04.png";
        } else {
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.gif";
        }

    } 
}