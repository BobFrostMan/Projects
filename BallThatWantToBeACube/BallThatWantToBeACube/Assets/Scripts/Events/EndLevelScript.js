import UnityEngine.UI;

var finishText : Text;

function Start(){
	finishText.text = "";
}

function OnTriggerEnter (other : Collider) {
	if (other.CompareTag("EndPoint")){ 
		finishText.text = "You win!";
	}
}