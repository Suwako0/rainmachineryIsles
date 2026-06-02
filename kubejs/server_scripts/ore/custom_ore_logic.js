// 定义矿石配置列表：包含方块ID、触发概率、掉落物ID
const ORE_CONFIG = {
    'kubejs:andesite_original_ore_rock': { chance: 0.25, drop: 'kubejs:andesite_dust' },
    'kubejs:iron_original_ore_rock':     { chance: 0.2,  drop: 'kubejs:iron_ore_dust' },
    'kubejs:copper_original_ore_rock':     { chance: 0.2,  drop: 'kubejs:copper_ore_dust' },
    'kubejs:zinc_original_ore_rock':     { chance: 0.2,  drop: 'kubejs:zinc_ore_dust' },
    'kubejs:lapis_original_ore_rock':     { chance: 0.2,  drop: 'kubejs:lapis_ore_dust' }
};

// 获取所有配置的矿石ID列表，用于事件监听注册
const ORE_IDS = Object.keys(ORE_CONFIG);

function processMining(player, block, level, server, checkRaining) {
    // 根据当前挖掘的方块 ID 获取对应的配置
    const config = ORE_CONFIG[block.id];
    if (!config) return; // 安全检查：如果不是配置中的方块则直接返回

    const handItem = player.mainHandItem;

    // 检查手持物品是否为镐子
    if (handItem.hasTag('minecraft:pickaxes') || handItem.hasTag('c:tools/pickaxes') || handItem.hasTag('c:pickaxes')) {
        let currentDamage = handItem.damageValue;
        let maxDamage = handItem.maxDamage;
        
        // 工具耐久消耗逻辑
        if (currentDamage + 1 >= maxDamage) {
            handItem.count = 0; 
            server.runCommandSilent(`playsound minecraft:entity.item.break block @a ${block.x} ${block.y} ${block.z} 1 1`);
        } else {
            handItem.damageValue = currentDamage + 1;
        }

        // 下雨检查与概率掉落逻辑
        if (level.isRaining() || !checkRaining) {
            // 使用当前方块配置的概率和掉落物
            if (Math.random() < config.chance) {
                block.up.popItem(config.drop);
                server.runCommandSilent(`playsound minecraft:block.stone.break block @a ${block.x} ${block.y} ${block.z} 1 1`);
            }
        }
    }
}

PlayerEvents.tick(e => {
    const { player, level, server } = e;
    
    if (level.isClientSide() || player.tickCount % 20 !== 0 || player.isFake()) return;
    if (!player.swinging) return;

    const ray = player.rayTrace(5);
    // 检查准星瞄准的是否在我们的矿石列表内
    if (!ray || !ray.block || !ORE_CONFIG[ray.block.id]) return;

    processMining(player, ray.block, level, server, false);
});

// 使用 ORE_IDS 数组为列表中的所有方块注册左键点击事件
BlockEvents.leftClicked(ORE_IDS, e => {
    const { player, block, level, server } = e;
    
    if (level.isClientSide()) return;

    if (player.isFake()) {
        processMining(player, block, level, server, false);
    }
    else {
        // 任何列表中的矿石被钝击（锤子/重锤）时都会被秒破
        if (player.mainHandItem.id == 'minecraft:mace') {
            block.set('minecraft:air');
            server.runCommandSilent(`playsound minecraft:entity.generic.explode block @a ${block.x} ${block.y} ${block.z} 1 1`);
        }
    }
});