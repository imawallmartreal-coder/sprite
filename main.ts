namespace SpriteKind {
    export const Money = SpriteKind.create()
    export const Gun_bullet = SpriteKind.create()
    export const Soda = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Money, function (sprite, otherSprite) {
    sprites.destroy($$$, effects.fountain, 500)
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.createSoundEffect(WaveShape.Noise, 5000, 1, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
    Bullet = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 2 4 . . . . . . 
        . . . . . . . f f 5 . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        `, Sprite_gun, 100, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    Sprite_gun.sayText("KABOOM")
    info.changeLifeBy(-2)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(projectile)
    sprites.destroy(projectile2)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(fries)
    info.changeLifeBy(1)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Gun_bullet, function (sprite, otherSprite) {
    sprites.destroy(projectile)
    sprites.destroy(projectile2)
    info.changeLifeBy(3)
})
let fries: Sprite = null
let projectile2: Sprite = null
let projectile: Sprite = null
let Bullet: Sprite = null
let $$$: Sprite = null
let Sprite_gun: Sprite = null
Sprite_gun = sprites.create(assets.image`Sprite With A Gun`, SpriteKind.Player)
scene.setBackgroundImage(assets.image`walmart`)
controller.moveSprite(Sprite_gun)
Sprite_gun.setStayInScreen(true)
music.play(music.createSong(assets.song`music real`), music.PlaybackMode.InBackground)
info.setLife(4)
Sprite_gun.sayText("Press A to use a bomb (costs 2 lives)")
game.onUpdateInterval(randint(15000, 50000), function () {
    fries = sprites.createProjectileFromSide(assets.image`fries`, 50, 50)
    fries.setKind(SpriteKind.Food)
})
game.onUpdateInterval(randint(15000, 50000), function () {
    $$$ = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . 7 7 7 7 7 f 7 7 7 7 7 . . 
        . . . 7 7 7 7 f f f 7 7 7 7 . . 
        . . . 7 7 7 7 f f 7 7 7 7 7 . . 
        . . . 7 7 7 7 f f f 7 7 7 7 . . 
        . . . 7 7 7 7 7 f f 7 7 7 7 . . 
        . . . 7 7 7 7 f f f 7 7 7 7 . . 
        . . . 7 7 7 7 7 f 7 7 7 7 7 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Money)
    $$$ = sprites.createProjectileFromSide(assets.image`moneyy`, randint(-50, 50), randint(-50, 50))
})
game.onUpdateInterval(randint(1500, 2500), function () {
    projectile2 = sprites.createProjectileFromSide(assets.image`coke`, randint(-50, 50), randint(-50, 50))
})
game.onUpdateInterval(randint(1500, 2500), function () {
    projectile = sprites.createProjectileFromSide(assets.image`fanta`, 50, randint(-50, 50))
})
