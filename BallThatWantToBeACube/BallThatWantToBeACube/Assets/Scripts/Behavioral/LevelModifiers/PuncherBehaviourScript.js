var speed : float;

function OnCollisionEnter(col : Collision) {
	var otherObj = col.gameObject;
	if (otherObj.CompareTag("SpringBase")) {
		GetComponent(Rigidbody).velocity = transform.TransformDirection(Vector3.forward * speed);	
	}
}