#pragma strict

public var destructibleObject : GameObject;

//function OnTriggerEnter (other : Collider) {
//	DestroyObject();
//}

function DestroyObject(){
	if (destructibleObject ){
		Instantiate(destructibleObject, transform.position, transform.rotation);
		var destructedObjectName = gameObject.name;
		Destroy(this.gameObject);
		//Debug.Log("Object " + destructedObjectName  + " destructed!");
	}
}

