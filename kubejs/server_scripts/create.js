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
});