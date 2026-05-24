ServerEvents.recipes(event => {
    event.shaped(Item.of('kubejs:convergence_manual_binding',1), ['PSP','LBL','PSP'], {P:'minecraft:paper', S:'minecraft:string', L:'minecraft:leather', B:'minecraft:book'});
    event.shapeless(Item.of('patchouli:guide_book[patchouli:book="patchouli:convergence_manual"]',1), ['minecraft:book','minecraft:compass','kubejs:convergence_manual_binding']);
});
