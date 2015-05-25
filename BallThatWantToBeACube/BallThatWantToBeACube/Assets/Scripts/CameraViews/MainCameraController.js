public var offsetFromThePlayer : Vector3;
public var player: GameObject;    
//private var offsetFromThePlayer : Vector3 = Vectro3(0,10,-10);
function Start(){
	offsetFromThePlayer = transform.position - player.transform.position;
}

function LateUpdate(){
	transform.position = player.transform.position + offsetFromThePlayer;
   // transform.LookAt(target);
   // transform.Translate(Vector3.right * Time.deltaTime);
   if (Input.GetKey("escape")){
   		Application.LoadLevel(0);
   }
}

