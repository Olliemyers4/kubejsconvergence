ServerEvents.recipes(event => {
    //Need T1

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

    // Need T2
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
    event.shaped(Item.of('create:sequenced_gearshift',1), ['TC','E'], {T:'kubejs:create_core_t2',C:'create:cogwheel',E:'create:electron_tube'});
    event.recipes.create.mixing('create:sequenced_gearshift',['kubejs:create_core_t2','create:cogwheel','create:electron_tube']);

});