function handleStage3()
{
    if(!flag)
    {
        flag = 1;
        
        star1 = createSprite(450,142,50,50);
        star1.addImage(starImg);
        star1.velocityX = 0;
        star1.velocityY = 0;
        star1.scale = 0.04;
        star1.visible = false;
      
        star2 = createSprite(652,250,50,50);
        star2.addImage(starImg);
        star2.velocityX = 0;
        star2.velocityY = 0;
        star2.scale = 0.04;
        star2.visible = false;
      
        star3 = createSprite(798,185,50,50);
        star3.addImage(starImg);
        star3.velocityX = 0;
        star3.velocityY = 0;
        star3.scale = 0.04;
        star3.visible = false;
      
        asteroid1 = createSprite(489,132,50,50);
        asteroid1.addImage(asteroidImg);
        asteroid1.scale = 0.2;
        asteroid1.velocityX = 0;
        asteroid1.velocityY = 0;
        asteroid1.visible = false;
      
        asteroid2 = createSprite(648,156,50,50);
        asteroid2.addImage(asteroidImg);
        asteroid2.scale = 0.2;
        asteroid2.velocityX = 0;
        asteroid2.velocityY = 0;
        asteroid2.visible = false;
      
        asteroid3 = createSprite(756,162,50,50);
        asteroid3.addImage(asteroidImg);
        asteroid3.scale = 0.2;
        asteroid3.velocityX = 0;
        asteroid3.velocityY = 0;
        asteroid3.visible = false;
      
        tippy_top = createSprite(500,8,1000,20);
        tippy_top.visible = false;
      
        left = createSprite(990,100,20,1000);
        left.visible = false;
      
        right = createSprite(10,100,20,1000);
        right.visible = false;
        
       safeGround.visible = false;
    
       step1.visible = false;
       step2.visible = false;
       step3.visible = false;
    
       spike1.visible = false;
       spike2.visible = false;
       spike3.visible = false;
    
       dangerousGround.visible = false;
       ground.visible = false;
    
       star1.visible = true;
       star1.velocityX = -10;
       star1.velocityY = 10;
       
       star2.visible = true;
       star2.velocityX = -11;
       star2.velocityY = 11;
    
       star3.visible = true;
       star3.velocityX = 12;
       star3.velocityY = 12;
    
       asteroid1.visible = true;
       asteroid1.velocityX = 10;
       asteroid1.velocityY = -10;
    
       asteroid2.visible = true;
       asteroid2.velocityX = 11;
       asteroid2.velocityY = -11;
    
       asteroid3.visible = true;
       asteroid3.velocityX = 12;
       asteroid3.velocityY = -12;
    
       tippy_top.visible = true;
       left.visible = true;
       right.visible = true;
    }
    
   var otherGround;
   otherGround = createSprite(500,590,1000,30);

   next.destroy();

   ditto.bounceOff(tippy_top);
   ditto.bounceOff(left);
   ditto.bounceOff(right);
   ditto.bounceOff(otherGround);

   star1.bounceOff(tippy_top);
   star1.bounceOff(left);
   star1.bounceOff(right);
   star1.bounceOff(otherGround);

   star2.bounceOff(tippy_top);
   star2.bounceOff(left);
   star2.bounceOff(right);
   star2.bounceOff(otherGround);

   star3.bounceOff(tippy_top);
   star3.bounceOff(left);
   star3.bounceOff(right);
   star3.bounceOff(otherGround);

   asteroid1.bounceOff(tippy_top);
   asteroid1.bounceOff(left);
   asteroid1.bounceOff(right);
   asteroid1.bounceOff(otherGround);

   asteroid2.bounceOff(tippy_top);
   asteroid2.bounceOff(left);
   asteroid2.bounceOff(right);
   asteroid2.bounceOff(otherGround);

   asteroid3.bounceOff(tippy_top);
   asteroid3.bounceOff(left);
   asteroid3.bounceOff(right);
   asteroid3.bounceOff(otherGround);
   
   if(ditto.isTouching(star1))
   {
       star1.destroy();
       stars += 1;
   }
   else if(ditto.isTouching(star2))
   {
       star2.destroy();
       stars += 1;
   }
   else if(ditto.isTouching(star3))
   {
       star3.destroy();
       stars += 1;
   }

   if(stars === 3)
   {
       textSize(40);
       text("Awesome! You Won!!", 300, 300);
       asteroid1.destroy();
       asteroid2.destroy();
       asteroid3.destroy();
       
   }

   if(ditto.isTouching(asteroid1) || ditto.isTouching(asteroid2) || ditto.isTouching(asteroid3))
   {
        life -= 1;
        ditto.x = 100;
        ditto.y = 560;
   }
}