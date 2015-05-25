
function OnTriggerEnter (other : Collider) {
	if (other.gameObject.CompareTag("EndPoint")){
		this.gameObject.SetActive(false);
	}
}