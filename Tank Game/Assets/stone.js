#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter2D(obj : Collider2D) {  
    var name = obj.gameObject.name;
	//Debug.Log("Something has entered this zone.");
    // If it collided with a bullet
    if (name == "bullet(Clone)") {
        // Destroy itself (the enemy)
        Destroy(gameObject);

        // And destroy the bullet
        Destroy(obj.gameObject);
    }

    // If it collided with the spaceship
    if (name == "bricks") {
        // Destroy itself (the enemy) to keep things simple
        Destroy(gameObject);
    }
}