var targetTime : float;
var seconds : float;
var moved: boolean;
var rBody : Rigidbody;
var speed : float;
var distance : float;

//TODO: Remove rigidBodies
// Their makes computations harder and make possible to move above the BigPunchers

function Start () {
	rBody = GetComponent.<Rigidbody>();
	if (Random.value>=0.5){
		moved = true;
	} else {
		moved = false;
	}
	speed = Random.Range(5, 30);
	targetTime = Random.Range(1, 5);
	distance = Random.Range(1, 3);
	seconds = targetTime;
}

function Update () {
 	targetTime -= Time.deltaTime;
	 	if (targetTime > 0.0f){
	 		MoveOnXAxis(distance);
	 	} else {
	 		moved ^= true;
	 		rBody.isKinematic = true;
	 		rBody.isKinematic = false;
	 		targetTime = seconds;
	 	}		
 	}
 
 function MoveOnXAxis(xDistance: float) {
		if (moved){
 			rBody.AddForce(Vector3(xDistance, 0, 0));
 			//transform.position += pos;
 		} else {
 			rBody.AddForce(Vector3(-xDistance, 0, 0));
 			//transform.position -= pos;
 		}
 }
