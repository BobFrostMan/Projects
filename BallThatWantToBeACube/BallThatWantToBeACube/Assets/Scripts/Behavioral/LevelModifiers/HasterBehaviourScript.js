#pragma strict
var speed : float;

function OnTriggerEnter (other : Collider) {
	var otherObj = other.gameObject;
	//var othersSqrMagnitude = other.gameObject.GetComponent(Rigidbody).velocity.sqrMagnitude;
	//var othersMagnitude = other.gameObject.GetComponent(Rigidbody).velocity.magnitude;
	//magnitude - The length of the vector is square root of (x*x+y*y+z*z).
	//That's why sqrMagnitude much faster! No expensive sqr operation!
	//y*y should be about zero in this case
	//so sqrMagnitude is about x*x+z*z
	//magnitude = sqr(x*x+y*y+z*z)
	//magnitude = sqr(x*x1+0*0+z*z1)
	//sqrt(magnitude) = 2
	//x1 = 10
	//z1 = 10
	//2 = 10x + 10z;
	//Aghhh... I was a bad pupil, it's a system((((
	
	//othersMagnitude = 
	otherObj.GetComponent(Rigidbody).velocity = transform.TransformDirection(Vector3.forward * speed);
	
}