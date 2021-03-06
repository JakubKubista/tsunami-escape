/**
 * declare THREEx namespace
 * @type {[type]}
 */
var THREEx	= THREEx	|| {};

/**
 * THREEx extension
 *
 * @constructor
 */
THREEx.Crates	= {};

THREEx.Crates.baseURL	= '../'

//////////////////////////////////////////////////////////////////////////////////
//										//
//////////////////////////////////////////////////////////////////////////////////

THREEx.Crates.createCrate0	= function(){
	var baseURL	= THREEx.Crates.baseURL
	var geometry	= new THREE.CubeGeometry( 1, 1, 1);
	var material	= new THREE.MeshPhongMaterial({
		map		: THREE.ImageUtils.loadTexture(baseURL+'images/crate0/crate0_diffuse.jpg'),

		// bumpMap		: THREE.ImageUtils.loadTexture(baseURL+'images/crate0/crate0_bump.png'),
		// bumpScale	: 0.001,

		normalMap	: THREE.ImageUtils.loadTexture(baseURL+'images/crate0/crate0_normal.png'),
		normalScale	: new THREE.Vector2(0.3,0.3),
	})
	var mesh	= new THREE.Mesh( geometry, material );
	return mesh
}


//////////////////////////////////////////////////////////////////////////////////
//										//
//////////////////////////////////////////////////////////////////////////////////

THREEx.Crates.createCrate1	= function(){
	var baseURL	= THREEx.Crates.baseURL
	var geometry	= new THREE.CubeGeometry( 1, 1, 1);
	var material	= new THREE.MeshPhongMaterial({
		map		: THREE.ImageUtils.loadTexture(baseURL+'images/crate1/crate1_diffuse.jpg'),

		// bumpMap		: THREE.ImageUtils.loadTexture(baseURL+'images/crate1/crate1_bump.png'),
		// bumpScale	: 0.001,

		normalMap	: THREE.ImageUtils.loadTexture(baseURL+'images/crate1/crate1_normal.png'),
		normalScale	: new THREE.Vector2(0.3,0.3),
	})
	var mesh	= new THREE.Mesh( geometry, material );
	return mesh
}

//////////////////////////////////////////////////////////////////////////////////
//										//
//////////////////////////////////////////////////////////////////////////////////

THREEx.Crates.createCrate2	= function(){
	var baseURL	= THREEx.Crates.baseURL
	var geometry	= new THREE.CubeGeometry( 1, 1, 1);
	var material	= new THREE.MeshPhongMaterial({
		map		: THREE.ImageUtils.loadTexture(baseURL+'images/crate2/crate2_diffuse.jpg'),

		// bumpMap		: THREE.ImageUtils.loadTexture(baseURL+'images/crate2/crate2_bump.png'),
		// bumpScale	: 0.001,

		normalMap	: THREE.ImageUtils.loadTexture(baseURL+'images/crate2/crate2_normal.png'),
		normalScale	: new THREE.Vector2(0.3,0.3),
	})
	var mesh	= new THREE.Mesh( geometry, material );
	return mesh
}


//////////////////////////////////////////////////////////////////////////////////
//										//
//////////////////////////////////////////////////////////////////////////////////

THREEx.Crates.createCrateWood	= function(){
	var baseURL	= THREEx.Crates.baseURL
	var geometry	= new THREE.CubeGeometry( 1, 1, 1);
	var material	= new THREE.MeshPhongMaterial({
		map		: THREE.ImageUtils.loadTexture(baseURL+'images/llamapixel/wood/crate_texture.jpg'),

		// bumpMap		: THREE.ImageUtils.loadTexture(baseURL+'images/llamapixel/wood/crate_bump.jpg'),
		// bumpScale	: 0.01,

		normalMap	: THREE.ImageUtils.loadTexture(baseURL+'images/llamapixel/wood/crate_normal_opengl_style.jpg'),
		normalScale	: new THREE.Vector2(0.3,0.3),

		specularMap	: THREE.ImageUtils.loadTexture(baseURL+'images/llamapixel/wood/crate_reflective_occlusion.jpg'),
		specular	: new THREE.Color('#404040'),
	})
	var mesh	= new THREE.Mesh( geometry, material );
	return mesh
}

THREEx.Crates.createCrateMetal	= function(){
	var baseURL	= THREEx.Crates.baseURL
	var geometry	= new THREE.CubeGeometry( 3, 3, 3);
	var material	= new THREE.MeshPhongMaterial({
		map		: THREE.ImageUtils.loadTexture(baseURL+'images/llamapixel/metal/crate_metal_diffuse.jpg'),

		// bumpMap	: THREE.ImageUtils.loadTexture(baseURL+'images/llamapixel/metal/crate_metal_bump.jpg'),
		// bumpScale	: 0.1,

		normalMap	: THREE.ImageUtils.loadTexture(baseURL+'images/llamapixel/metal/crate_metal_normal.jpg'),
		normalScale	: new THREE.Vector2(0.3,0.3),

		specularMap	: THREE.ImageUtils.loadTexture(baseURL+'images/llamapixel/metal/crate_metal_reflective_occlusion.jpg'),
		specular	: new THREE.Color('white'),

	})
	var mesh	= new THREE.Mesh( geometry, material );
	return mesh
}

THREEx.Crates.createCrateLaser	= function(){
	var baseURL	= THREEx.Crates.baseURL
	var geometry	= new THREE.CylinderGeometry( 0.1, 0.1, 100);
	var Texture = THREE.ImageUtils.loadTexture(baseURL+'images/laser.jpg')
		Texture.wrapS = Texture.wrapT = THREE.RepeatWrapping
	var material	= new THREE.MeshPhongMaterial({
		map		: Texture,
		normalScale	: new THREE.Vector2(0.5,2),
		side : THREE.DoubleSide,
	})
	var mesh	= new THREE.Mesh( geometry, material );
	return mesh
}

THREEx.Crates.createCrateWall	= function(){
	var baseURL	= THREEx.Crates.baseURL
	var geometry	= new THREE.CubeGeometry( 7, 0.75, 0.75);
	var material	= new THREE.MeshPhongMaterial({
		map		: THREE.ImageUtils.loadTexture(baseURL+'images/wall.jpg'),
		normalScale	: new THREE.Vector2(0.3,0.3),
	})
	var mesh	= new THREE.Mesh( geometry, material );
	return mesh
}

THREEx.Crates.createCrateHeart	= function(){
	var baseURL	= THREEx.Crates.baseURL
	var geometry	= new THREE.CubeGeometry( 1, 1, 1);
	var material	= new THREE.MeshPhongMaterial({
		map		: THREE.ImageUtils.loadTexture(baseURL+'images/heart.jpg'),
		normalScale	: new THREE.Vector2(0.3,0.3),
	})
	var mesh	= new THREE.Mesh( geometry, material );
	return mesh
}

THREEx.Crates.createCrateFlash	= function(){
	var baseURL	= THREEx.Crates.baseURL
	var geometry	= new THREE.CubeGeometry( 1, 1, 1);
	var material	= new THREE.MeshPhongMaterial({
		map		: THREE.ImageUtils.loadTexture(baseURL+'images/flash.jpg'),
		normalScale	: new THREE.Vector2(0.3,0.3),
	})
	var mesh	= new THREE.Mesh( geometry, material );
	return mesh
}
