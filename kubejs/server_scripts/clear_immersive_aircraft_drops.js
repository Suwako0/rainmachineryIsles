EntityEvents.spawned('minecraft:item', event => {
    // 获取掉落物实体包含的物品栈
    const itemStack = event.entity.item;

    // 判断物品是否存在且属于 immersive_aircraft 模组
    if (itemStack && itemStack.id.startsWith('immersive_aircraft:')) {
        // 取消掉落物生成
        event.cancel();
        // 保险起见，同时调用清除实体
        if (event.entity) {
            event.entity.discard();
        }
    }
});
