ServerEvents.recipes(event => {
    //**Need T1**

    //Waterwheel
    event.remove({output:'create:water_wheel'});
    event.shaped(Item.of('create:water_wheel',1), ['PPP','PTP','PPP'], {P:{tag:'minecraft:planks'},T:'kubejs:create_core_t1'});
    event.recipes.create.mechanical_crafting('create:water_wheel', ['PPP','PTP','PPP'], {P:{tag:'minecraft:planks'},T:'create:shaft'});

    // Gearbox
    event.remove({id:'create:crafting/kinetics/gearbox'});
    event.remove({id:'create:crafting/kinetics/vertical_gearbox'});
    event.shaped(Item.of('create:gearbox',1), [' C ','CTC',' C '], {C:'create:cogwheel',T:'kubejs:create_core_t1'});
    event.shaped(Item.of('create:vertical_gearbox',1), ['C C',' T ','C C'], {C:'create:cogwheel',T:'kubejs:create_core_t1'});
    event.recipes.create.mechanical_crafting('create:gearbox', [' C ','CTC',' C '], {C:'create:cogwheel',T:'create:andesite_casing'});
    event.recipes.create.mechanical_crafting('create:vertical_gearbox', ['C C',' T ','C C'], {C:'create:cogwheel',T:'create:andesite_casing'});

    // Mechanical Press
    event.remove({id:'create:crafting/kinetics/mechanical_press'});
    event.shaped(Item.of('create:mechanical_press',1), [' S ',' T ',' I '], {S:'create:shaft',T:'kubejs:create_core_t1',I:'minecraft:iron_block'});
    event.recipes.create.mechanical_crafting('create:mechanical_press', ['S','T','I'], {S:'create:shaft',T:'create:andesite_casing',I:'minecraft:iron_block'});

    // Clutch
    event.remove({id:'create:crafting/kinetics/clutch'});
    event.shaped(Item.of('create:clutch',1), ['TS' ,'R ',], {S:'create:shaft',T:'kubejs:create_core_t1',R:'minecraft:redstone'});
    event.recipes.create.mechanical_crafting('create:clutch', ['TS' ,'R '], {S:'create:shaft',T:'create:andesite_casing',R:'minecraft:redstone'});

    // Chain drive
    event.remove({output:'create:encased_chain_drive'});
    event.shaped(Item.of('create:encased_chain_drive',1), ['TN','NN'], {T:'kubejs:create_core_t1',N:'minecraft:iron_nugget'});
    event.shaped(Item.of('create:encased_chain_drive',1), ['TN','NN'], {T:'kubejs:create_core_t1',N:{tag:'c:nuggets/zinc'}});
    event.recipes.create.mixing('create:encased_chain_drive',['kubejs:create_core_t1','3x minecraft:iron_nugget']);
    event.recipes.create.mixing('create:encased_chain_drive',['kubejs:create_core_t1',Ingredient.of({tag:"c:nuggets/zinc"},3)]);

    // gear shift
    event.remove({id:'create:crafting/kinetics/gearshift'});
    event.shaped(Item.of('create:gearshift',1), ['TC','R '], {T:'kubejs:create_core_t1',C:'create:cogwheel',R:'minecraft:redstone'});
    event.recipes.create.mixing('create:gearshift',['kubejs:create_core_t1','create:cogwheel','minecraft:redstone']);

    // Directional Gearshift
    event.remove({id:'simulated:directional_gearshift'});
    event.shaped(Item.of('simulated:directional_gearshift',1), ['TC','RS'], {T:'kubejs:create_core_t1',C:'create:cogwheel',R:'minecraft:redstone_torch',S:'create:shaft'});
    event.recipes.create.mixing('simulated:directional_gearshift',['kubejs:create_core_t1','create:cogwheel','minecraft:redstone_torch','create:shaft']);

    // Mechanical mixer
    event.remove({id:'create:crafting/kinetics/mechanical_mixer'});
    event.shaped(Item.of('create:mechanical_mixer',1), ['C', 'T' ,'W'], {C:'create:cogwheel',T:'kubejs:create_core_t1',W:'create:whisk'});
    event.recipes.create.mechanical_crafting('create:mechanical_mixer', ['C', 'T' ,'W'], {C:'create:cogwheel',T:'create:andesite_casing',W:'create:whisk'});

    // Millstone
    event.remove({id:'create:crafting/kinetics/millstone'});
    event.shaped(Item.of('create:millstone',1), ['C','T','S'], {S:{tag:'createbigcannons:stone'},T:'kubejs:create_core_t1',C:'create:cogwheel'});
    event.recipes.create.mechanical_crafting('create:millstone', ['C','T','S'], {S:{tag:'createbigcannons:stone'},T:'create:andesite_casing',C:'create:cogwheel'});

    // Depot
    event.remove({id:'create:crafting/kinetics/depot'});
    event.shaped(Item.of('create:depot',1), ['AT'], {A:'create:andesite_alloy',T:'kubejs:create_core_t1'});
    event.recipes.create.mechanical_crafting('create:depot', ['AT'], {A:'create:andesite_alloy',T:'create:andesite_casing'});

    // Windmill bearing
    event.remove({id:'create:crafting/kinetics/windmill_bearing'});
    event.shaped(Item.of('create:windmill_bearing',1), ['L','T','I'], {L:{tag:'minecraft:wooden_slabs'},T:'kubejs:create_core_t1',I:'create:shaft'});
    event.recipes.create.mechanical_crafting('create:windmill_bearing', ['L','T','I'], {L:{tag:'minecraft:wooden_slabs'},T:'create:andesite_casing',I:'create:shaft'});

    //***Need T2***
    // Physics assembler
    event.remove({id:'simulated:physics_assembler'});
    event.shaped(Item.of('simulated:physics_assembler',1), [' L ','ATA'], {T:'kubejs:create_core_t2',A:'create:andesite_alloy',L:'minecraft:lever'});

    // Mechanical crafter
    event.remove({id:'create:crafting/kinetics/mechanical_crafter'});
    event.shaped(Item.of('create:mechanical_crafter',3), ['E','T','C'], {E:'create:electron_tube',T:'kubejs:create_core_t2',C:'minecraft:crafting_table'});
    event.recipes.create.mechanical_crafting(Item.of('create:mechanical_crafter',3), ['E','T','C'], {E:'create:electron_tube',T:'create:brass_casing',C:'minecraft:crafting_table'});

    // Encased fan
    event.remove({id:'create:crafting/kinetics/encased_fan'});
    event.shaped(Item.of('create:encased_fan',1), ['S','T','F'], {T:'kubejs:create_core_t2',F:'create:propeller',S:'create:shaft'});

    // Deployer
    event.remove({id:'create:crafting/kinetics/deployer'});
    event.shaped(Item.of('create:deployer',1), ['E','T','H'], {E:'create:electron_tube',T:'kubejs:create_core_t2',H:'create:brass_hand'});

    // Spout
    event.remove({id:'create:crafting/kinetics/spout'});
    event.shaped(Item.of('create:spout',1), ['T','K'], {T:'kubejs:create_core_t2',K:'minecraft:dried_kelp'});

    // Sequenced gearshift
    event.remove({id:'create:crafting/kinetics/sequenced_gearshift'});
    event.shaped(Item.of('create:sequenced_gearshift',1), ['TC','E '], {T:'kubejs:create_core_t2',C:'create:cogwheel',E:'create:electron_tube'});
    event.recipes.create.mixing('create:sequenced_gearshift',['kubejs:create_core_t2','create:cogwheel','create:electron_tube']);

    //***Need T3***
    // Crusher
    event.remove({id:'create:mechanical_crafting/crushing_wheel'});
    event.recipes.create.mechanical_crafting(Item.of('create:crushing_wheel',2), [' AAA ','AAWAA','AWTWA','AAWAA',' AAA '], {A:'create:andesite_alloy',W:{tag:'minecraft:wooden_planks'},T:'kubejs:create_core_t3'});

    // Mechanical Arm
    event.remove({id:'create:crafting/kinetics/mechanical_arm'});
    event.shaped(Item.of('create:mechanical_arm',1), ['BBA','B  ','PT '], {B:'create:brass_sheet',P:'create:precision_mechanism',T:'kubejs:create_core_t3',A:'create:andesite_alloy'});

    // Rotation speed controller
    event.remove({id:'create:crafting/kinetics/rotation_speed_controller'});
    event.shaped(Item.of('create:rotation_speed_controller',1), ['P','T'], {T:'kubejs:create_core_t3',P:'create:precision_mechanism'});

    // Display link
    event.remove({id:'create:crafting/logistics/display_link'});
    event.shaped(Item.of('create:display_link',1), ['P','T'], {T:'kubejs:create_core_t3',P:'create:transmitter'});

    // Mechanical drill
    event.remove({id:'create:crafting/kinetics/mechanical_drill'});
    event.shaped(Item.of('create:mechanical_drill',3), [' A ','AIA','T  '], {A:'create:andesite_alloy',I:'minecraft:iron_ingot',T:'kubejs:create_core_t3'});

    // Mechanical Harvester
    event.remove({id:'create:crafting/kinetics/mechanical_harvester'});
    event.shaped(Item.of('create:mechanical_harvester',3), ['AIA','AIA','T  '], {A:'create:andesite_alloy',I:{tag:'c:plates/iron'},T:'kubejs:create_core_t3'});

    //Cobble gens
    event.remove({id:'cobblegengalore:crafting/block_gen_stone'});
    event.remove({id:'cobblegengalore:crafting/block_gen_copper'});
    event.remove({id:'cobblegengalore:crafting/block_gen_iron'});
    event.remove({id:'cobblegengalore:crafting/block_gen_gold'});
    event.remove({id:'cobblegengalore:crafting/block_gen_emerald'});
    event.remove({id:'cobblegengalore:crafting/block_gen_diamond'});
    event.remove({id:'cobblegengalore:crafting/block_gen_netherite'});

    event.shaped(Item.of('cobblegengalore:block_gen_stone',1), ['SSS','GTG','SSS'], {S:'minecraft:smooth_stone',T:'kubejs:create_core_t3',G:'minecraft:glass'});
    event.shaped(Item.of('cobblegengalore:block_gen_copper',1), ['CCC','GTG','CCC'], {C:'minecraft:copper_ingot',T:'kubejs:create_core_t3',G:'minecraft:glass'});
    event.shaped(Item.of('cobblegengalore:block_gen_iron',1), ['III','GTG','III'], {I:'minecraft:iron_ingot',T:'kubejs:create_core_t3',G:'minecraft:glass'});
    event.shaped(Item.of('cobblegengalore:block_gen_gold',1), ['III','GTG','III'], {I:'minecraft:gold_ingot',T:'kubejs:create_core_t3',G:'minecraft:glass'});
    event.shaped(Item.of('cobblegengalore:block_gen_emerald',1), ['EEE','GTG','EEE'], {E:'minecraft:emerald',T:'kubejs:create_core_t3',G:'minecraft:glass'});
    event.shaped(Item.of('cobblegengalore:block_gen_diamond',1), ['DDD','GTG','DDD'], {D:'minecraft:diamond',T:'kubejs:create_core_t3',G:'minecraft:glass'});
    event.shaped(Item.of('cobblegengalore:block_gen_netherite',1), ['NNN','GTG','NNN'], {N:'minecraft:netherite_ingot',T:'kubejs:create_core_t3',G:'minecraft:glass'});


    // ***Need T4***
    // Blaze burner
    event.remove({id:'create:crafting/kinetics/empty_blaze_burner'});
    event.shaped(Item.of('create:empty_blaze_burner',3), [' I ','ITI',' I '], {I:{tag:'c:plates/iron'},T:'kubejs:create_core_t4'});

    // Schematicanon
    event.remove({id:'create:crafting/schematics/schematicannon'});
    event.shaped(Item.of('create:schematicannon',1), [' I ','LIL','STS'], {I:'minecraft:iron_block',L:{tag:'minecraft:logs'},S:'minecraft:smooth_stone',T:'kubejs:create_core_t4'});

    // Steam Engine
    event.remove({id:'create:crafting/kinetics/steam_engine'});
    event.shaped(Item.of('create:steam_engine',1), ['G','A','T'], {G:{tag:'c:plates/gold'},A:'create:andesite_alloy',T:'kubejs:create_core_t4'});

    // Train Station
    event.remove({id:'create:crafting/kinetics/track_station'});
    event.shaped(Item.of('create:track_station',4), ['T','C'], {T:'kubejs:create_core_t4',C:'minecraft:compass'});

    // ***Need T5***
    // Cart assembler
    event.remove({id:'create:crafting/kinetics/cart_assembler'});
    event.shaped(Item.of('create:cart_assembler',2), ['ARA','LTL'], {T:'kubejs:create_core_t5',A:'create:andesite_alloy',R:'minecraft:redstone',L:{tag:'minecraft:logs'}});

    // Elevator Pulley
    event.remove({id:'create:crafting/kinetics/elevator_pulley'});
    event.shaped(Item.of('create:elevator_pulley',10), ['T','K','I'], {T:'kubejs:create_core_t5',K:'minecraft:dried_kelp_block',I:{tag:'c:plates/iron'}});


});