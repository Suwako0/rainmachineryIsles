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
        A: 'kubejs:andesite_dust' // 将字母 A 映射为你的自定义安山岩粉
    });
});