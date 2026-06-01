//Tacz魔改太多了，单独开个脚本来处理
ServerEvents.recipes(event => {
    const gunIds = [];
    event.forEachRecipe({}, r => {
        const id = String(r.getId());
        if (id.startsWith('tacz:gun/') || id.startsWith('1001:gun/') || id.startsWith('tacz:ammo/') || id.startsWith('1001:ammo/')) {
            gunIds.push(id);
        }
    });
    gunIds.forEach(id => {
        event.remove({ id: id });
    });


    const create = event.recipes.create
    //手枪
    //孤星手炮
    event.custom({
            "type": "tacz:gun_smith_table_crafting",
            "materials": [
                {
                    "item": {
                        "item": "create:iron_sheet"
                    },
                    "count": 20
                },
                {
                    "item": {
                        "item": "create:golden_sheet"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "create:precision_mechanism"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "kubejs:gun_parts"
                    },
                    "count": 1
                }
            ],
            "result": {
                "type": "gun",
                "id": "tacz:lonetrail",
                "count": 1,
                "attachments": {},
                "ammo_count": 0
            }
        })
    //永恒.50
    event.custom({
            "type": "tacz:gun_smith_table_crafting",
            "materials": [
                {
                    "item": {
                        "item": "minecraft:diamond"
                    },
                    "count": 1
                },
                {
                    "item": {
                        "item": "create:iron_sheet"
                    },
                    "count": 24
                },
                {
                    "item": {
                        "item": "create:golden_sheet"
                    },
                    "count": 3
                },
                {
                    "item": {
                        "item": "create:precision_mechanism"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "kubejs:gun_parts"
                    },
                    "count": 1
                }
            ],
            "result": {
                "type": "gun",
                "id": "tacz:timeless50",
                "count": 1,
                "attachments": {},
                "ammo_count": 0
            }
        })
    //黄金沙鹰
    event.custom({
            "type": "tacz:gun_smith_table_crafting",
            "materials": [
                {
                    "item": {
                        "item": "minecraft:diamond"
                    },
                    "count": 1
                },
                {
                    "item": {
                        "item": "create:iron_sheet"
                    },
                    "count": 8
                },
                {
                    "item": {
                        "item": "create:golden_sheet"
                    },
                    "count": 16
                },
                {
                    "item": {
                        "item": "create:precision_mechanism"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "kubejs:gun_parts"
                    },
                    "count": 1
                }
            ],
            "result": {
                "type": "gun",
                "id": "tacz:deagle_golden",
                "count": 1,
                "attachments": {},
                "ammo_count": 0
            }
        })
    //金牛座手炮
    event.custom({
            "type": "tacz:gun_smith_table_crafting",
            "materials": [
                {
                    "item": {
                        "item": "minecraft:blaze_rod"
                    },
                    "count": 4
                },
                {
                    "item": {
                        "item": "minecraft:diamond"
                    },
                    "count": 1
                },
                {
                    "item": {
                        "item": "create:iron_sheet"
                    },
                    "count": 40
                },
                {
                    "item": {
                        "item": "create:golden_sheet"
                    },
                    "count": 30
                },
                {
                    "item": {
                        "item": "create:precision_mechanism"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "kubejs:gun_parts"
                    },
                    "count": 1
                }
            ],
            "result": {
                "type": "gun",
                "id": "tacz:taurus500",
                "count": 1,
                "attachments": {},
                "ammo_count": 0
            }
        })
    //CZ75
    event.custom({
            "type": "tacz:gun_smith_table_crafting",
            "materials": [
                {
                    "item": {
                        "item": "create:iron_sheet"
                    },
                    "count": 8
                },
                {
                    "item": {
                        "item": "create:precision_mechanism"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "kubejs:gun_parts"
                    },
                    "count": 1
                }
            ],
            "result": {
                "type": "gun",
                "id": "tacz:cz75",
                "count": 1,
                "attachments": {},
                "ammo_count": 0
            }
        })
    //格洛克
    event.custom({
            "type": "tacz:gun_smith_table_crafting",
            "materials": [
                {
                    "item": {
                        "item": "create:iron_sheet"
                    },
                    "count": 8
                },
                {
                    "item": {
                        "item": "create:precision_mechanism"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "kubejs:gun_parts"
                    },
                    "count": 1
                }
            ],
            "result": {
                "type": "gun",
                "id": "tacz:glock_17",
                "count": 1,
                "attachments": {},
                "ammo_count": 0
            }
        })
    //伯莱塔
    event.custom({
            "type": "tacz:gun_smith_table_crafting",
            "materials": [
                {
                    "item": {
                        "item": "create:iron_sheet"
                    },
                    "count": 8
                },
                {
                    "item": {
                        "item": "create:precision_mechanism"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "kubejs:gun_parts"
                    },
                    "count": 1
                }
            ],
            "result": {
                "type": "gun",
                "id": "tacz:m9a4",
                "count": 1,
                "attachments": {},
                "ammo_count": 0
            }
        })
    //MK23
    event.custom({
            "type": "tacz:gun_smith_table_crafting",
            "materials": [
                {
                    "item": {
                        "item": "create:iron_sheet"
                    },
                    "count": 18
                },
                {
                    "item": {
                        "item": "create:golden_sheet"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "create:precision_mechanism"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "kubejs:gun_parts"
                    },
                    "count": 1
                }
            ],
            "result": {
                "type": "gun",
                "id": "tacz:hk_mk23",
                "count": 1,
                "attachments": {},
                "ammo_count": 0
            }
        })
    //狙击枪
    //AW
    event.custom({
            "type": "tacz:gun_smith_table_crafting",
            "materials": [
                {
                    "item": {
                        "item": "minecraft:blaze_rod"
                    },
                    "count": 5
                },
                {
                    "item": {
                        "item": "minecraft:diamond"
                    },
                    "count": 5
                },
                {
                    "item": {
                        "item": "create:iron_sheet"
                    },
                    "count": 100
                },
                {
                    "item": {
                        "item": "create:golden_sheet"
                    },
                    "count": 25
                },
                {
                    "item": {
                        "item": "create:precision_mechanism"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "kubejs:gun_parts"
                    },
                    "count": 1
                }
            ],
            "result": {
                "type": "gun",
                "id": "tacz:ai_awp",
                "count": 1,
                "attachments": {},
                "ammo_count": 0
            }
        })
    //M95
    event.custom({
            "type": "tacz:gun_smith_table_crafting",
            "materials": [
                {
                    "item": {
                        "item": "minecraft:blaze_rod"
                    },
                    "count": 5
                },
                {
                    "item": {
                        "item": "minecraft:diamond"
                    },
                    "count": 15
                },
                {
                    "item": {
                        "item": "minecraft:netherite_ingot"
                    },
                    "count": 3
                },
                {
                    "item": {
                        "item": "create:iron_sheet"
                    },
                    "count": 150
                },
                {
                    "item": {
                        "item": "create:golden_sheet"
                    },
                    "count": 32
                },
                {
                    "item": {
                        "item": "create:precision_mechanism"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "kubejs:gun_parts"
                    },
                    "count": 1
                }
            ],
            "result": {
                "type": "gun",
                "id": "tacz:m95",
                "count": 1,
                "attachments": {},
                "ammo_count": 0
            }
        })
    //M107
    event.custom({
            "type": "tacz:gun_smith_table_crafting",
            "materials": [
                {
                    "item": {
                        "item": "minecraft:blaze_rod"
                    },
                    "count": 5
                },
                {
                    "item": {
                        "item": "minecraft:diamond"
                    },
                    "count": 18
                },
                {
                    "item": {
                        "item": "minecraft:netherite_ingot"
                    },
                    "count": 3
                },
                {
                    "item": {
                        "item": "create:iron_sheet"
                    },
                    "count": 180
                },
                {
                    "item": {
                        "item": "create:precision_mechanism"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "kubejs:gun_parts"
                    },
                    "count": 1
                }
            ],
            "result": {
                "type": "gun",
                "id": "tacz:m107",
                "count": 1,
                "attachments": {},
                "ammo_count": 0
            }
        })
    //春田1873
    event.custom({
            "type": "tacz:gun_smith_table_crafting",
            "materials": [
                {
                    "item": {
                        "tag": "minecraft:logs"
                    },
                    "count": 10
                },
                {
                    "item": {
                        "item": "create:iron_sheet"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "create:precision_mechanism"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "kubejs:gun_parts"
                    },
                    "count": 1
                }
            ],
            "result": {
                "type": "gun",
                "id": "tacz:springfield1873",
                "count": 1,
                "attachments": {},
                "ammo_count": 0
            }
        })
    //98k
    event.custom({
            "type": "tacz:gun_smith_table_crafting",
            "materials": [
                {
                    "item": {
                        "tag": "minecraft:logs"
                    },
                    "count": 40
                },
                {
                    "item": {
                        "item": "create:iron_sheet"
                    },
                    "count": 14
                },
                {
                    "item": {
                        "item": "create:golden_sheet"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "create:precision_mechanism"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "kubejs:gun_parts"
                    },
                    "count": 1
                }
            ],
            "result": {
                "type": "gun",
                "id": "tacz:kar98",
                "count": 1,
                "attachments": {},
                "ammo_count": 0
            }
        })
    //步枪
    //M4A1
    event.custom({
            "type": "tacz:gun_smith_table_crafting",
            "materials": [
                {
                    "item": {
                        "tag": "minecraft:logs"
                    },
                    "count": 8
                },
                {
                    "item": {
                        "item": "create:iron_sheet"
                    },
                    "count": 19
                },
                {
                    "item": {
                        "item": "create:precision_mechanism"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "kubejs:gun_parts"
                    },
                    "count": 1
                }
            ],
            "result": {
                "type": "gun",
                "id": "tacz:m4a1",
                "count": 1,
                "attachments": {},
                "ammo_count": 0
            }
        })
    //81-1式
    event.custom({
            "type": "tacz:gun_smith_table_crafting",
            "materials": [
                {
                    "item": {
                        "tag": "minecraft:logs"
                    },
                    "count": 10
                },
                {
                    "item": {
                        "item": "create:iron_sheet"
                    },
                    "count": 14
                },
                {
                    "item": {
                        "item": "create:precision_mechanism"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "kubejs:gun_parts"
                    },
                    "count": 1
                }
            ],
            "result": {
                "type": "gun",
                "id": "tacz:type_81",
                "count": 1,
                "attachments": {},
                "ammo_count": 0
            }
        })
    //SPR
    event.custom({
            "type": "tacz:gun_smith_table_crafting",
            "materials": [
                {
                    "item": {
                        "item": "minecraft:blaze_rod"
                    },
                    "count": 5
                },
                {
                    "item": {
                        "item": "minecraft:diamond"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "create:iron_sheet"
                    },
                    "count": 36
                },
                {
                    "item": {
                        "item": "create:golden_sheet"
                    },
                    "count": 4
                },
                {
                    "item": {
                        "item": "create:precision_mechanism"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "kubejs:gun_parts"
                    },
                    "count": 1
                }
            ],
            "result": {
                "type": "gun",
                "id": "tacz:spr15hb",
                "count": 1,
                "attachments": {},
                "ammo_count": 0
            }
        })
    //AUG
    event.custom({
            "type": "tacz:gun_smith_table_crafting",
            "materials": [
                {
                    "item": {
                        "tag": "minecraft:logs"
                    },
                    "count": 6
                },
                {
                    "item": {
                        "item": "minecraft:amethyst_shard"
                    },
                    "count": 1
                },
                {
                    "item": {
                        "item": "create:iron_sheet"
                    },
                    "count": 20
                },
                {
                    "item": {
                        "item": "create:precision_mechanism"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "kubejs:gun_parts"
                    },
                    "count": 1
                }
            ],
            "result": {
                "type": "gun",
                "id": "tacz:aug",
                "count": 1,
                "attachments": {},
                "ammo_count": 0
            }
        })
    //腾龙
    event.custom({
            "type": "tacz:gun_smith_table_crafting",
            "materials": [
                {
                    "item": {
                        "item": "minecraft:quartz"
                    },
                    "count": 8
                },
                {
                    "item": {
                        "item": "create:iron_sheet"
                    },
                    "count": 32
                },
                 {
                    "item": {
                        "item": "create:golden_sheet"
                    },
                    "count": 32
                },
                {
                    "item": {
                        "item": "create:precision_mechanism"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "kubejs:gun_parts"
                    },
                    "count": 1
                }
            ],
            "result": {
                "type": "gun",
                "id": "tacz:qbz_191",
                "count": 1,
                "attachments": {},
                "ammo_count": 0
            }
        })
    //SCAR-H
    event.custom({
            "type": "tacz:gun_smith_table_crafting",
            "materials": [
                {
                    "item": {
                        "item": "minecraft:blaze_rod"
                    },
                    "count": 4
                },
                {
                    "item": {
                        "item": "minecraft:diamond"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "create:iron_sheet"
                    },
                    "count": 48
                },
                 {
                    "item": {
                        "item": "create:golden_sheet"
                    },
                    "count": 8
                },
                {
                    "item": {
                        "item": "create:precision_mechanism"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "kubejs:gun_parts"
                    },
                    "count": 1
                }
            ],
            "result": {
                "type": "gun",
                "id": "tacz:scar_h",
                "count": 1,
                "attachments": {},
                "ammo_count": 0
            }
        })
    //SCAR-L
    event.custom({
            "type": "tacz:gun_smith_table_crafting",
            "materials": [
                {
                    "item": {
                        "item": "minecraft:quartz"
                    },
                    "count": 3
                },
                {
                    "item": {
                        "item": "create:iron_sheet"
                    },
                    "count": 24
                },
                 {
                    "item": {
                        "item": "create:golden_sheet"
                    },
                    "count": 3
                },
                {
                    "item": {
                        "item": "create:precision_mechanism"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "kubejs:gun_parts"
                    },
                    "count": 1
                }
            ],
            "result": {
                "type": "gun",
                "id": "tacz:scar_l",
                "count": 1,
                "attachments": {},
                "ammo_count": 0
            }
        })
    //FN-FAL
    event.custom({
            "type": "tacz:gun_smith_table_crafting",
            "materials": [
                {
                    "item": {
                        "tag": "minecraft:logs"
                    },
                    "count": 30
                },
                {
                    "item": {
                        "item": "create:iron_sheet"
                    },
                    "count": 32
                },
                 {
                    "item": {
                        "item": "create:golden_sheet"
                    },
                    "count": 5
                },
                {
                    "item": {
                        "item": "create:precision_mechanism"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "kubejs:gun_parts"
                    },
                    "count": 1
                }
            ],
            "result": {
                "type": "gun",
                "id": "tacz:fn_fal",
                "count": 1,
                "attachments": {},
                "ammo_count": 0
            }
        })
    //SKS
    event.custom({
            "type": "tacz:gun_smith_table_crafting",
            "materials": [
                {
                    "item": {
                        "tag": "minecraft:logs"
                    },
                    "count": 12
                },
                {
                    "item": {
                        "item": "create:iron_sheet"
                    },
                    "count": 20
                },
                {
                    "item": {
                        "item": "create:precision_mechanism"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "kubejs:gun_parts"
                    },
                    "count": 1
                }
            ],
            "result": {
                "type": "gun",
                "id": "tacz:sks_tactical",
                "count": 1,
                "attachments": {},
                "ammo_count": 0
            }
        })
    //M16A4
    event.custom({
            "type": "tacz:gun_smith_table_crafting",
            "materials": [
                {
                    "item": {
                        "tag": "minecraft:logs"
                    },
                    "count": 6
                },
                {
                    "item": {
                        "item": "create:iron_sheet"
                    },
                    "count": 18
                },
                {
                    "item": {
                        "item": "create:precision_mechanism"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "kubejs:gun_parts"
                    },
                    "count": 1
                }
            ],
            "result": {
                "type": "gun",
                "id": "tacz:m16a4",
                "count": 1,
                "attachments": {},
                "ammo_count": 0
            }
        })
    //G36K
    event.custom({
            "type": "tacz:gun_smith_table_crafting",
            "materials": [
                {
                    "item": {
                        "item": "minecraft:quartz"
                    },
                    "count": 8
                },
                {
                    "item": {
                        "item": "create:iron_sheet"
                    },
                    "count": 32
                },
                {
                    "item": {
                        "item": "create:golden_sheet"
                    },
                    "count": 8
                },
                {
                    "item": {
                        "item": "create:precision_mechanism"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "kubejs:gun_parts"
                    },
                    "count": 1
                }
            ],
            "result": {
                "type": "gun",
                "id": "tacz:g36k",
                "count": 1,
                "attachments": {},
                "ammo_count": 0
            }
        })
    //M16A1
    event.custom({
            "type": "tacz:gun_smith_table_crafting",
            "materials": [
                {
                    "item": {
                        "tag": "minecraft:logs"
                    },
                    "count": 6
                },
                {
                    "item": {
                        "item": "create:iron_sheet"
                    },
                    "count": 18
                },
                {
                    "item": {
                        "item": "create:precision_mechanism"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "kubejs:gun_parts"
                    },
                    "count": 1
                }
            ],
            "result": {
                "type": "gun",
                "id": "tacz:m16a1",
                "count": 1,
                "attachments": {},
                "ammo_count": 0
            }
        })
    //MK14
    event.custom({
            "type": "tacz:gun_smith_table_crafting",
            "materials": [
                {
                    "item": {
                        "item": "minecraft:blaze_rod"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "minecraft:diamond"
                    },
                    "count": 4
                },
                {
                    "item": {
                        "item": "create:iron_sheet"
                    },
                    "count": 42
                },
                {
                    "item": {
                        "item": "create:golden_sheet"
                    },
                    "count": 10
                },
                {
                    "item": {
                        "item": "create:precision_mechanism"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "kubejs:gun_parts"
                    },
                    "count": 1
                }
            ],
            "result": {
                "type": "gun",
                "id": "tacz:mk14",
                "count": 1,
                "attachments": {},
                "ammo_count": 0
            }
        })
    //AKM
    event.custom({
            "type": "tacz:gun_smith_table_crafting",
            "materials": [
                {
                    "item": {
                        "tag": "minecraft:logs"
                    },
                    "count": 10
                },
                {
                    "item": {
                        "item": "create:iron_sheet"
                    },
                    "count": 19
                },
                {
                    "item": {
                        "item": "create:precision_mechanism"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "kubejs:gun_parts"
                    },
                    "count": 1
                }
            ],
            "result": {
                "type": "gun",
                "id": "tacz:ak47",
                "count": 1,
                "attachments": {},
                "ammo_count": 0
            }
        })
    //G3
    event.custom({
            "type": "tacz:gun_smith_table_crafting",
            "materials": [
                {
                    "item": {
                        "item": "minecraft:quartz"
                    },
                    "count": 5
                },
                {
                    "item": {
                        "item": "create:iron_sheet"
                    },
                    "count": 36
                },
                {
                    "item": {
                        "item": "create:golden_sheet"
                    },
                    "count": 5
                },
                {
                    "item": {
                        "item": "create:precision_mechanism"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "kubejs:gun_parts"
                    },
                    "count": 1
                }
            ],
            "result": {
                "type": "gun",
                "id": "tacz:hk_g3",
                "count": 1,
                "attachments": {},
                "ammo_count": 0
            }
        })
    //95式
    event.custom({
            "type": "tacz:gun_smith_table_crafting",
            "materials": [
                {
                    "item": {
                        "tag": "minecraft:logs"
                    },
                    "count": 6
                },
                {
                    "item": {
                        "item": "create:iron_sheet"
                    },
                    "count": 20
                },
                {
                    "item": {
                        "item": "create:golden_sheet"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "create:precision_mechanism"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "kubejs:gun_parts"
                    },
                    "count": 1
                }
            ],
            "result": {
                "type": "gun",
                "id": "tacz:qbz_95",
                "count": 1,
                "attachments": {},
                "ammo_count": 0
            }
        })
    //霰弹枪
    //杜林人
    event.custom({
            "type": "tacz:gun_smith_table_crafting",
            "materials": [
                {
                    "item": {
                        "tag": "minecraft:logs"
                    },
                    "count": 6
                },
                {
                    "item": {
                        "item": "create:iron_sheet"
                    },
                    "count": 4
                },
                {
                    "item": {
                        "item": "create:precision_mechanism"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "kubejs:gun_parts"
                    },
                    "count": 1
                }
            ],
            "result": {
                "type": "gun",
                "id": "tacz:db_short",
                "count": 1,
                "attachments": {},
                "ammo_count": 0
            }
        })
    //M870
    event.custom({
            "type": "tacz:gun_smith_table_crafting",
            "materials": [
                {
                    "item": {
                        "tag": "minecraft:logs"
                    },
                    "count": 12
                },
                {
                    "item": {
                        "item": "create:iron_sheet"
                    },
                    "count": 12
                },
                {
                    "item": {
                        "item": "create:precision_mechanism"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "kubejs:gun_parts"
                    },
                    "count": 1
                }
            ],
            "result": {
                "type": "gun",
                "id": "tacz:m870",
                "count": 1,
                "attachments": {},
                "ammo_count": 0
            }
        })
    //M1014
    event.custom({
            "type": "tacz:gun_smith_table_crafting",
            "materials": [
                {
                    "item": {
                        "item": "minecraft:diamond"
                    },
                    "count": 1
                },
                {
                    "item": {
                        "item": "create:iron_sheet"
                    },
                    "count": 32
                },
                {
                    "item": {
                        "item": "create:golden_sheet"
                    },
                    "count": 6
                },
                {
                    "item": {
                        "item": "create:precision_mechanism"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "kubejs:gun_parts"
                    },
                    "count": 1
                }
            ],
            "result": {
                "type": "gun",
                "id": "tacz:m1014",
                "count": 1,
                "attachments": {},
                "ammo_count": 0
            }
        })
    //乌萨斯
    event.custom({
            "type": "tacz:gun_smith_table_crafting",
            "materials": [
                {
                    "item": {
                        "tag": "minecraft:logs"
                    },
                    "count": 10
                },
                {
                    "item": {
                        "item": "create:iron_sheet"
                    },
                    "count": 7
                },
                {
                    "item": {
                        "item": "create:precision_mechanism"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "kubejs:gun_parts"
                    },
                    "count": 1
                }
            ],
            "result": {
                "type": "gun",
                "id": "tacz:db_long",
                "count": 1,
                "attachments": {},
                "ammo_count": 0
            }
        })
    //AA12
    event.custom({
            "type": "tacz:gun_smith_table_crafting",
            "materials": [
                {
                    "item": {
                        "item": "minecraft:blaze_rod"
                    },
                    "count": 4
                },
                {
                    "item": {
                        "item": "minecraft:diamond"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "create:iron_sheet"
                    },
                    "count": 40
                },
                {
                    "item": {
                        "item": "create:golden_sheet"
                    },
                    "count": 8
                },
                {
                    "item": {
                        "item": "create:precision_mechanism"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "kubejs:gun_parts"
                    },
                    "count": 1
                }
            ],
            "result": {
                "type": "gun",
                "id": "tacz:aa12",
                "count": 1,
                "attachments": {},
                "ammo_count": 0
            }
        })
    //冲锋枪
    //维克托
    event.custom({
            "type": "tacz:gun_smith_table_crafting",
            "materials": [
                {
                    "item": {
                        "item": "minecraft:diamond"
                    },
                    "count": 10
                },
                {
                    "item": {
                        "item": "create:iron_sheet"
                    },
                    "count": 30
                },
                {
                    "item": {
                        "item": "create:golden_sheet"
                    },
                    "count": 6
                },
                {
                    "item": {
                        "item": "create:precision_mechanism"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "kubejs:gun_parts"
                    },
                    "count": 1
                }
            ],
            "result": {
                "type": "gun",
                "id": "tacz:vector45",
                "count": 1,
                "attachments": {},
                "ammo_count": 0
            }
        })
    //UZI
    event.custom({
            "type": "tacz:gun_smith_table_crafting",
            "materials": [
                {
                    "item": {
                        "item": "create:iron_sheet"
                    },
                    "count": 16
                },
                {
                    "item": {
                        "item": "create:precision_mechanism"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "kubejs:gun_parts"
                    },
                    "count": 1
                }
            ],
            "result": {
                "type": "gun",
                "id": "tacz:uzi",
                "count": 1,
                "attachments": {},
                "ammo_count": 0
            }
        })
    //MP5
    event.custom({
            "type": "tacz:gun_smith_table_crafting",
            "materials": [
                {
                    "item": {
                        "item": "create:iron_sheet"
                    },
                    "count": 18
                },
                {
                    "item": {
                        "item": "create:precision_mechanism"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "kubejs:gun_parts"
                    },
                    "count": 1
                }
            ],
            "result": {
                "type": "gun",
                "id": "tacz:hk_mp5a5",
                "count": 1,
                "attachments": {},
                "ammo_count": 0
            }
        })
    //UMP45
    event.custom({
            "type": "tacz:gun_smith_table_crafting",
            "materials": [
                {
                    "item": {
                        "item": "minecraft:quartz"
                    },
                    "count": 3
                },
                {
                    "item": {
                        "item": "create:iron_sheet"
                    },
                    "count": 31
                },
                {
                    "item": {
                        "item": "create:golden_sheet"
                    },
                    "count": 3
                },
                {
                    "item": {
                        "item": "create:precision_mechanism"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "kubejs:gun_parts"
                    },
                    "count": 1
                }
            ],
            "result": {
                "type": "gun",
                "id": "tacz:ump45",
                "count": 1,
                "attachments": {},
                "ammo_count": 0
            }
        })
    //P90
    event.custom({
            "type": "tacz:gun_smith_table_crafting",
            "materials": [
                {
                    "item": {
                        "item": "minecraft:diamond"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "minecraft:quartz"
                    },
                    "count": 3
                },
                {
                    "item": {
                        "item": "create:iron_sheet"
                    },
                    "count": 36
                },
                {
                    "item": {
                        "item": "create:golden_sheet"
                    },
                    "count": 4
                },
                {
                    "item": {
                        "item": "create:precision_mechanism"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "kubejs:gun_parts"
                    },
                    "count": 1
                }
            ],
            "result": {
                "type": "gun",
                "id": "tacz:p90",
                "count": 1,
                "attachments": {},
                "ammo_count": 0
            }
        })
    //重武器
    //RPG
    event.custom({
            "type": "tacz:gun_smith_table_crafting",
            "materials": [
                {
                    "item": {
                        "tag": "minecraft:logs"
                    },
                    "count": 10
                },
                {
                    "item": {
                        "item": "create:iron_sheet"
                    },
                    "count": 35
                },
                {
                    "item": {
                        "item": "create:golden_sheet"
                    },
                    "count": 4
                },
                {
                    "item": {
                        "item": "create:precision_mechanism"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "kubejs:gun_parts"
                    },
                    "count": 1
                }
            ],
            "result": {
                "type": "gun",
                "id": "tacz:rpg7",
                "count": 1,
                "attachments": {},
                "ammo_count": 0
            }
        })
    //M320
    event.custom({
            "type": "tacz:gun_smith_table_crafting",
            "materials": [
                {
                    "item": {
                        "item": "create:iron_sheet"
                    },
                    "count": 25
                },
                {
                    "item": {
                        "item": "create:golden_sheet"
                    },
                    "count": 8
                },
                {
                    "item": {
                        "item": "create:precision_mechanism"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "kubejs:gun_parts"
                    },
                    "count": 1
                }
            ],
            "result": {
                "type": "gun",
                "id": "tacz:m320",
                "count": 1,
                "attachments": {},
                "ammo_count": 0
            }
        })
    //机枪
    //M249
    event.custom({
            "type": "tacz:gun_smith_table_crafting",
            "materials": [
                {
                    "item": {
                        "item": "minecraft:blaze_rod"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "minecraft:diamond"
                    },
                    "count": 4
                },
                {
                    "item": {
                        "item": "create:iron_sheet"
                    },
                    "count": 55
                },
                {
                    "item": {
                        "item": "create:golden_sheet"
                    },
                    "count": 8
                },
                {
                    "item": {
                        "item": "create:precision_mechanism"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "kubejs:gun_parts"
                    },
                    "count": 1
                }
            ],
            "result": {
                "type": "gun",
                "id": "tacz:m249",
                "count": 1,
                "attachments": {},
                "ammo_count": 0
            }
        })
    //RPK
    event.custom({
            "type": "tacz:gun_smith_table_crafting",
            "materials": [
                {
                    "item": {
                        "tag": "minecraft:logs"
                    },
                    "count": 12
                },
                {
                    "item": {
                        "item": "minecraft:quartz"
                    },
                    "count": 8
                },
                {
                    "item": {
                        "item": "create:iron_sheet"
                    },
                    "count": 28
                },
                {
                    "item": {
                        "item": "create:golden_sheet"
                    },
                    "count": 4
                },
                {
                    "item": {
                        "item": "create:precision_mechanism"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "kubejs:gun_parts"
                    },
                    "count": 1
                }
            ],
            "result": {
                "type": "gun",
                "id": "tacz:rpk",
                "count": 1,
                "attachments": {},
                "ammo_count": 0
            }
        })
    //FN
    event.custom({
            "type": "tacz:gun_smith_table_crafting",
            "materials": [
                {
                    "item": {
                        "item": "minecraft:blaze_rod"
                    },
                    "count": 5
                },
                {
                    "item": {
                        "item": "minecraft:diamond"
                    },
                    "count": 6
                },
                {
                    "item": {
                        "item": "create:iron_sheet"
                    },
                    "count": 72
                },
                {
                    "item": {
                        "item": "create:golden_sheet"
                    },
                    "count": 15
                },
                {
                    "item": {
                        "item": "create:precision_mechanism"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "kubejs:gun_parts"
                    },
                    "count": 1
                }
            ],
            "result": {
                "type": "gun",
                "id": "tacz:fn_evolys",
                "count": 1,
                "attachments": {},
                "ammo_count": 0
            }
        })
    //M134
    event.custom({
            "type": "tacz:gun_smith_table_crafting",
            "materials": [
                {
                    "item": {
                        "item": "minecraft:netherite_ingot"
                    },
                    "count": 10
                },
                {
                    "item": {
                        "item": "minecraft:blaze_rod"
                    },
                    "count": 10
                },
                {
                    "item": {
                        "item": "minecraft:diamond"
                    },
                    "count": 40
                },
                {
                    "item": {
                        "item": "create:iron_sheet"
                    },
                    "count": 160
                },
                {
                    "item": {
                        "item": "create:golden_sheet"
                    },
                    "count": 40
                },
                {
                    "item": {
                        "item": "create:precision_mechanism"
                    },
                    "count": 2
                },
                {
                    "item": {
                        "item": "kubejs:gun_parts"
                    },
                    "count": 1
                }
            ],
            "result": {
                "type": "gun",
                "id": "tacz:minigun",
                "count": 1,
                "attachments": {},
                "ammo_count": 0
            }
        })
    //子弹
    //4.6X30
    event.custom({
        "type": "tacz:gun_smith_table_crafting",
        "materials": [
            {
                "item": {
                    "item": "minecraft:gunpowder"
                },
                "count": 2
            },
            {
                "item": {
                    "item": "kubejs:bullet_parts"
                },
                "count": 1
            }
        ],
        "result": {
            "type": "ammo",
            "id": "tacz:46x30",
            "count": 48,
            "attachments": {},
            "ammo_count": 0
        }
    })
    //.22
    event.custom({
        "type": "tacz:gun_smith_table_crafting",
        "materials": [
            {
                "item": {
                    "item": "minecraft:gunpowder"
                },
                "count": 2
            },
            {
                "item": {
                    "item": "kubejs:bullet_parts"
                },
                "count": 1
            }
        ],
        "result": {
            "type": "ammo",
            "id": "tacz:22wmr",
            "count": 100,
            "attachments": {},
            "ammo_count": 0
        }
    })
    //5.7X28
    event.custom({
        "type": "tacz:gun_smith_table_crafting",
        "materials": [
            {
                "item": {
                    "item": "minecraft:lapis_lazuli"
                },
                "count": 1
            },
            {
                "item": {
                    "item": "minecraft:gunpowder"
                },
                "count": 2
            },
            {
                "item": {
                    "item": "kubejs:bullet_parts"
                },
                "count": 1
            }
        ],
        "result": {
            "type": "ammo",
            "id": "tacz:57x28",
            "count": 48,
            "attachments": {},
            "ammo_count": 0
        }
    })
    //7.62X25
    event.custom({
        "type": "tacz:gun_smith_table_crafting",
        "materials": [
            {
                "item": {
                    "item": "minecraft:gunpowder"
                },
                "count": 2
            },
            {
                "item": {
                    "item": "kubejs:bullet_parts"
                },
                "count": 1
            }
        ],
        "result": {
            "type": "ammo",
            "id": "tacz:762x25",
            "count": 45,
            "attachments": {},
            "ammo_count": 0
        }
    })
    //9mm
    event.custom({
        "type": "tacz:gun_smith_table_crafting",
        "materials": [
            {
                "item": {
                    "item": "minecraft:gunpowder"
                },
                "count": 2
            },
            {
                "item": {
                    "item": "kubejs:bullet_parts"
                },
                "count": 1
            }
        ],
        "result": {
            "type": "ammo",
            "id": "tacz:9mm",
            "count": 50,
            "attachments": {},
            "ammo_count": 0
        }
    })
    //.45
    event.custom({
        "type": "tacz:gun_smith_table_crafting",
        "materials": [
            {
                "item": {
                    "item": "minecraft:gunpowder"
                },
                "count": 2
            },
            {
                "item": {
                    "item": "kubejs:bullet_parts"
                },
                "count": 1
            }
        ],
        "result": {
            "type": "ammo",
            "id": "tacz:45acp",
            "count": 30,
            "attachments": {},
            "ammo_count": 0
        }
    })
    //5.45X39
    event.custom({
        "type": "tacz:gun_smith_table_crafting",
        "materials": [
            {
                "item": {
                    "item": "minecraft:gunpowder"
                },
                "count": 3
            },
            {
                "item": {
                    "item": "kubejs:bullet_parts"
                },
                "count": 2
            }
        ],
        "result": {
            "type": "ammo",
            "id": "tacz:545x39",
            "count": 45,
            "attachments": {},
            "ammo_count": 0
        }
    })
    //5.56X45
    event.custom({
        "type": "tacz:gun_smith_table_crafting",
        "materials": [
            {
                "item": {
                    "item": "minecraft:gunpowder"
                },
                "count": 3
            },
            {
                "item": {
                    "item": "kubejs:bullet_parts"
                },
                "count": 2
            }
        ],
        "result": {
            "type": "ammo",
            "id": "tacz:556x45",
            "count": 45,
            "attachments": {},
            "ammo_count": 0
        }
    })
    //7.62X54
    event.custom({
        "type": "tacz:gun_smith_table_crafting",
        "materials": [
            {
                "item": {
                    "item": "minecraft:gunpowder"
                },
                "count": 8
            },
            {
                "item": {
                    "item": "kubejs:bullet_parts"
                },
                "count": 3
            }
        ],
        "result": {
            "type": "ammo",
            "id": "tacz:762x54",
            "count": 60,
            "attachments": {},
            "ammo_count": 0
        }
    })
    //8mm
    event.custom({
        "type": "tacz:gun_smith_table_crafting",
        "materials": [
            {
                "item": {
                    "item": "minecraft:gunpowder"
                },
                "count": 6
            },
            {
                "item": {
                    "item": "kubejs:bullet_parts"
                },
                "count": 2
            }
        ],
        "result": {
            "type": "ammo",
            "id": "tacz:792x57",
            "count": 24,
            "attachments": {},
            "ammo_count": 0
        }
    })
    //7.62X39
    event.custom({
        "type": "tacz:gun_smith_table_crafting",
        "materials": [
            {
                "item": {
                    "item": "minecraft:gunpowder"
                },
                "count": 6
            },
            {
                "item": {
                    "item": "kubejs:bullet_parts"
                },
                "count": 2
            }
        ],
        "result": {
            "type": "ammo",
            "id": "tacz:762x39",
            "count": 35,
            "attachments": {},
            "ammo_count": 0
        }
    })
    //.308
    event.custom({
        "type": "tacz:gun_smith_table_crafting",
        "materials": [
            {
                "item": {
                    "item": "minecraft:lapis_lazuli"
                },
                "count": 10
            },
            {
                "item": {
                    "item": "minecraft:gunpowder"
                },
                "count": 10
            },
            {
                "item": {
                    "item": "kubejs:bullet_parts"
                },
                "count": 3
            }
        ],
        "result": {
            "type": "ammo",
            "id": "tacz:308",
            "count": 60,
            "attachments": {},
            "ammo_count": 0
        }
    })
    //5.8X42
    event.custom({
        "type": "tacz:gun_smith_table_crafting",
        "materials": [
            {
                "item": {
                    "item": "minecraft:gunpowder"
                },
                "count": 3
            },
            {
                "item": {
                    "item": "kubejs:bullet_parts"
                },
                "count": 1
            }
        ],
        "result": {
            "type": "ammo",
            "id": "tacz:58x42",
            "count": 40,
            "attachments": {},
            "ammo_count": 0
        }
    })
    //6.8X51
    event.custom({
        "type": "tacz:gun_smith_table_crafting",
        "materials": [
            {
                "item": {
                    "item": "minecraft:gunpowder"
                },
                "count": 3
            },
            {
                "item": {
                    "item": "kubejs:bullet_parts"
                },
                "count": 1
            }
        ],
        "result": {
            "type": "ammo",
            "id": "tacz:68x51fury",
            "count": 40,
            "attachments": {},
            "ammo_count": 0
        }
    })
    //.50AE
    event.custom({
        "type": "tacz:gun_smith_table_crafting",
        "materials": [
            {
                "item": {
                    "item": "minecraft:lapis_lazuli"
                },
                "count": 5
            },
            {
                "item": {
                    "item": "minecraft:gunpowder"
                },
                "count": 7
            },
            {
                "item": {
                    "item": "kubejs:bullet_parts"
                },
                "count": 3
            }
        ],
        "result": {
            "type": "ammo",
            "id": "tacz:50ae",
            "count": 36,
            "attachments": {},
            "ammo_count": 0
        }
    })
    //.50BMG
    event.custom({
        "type": "tacz:gun_smith_table_crafting",
        "materials": [
            {
                "item": {
                    "item": "minecraft:blaze_rod"
                },
                "count": 1
            },
            {
                "item": {
                    "item": "minecraft:lapis_lazuli"
                },
                "count": 12
            },
            {
                "item": {
                    "item": "minecraft:gunpowder"
                },
                "count": 20
            },
            {
                "item": {
                    "item": "kubejs:bullet_parts"
                },
                "count": 11
            }
        ],
        "result": {
            "type": "ammo",
            "id": "tacz:50bmg",
            "count": 24,
            "attachments": {},
            "ammo_count": 0
        }
    })
    //.500马格南
    event.custom({
        "type": "tacz:gun_smith_table_crafting",
        "materials": [
            {
                "item": {
                    "item": "minecraft:lapis_lazuli"
                },
                "count": 5
            },
            {
                "item": {
                    "item": "minecraft:gunpowder"
                },
                "count": 10
            },
            {
                "item": {
                    "item": "kubejs:bullet_parts"
                },
                "count": 4
            }
        ],
        "result": {
            "type": "ammo",
            "id": "tacz:500mag",
            "count": 32,
            "attachments": {},
            "ammo_count": 0
        }
    })
    //.357马格南
    event.custom({
        "type": "tacz:gun_smith_table_crafting",
        "materials": [
            {
                "item": {
                    "item": "minecraft:gunpowder"
                },
                "count": 6
            },
            {
                "item": {
                    "item": "kubejs:bullet_parts"
                },
                "count": 3
            }
        ],
        "result": {
            "type": "ammo",
            "id": "tacz:357mag",
            "count": 48,
            "attachments": {},
            "ammo_count": 0
        }
    })
    //45-70
    event.custom({
        "type": "tacz:gun_smith_table_crafting",
        "materials": [
            {
                "item": {
                    "item": "minecraft:lapis_lazuli"
                },
                "count": 5
            },
            {
                "item": {
                    "item": "minecraft:gunpowder"
                },
                "count": 7
            },
            {
                "item": {
                    "item": "kubejs:bullet_parts"
                },
                "count": 3
            }
        ],
        "result": {
            "type": "ammo",
            "id": "tacz:45_70",
            "count": 36,
            "attachments": {},
            "ammo_count": 0
        }
    })
    //.30-06
    event.custom({
        "type": "tacz:gun_smith_table_crafting",
        "materials": [
            {
                "item": {
                    "item": "minecraft:gunpowder"
                },
                "count": 6
            },
            {
                "item": {
                    "item": "kubejs:bullet_parts"
                },
                "count": 2
            }
        ],
        "result": {
            "type": "ammo",
            "id": "tacz:30_06",
            "count": 24,
            "attachments": {},
            "ammo_count": 0
        }
    })
    //.338
    event.custom({
        "type": "tacz:gun_smith_table_crafting",
        "materials": [
            {
                "item": {
                    "item": "minecraft:lapis_lazuli"
                },
                "count": 4
            },
            {
                "item": {
                    "item": "minecraft:gunpowder"
                },
                "count": 8
            },
            {
                "item": {
                    "item": "kubejs:bullet_parts"
                },
                "count": 2
            }
        ],
        "result": {
            "type": "ammo",
            "id": "tacz:338",
            "count": 18,
            "attachments": {},
            "ammo_count": 0
        }
    })
    //.rpg-7
    event.custom({
        "type": "tacz:gun_smith_table_crafting",
        "materials": [
            {
                "item": {
                    "item": "create:iron_sheet"
                },
                "count": 3
            },
            {
                "item": {
                    "item": "minecraft:gunpowder"
                },
                "count": 12
            },
            {
                "item": {
                    "item": "kubejs:bullet_parts"
                },
                "count": 3
            }
        ],
        "result": {
            "type": "ammo",
            "id": "tacz:rpg_rocket",
            "count": 3,
            "attachments": {},
            "ammo_count": 0
        }
    })
    //40MM榴弹
    event.custom({
        "type": "tacz:gun_smith_table_crafting",
        "materials": [
            {
                "item": {
                    "item": "create:iron_sheet"
                },
                "count": 3
            },
            {
                "item": {
                    "item": "minecraft:gunpowder"
                },
                "count": 9
            },
            {
                "item": {
                    "item": "kubejs:bullet_parts"
                },
                "count": 1
            }
        ],
        "result": {
            "type": "ammo",
            "id": "tacz:40mm",
            "count": 6,
            "attachments": {},
            "ammo_count": 0
        }
    })
    //12G
    event.custom({
        "type": "tacz:gun_smith_table_crafting",
        "materials": [
            {
                "item": {
                    "item": "minecraft:iron_nugget"
                },
                "count": 18
            },
            {
                "item": {
                    "item": "minecraft:gunpowder"
                },
                "count": 6
            },
            {
                "item": {
                    "item": "kubejs:bullet_parts"
                },
                "count": 1
            }
        ],
        "result": {
            "type": "ammo",
            "id": "tacz:12g",
            "count": 18,
            "attachments": {},
            "ammo_count": 0
        }
    })
})