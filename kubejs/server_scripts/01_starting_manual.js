// Convergence v0.12 - give the actual Patchouli guide book using 1.21 component command syntax.
// The old v0.11 KubeJS Item.of NBT stack created a guide_book item that could exist but not open reliably.
PlayerEvents.loggedIn(event => {
  const p = event.player
  if (!p.persistentData.convergenceManualV12) {
    try {
      event.server.runCommandSilent(`execute as ${p.username} run give @s patchouli:guide_book[patchouli:book="patchouli:convergence_manual"]`)
      p.persistentData.convergenceManualV12 = true
      p.tell(Text.gold('Convergence Manual added. Open it for the progression book.'))
    } catch (e) {
      p.tell(Text.red('Convergence Manual could not be given automatically. Craft it with Book + Compass + Manual Binding.'))
    }
  }
})
