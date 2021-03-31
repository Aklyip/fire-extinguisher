controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 8 8 8 8 . . . . . . . . 
        . . . 8 8 8 8 8 8 . . . . . . . 
        . . . 8 8 8 8 8 8 . . . . . . . 
        . . . . 8 8 8 8 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, waterBucket, 50, 0)
})
let projectile: Sprite = null
let waterBucket: Sprite = null
waterBucket = sprites.create(img`
    . . 8 . . . . . . . . . . . . . 
    . . . . . . f f f f . . 8 . . . 
    . . . . . f . . . . f . . . . . 
    . . . . f 8 8 8 8 8 8 f . 8 . . 
    . . 8 . f 8 8 8 8 8 8 f . . . . 
    . . . . f 8 8 8 8 8 8 f . . . . 
    . . . . f 8 8 8 8 8 8 f . . . . 
    . . . . f 8 8 8 8 8 8 f . . . . 
    . . . . f 8 8 8 8 8 8 f . . . . 
    . . . . f 8 8 8 8 8 8 f . . . . 
    . . . . f 8 8 8 8 8 8 f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.setBackgroundColor(13)
controller.moveSprite(waterBucket)
waterBucket.setStayInScreen(true)
waterBucket.setPosition(0, 60)
