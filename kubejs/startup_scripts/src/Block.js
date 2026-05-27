StartupEvents.registry("block", e => {
    e.create("andesite_original_ore_rock") // 关键修改：删除了后面的 "basic"
    .soundType('amethyst')
    .unbreakable()
})