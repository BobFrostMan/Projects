﻿var targetTime : float;
var seconds : float;
var moved: boolean;
var rBody : Rigidbody;
var speed : float;
var distance : float;
public var axis : Axis;
//TODO: Remove rigidBodies

function Start () {
	rBody = GetComponent.<Rigidbody>();
	if (Random.value>=0.5){
		moved = true;
	} else {
		moved = false;
	}
	speed = Random.Range(5, 50);
	targetTime = Random.Range(1, 5);
	distance = Random.Range(1, 6);
	seconds = targetTime;
}

function FixedUpdate () {
 	targetTime -= Time.deltaTime;
	 	if (targetTime > 0.0f){
	 		MoveOnZAxisOnRandomDistance();
	 	} else {
	 		moved ^= true;
	 		rBody.isKinematic = true;
	 		rBody.isKinematic = false;
	 		targetTime = seconds;
	 	}		
 	}
 
 function MoveOnZAxisOnRandomDistance() {
 		var zDistance = Random.Range(1, 6);
		if (moved){
 			rBody.AddForce(MovementUtils.moveByDirection(zDistance, axis));
 			//transform.position += pos;
 		} else {
 			rBody.AddForce(MovementUtils.moveByDirection(-zDistance, axis));
 			//transform.position -= pos;
 		}
 }