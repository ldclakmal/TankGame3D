#pragma strict

public var speed = 0.1;
public var bullet : GameObject;


function Start () {

}

function rotateLeft(){
    transform.Rotate (Vector3.forward * -90);
}
	
function Update () {
	      transform.Translate(Vector3.right * speed* Input.GetAxis("Horizontal"));
          transform.Translate(Vector3.up *speed* Input.GetAxis("Vertical"));
	
	if (Input.GetKeyDown("space")) {
        // Create a new bullet at “transform.position”
        // Which is the current position of the ship
        Instantiate(bullet, transform.position, Quaternion.identity);
        
    }

}



