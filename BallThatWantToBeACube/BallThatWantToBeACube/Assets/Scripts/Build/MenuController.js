
public function LoadOnClick(level: int){
	Application.LoadLevel(level);
	if (level == 0){
		Cursor.visible = true;
	} else { 
		Cursor.visible = false;
	}
}

public function QuitOnClick(){
	Application.Quit();
}
