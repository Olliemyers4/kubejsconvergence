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

});