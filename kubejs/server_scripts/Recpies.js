ServerEvents.recipes(e =>{
    //<---------- 机械动力 ---------->
    const create = e.recipes.create

    //<---------- TACZ ---------->
    e.replaceInput({output:'tacz:gun_smith_table'},'minecraft:iron_ingot', 'create:iron_sheet')
    e.replaceInput({output:'tacz:workbench_c'},'minecraft:iron_ingot', 'create:iron_sheet')
    e.replaceInput({output:'tacz:workbench_a'},'minecraft:iron_ingot', 'create:iron_sheet')
    //<---------- 沉浸式飞机 ---------->
    e.remove({output: '@immersive_aircraft'})
})