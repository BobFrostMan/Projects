
public static function moveByDirection(force : float, direction : Axis){
	var resultVector : Vector3 = new Vector3(0, 0, 0);
	switch(direction){
		case Axis.X:
			resultVector.x = force;
			break;
		case Axis.Y:
			resultVector.y = force;
			break;
		case Axis.Z:
			resultVector.z = force;
			break;
	}
	return resultVector;
}