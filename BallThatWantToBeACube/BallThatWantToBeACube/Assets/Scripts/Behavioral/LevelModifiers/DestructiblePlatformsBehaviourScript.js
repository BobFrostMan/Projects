#pragma strict
var secondsBeforeDestruction : float;
public var destructibleObject : GameObject;
public var destructibleObject2 : GameObject;
public var destructibleObject3 : GameObject;
public var zeroRotated : boolean;

private var destructedObj : GameObject;

function Start(){
	var objectNumber = Random.value;
	if (objectNumber <= 0.5){
		destructedObj = destructibleObject;	
	} 
	if (objectNumber > 0.7) {
		destructedObj = destructibleObject3;
	}
	if (objectNumber > 0.5 && objectNumber <= 0.7){
		destructedObj = destructibleObject2;	
	}
}

function OnCollisionEnter (col : Collision) {
	if (destructibleObject && col.collider.gameObject.CompareTag("PlayerBall")){
		yield WaitForSeconds(secondsBeforeDestruction);
		var currentObj : GameObject;
		if (zeroRotated){
		  currentObj = Instantiate(destructedObj, transform.position, Quaternion.identity);
		} else {
		  currentObj = Instantiate(destructedObj, transform.position, transform.rotation);
		}
		//This code doesn't need if metrics are same in 3d editor and unity
		//var scale = transform.localScale;
		//currentObj.transform.localScale = scale;
		Destroy(this.gameObject);
		//Debug.Log("Object " + gameObject.name  + " destructed!");
	}
}