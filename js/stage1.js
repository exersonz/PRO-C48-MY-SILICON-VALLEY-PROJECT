function handleStage1()
{
  step1.visible = true;
  step2.visible = true;
  step3.visible = true;

  spike1.visible = true;
  spike2.visible = true;
  spike3.visible = true;
  
  safeGround.visible = true;

  ground.addImage(fire);
  ground.scale = 1.5;
  ground.x = 640;
  ground.y = 600;

  ditto.collide(safeGround);

  if(ditto.collide(spike1) || 
     ditto.collide(spike2) || 
     ditto.collide(spike3) || 
     ditto.collide(ground))
  {
    ditto.x = 50;
    ditto.y = 560;

    life -= 1;
    console.log(life);
  }

  next.x = 950;
  next.y = 100;

  ditto.collide(step1);
  ditto.collide(step2);
  ditto.collide(step3);

  if(ditto.collide(next))
  {
    stage = 2;
    ditto.x = 100;
    ditto.y = 90;
  }
}
