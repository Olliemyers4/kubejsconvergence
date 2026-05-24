// Convergence v0.25 - stable core/bridge progression recipes.
(() => {
  const DATA = {
  "paths": {
    "create": {
      "tiers": 6,
      "label": "Create"
    },
    "ars": {
      "tiers": 6,
      "label": "Ars Nouveau"
    },
    "ae2": {
      "tiers": 6,
      "label": "AE2"
    },
    "energy": {
      "tiers": 7,
      "label": "Energy"
    },
    "industry": {
      "tiers": 6,
      "label": "Industry"
    },
    "occult": {
      "tiers": 6,
      "label": "Occultism"
    },
    "agriculture": {
      "tiers": 8,
      "label": "Agriculture"
    },
    "cuisine": {
      "tiers": 4,
      "label": "Cuisine"
    },
    "exploration": {
      "tiers": 4,
      "label": "Exploration"
    },
    "aero": {
      "tiers": 6,
      "label": "Aero"
    },
    "travel": {
      "tiers": 4,
      "label": "Travel"
    },
    "infra": {
      "tiers": 4,
      "label": "Infrastructure"
    }
  },
  "core_ing": {
    "create": [
      [
        "create:andesite_alloy",
        "create:shaft",
        "create:cogwheel",
        "create:andesite_casing"
      ],
      [
        "create:mechanical_press",
        "create:mechanical_mixer",
        "create:basin",
        "create:belt_connector"
      ],
      [
        "create:deployer",
        "create:mechanical_crafter",
        "create:brass_casing",
        "create:electron_tube"
      ],
      [
        "create:precision_mechanism",
        "create:mechanical_arm",
        "create:rotation_speed_controller",
        "create:display_link"
      ],
      [
        "create:schematicannon",
        "create:track_station",
        "create:track_signal",
        "create:steam_engine"
      ],
      [
        "create:track_observer",
        "create:elevator_pulley",
        "create:cart_assembler",
        "create:sturdy_sheet"
      ]
    ],
    "ars": [
      [
        "ars_nouveau:source_gem",
        "ars_nouveau:blank_parchment",
        "ars_nouveau:sourcestone",
        "ars_nouveau:magebloom_fiber"
      ],
      [
        "ars_nouveau:imbuement_chamber",
        "ars_nouveau:source_jar",
        "ars_nouveau:arcane_pedestal",
        "ars_nouveau:arcane_core"
      ],
      [
        "ars_nouveau:enchanting_apparatus",
        "ars_nouveau:spell_prism",
        "ars_nouveau:relay",
        "ars_nouveau:source_gem_block"
      ],
      [
        "ars_nouveau:ritual_brazier",
        "ars_nouveau:wixie_charm",
        "ars_nouveau:drygmy_charm",
        "ars_nouveau:mob_jar"
      ],
      [
        "ars_nouveau:bookwyrm_charm",
        "ars_nouveau:apprentice_spell_book",
        "ars_elemental:advanced_prism",
        "ars_additions:ender_source_jar"
      ],
      [
        "ars_nouveau:archmage_spell_book",
        "arseng:me_source_jar",
        "ars_nouveau:void_jar",
        "ars_additions:ender_source_jar"
      ]
    ],
    "ae2": [
      [
        "ae2:certus_quartz_crystal",
        "ae2:fluix_crystal",
        "ae2:quartz_glass",
        "minecraft:redstone"
      ],
      [
        "ae2:inscriber",
        "ae2:logic_processor",
        "ae2:calculation_processor",
        "ae2:engineering_processor"
      ],
      [
        "ae2:controller",
        "ae2:annihilation_core",
        "ae2:formation_core",
        "ae2:cell_component_1k"
      ],
      [
        "ae2:molecular_assembler",
        "ae2:pattern_provider",
        "ae2:crafting_unit",
        "ae2:cell_component_4k"
      ],
      [
        "ae2:wireless_receiver",
        "ae2:wireless_access_point",
        "ae2:cell_component_16k",
        "ae2:fluix_pearl"
      ],
      [
        "ae2:quantum_link",
        "ae2:quantum_ring",
        "ae2:singularity",
        "ae2:spatial_io_port"
      ]
    ],
    "energy": [
      [
        "mekanism:ingot_osmium",
        "powah:dielectric_paste",
        "minecraft:redstone",
        "minecraft:iron_ingot"
      ],
      [
        "mekanism:metallurgic_infuser",
        "mekanism:basic_control_circuit",
        "mekanism:alloy_infused",
        "powah:energizing_rod_starter"
      ],
      [
        "mekanism:steel_casing",
        "mekanism:advanced_control_circuit",
        "powah:capacitor_basic",
        "powah:energy_cell_basic"
      ],
      [
        "mekanism:elite_control_circuit",
        "mekanism:energy_tablet",
        "powah:crystal_blazing",
        "powah:energizing_rod_hardened"
      ],
      [
        "mekanism:ultimate_control_circuit",
        "mekanism:teleportation_core",
        "powah:crystal_niotic",
        "fluxnetworks:flux_dust"
      ],
      [
        "mekanism:teleporter",
        "mekanism:qio_drive_base",
        "powah:energizing_rod_niotic",
        "powah:crystal_niotic"
      ],
      [
        "mekanism:digital_miner",
        "mekanism:ultimate_energy_cube",
        "powah:battery_nitro",
        "fluxnetworks:flux_controller"
      ]
    ],
    "industry": [
      [
        "immersiveengineering:component_iron",
        "immersiveengineering:treated_wood_horizontal",
        "immersiveengineering:wirecoil_copper",
        "immersiveengineering:hammer"
      ],
      [
        "immersiveengineering:cokebrick",
        "immersiveengineering:ingot_steel",
        "immersiveengineering:component_steel",
        "immersiveengineering:rs_engineering"
      ],
      [
        "immersiveengineering:workbench",
        "immersiveengineering:fluid_pipe",
        "industrialforegoing:plastic",
        "industrialforegoing:machine_frame_pity"
      ],
      [
        "immersiveengineering:cloche",
        "immersiveengineering:basic_engineering",
        "industrialforegoing:machine_frame_simple",
        "immersiveengineering:light_bulb"
      ],
      [
        "industrialforegoing:machine_frame_advanced",
        "industrialforegoing:dissolution_chamber",
        "immersiveengineering:heavy_engineering",
        "immersiveengineering:generator"
      ],
      [
        "industrialforegoing:laser_drill",
        "industrialforegoing:ore_laser_base",
        "immersiveengineering:drill",
        "immersiveengineering:graphite_electrode"
      ]
    ],
    "occult": [
      [
        "minecraft:gold_ingot",
        "minecraft:book",
        "minecraft:candle",
        "minecraft:amethyst_shard"
      ],
      [
        "occultism:spirit_attuned_gem",
        "occultism:otherstone",
        "occultism:chalk_white",
        "occultism:candle_white"
      ],
      [
        "occultism:storage_controller_base",
        "occultism:chalk_purple",
        "occultism:otherstone_pedestal",
        "enderio:grains_of_infinity"
      ],
      [
        "occultism:storage_controller",
        "occultism:storage_remote",
        "occultism:iesnium_ingot",
        "occultism:stable_wormhole"
      ],
      [
        "enderio:travel_anchor",
        "enderio:conduit_binder",
        "occultism:stable_wormhole",
        "occultism:iesnium_ingot"
      ],
      [
        "enderio:powered_spawner",
        "occultism:stable_wormhole",
        "occultism:iesnium_block",
        "enderio:vibrant_crystal"
      ]
    ],
    "agriculture": [
      [
        "mysticalagriculture:inferium_essence",
        "mysticalagriculture:prosperity_shard",
        "minecraft:wheat_seeds",
        "minecraft:dirt"
      ],
      [
        "mysticalagriculture:infusion_altar",
        "mysticalagriculture:infusion_pedestal",
        "mysticalagriculture:inferium_farmland",
        "productivebees:honey_treat"
      ],
      [
        "mysticalagriculture:prudentium_essence",
        "mysticalagriculture:prudentium_farmland",
        "botanypots:terracotta_botany_pot",
        "productivebees:centrifuge"
      ],
      [
        "mysticalagriculture:tertium_essence",
        "mysticalagriculture:tertium_farmland",
        "botanypots:hopper_botany_pot",
        "productivebees:advanced_oak_beehive"
      ],
      [
        "mysticalagriculture:imperium_essence",
        "mysticalagriculture:imperium_farmland",
        "productivebees:powered_centrifuge",
        "productivebees:gene_indexer"
      ],
      [
        "mysticalagriculture:supremium_essence",
        "mysticalagriculture:supremium_farmland",
        "productivebees:expansion_box_oak",
        "productivebees:upgrade_productivity"
      ],
      [
        "mysticalagriculture:master_infusion_crystal",
        "mysticalagriculture:awakened_supremium_essence",
        "mysticalagriculture:awakened_supremium_block",
        "productivebees:upgrade_productivity_4"
      ],
      [
        "mysticalagradditions:insanium_essence",
        "mysticalagradditions:insanium_ingot",
        "productivebees:gene_indexer",
        "mysticalagriculture:awakened_supremium_block"
      ]
    ],
    "cuisine": [
      [
        "farmersdelight:cutting_board",
        "farmersdelight:skillet",
        "minecraft:bread",
        "farmersdelight:canvas"
      ],
      [
        "farmersdelight:cooking_pot",
        "farmersdelight:stove",
        "farmersdelight:rich_soil",
        "farmersdelight:cabbage_crate"
      ],
      [
        "cookingforblockheads:cooking_table",
        "farmersdelight:cabbage_crate",
        "farmersdelight:tomato_crate",
        "farmersdelight:onion_crate"
      ],
      [
        "sliceanddice:slicer",
        "cookingforblockheads:white_fridge",
        "cookingforblockheads:white_oven",
        "cookingforblockheads:white_sink"
      ]
    ],
    "exploration": [
      [
        "minecraft:map",
        "minecraft:paper",
        "minecraft:gold_ingot",
        "minecraft:string"
      ],
      [
        "minecraft:compass",
        "minecraft:spyglass",
        "minecraft:diamond",
        "minecraft:name_tag"
      ],
      [
        "minecraft:totem_of_undying",
        "minecraft:ender_eye",
        "minecraft:experience_bottle",
        "minecraft:emerald"
      ],
      [
        "minecraft:nether_star",
        "minecraft:dragon_breath",
        "minecraft:end_crystal",
        "minecraft:elytra"
      ]
    ],
    "aero": [
      [
        "minecraft:white_wool",
        "minecraft:string",
        "minecraft:leather",
        "create:shaft"
      ],
      [
        "createpropulsion:stirling_engine",
        "create:copper_sheet",
        "create:cogwheel",
        "create:shaft"
      ],
      [
        "createpropulsion:thruster",
        "createpropulsion:wing",
        "create:brass_ingot",
        "create:precision_mechanism"
      ],
      [
        "createpropulsion:liquid_vector_thruster",
        "createpropulsion:platinum_casing",
        "simulated:gimbal_sensor",
        "create:sturdy_sheet"
      ],
      [
        "createpropulsion:ion_thruster",
        "createpropulsion:redstone_transmission",
        "ae2:calculation_processor",
        "create:display_link"
      ],
      [
        "createbigcannons:cannon_mount",
        "createbigcannons:cannon_builder",
        "createbigcannons:cast_iron_ingot",
        "create:mechanical_arm"
      ]
    ],
    "travel": [
      [
        "waystones:warp_dust",
        "minecraft:ender_pearl",
        "minecraft:obsidian",
        "minecraft:amethyst_shard"
      ],
      [
        "waystones:warp_stone",
        "waystones:waystone",
        "waystones:warp_scroll",
        "minecraft:ender_eye"
      ],
      [
        "compactmachines:wall",
        "waystones:waystone",
        "minecraft:ender_chest",
        "minecraft:chorus_fruit"
      ],
      [
        "compactmachines:personal_shrinking_device",
        "ae2:spatial_cell_component_2",
        "waystones:warp_plate",
        "minecraft:lodestone"
      ]
    ],
    "infra": [
      [
        "minecraft:stone_bricks",
        "minecraft:bricks",
        "minecraft:glass",
        "minecraft:iron_ingot"
      ],
      [
        "storagedrawers:oak_full_drawers_1",
        "sophisticatedstorage:barrel",
        "ironchest:iron_chest",
        "minecraft:comparator"
      ],
      [
        "storagedrawers:controller",
        "sophisticatedstorage:controller",
        "minecraft:redstone",
        "minecraft:diamond"
      ],
      [
        "buildinggadgets2:gadget_building",
        "buildinggadgets2:gadget_exchanging",
        "minecraft:lapis_lazuli",
        "minecraft:ender_pearl"
      ]
    ]
  },
  "gates": {
    "create": {
      "1": [
        "create:mechanical_press",
        "create:mechanical_mixer",
        "create:millstone",
        "create:mechanical_saw",
        "create:mechanical_drill",
        "create:basin"
      ],
      "2": [
        "create:deployer",
        "create:mechanical_crafter",
        "create:brass_casing",
        "create:electron_tube",
        "create:portable_storage_interface"
      ],
      "3": [
        "create:precision_mechanism",
        "create:mechanical_arm",
        "create:rotation_speed_controller",
        "create:display_link"
      ],
      "4": [
        "create:schematicannon",
        "create:track_station",
        "create:track_signal",
        "create:track_observer",
        "create:steam_engine"
      ],
      "5": [
        "create:elevator_pulley",
        "create:cart_assembler",
        "create:controls",
        "create:schematic_table"
      ],
      "6": [
        "createaddition:electric_motor",
        "createdieselgenerators:diesel_engine",
        "create:crushing_wheel"
      ]
    },
    "ars": {
      "1": [
        "ars_nouveau:imbuement_chamber",
        "ars_nouveau:source_jar",
        "ars_nouveau:arcane_pedestal",
        "ars_nouveau:arcane_core"
      ],
      "2": [
        "ars_nouveau:enchanting_apparatus",
        "ars_nouveau:spell_prism",
        "ars_nouveau:relay",
        "ars_nouveau:source_gem_block"
      ],
      "3": [
        "ars_nouveau:ritual_brazier",
        "ars_nouveau:wixie_charm",
        "ars_nouveau:drygmy_charm",
        "ars_nouveau:mob_jar"
      ],
      "4": [
        "ars_nouveau:bookwyrm_charm",
        "ars_nouveau:apprentice_spell_book",
        "ars_elemental:advanced_prism"
      ],
      "5": [
        "ars_nouveau:archmage_spell_book",
        "arseng:me_source_jar",
        "ars_nouveau:void_jar"
      ],
      "6": [
        "ars_nouveau:ritual_flight"
      ]
    },
    "ae2": {
      "1": [
        "ae2:inscriber",
        "ae2:charger",
        "ae2:energy_acceptor",
        "ae2:fluix_glass_cable"
      ],
      "2": [
        "ae2:controller",
        "ae2:annihilation_core",
        "ae2:formation_core",
        "ae2:cell_component_1k"
      ],
      "3": [
        "ae2:molecular_assembler",
        "ae2:pattern_provider",
        "ae2:crafting_unit",
        "ae2:cell_component_4k"
      ],
      "4": [
        "ae2:wireless_receiver",
        "ae2:wireless_access_point",
        "ae2:cell_component_16k"
      ],
      "5": [
        "ae2:quantum_link",
        "ae2:quantum_ring",
        "ae2:spatial_io_port"
      ],
      "6": [
        "ae2:item_storage_cell_256k",
        "ae2:256k_crafting_storage"
      ]
    },
    "energy": {
      "1": [
        "mekanism:metallurgic_infuser",
        "mekanism:basic_control_circuit",
        "powah:energizing_rod_starter",
        "powah:energy_cell_starter"
      ],
      "2": [
        "mekanism:steel_casing",
        "mekanism:advanced_control_circuit",
        "powah:energizing_rod_basic",
        "powah:energy_cell_basic"
      ],
      "3": [
        "mekanism:elite_control_circuit",
        "mekanism:energy_tablet",
        "powah:energizing_rod_hardened"
      ],
      "4": [
        "mekanism:ultimate_control_circuit",
        "mekanism:teleportation_core",
        "powah:energizing_rod_blazing"
      ],
      "5": [
        "mekanism:teleporter",
        "mekanism:qio_dashboard",
        "mekanism:qio_drive_base",
        "powah:energizing_rod_niotic"
      ],
      "6": [
        "mekanism:digital_miner",
        "mekanism:ultimate_energy_cube",
        "powah:energizing_rod_spirited"
      ],
      "7": [
        "mekanism:qio_drive_time_dilating"
      ]
    },
    "industry": {
      "1": [
        "immersiveengineering:cokebrick",
        "immersiveengineering:blastbrick",
        "immersiveengineering:workbench",
        "immersiveengineering:conveyor_basic"
      ],
      "2": [
        "immersiveengineering:assembler",
        "immersiveengineering:cloche",
        "industrialforegoing:machine_frame_pity"
      ],
      "3": [
        "industrialforegoing:machine_frame_simple",
        "industrialforegoing:plant_sower",
        "industrialforegoing:plant_gatherer"
      ],
      "4": [
        "industrialforegoing:machine_frame_advanced",
        "industrialforegoing:dissolution_chamber",
        "immersiveengineering:generator"
      ],
      "5": [
        "industrialforegoing:laser_drill",
        "industrialforegoing:ore_laser_base",
        "immersiveengineering:drill"
      ],
      "6": [
        "industrialforegoing:machine_frame_supreme",
        "industrialforegoing:infinity_drill",
        "immersiveengineering:tesla_coil"
      ]
    },
    "occult": {
      "1": [
        "occultism:spirit_attuned_gem",
        "occultism:otherstone",
        "occultism:chalk_white",
        "occultism:otherstone_pedestal"
      ],
      "2": [
        "occultism:storage_controller_base",
        "occultism:chalk_gold",
        "occultism:chalk_purple"
      ],
      "3": [
        "occultism:storage_controller",
        "occultism:storage_remote",
        "occultism:stable_wormhole"
      ],
      "4": [
        "enderio:travel_anchor",
        "enderio:conduit_binder",
        "enderio:item_conduit"
      ],
      "5": [
        "enderio:powered_spawner",
        "enderio:vibrant_crystal"
      ],
      "6": [
        "enderio:dimensional_transceiver"
      ]
    },
    "agriculture": {
      "1": [
        "mysticalagriculture:infusion_altar",
        "mysticalagriculture:infusion_pedestal",
        "mysticalagriculture:inferium_farmland",
        "botanypots:terracotta_botany_pot"
      ],
      "2": [
        "mysticalagriculture:prudentium_essence",
        "productivebees:centrifuge",
        "mysticalagriculture:prudentium_farmland"
      ],
      "3": [
        "mysticalagriculture:tertium_essence",
        "botanypots:hopper_botany_pot",
        "productivebees:advanced_oak_beehive"
      ],
      "4": [
        "mysticalagriculture:imperium_essence",
        "productivebees:powered_centrifuge"
      ],
      "5": [
        "mysticalagriculture:supremium_essence"
      ],
      "6": [
        "mysticalagriculture:master_infusion_crystal"
      ],
      "7": [
        "mysticalagradditions:insanium_essence"
      ],
      "8": [
        "mysticalagradditions:insanium_block"
      ]
    },
    "cuisine": {
      "1": [
        "farmersdelight:cooking_pot",
        "farmersdelight:stove"
      ],
      "2": [
        "cookingforblockheads:cooking_table"
      ],
      "3": [
        "sliceanddice:slicer",
        "cookingforblockheads:white_fridge",
        "cookingforblockheads:white_oven"
      ],
      "4": [
        "cookingforblockheads:preservation_chamber",
        "cookingforblockheads:spice_rack"
      ]
    },
    "exploration": {
      "1": [
        "minecraft:spyglass",
        "minecraft:compass"
      ],
      "2": [
        "minecraft:ender_eye",
        "minecraft:experience_bottle"
      ],
      "3": [
        "minecraft:ancient_debris"
      ],
      "4": []
    },
    "aero": {
      "1": [
        "createpropulsion:stirling_engine",
        "createpropulsion:solid_burner",
        "simulated:rope_connector"
      ],
      "2": [
        "createpropulsion:thruster",
        "createpropulsion:wing",
        "simulated:rope_winch"
      ],
      "3": [
        "createpropulsion:liquid_vector_thruster",
        "createpropulsion:tilt_adapter",
        "simulated:gimbal_sensor"
      ],
      "4": [
        "createpropulsion:ion_thruster",
        "createpropulsion:redstone_transmission",
        "simulated:docking_connector"
      ],
      "5": [
        "createbigcannons:cannon_mount",
        "createbigcannons:cannon_builder"
      ],
      "6": [
        "createbigcannons:autocannon_ammo_container"
      ]
    },
    "travel": {
      "1": [
        "waystones:waystone",
        "waystones:warp_stone",
        "waystones:warp_scroll"
      ],
      "2": [
        "waystones:warp_plate",
        "compactmachines:new_machine_tiny",
        "compactmachines:new_machine_small"
      ],
      "3": [
        "compactmachines:personal_shrinking_device",
        "compactmachines:new_machine_normal"
      ],
      "4": [
        "compactmachines:enlarging_module",
        "compactmachines:new_machine_large"
      ]
    },
    "infra": {
      "1": [
        "storagedrawers:oak_full_drawers_1",
        "sophisticatedstorage:barrel",
        "ironchest:iron_chest"
      ],
      "2": [
        "storagedrawers:controller",
        "sophisticatedstorage:controller",
        "sophisticatedbackpacks:backpack"
      ],
      "3": [
        "buildinggadgets2:gadget_building",
        "buildinggadgets2:gadget_exchanging"
      ],
      "4": [
        "buildinggadgets2:gadget_copy_paste",
        "buildinggadgets2:gadget_destruction"
      ]
    }
  }
};
  function C(path, tier) { return `kubejs:${path}_core_t${tier}`; }
  function B(tier) { return `kubejs:bridge_matrix_t${Math.max(1, Math.min(8, tier))}`; }
  function supp(path, tier) { return `#kubejs:v25_supp_${path}_tier_${tier}`; }
  function rid(s) { return 'kubejs:v25_' + String(s).replace(/[^a-z0-9_]+/g, '_').toLowerCase(); }
  function itemId(v) { if (typeof v !== 'string' || v.startsWith('#')) return null; const m = v.match(/^(?:\d+x\s+)?([a-z0-9_.-]+:[a-z0-9_/.-]+)$/); return m ? m[1] : null; }
  function itemExists(v) { const id = itemId(v); if (!id) return true; try { return Item.exists(id); } catch (e) { return false; } }
  function ok(arr) { return arr.every(v => Array.isArray(v) ? ok(v) : itemExists(v)); }
  function shaped(event, output, pattern, keys, id) {
    if (!itemExists(output) || !ok(Object.values(keys))) { console.log('[Convergence v0.25] skipped missing '+id); return; }
    try { event.shaped(output, pattern, keys).id(rid(id)); } catch (e) { console.log('[Convergence v0.25] skipped shaped '+id+': '+e); }
  }
  function removeOutput(event, output) { if (itemExists(output)) { try { event.remove({ output: output }); } catch (e) {} } }
  ServerEvents.recipes(event => {
    console.log('[Convergence v0.25] loading stable audited core/bridge progression');
    try { event.remove({ id: /^kubejs:v23_/ }); event.remove({ id: /^kubejs:v24_/ }); event.remove({ id: /^kubejs:v25_/ }); } catch (e) {}
    Object.entries(DATA.core_ing).forEach(([path, tiers]) => {
      tiers.forEach((items, idx) => {
        const tier = idx + 1; const k = { A: items[0], B: items[1], C: items[2], D: items[3] || items[0] }; let pattern;
        if (tier > 1) k.P = C(path, tier - 1);
        if (tier >= 4 && tier <= 6) k.S = supp(path, Math.max(1, tier - 3));
        if (tier >= 7) { k.S = supp(path, Math.max(1, tier - 3)); k.T = supp(path, Math.max(1, tier - 5)); }
        if (tier === 1) pattern = ['ABA','CDC','ABA']; else if (tier <= 3) pattern = ['ABA','CPC','ADA']; else if (tier <= 6) pattern = ['ABA','CPC','SDS']; else pattern = ['ASA','CPC','TDT'];
        shaped(event, C(path, tier), pattern, k, `${path}_core_t${tier}`);
      });
    });
    const pairs = [['create','ars'], ['ae2','energy'], ['industry','occult'], ['agriculture','cuisine'], ['aero','travel'], ['exploration','infra'], ['create','ae2'], ['energy','industry'], ['ars','occult'], ['agriculture','industry']];
    for (let t = 1; t <= 8; t++) pairs.forEach((pair, i) => { const [a,b] = pair; if ((DATA.paths[a]?.tiers||0) >= t && (DATA.paths[b]?.tiers||0) >= t) { const k = { A:C(a,t), B:C(b,t), R:'minecraft:redstone', L:'minecraft:lapis_lazuli', P: t > 1 ? B(t-1) : 'minecraft:diamond' }; shaped(event, B(t), ['ARA','BPB','ALA'], k, `bridge_matrix_t${t}_${a}_${b}_${i}`); } });
    const bridgeMilestones = [
      ['kubejs:source_treated_alloy', ['create:andesite_alloy','ars_nouveau:source_gem','minecraft:copper_ingot','minecraft:lapis_lazuli'], 'bridge_source_treated_alloy'],
      ['kubejs:arcane_mechanism', ['create:precision_mechanism','ars_nouveau:source_gem','kubejs:bridge_matrix_t2','minecraft:gold_ingot'], 'bridge_arcane_mechanism'],
      ['kubejs:runic_logic_processor', ['ae2:logic_processor','ars_nouveau:source_gem','kubejs:bridge_matrix_t3','ae2:fluix_crystal'], 'bridge_runic_logic_processor'],
      ['kubejs:energized_control_circuit', ['mekanism:advanced_control_circuit','powah:capacitor_basic','kubejs:bridge_matrix_t3','minecraft:redstone'], 'bridge_energized_control_circuit'],
      ['kubejs:industrial_servo', ['immersiveengineering:component_steel','industrialforegoing:plastic','kubejs:bridge_matrix_t4','create:precision_mechanism'], 'bridge_industrial_servo'],
      ['kubejs:spirit_actuator', ['occultism:spirit_attuned_gem','enderio:grains_of_infinity','kubejs:bridge_matrix_t4','ars_nouveau:source_gem'], 'bridge_spirit_actuator'],
      ['kubejs:verdant_automation_core', ['mysticalagriculture:prudentium_essence','productivebees:honey_treat','farmersdelight:rich_soil','kubejs:bridge_matrix_t3'], 'bridge_verdant_automation_core'],
      ['kubejs:resonant_machine_frame', ['industrialforegoing:machine_frame_simple','kubejs:energized_control_circuit','kubejs:industrial_servo','kubejs:bridge_matrix_t5'], 'bridge_resonant_machine_frame'],
      ['kubejs:dimensional_matrix', ['ae2:quantum_link','occultism:stable_wormhole','waystones:warp_stone','kubejs:bridge_matrix_t6'], 'bridge_dimensional_matrix'],
      ['kubejs:unified_automation_core', ['kubejs:resonant_machine_frame','kubejs:dimensional_matrix','kubejs:verdant_automation_core','kubejs:bridge_matrix_t7'], 'bridge_unified_automation_core']
    ];
    bridgeMilestones.forEach(([out, items, id]) => shaped(event, out, ['ABA','CDC','ABA'], {A:items[0], B:items[1], C:items[2], D:items[3]}, id));
    Object.entries(DATA.gates).forEach(([path, tiers]) => Object.entries(tiers).forEach(([tierStr, outputs]) => {
      const tier = Number(tierStr); outputs.forEach((out, idx) => {
        if (!itemExists(out)) return;
        const localItems = DATA.core_ing[path][Math.max(0, Math.min(DATA.core_ing[path].length-1, tier-1))];
        const core = C(path, Math.min(tier, DATA.paths[path].tiers));
        const localKeys = {A:localItems[0], B:localItems[1], C:localItems[2], D:localItems[3]||localItems[0], P:core};
        const bridgeTier = Math.min(8, tier + 1);
        const bridgeKeys = {A:localItems[0], B:localItems[1], C:localItems[2], P:B(bridgeTier)};
        if (!ok(Object.values(localKeys)) || !ok(Object.values(bridgeKeys))) { console.log('[Convergence v0.25] kept original recipe for '+out+' because a gated ingredient is missing'); return; }
        removeOutput(event, out);
        shaped(event, out, ['ABA','CPC','ADA'], localKeys, `${path}_local_t${tier}_${idx}_${out}`);
        shaped(event, out, [' A ','BPB',' C '], bridgeKeys, `${path}_bridge_t${bridgeTier}_to_t${tier}_${idx}_${out}`);
      });
    }));

  });
})();
