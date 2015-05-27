import UnityEngine.UI;

var finishText : Text;

function Start(){
	finishText.text = "";
}

function OnTriggerEnter (other : Collider) {
		finishText.text = "You win!";
}