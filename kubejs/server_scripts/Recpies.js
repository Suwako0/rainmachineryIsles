ServerEvents.recipes(e =>{
    //<---------- 机械动力 ---------->
    const create = e.recipes.create
    const incomplete = 'create:incomplete_precision_mechanism'
    create.sequenced_assembly(
        [
        CreateItem.of("kubejs:bullet_parts"),
        ],
        //输出列表，最上面的为主产物，下面的为副产物
        'minecraft:copper_ingot',
        //输入物品
        [
        //参与的机器，有四种可选
        //输入输出物品均为半成品物品
        //机械手，可物品不消耗
        //动力锯
        //注液器
        //辊压机
        create.deploying(incomplete,[incomplete,'northstar:iron_cogwheel']).keepHeldItem(),
        create.cutting(incomplete,incomplete),
        //create.filling(incomplete,[incomplete,Fluid.water(1000)]),
        create.pressing(incomplete,incomplete)
        ]
        )
        .transitionalItem(incomplete)
        //半成品物品
        .loops(3)
        //循环次数，默认为5

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