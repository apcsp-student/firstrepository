let mySprite = sprites.create(img`
    . . . . . . . . . . . . . 2 2 . . . . . . . . . 
    . . . . f f f . . . . . 2 3 3 2 . f f f . . . . 
    . . . f 1 1 1 f f f f 2 3 3 3 3 2 1 1 1 f . . . 
    . . . f 1 1 1 1 1 1 1 2 3 3 3 2 2 2 1 1 f . . . 
    . . . f 1 1 1 1 1 1 1 2 3 3 2 3 3 3 2 2 2 . . . 
    . . . . f 1 1 1 1 1 1 1 2 2 2 3 3 3 2 3 3 2 . . 
    . . . f 1 1 1 1 1 1 1 1 1 1 1 2 2 2 3 3 3 2 . . 
    . . . f 1 1 1 1 1 1 1 1 1 1 1 1 1 2 3 3 2 . . . 
    . . f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 . . . . 
    f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f 
    . . f 1 1 1 1 f 1 1 1 1 1 1 1 1 f 1 1 1 1 f . . 
    . f f f 1 1 1 f 1 1 1 1 1 1 1 1 f 1 1 1 f f f . 
    . . . f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f . . . 
    . . f f 1 1 1 1 1 1 1 f f 1 1 1 1 1 1 1 f f . . 
    . . . . f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f . . . . 
    . . . . . f f 1 1 1 1 1 1 1 1 1 1 f f . . . . . 
    . . . . . . . f f f f f f f f f f . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    `, 0)
mySprite.say("Hello World")
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
    . . 5 5 5 f 5 5 f 5 5 5 5 . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
    . . 5 5 f 5 5 5 5 f 5 5 5 . . . 
    . . 5 5 5 f f f f 5 5 5 5 . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, 0)
mySprite2.setPosition(10, 10)
mySprite2.say("Hey you")
