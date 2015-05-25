#pragma strict

function OnTriggerEnter (other : Collider) {
	if (other.gameObject.CompareTag("PlayerBall")){
		this.GetComponent(BoxCollider).isTrigger = false;
		this.GetComponent(Rigidbody).isKinematic = false;
		var mainCamera = GameObject.Find("Main Camera");
		mainCamera.GetComponent(MainCameraController).player=this.gameObject;
		this.gameObject.GetComponent(MovementControllerScript).speed = 15;
		GameObject.Find("FinishLevel").gameObject.GetComponent(MeshRenderer).enabled = true;
	}
	if (other.gameObject.CompareTag("FinishLevel")){
		other.gameObject.SetActive(false);
		GameObject.Find("Wall").SetActive(false);
	}
}