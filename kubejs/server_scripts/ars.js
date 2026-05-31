ServerEvents.recipes(event => {
    //**Need T1**
    //Novice Spell book
    event.remove({id:'ars_nouveau:novice_spell_book'});
    event.remove({id:'ars_nouveau:novice_spell_book_alt'});
    event.shaped(Item.of('ars_nouveau:novice_spell_book',1), ['BSP','AWT'], {B:'minecraft:book',S:'minecraft:iron_shovel',P:'minecraft:iron_pickaxe',A:'minecraft:iron_axe',T:'kubejs:ars_core_t1',W:'minecraft:iron_sword'});
    event.shaped(Item.of('ars_nouveau:novice_spell_book',1), ['BSP','AWT'], {B:'ars_nouveau:worn_notebook',S:'minecraft:iron_shovel',P:'minecraft:iron_pickaxe',A:'minecraft:iron_axe',T:'kubejs:ars_core_t1',W:'minecraft:iron_sword'});

    // Annotated Codex?
    event.remove({id:'ars_nouveau:annotated_codex'});
    event.shaped(Item.of('ars_nouveau:annotated_codex',1), ['PL','T '], {P:'ars_nouveau:blank_parchment',L:'minecraft:leather',T:'kubejs:ars_core_t1'});

    // Scribe's table
    event.remove({id:'ars_nouveau:scribes_table'});
    event.shaped(Item.of('ars_nouveau:scribes_table',1), ['SSS','NTN','LLL'], {S:'ars_nouveau:archwood_slab',N:'minecraft:gold_nugget',T:'kubejs:ars_core_t1',L:{tag:'c:logs/archwood'}});

    // Source Jar
    event.remove({id:'ars_nouveau:source_jar'});
    event.shaped(Item.of('ars_nouveau:source_jar',1), ['SSS','GTG','SSS'], {S:'ars_nouveau:archwood_slab',T:'kubejs:ars_core_t1',G:{tag:'createbigcannons:glass'}});

    // Imbuement Chamber
    event.remove({id:'ars_nouveau:imbuement_chamber'});
    event.shaped(Item.of('ars_nouveau:imbuement_chamber',1), ['PGP','PTP','PGP'], {P:'ars_nouveau:archwood_planks',T:'kubejs:ars_core_t1',G:'minecraft:gold_ingot'});

    // Pantomime rune
    event.remove({id:'ars_nouveau:glyph_pantomime'});
    event.recipes.ars_nouveau.glyph(
        'ars_nouveau:glyph_pantomime', // output item (glyph)
        [Ingredient.of({tag:'createbigcannons:glass'}),Ingredient.of({tag:'createbigcannons:glass'}),Ingredient.of({tag:'createbigcannons:glass'}),
            Ingredient.of({tag:'createbigcannons:glass'}),Ingredient.of({tag:'createbigcannons:glass'}),Ingredient.of({tag:'createbigcannons:glass'}),
            Ingredient.of({tag:'createbigcannons:glass'}),Ingredient.of({tag:'createbigcannons:glass'}),'kubejs:ars_core_t1'], // input items
        27 ,// exp cost 3lvl
    );
    // exp cost - https://minecraft.wiki/w/Calculators/Required_experience

    // projectile rune
    event.remove({id:'ars_nouveau:glyph_projectile'});
    event.recipes.ars_nouveau.glyph(
        'ars_nouveau:glyph_projectile', // output item (glyph)
        [Ingredient.of('minecraft:arrow'),Ingredient.of('minecraft:fletching_table'),Ingredient.of('kubejs:ars_core_t1')], // input items
        27  // exp cost 3lvl
    );

    // self rune
    event.remove({id:'ars_nouveau:glyph_self'});
    event.recipes.ars_nouveau.glyph(
        'ars_nouveau:glyph_self', // output item (glyph)
        [Ingredient.of('minecraft:iron_chestplate'),Ingredient.of({tag:'minecraft:wooden_pressure_plates'}),Ingredient.of('kubejs:ars_core_t1')], // input items
        27  // exp cost 3lvl
    );

    // touch rune
    event.remove({id:'ars_nouveau:glyph_touch'});
    event.recipes.ars_nouveau.glyph(
        'ars_nouveau:glyph_touch', // output item (glyph)
        [Ingredient.of({tag:'minecraft:buttons'}),Ingredient.of('kubejs:ars_core_t1')], // input items
        27  // exp cost 3lvl
    );

    // underfoot rune

    event.remove({id:'ars_nouveau:glyph_underfoot'});
    event.recipes.ars_nouveau.glyph(
        'ars_nouveau:glyph_underfoot', // output item (glyph)
        [Ingredient.of('minecraft:iron_boots'),Ingredient.of('kubejs:ars_core_t1'),Ingredient.of({tag:'minecraft:wooden_pressure_plates'})], // input items
        27  // exp cost 3lvl
    );

    // amplify rune
    event.remove({id:'ars_nouveau:glyph_amplify'});
    event.recipes.ars_nouveau.glyph(
        'ars_nouveau:glyph_amplify', // output item (glyph)
        [Ingredient.of('minecraft:diamond_pickaxe'),Ingredient.of('kubejs:ars_core_t1')], // input items
        27  // exp cost 3lvl
    );

    // **Need T2**e

    // Mage's Spell book
    event.remove({id:'ars_nouveau:apprentice_book_upgrade'});
    event.shapeless(Item.of('ars_nouveau:apprentice_spell_book',1),['ars_nouveau:novice_spell_book','kubejs:ars_core_t2','3x minecraft:diamond', '2x minecraft:blaze_rod', '2x minecraft:quartz_block']);

    // Arc projectile rune
    event.remove({id:'ars_elemental:glyph_arc_projectile'});
    event.recipes.ars_nouveau.glyph(
        'ars_elemental:glyph_arc_projectile', // output item (glyph)
        [Ingredient.of('minecraft:arrow'),Ingredient.of('minecraft:snowball'),Ingredient.of('kubejs:ars_core_t2'),Ingredient.of('minecraft:ender_pearl'),Ingredient.of('minecraft:slime_ball')], // input items
        55  // exp cost 5lvl
    );

    // AOE rune
    event.remove({id:'ars_nouveau:glyph_aoe'});
    event.recipes.ars_nouveau.glyph(
        'ars_nouveau:glyph_aoe', // output item (glyph)
        [Ingredient.of('minecraft:firework_star'),Ingredient.of('kubejs:ars_core_t2')], // input items
        55  // exp cost 5lvl
    );

    // Accelerate rune
    event.remove({id:'ars_nouveau:glyph_accelerate'});
    event.recipes.ars_nouveau.glyph(
        'ars_nouveau:glyph_accelerate', // output item (glyph)
        [Ingredient.of('minecraft:powered_rail'),Ingredient.of('kubejs:ars_core_t2'),Ingredient.of('minecraft:clock'),Ingredient.of('minecraft:sugar')], // input items
        55  // exp cost 5lvl
    );

    // Dampen rune
    event.remove({id:'ars_nouveau:glyph_dampen'});
    event.recipes.ars_nouveau.glyph(
        'ars_nouveau:glyph_dampen', // output item (glyph)
        [Ingredient.of('minecraft:nether_brick'),Ingredient.of('kubejs:ars_core_t2')], // input items
        55  // exp cost 5lvl
    );

    // Decelerate rune
    event.remove({id:'ars_nouveau:glyph_decelerate'});
    event.recipes.ars_nouveau.glyph(
        'ars_nouveau:glyph_decelerate', // output item (glyph)
        [Ingredient.of('minecraft:clock'),Ingredient.of('kubejs:ars_core_t2'),Ingredient.of('minecraft:soul_sand'),Ingredient.of('minecraft:cobweb')], // input items
        55  // exp cost 5lvl
    );

    // Extend Time rune
    event.remove({id:'ars_nouveau:glyph_extend_time'});
    event.recipes.ars_nouveau.glyph(
        'ars_nouveau:glyph_extend_time', // output item (glyph)
        [Ingredient.of('minecraft:clock'),Ingredient.of('kubejs:ars_core_t2'),Ingredient.of('minecraft:redstone_block')], // input items
        55  // exp cost 5lvl
    );

    // extract rune
    event.remove({id:'ars_nouveau:glyph_extract'});
    event.recipes.ars_nouveau.glyph(
        'ars_nouveau:glyph_extract', // output item (glyph)
        [Ingredient.of('minecraft:emerald'),Ingredient.of('kubejs:ars_core_t2')], // input items
        55  // exp cost 5lvl
    );

    // luck rune
    event.remove({id:'ars_nouveau:glyph_fortune'});
    event.recipes.ars_nouveau.glyph(
        'ars_nouveau:glyph_fortune', // output item (glyph)
        [Ingredient.of('minecraft:rabbit_foot'),Ingredient.of('kubejs:ars_core_t2')], // input items
        55  // exp cost 5lvl
    );

    // pierce rune
    event.remove({id:'ars_nouveau:glyph_pierce'});
    event.recipes.ars_nouveau.glyph(
        'ars_nouveau:glyph_pierce', // output item (glyph)
        [Ingredient.of('minecraft:arrow'),Ingredient.of('kubejs:ars_core_t2'),Ingredient.of('ars_nouveau:wilden_spike')], // input items
        55  // exp cost 5lvl
    );

    // reduce time rune
    event.remove({id:'ars_nouveau:glyph_duration_down'});
    event.recipes.ars_nouveau.glyph(
        'ars_nouveau:glyph_duration_down', // output item (glyph)
        [Ingredient.of('minecraft:clock'),Ingredient.of('kubejs:ars_core_t2'),Ingredient.of('minecraft:glowstone_dust')], // input items
        55  // exp cost 5lvl
    );

    // Spell Prism
    event.remove({id:'ars_nouveau:spell_prism'});
    event.shaped(Item.of('ars_nouveau:spell_prism',1), ['GPG','PTP','GPG'], {P:'ars_nouveau:archwood_planks',T:'kubejs:ars_core_t2',G:'minecraft:gold_ingot'});

    // **Need T3**
    // Wixie Charm
    event.remove({id:'ars_nouveau:wixie_charm'});
        event.recipes.ars_nouveau.enchanting_apparatus(
        [{tag: 'minecraft:saplings'}, 'minecraft:emerald', 'minecraft:brewing_stand', 'kubejs:ars_core_t3'], // input items
        'ars_nouveau:wixie_shards', // reagent
        'ars_nouveau:wixie_charm', // output
        0 // source cost
        // true // keep nbt of reagent, think like a smithing recipe
    )

    // Drygmy charm
    event.remove({id:'ars_nouveau:drygmy_charm'});
    event.recipes.ars_nouveau.enchanting_apparatus(
        ['ars_nouveau:source_gem', 'ars_nouveau:source_gem', 'ars_nouveau:source_gem', 'kubejs:ars_core_t3',{tag: 'minecraft:fishes'},'minecraft:apple','minecraft:carrot',{tag: 'c:seeds'}], // input items
        'ars_nouveau:drygmy_shard', // reagent
        'ars_nouveau:drygmy_charm', // output
        0 // source cost
        // true // keep nbt of reagent, think like a smithing recipe
    )

    // Containment Jar
    event.remove({id:'ars_nouveau:mob_jar'});
    event.shaped(Item.of('ars_nouveau:mob_jar',1), ['SSS','GTG','GGG'], {S:'ars_nouveau:archwood_slab',T:'kubejs:ars_core_t3',G:{tag:'createbigcannons:glass'}});

    // some recipe to make t3 components with drygmy charms
    event.shapeless(Item.of('kubejs:ars_core_t3',1),['ars_nouveau:drygmy_charm','kubejs:ars_core_t1','ars_nouveau:source_gem','ars_nouveau:wixie_charm']).keepIngredient('ars_nouveau:drygmy_charm').keepIngredient('ars_nouveau:wixie_charm');
    event.recipes.create.mixing(['kubejs:ars_core_t3','ars_nouveau:drygmy_charm','ars_nouveau:wixie_charm'],['ars_nouveau:drygmy_charm','kubejs:ars_core_t1','ars_nouveau:source_gem','ars_nouveau:wixie_charm']);

    // **Need T4**

    // Archmage spell book
    event.remove({id:'ars_nouveau:archmage_book_upgrade'});
    event.shapeless(Item.of('ars_nouveau:archmage_spell_book',1),['ars_nouveau:apprentice_spell_book','kubejs:ars_core_t4','2x minecraft:ender_pearl', '2x minecraft:emerald', 'minecraft:totem_of_undying', 'minecraft:nether_star','ars_nouveau:wilden_tribute']);

    // Ender Source jar
    event.remove({id:'ars_additions:apparatus/ender_source_jar'});
    event.recipes.ars_nouveau.enchanting_apparatus(
        ['minecraft:ender_pearl', 'minecraft:ender_pearl', 'minecraft:ender_pearl', 'kubejs:ars_core_t4','minecraft:popped_chorus_fruit','minecraft:popped_chorus_fruit','minecraft:popped_chorus_fruit','minecraft:popped_chorus_fruit'], // input items
        'ars_nouveau:source_jar', // reagent
        'ars_additions:ender_source_jar', // output
        0 // source cost
        // true // keep nbt of reagent, think like a smithing recipe
    )
    //event.remove({id:'arseng:me_source_jar'});
    event.recipes.ars_nouveau.enchanting_apparatus(
        ['kubejs:ars_core_t4','ars_nouveau:manipulation_essence',Ingredient.of({tag:'ae2:interface'},1)], // input items
        'ars_nouveau:source_jar', // reagent
        'arseng:me_source_jar', // output
        0 // source cost
        // true // keep nbt of reagent, think like a smithing recipe
    )

    // Homing Projectile rune
    event.remove({id:'ars_elemental:glyph_homing_projectile'});
    event.recipes.ars_nouveau.glyph(
        'ars_elemental:glyph_homing_projectile', // output item (glyph)
        [Ingredient.of('minecraft:nether_star'),Ingredient.of('minecraft:ender_eye'),Ingredient.of('kubejs:ars_core_t4'),Ingredient.of('ars_nouveau:dowsing_rod')], // input items
        160  // exp cost 10lvl
    );

    // Recall Rune
    event.remove({id:'ars_additions:glyph_recall'});
    event.recipes.ars_nouveau.glyph(
        'ars_additions:glyph_recall', // output item (glyph)
        [Ingredient.of('minecraft:ender_pearl'),Ingredient.of('ars_nouveau:conjuration_essence'),Ingredient.of('kubejs:ars_core_t4'),Ingredient.of('ars_nouveau:enchanters_eye'),Ingredient.of('ars_nouveau:scryer_scroll')], // input items
        160  // exp cost 10lvl
    );

    // Retaliate rune
    event.remove({id:'ars_additions:glyph_retaliate'});
    event.recipes.ars_nouveau.glyph(
        'ars_additions:glyph_retaliate', // output item (glyph)
        [Ingredient.of('minecraft:netherite_sword'),Ingredient.of('minecraft:enchanted_book'),Ingredient.of('kubejs:ars_core_t4')], // input items
        160  // exp cost 10lvl
    );
    // Split rune
    event.remove({id:'ars_nouveau:glyph_split'});
    event.recipes.ars_nouveau.glyph(
        'ars_nouveau:glyph_split', // output item (glyph)
        [Ingredient.of('minecraft:stonecutter'),Ingredient.of('ars_nouveau:wilden_spike'),Ingredient.of('kubejs:ars_core_t4'),Ingredient.of('ars_nouveau:relay_splitter')], // input items
        160  // exp cost 10lvl
    );

    // **Need T5**
    // Super heat rune
    event.remove({id:'ars_technica:glyph_superheat'});
    event.recipes.ars_nouveau.glyph(
        'ars_technica:glyph_superheat', // output item (glyph)
        [Ingredient.of('minecraft:blaze_rod'),Ingredient.of('ars_nouveau:fire_essence'),Ingredient.of('kubejs:ars_core_t5'),Ingredient.of('ars_nouveau:fire_essence'),Ingredient.of('ars_nouveau:fire_essence'),Ingredient.of('create:blaze_cake')], // input items
        160  // exp cost 30lvl
    );

    //Jar of voiding
    event.remove({id:'ars_nouveau:void_jar'});
    event.recipes.ars_nouveau.enchanting_apparatus(
        ['minecraft:ender_pearl', 'ars_nouveau:allow_scroll', 'minecraft:bucket', 'kubejs:ars_core_t5','minecraft:lava_bucket'], // input items
        'ars_nouveau:source_jar', // reagent
        'ars_nouveau:void_jar', // output
        0 // source cost
        // true // keep nbt of reagent, think like a smithing recipe
    ).replaceIngredient('minecraft:lava_bucket', 'minecraft:bucket');

});