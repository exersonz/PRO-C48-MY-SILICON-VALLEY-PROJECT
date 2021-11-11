function handleStage2()
{
    dangerousGround.visible = true;
    
    safeGround.x = 900;
    safeGround.y = 590;
    safeGround.visible = true;
    ditto.collide(safeGround);

    step3.x = 150;
    step3.y = 150;
    step3.visible = true;
    ditto.collide(step3);

    step2.x = 430;
    step2.y = 250;
    step2.visible = true;
    ditto.collide(step2);

    step1.x = 710;
    step1.y = 350;
    step1.visible = true;
    ditto.collide(step1);

    spike3.x = 200;
    spike3.y = 122;
    spike3.setCollider("rectangle",0,0,100,100);
    spike3.debug = false;
    spike3.visible = true;

    spike2.x = 450;
    spike2.y = 222;
    spike2.setCollider("rectangle",0,0,100,100);
    spike2.debug = false;
    spike2.visible = true;

    spike1.x = 680;
    spike1.y = 322;
    spike1.setCollider("rectangle",0,0,100,100);
    spike1.debug = false;
    spike1.visible = true;

    next.x = 940;
    next.y = 540;

    if(ditto.collide(spike1) || ditto.collide(spike2) || ditto.collide(spike3) || ditto.collide(dangerousGround) || ditto.collide(ground))
    {
        life -= 1;
        ditto.x = 100;
        ditto.y = 90; 
    }

    if(ditto.collide(next))
    {
        stage = 3;
        //star1.visible = true;
    }

    ground.addImage(spikeyGround);
    ground.y = 530;
    ground.x = 560;
    ground.setCollider("rectangle",0,0,200,100);
    ground.debug = false;
    ground.scale = 1.45;
}