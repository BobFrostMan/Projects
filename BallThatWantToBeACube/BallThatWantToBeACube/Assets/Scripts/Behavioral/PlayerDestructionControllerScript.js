
var destructionMagnitudeLimit = 7;
var prevSqrMagnitude : float;
 
function FixedUpdate(){
	prevSqrMagnitude = gameObject.GetComponent(Rigidbody).velocity.sqrMagnitude;
}
 
function OnCollisionEnter(collision : Collision) {
	if (collision.gameObject.CompareTag("Destructible")) {
		//Debug.Log("Found destructible object! Velocity.sqrMagnitude: " + gameObject.GetComponent(Rigidbody).velocity.sqrMagnitude);
		
		if (prevSqrMagnitude > destructionMagnitudeLimit){
			//Debug.Log("Required velocity.sqrMagnitude: " + destructionMagnitudeLimit);
			collision.gameObject.GetComponent(DestructibleWallBehaviorScript).DestroyObject();
		}
	}
}