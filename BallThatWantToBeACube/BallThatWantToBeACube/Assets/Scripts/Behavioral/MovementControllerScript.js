public var speed : float;
private var rBody : Rigidbody;
private var max2DVectorLength : float = 1.5;
function Start () {
	rBody = GetComponent.<Rigidbody>();
}

function FixedUpdate (){
	MoveWithForce(rBody, speed);
	//Debug.Log("Current velocity.sqrMagnitude: " + gameObject.GetComponent(Rigidbody).velocity.sqrMagnitude);
	if (Input.GetKey("r")){
		resetPosition();
	}
}

function MoveWithForce(rigitBody:Rigidbody, speed : float){
	var horizontalMovement : float = Input.GetAxis ("Horizontal");
	var verticalMovement : float = Input.GetAxis ("Vertical");
	
	var movementVector : Vector3;
	if (Mathf.Abs(horizontalMovement) + Mathf.Abs(verticalMovement) > 1){
		movementVector = Vector3(horizontalMovement/max2DVectorLength, 0.0f, verticalMovement/max2DVectorLength);
	} else {
		movementVector = Vector3(horizontalMovement, 0.0f, verticalMovement);
	}
	
	rBody.AddForce(movementVector * speed);
	if (this.gameObject.transform.position.y <= -30){
		resetPosition();
	}
}

function resetPosition(){
	var player : GameObject = GameObject.Find("Main Camera").GetComponent(MainCameraController).player;
	if (player.CompareTag("EndPoint")){ 
		player.transform.position.x = 9;
		player.transform.position.z = 8;
		player.transform.position.y = 0.7;
	}
	if (player.CompareTag("PlayerBall")){ 
		player.transform.position.x = -9;
		player.transform.position.z = -9;
		player.transform.position.y = 0.5;
	}
	player.GetComponent(Rigidbody).isKinematic = true;
	player.GetComponent(Rigidbody).isKinematic = false;
}