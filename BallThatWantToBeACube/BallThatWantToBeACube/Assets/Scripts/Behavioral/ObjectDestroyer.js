var yDestroyValue : float;

function Update () {
	if (transform.position.y < yDestroyValue){
		Destroy(this.gameObject);
		Debug.Log(this.gameObject.name + " destroyed!");
	}
}