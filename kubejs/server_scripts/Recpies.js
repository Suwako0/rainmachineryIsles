ServerEvents.recipes(e =>{
    //<---------- 机械动力 ---------->
    const create = e.recipes.create

    //<---------- TACZ ---------->
    e.replaceInput({output:'tacz:gun_smith_table'},'minecraft:iron_ingot', 'create:iron_sheet')
    e.replaceInput({output:'tacz:workbench_c'},'minecraft:iron_ingot', 'create:iron_sheet')
    e.replaceInput({output:'tacz:workbench_a'},'minecraft:iron_ingot', 'create:iron_sheet')

    //<---------- 沉浸式飞机 ---------->
    e.remove({output: '@immersive_aircraft'})

    //<---------- KubeJS ---------->
    e.shaped('minecraft:andesite', [
        'AAA',
        'AAA',
        'AAA'
    ], {
        A: 'kubejs:andesite_dust'
    });
    e.shaped('minecraft:raw_iron', [
        'AAA',
        'AAA',
        'AAA'
    ], {
        A: 'kubejs:iron_ore_dust'
    });
    e.shaped('minecraft:raw_copper', [
        'AAA',
        'AAA',
        'AAA'
    ], {
        A: 'kubejs:copper_ore_dust'
    });
    e.shaped('create:raw_zinc', [
        'AAA',
        'AAA',
        'AAA'
    ], {
        A: 'kubejs:zinc_ore_dust'
    });
    e.shaped('minecraft:lapis_lazuli', [
        'AAA',
        'AAA',
        'AAA'
    ], {
        A: 'kubejs:lapis_ore_dust'
    });
});