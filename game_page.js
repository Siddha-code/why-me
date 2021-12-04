player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player_1_name").innerHTML = player1_name + " :";
document.getElementById("player_2_name").innerHTML = player2_name + " :";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send() {
    number1 = document.getElementById("number_1").value;
    number2 = document.getElementById("number_2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h5>" + number1 + " X " + number2 + "</h5>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
}
question_turn = "player1";
Answer_turn = "player2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("Answer In Lower Case - "+answer);
    if(answer == actual_answer){
        if(Answer_turn == "player1"){
            player1_score = player1_score + 1;
            update_score();
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else{
            player2_score = player2_score + 1;
            update_score();
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    else{
        if(Answer_turn == "player1"){
            player1_score = player1_score - 1;
            player2_score = player2_score + 1;
            update_score();
            document.getElementById("player1_score").innerHTML = player1_score;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
        else{
            player1_score = player1_score + 1;
            player2_score = player2_score - 1;
            update_score();
            document.getElementById("player1_score").innerHTML = player1_score;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn - "+ player2_name;
    }
    else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn - "+ player1_name;
    }

    if(Answer_turn == "player1"){
        Answer_turn = "player2";
        document.getElementById("player_answer").innerHTML =  "Answer Turn - "+ player2_name;
    }
    else{
        Answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - "+ player1_name;
    }
    document.getElementById("output").innerHTML = "";
}
function update_score() {
    localStorage.setItem("player1_score",player1_score);
    localStorage.setItem("player2_score",player2_score);
}