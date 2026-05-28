const ORE_ID = 'kubejs:andesite_original_ore_rock';

function processMining(player, block, level, server, checkRaining) {
    const handItem = player.mainHandItem;

    if (handItem.hasTag('minecraft:pickaxes') || handItem.hasTag('c:tools/pickaxes') || handItem.hasTag('c:pickaxes')) {
        let currentDamage = handItem.damageValue;
        let maxDamage = handItem.maxDamage;
        
        if (currentDamage + 1 >= maxDamage) {
            handItem.count = 0; 
            server.runCommandSilent(`playsound minecraft:entity.item.break block @a ${block.x} ${block.y} ${block.z} 1 1`);
        } else {
            handItem.damageValue = currentDamage + 1;
        }

        if (level.isRaining() || !checkRaining) {
            if (Math.random() < 0.25) {
                block.up.popItem('kubejs:andesite_dust');
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
    if (!ray || !ray.block || ray.block.id !== ORE_ID) return;

    processMining(player, ray.block, level, server, true);
});

BlockEvents.leftClicked(ORE_ID, e => {
    const { player, block, level, server } = e;
    
    if (level.isClientSide()) return;

    if (player.isFake()) {
        processMining(player, block, level, server, false);
    }
    else {
        if (player.mainHandItem.id == 'minecraft:mace') {
            block.set('minecraft:air');
            server.runCommandSilent(`playsound minecraft:entity.generic.explode block @a ${block.x} ${block.y} ${block.z} 1 1`);
        }
    }
});