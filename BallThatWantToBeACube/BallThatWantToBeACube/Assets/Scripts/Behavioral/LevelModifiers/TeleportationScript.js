
public var teleportationEndpoint : GameObject;

function OnTriggerEnter (other : Collider) {
	if(teleportationEndpoint){
		other.transform.position = teleportationEndpoint.transform.position;
	} else {
		Debug.LogError("Endpoint wasn't found!");
	}
}