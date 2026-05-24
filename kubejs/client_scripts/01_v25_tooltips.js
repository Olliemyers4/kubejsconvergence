// Convergence v0.25 tooltips
ItemEvents.modifyTooltips(event => {
  event.add(/kubejs:.*_core_t\d+/, Text.gray('Core progression item: gates local-path recipes at this tier.'))
  event.add(/kubejs:bridge_matrix_t\d+/, Text.gray('Bridge progression item: optional catch-up route into lower-tier recipes from other paths.'))
  event.add('kubejs:convergence_manual_binding', Text.gray('Crafting component for the Convergence Manual, which unlocks the core progression system.'))
})
