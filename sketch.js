var cube;
var cube2;
var ground;
var wall;
var players = 1;
var direction = 2;
var direction2 = 2;
var direction3 = 1;
var direction4 = 1;
var jump = -5;
var jump2 = -5
var speed = 5;
var speed2 = 5;
var jumpPower;
var speedPower;
var title;
var obby1;
var obby2;
var button1;
var lava1;
var lava2;
var lavaMonster;
var timer1

var level = 0;
var objective = 0;

function preload() {
    greenWalkLeft = loadImage("Green_WalkingLeft.gif");
    greenWalkRight = loadImage("Green_WalkingRight.gif");
    greenFlyLeft = loadImage("Green_FlyingLeft.gif");
    greenFlyRight = loadImage("Green_FlyingRight.gif");
    yellowWalkLeft = loadImage("Yellow_WalkingLeft.gif");
    yellowWalkRight = loadImage("Yellow_WalkingRight.gif");
    yellowFlyLeft = loadImage("Yellow_FlyingLeft.gif");
    yellowFlyRight = loadImage("Yellow_FlyingRight.gif");
    jumpBoost = loadImage("JumpBoost.gif");
    speedBoost = loadImage("SpeedBoost.gif");
    titleImg = loadImage("Title.png");
    enemyLeft = loadImage("Enemie_Left.gif");
    enemyRight = loadImage("Enemie_Right.gif");
    starImg = loadImage("Star.gif");
    lavaMonsterImg = loadImage("LavaMonster.gif")
    lavaMonster2Img = loadImage("LavaMonster2.gif")
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    title = createSprite(windowWidth/2, 50);
    title.addImage(titleImg);
    title.scale = 3;

    cube = createSprite(windowWidth/2, windowHeight - 200); 
    cube.scale = 2.5;
    cube.addImage(greenWalkRight);
    cube.setCollider("rectangle", 0, 0);

    cube2 = createSprite(windowWidth, windowHeight - 200, 15, 15); 
    cube2.scale = 2.5;
    cube2.addImage(yellowWalkRight);
    cube2.visible = false;

    ground = createSprite(windowWidth/2, windowHeight - 50, windowWidth, 200);
    ground.shapeColor = "lightgrey";

    wall = createSprite(windowWidth/2 - random(400, 600), windowHeight - random(200, 300), 50, 50);
    wall.shapeColor = "lightgrey";

    wall2 = createSprite(windowWidth/2 + random(400, 600), windowHeight - random(200, 300), 50, 50);
    wall2.shapeColor = "lightgrey";

    wall3 = createSprite(windowWidth/2 - random(350, 450), windowHeight - random(450, 550), 50, 50);
    wall3.shapeColor = "lightgrey";

    wall4 = createSprite(windowWidth/2 + random(350, 450), windowHeight - random(450, 550), 50, 50);
    wall4.shapeColor = "lightgrey";

    wall5 = createSprite(windowWidth/2 - random(0, 200), windowHeight - random(300, 400), 50, 50);
    wall5.shapeColor = "lightgrey";

    wall6 = createSprite(windowWidth/2 + random(0, 200), windowHeight - random(300, 400), 50, 50);
    wall6.shapeColor = "lightgrey";

    speedPower = createSprite(wall3.x, wall3.y - 50, 10, 10);
    speedPower.addImage(speedBoost);
    speedPower.scale = 2.5;

    jumpPower = createSprite(wall4.x, wall4.y - 50, 10, 10);
    jumpPower.addImage(jumpBoost);
    jumpPower.scale = 2.5;

    obby1 = createSprite(windowWidth/2, windowHeight/2, 25, 25);
    obby1.addImage(enemyRight);
    obby1.scale = 3;
    obby1.visible = false;

    obby2 = createSprite(windowWidth/2, windowHeight/2 - 150, 25, 25);
    obby2.addImage(enemyLeft);
    obby2.scale = 3;
    obby2.visible = false;

    button = createSprite(windowWidth - 100, 50, 15, 15);
    button.addImage(starImg);
    button.scale = 3;
    button.visible = false;

    lava1 = createSprite(-1000, windowHeight/2, 200, windowHeight);
    lava1.shapeColor = "red";

    lava2 = createSprite(-1000, windowHeight/2, 200, windowHeight);
    lava2.shapeColor = "red";

    lavaMonster = createSprite(-1000, windowHeight/2);
    lavaMonster.addImage(lavaMonsterImg)
}

function draw() {
    background("black");
    cube.velocityY += 0.25;
    cube2.velocityY += 0.25;
    colliding();
    borders();
    movement();
    drawSprites();  
    console.log(timer1);
    
    if(level === 0 && objective <= 1) {
        titleLevel1();
    }

    if(level === 0 && objective >= 2 && objective <= 4) {
        titleLevel2();
    }

    if(level === 1 && objective >= 5 && objective <= 10) {
        level1();
    }


}

function colliding() {
    cube.collide(ground);
    cube.collide(wall);
    cube.collide(wall2);
    cube.collide(wall3);
    cube.collide(wall4);
    cube.collide(wall5);
    cube.collide(wall6);
    cube2.collide(ground);
    cube2.collide(wall);
    cube2.collide(wall2);
    cube2.collide(wall3);
    cube2.collide(wall4);
    cube2.collide(wall5);
    cube2.collide(wall6);
}

function borders() {
    if(cube.x < 0) {
        cube.x = 0;
    }

    if(cube.x > windowWidth) {
        cube.x = windowWidth;
    }

    if(cube.y < 0) {
        cube.y = 0;
        cube.velocityY += 2;
    }

    if(cube.y > windowHeight) {
        cube.x = windowWidth / 2;
        cube.y = windowHeight - 200;
    }

    if(cube2.x < 0) {
        cube2.x = 0;
    }

    if(cube2.x > windowWidth) {
        cube2.x = windowWidth;
    }

    if(cube2.y < 0) {
        cube2.y = 0;
        cube2.velocityY += 2;
    }

    if(cube2.y > windowHeight) {
        cube2.x = windowWidth / 2;
        cube2.y = windowHeight - 200;
    }
}

function movement() {
    if(keyDown("left")) {
        cube.x -= speed;
        direction = 1;
        cube.addImage(greenWalkLeft)
        cube.setCollider("rectangle", -2.5, 0);
    }

    if(keyWentUp("left")) {
        cube.setCollider("rectangle", 0, 0);
    }

    if(keyDown("a")) {
        cube2.x -= speed2;
        direction2 = 1;
        cube2.addImage(yellowWalkLeft)
    }

    if(keyDown("right")) {
        cube.x += speed;
        direction = 2;
        cube.addImage(greenWalkRight)
        cube.setCollider("rectangle", 2.5, 0);
    }

    if(keyWentUp("right")) {
        cube.setCollider("rectangle", 0, 0);
    }

    if(keyDown("d")) {
        cube2.x += speed2;
        direction2 = 2;
        cube2.addImage(yellowWalkRight)
    }

    if(keyWentUp("q") && players === 1) {
        cube2.x = windowWidth/2
        cube2.visible = true;
        players = players + 1
    }

    if(keyDown("space") || keyDown("up")) {
        cube.velocityY = jump;
        if(direction === 1) {
            cube.addImage(greenFlyLeft)
        }
        if(direction === 2) {
            cube.addImage(greenFlyRight);
        }
    }

    if(keyWentUp("space") || keyWentUp("up")) {
        if(direction === 1) {
            cube.addImage(greenWalkLeft)
        }
        if(direction === 2) {
            cube.addImage(greenWalkRight);
        }
    }

    if(keyDown("down")) {
        cube.velocityY = 20;
    }

    if(keyDown("w")) {
        cube2.velocityY = jump2;
        if(direction2 === 1) {
            cube2.addImage(yellowFlyLeft)
        }
        if(direction2 === 2) {
            cube2.addImage(yellowFlyRight)
        }
    }

    if(keyWentUp("w")) {
        if(direction2 === 1) {
            cube2.addImage(yellowWalkLeft)
        }
        if(direction2 === 2) {
            cube2.addImage(yellowWalkRight);
        }
    }

    if(keyDown("s")) {
        cube2.velocityY = 20;
    }

}

function titleLevel1() {
    textAlign(CENTER);
    fill("white");
    textSize(20);
    text("Try grabbing the power-ups!", windowWidth/2, title.y + 60);
    fill("black");

    if(objective === 0) {
        text("Move with arrows and jump with the spacebar!", windowWidth/2, windowHeight - 50);
    }
    if(objective === 1) {
        text("If you wanna play with a friend, press Q to join in and move with WASD", windowWidth/2, windowHeight - 50);
    }

    if(cube.isTouching(speedPower)) {
        speed = speed + 5;
        objective += 1;
        speedPower.remove();
    }

    if(cube.isTouching(jumpPower)) {
        jump = jump - 2.5;
        objective += 1;
        jumpPower.remove();
    }

    if(cube2.isTouching(speedPower)) {
        speed2 = speed2 + 5;
        objective += 1;
        speedPower.remove();
    }

    if(cube2.isTouching(jumpPower)) {
        jump2 = jump2 - 2.5;
        objective += 1;
        jumpPower.remove();
    }
}

function titleLevel2() {
    title.visible = false;
    if(objective === 2) {
        cube.x = windowWidth/2;
        cube.y = windowHeight - 200;
        cube2.x = windowWidth/2 - 20;
        cube2.y = windowHeight - 200;
        objective += 1;
    }
    obby1.visible = true;
    obby1.shapeColor = "red";

    obby2.visible = true;
    obby2.shapeColor = "red";

    wall.y = windowHeight/2 + 50;
    wall.x = windowWidth/2 - 50;
    wall.width = windowWidth - 100;
    wall.height = 50;
    wall2.y = windowHeight/2 - 200;
    wall2.x = windowWidth/2 + 50;
    wall2.width = windowWidth - 100;
    wall2.height = 50;
    wall3.x = -1000;
    wall4.x = -1000;
    wall5.x = -1000;
    wall6.x = -1000;

    if(obby1.y === windowHeight/2) {
        obby1.addImage(enemyRight);
        obby1.velocityX = 10;
        if(obby1.x >= windowWidth) {
            obby1.y = windowHeight/2 - 1;
        }
    }

    if(obby1.y === windowHeight/2-1) {
        obby1.addImage(enemyLeft);
        obby1.velocityX = -10;
        if(obby1.x <= 0) {
            obby1.y = windowHeight/2;
        }
    }

    if(obby2.y === windowHeight/2-150) {
        obby2.addImage(enemyLeft);
        obby2.velocityX = -10;
        if(obby2.x <= 0) {
            obby2.y = windowHeight/2 - 151;
        }
    }

    if(obby2.y === windowHeight/2-151) {
        obby2.addImage(enemyRight);
        obby2.velocityX = 10;
        if(obby2.x >= windowWidth) {
            obby2.y = windowHeight/2 - 150;
        }
    }

    if(cube.isTouching(obby1) || cube.isTouching(obby2)) {
        cube.x = windowWidth/2;
        cube.y = windowHeight - 200;
    }

    if(cube2.isTouching(obby1) || cube2.isTouching(obby2)) {
        cube2.x = windowWidth/2;
        cube2.y = windowHeight - 200;
    }

    if(objective === 3) {
        textAlign(CENTER);
        textSize(20);
        fill("black");
        text("Don't touch the robots!", windowWidth/2, windowHeight - 50);
            if(cube.isTouching(button)) {
                objective += 1;
            }
            if(cube2.isTouching(button)) {
                objective += 1;
            }
    }

    button.visible = true;
    button.shapeColor = "orange";

    if(objective === 4) {
        textAlign(CENTER);
        textSize(20);
        fill("black");
        text("Go back! Collect the stars to finish the levels!", windowWidth/2, windowHeight - 50);
        button.y = windowHeight - 200;
        if(cube.isTouching(button)) {
            level += 1;
            objective += 1;
        }
        if(cube2.isTouching(button)) {
            level += 1;
            objective += 1;
        }
    }

    
}

function level1() {
    if(objective === 5) {
        cube.x = windowWidth/2;
        cube.y = windowHeight - 200;
        cube2.x = windowWidth/2;
        cube2.y = windowHeight - 200;
        lava1.x = windowWidth;
        lava2.x = 0;
        objective += 1;
    }

    if(objective === 6) {
        if(direction3 === 1) {
            lava1.velocityX = 4;
            if(lava1.x === windowWidth + 100) {
                direction3 += 1;
            }
        }
        if(direction3 === 2) {
            lava1.velocityX = -4;
            if(lava1.x === windowWidth) {
                direction3 -= 1;
            }
        }
        
        if(direction3 === 1) {
            lava2.velocityX = -4;
            if(lava2.x === -100) {
                direction3 += 1;
            }
        }
        if(direction3 === 2) {
            lava2.velocityX = 4;
            if(lava2.x === 0) {
                direction3 -= 1;
            }
        }
        if(cube.isTouching(lava1) || cube.isTouching(lava2)) {
            cube.x = 200;
            cube.y = windowWidth/2;
        }
        if(cube.isTouching(button)) {
            objective += 1
        }
        if(cube2.isTouching(lava1) || cube2.isTouching(lava2)) {
            cube2.x = 200;
            cube2.y = windowWidth/2;
        }
        if(cube2.isTouching(button)) {
            objective += 1
        }
        wall3.x = -1000;
        wall4.x = -1000;
        wall5.x = -1000;
        wall6.x = -1000;
        obby1.x = -1000;
        obby1.velocityX = 0;
        obby2.x = -1000;
        obby2.velocityX = 0;
        button.x = windowWidth - 200;
        button.y = 50;
        textAlign(CENTER);
        textSize(20);
        fill("black");
        text("Try this!", windowWidth/2, windowHeight - 50);
    }
    if(objective === 7) {
        cube.x = windowWidth / 2;
        cube.y = windowHeight - 200;
        cube2.x = windowWidth / 2;
        cube2.y = windowHeight - 200;
        lava1.x = windowWidth;
        lava2.x = 0;
        lava1.width = windowWidth - 600;
        lava2.width = windowWidth - 600;
        button.x = 75;
        objective += 1;
    }
    if(objective === 8) {
        wall.x = windowWidth/2 - 250;
        wall.y = windowHeight - 550;
        wall.addImage(starImg);
        wall.scale = 3;
        wall2.x = windowWidth/2 + 500;
        wall2.addImage(starImg);
        wall2.scale = 3;
        wall5.visible = true;
        wall5.x = windowWidth/2 + 400;
        wall5.y = windowHeight/2 + 50;
        wall5.addImage(starImg);
        wall5.scale = 3;
        wall5.visible = true;
        wall6.x = windowWidth/2 - 550;
        wall6.y = windowHeight/2;
        wall6.addImage(starImg);
        wall6.scale = 3;
        lava1.velocityX = 1;
        lava2.velocityX = -1;
        if(cube.isTouching(lava1) || cube.isTouching(lava2)) {
            cube.x = 200;
            cube.y = windowWidth/2;
        }
        if(cube.isTouching(button)) {
            objective += 1;
        }
        if(cube2.isTouching(lava1) || cube2.isTouching(lava2)) {
            cube2.x = 200;
            cube2.y = windowWidth/2;
        }
        if(cube2.isTouching(button)) {
            objective += 1;
        }
        obby1.x = -1000;
        obby1.velocityX = 0;
        obby2.x = -1000;
        obby2.velocityX = 0;
        button.y = 50;
        textAlign(CENTER);
        textSize(20);
        fill("black");
        text("Get the star!", windowWidth/2, windowHeight - 50);      
    }
    if(objective === 9) {
        cube.y = 150;
        cube2.y = 150;
        lavaMonster.x = windowWidth/2;
        lavaMonster.y = windowHeight - 250;
        lavaMonster.setCollider("rectangle", 0, 0, 25, 50);
        lavaMonster.scale = 8;
        lava1.x = windowWidth/2
        lava1.y = windowHeight + 50;
        lava1.width = windowWidth;
        lava1.height = 200;
        lava1.velocityX = 0;
        lava2.x = windowWidth/2;
        lava2.y = 0;
        lava2.width = windowWidth;
        lava2.height = 100;
        lava2.velocityX = 0;
        ground.x = -1000;
        ground.width = 10;
        wall.x = -1000;
        wall2.x = -1000;
        wall3.x = -1000;
        wall4.x = -1000;
        wall5.x = -1000;
        wall6.x = -1000;
        button.x = -1000;
        direction4 = 1;
        timer1 = 0;
        objective += 1;
    }
    if(objective === 10) {
        timer1 += 1;
        if(direction4 === 1) {
            lavaMonster.velocityX = -10;
            lavaMonster.addImage(lavaMonsterImg);
            if(lavaMonster.x <= 0) {
                direction4 -= 1;
            }
        }
        if(direction4 === 0) {
            lavaMonster.velocityX = 10;
            lavaMonster.addImage(lavaMonster2Img);
            if(lavaMonster.x >= windowWidth) {
                direction4 += 1;
            }
        }
        if(cube.isTouching(lavaMonster) || cube.isTouching(lava1) || cube.isTouching(lava2)) {
            timer1 -= 10;
            if(direction4 === 1) {
                cube.x = windowWidth - 150;
                cube.y = 250;
            }
            if(direction4 === 0) {
                cube.x = 150;
                cube.y = 250;
            }
        }
        if(cube2.isTouching(lavaMonster) || cube2.isTouching(lava1) || cube2.isTouching(lava2)) {
            timer1 -= 10;
            if(direction4 === 1) {
                cube2.x = windowWidth - 150;
                cube2.y = 250;
            }
            if(direction4 === 0) {
                cube2.x = 150;
                cube2.y = 250;
            }
        }
        if(timer1 > 0 && timer1 < 250) {
            textAlign(CENTER);
            textSize(20);
            fill("red");
            text("Avoid the lava monster!", windowWidth/2, windowHeight - 75);   
        }
        if(timer1 >= 250 && timer1 < 500) {
            textAlign(CENTER);
            textSize(20);
            fill("red");
            text("I think he is mad that you took his stars!", windowWidth/2, windowHeight - 75);   
        }
        if(timer1 >= 500 && timer1 < 1000) {
            textAlign(CENTER);
            textSize(20);
            fill("red");
            text("Keep it up, I think he is getting tired!", windowWidth/2, windowHeight - 75);   
        }
        if(timer1 >= 1000) {
            lavaMonster.velocityY = 10;
            if(lavaMonster.y === -1000) {
                lavaMonster.velocityY = 0;
            }
            textAlign(CENTER);
            textSize(20);
            fill("red");
            text("Congrats, you won! There will be more soon though...", windowWidth/2, windowHeight - 75);   
        }
    }
}

