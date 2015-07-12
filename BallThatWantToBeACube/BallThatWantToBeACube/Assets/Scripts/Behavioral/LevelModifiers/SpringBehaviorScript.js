var other : GameObject;
var prevSqrMagnitude : float;
var stifftness : float;
var offset : float;
var startPosition : float;
var startPunchSqrMagnitude : float;
var speed : float;
var isPunched : boolean = false;
var deformationOffset : float;

    // Frestitution = -stiftness * offset
function FixedUpdate(){
	 prevSqrMagnitude = other.GetComponent(Rigidbody).velocity.sqrMagnitude;
	
//	 if (!isPunched){
//	 	transform.position.z = transform.position.z + deformationOffset;
//	 }
}

function OnCollisionEnter(){
	//Z axis only		
	deformationOffset = -1 * prevSqrMagnitude / stifftness;
	while(gameObject.transform.position.z < deformationOffset){
		transform.position.z = transform.position.z + 1;
	}
	if (prevSqrMagnitude < startPunchSqrMagnitude){
		offset = other.GetComponent(Rigidbody).transform.position.z - startPosition;
		GetComponent(Rigidbody).velocity = transform.TransformDirection(Vector3.forward * speed);
		isPunched = true;
		//Debug.Log("isPunched = " + isPunched);
	}
}

function Update(){
	if (isPunched){ 
		while(gameObject.transform.position.z < startPosition.z){
			gameObject.transform.position.z += 1;
		}
		while(gameObject.transform.position.z < startPosition.z){
			gameObject.transform.position.z -= 1;
		}
		isPunched = false;
	}
}

function Start(){
	startPosition = transform.position.z;
}