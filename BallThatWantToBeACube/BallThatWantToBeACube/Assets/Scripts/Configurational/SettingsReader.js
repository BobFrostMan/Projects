import System.IO;

private static var _fileName : String= "settings.cfg";
private static var propertyFilePath : String = _fileName;

private static var _equality : String = "=";
private static var _newLineSymbol : String = "\n";

//Property keys
private static var _playerSpeed : String= "player.speed";
private static var _playerStartPositionX : String = "player.startPosition.X";
private static var _playerStartPositionZ : String = "player.startPosition.Z";

//Defaults
private static var _defaultPlayerSpeed : String = "5";
private static var _defaultPlayerPosX : String = "0";
private static var _defaultPlayerPosZ : String = "0";


//Constraints section:
//TODO: In future we can assign them to playArea size constrains to make this properrty providence more flexible
private static var _minPlayerSpeed : float = 1;
private static var _maxPlayerSpeed : float = 50;

private static var _minPlayerPosX : float = -9;
private static var _maxPlayerPosX : float = 9;

private static var _minPlayerPosZ : float = -9;
private static var _maxPlayerPosZ : float = 9;

function Start () {	
	var playerBall = GameObject.Find("Ball");
	var playerSpeed : float = parseFloat(GetPropertyFromFile(_playerSpeed, _defaultPlayerSpeed, propertyFilePath));
	var scriptComponent = playerBall.GetComponent(MovementControllerScript);
	scriptComponent.speed = ConstraintInputValue(playerSpeed, _minPlayerSpeed, _maxPlayerSpeed);
		
	var playerPosX = parseFloat(GetPropertyFromFile(_playerStartPositionX, _defaultPlayerPosX, propertyFilePath));
	playerBall.transform.position.x = ConstraintInputValue(playerPosX, _minPlayerPosX, _maxPlayerPosX);
	
	var playerPosZ = parseFloat(GetPropertyFromFile(_playerStartPositionZ, _defaultPlayerPosZ, propertyFilePath));
	playerBall.transform.position.z = ConstraintInputValue(playerPosZ, _minPlayerPosZ, _maxPlayerPosZ);
	
 }
 
 function GetPropertyFromFile(propertyKey : String, defaultValue : String, filePath : String){
 	try {
	 	var sr = new StreamReader(filePath);
		var fileContents = sr.ReadToEnd();
		sr.Close();
		var lines = fileContents.Split(_newLineSymbol[0]);
		for (line in lines) {
		 	if (line.Contains(propertyKey)){
		 		var propertyValue = line.Replace(propertyKey + _equality, "");
		 		//print(propertyValue);
		 		if ((!line.Contains("#")) && (!line.Contains("//"))){ 
		 			return propertyValue;
		 		}
		 	}
		}
		return defaultValue;
	} catch (err){
		print(err);
		return defaultValue;
	}
 }
 
 function ConstraintInputValue(input : float, min : float, max : float){
 	if (input > max){
 		return max;
 	}
 	if (input < min){
 		return min;
 	}
 		return input;
 }