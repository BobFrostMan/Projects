#pragma strict
public var targetObject : GameObject;
public var targetObjectPosition : Vector3; 
public var message : Text;

function OnTriggerEnter (other : Collider) {
	if (other.gameObject.CompareTag("PlayerBall")){
		this.GetComponent(BoxCollider).isTrigger = false;
		this.GetComponent(Rigidbody).isKinematic = false;
		var mainCamera = GameObject.Find("Main Camera");
		mainCamera.GetComponent(MainCameraController).player=this.gameObject;
		this.gameObject.GetComponent(MovementControllerScript).speed = 15;
		//GameObject.Find("FinishLevel").gameObject.GetComponent(MeshRenderer).enabled = true;
		if (targetObject){
			if (!targetObjectPosition.Equals(null)){
				var target : GameObject = Instantiate(targetObject, targetObjectPosition, Quaternion.identity);
				target.gameObject.GetComponent(EndLevelScript).finishText = message;
			} else {
				Debug.LogError("Target object position wasn't set");
			}
		} else {
			Debug.LogError("Target object wasn't set");
		}
	}
	if (other.gameObject.CompareTag("FinishLevel")){
		other.gameObject.SetActive(false);
		var wall : GameObject = GameObject.Find("Wall");
		if (wall){
			wall.SetActive(false);
		}
	}
}