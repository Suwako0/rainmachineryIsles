//Command: /summon born_in_chaos_v1:scarlet_persecutor ~ ~5 ~ {CustomName:"潜伏的阴影", Tags:["Custom_Dungeons_Boss"], NoAI:1b,PersistenceRequired:1b,Health:1000,NoGravity:1b,DeathLootTable:"entities/empty",attributes:[{id:"generic.scale",base:3.0d}, {id:"generic.armor",base:15.0d}, {id:"generic.max_health",base:100.0d}], active_effects:[{id:"minecraft:regeneration",amplifier:0,duration:19999980,ShowParticles:0b},{id:"minecraft:resistance",amplifier:2,duration:19999980,ShowParticles:0b}], DeathLootTable:"empty"}
let defaultBossPos = undefined;

// ===================== 回调 =====================
EntityEvents.spawned(event => {
    if (event.entity.type == 'born_in_chaos_v1:scarlet_persecutor' && event.entity.tags.contains('Custom_Dungeons_Boss')) {
        defaultBossPos = {
            x: event.entity.x,
            y: event.entity.y,
            z: event.entity.z
        };
        Do10sTickLoop(event.server, event.entity, event.level);
        Do20sTickLoop(event.server, event.entity, event.level);
    }
})

// 辅助函数：获取指定范围内的随机坐标 (Y轴保持不变)
function getRandomPos(centerPos, range) {
    let half = range / 2;
    return {
        x: centerPos.x + (Math.random() * range) - half,
        y: centerPos.y,
        z: centerPos.z + (Math.random() * range) - half
    };
}

// ===================== 循环函数 =====================

// 15s循环
function Do15sTickLoop(server, entity, level) {
    server.scheduleInTicks(150, task => {
        DrawExpandingCircleAndApplyRingEffects(server, entity, level, 1);
        Do15sTickLoop(server, entity, level);
    });
}

// 20s循环
function Do20sTickLoop(server, entity, level) {
    server.scheduleInTicks(200, task => {
        if (entity && entity.isAlive()) {
            RandomEventSelect(server, entity, level);
            Do20sTickLoop(server, entity, level);
        }
    });
}

// ===================== 工具函数 =====================
function DrawExpandingCircleAndApplyRingEffects(server, entity, level, radius)
{
    if (radius <= 10) {
        server.scheduleInTicks(3, subTask => {
            if (entity && entity.isAlive()) {
                let bossPos = { x: entity.x, y: entity.y, z: entity.z };
                DrawExpandingCircle(server, bossPos, radius);
                ApplyRingEffects(server, bossPos, radius, level);
                DrawExpandingCircleAndApplyRingEffects(server, entity, level, radius + 1);
            }
        });
    }
}

function DrawExpandingCircle(server, center, radius) {
    for (let i = 0; i < 64; i++) {
        let angle = (i / 64) * Math.PI * 2;
        let dx = Math.cos(angle) * radius;
        let dz = Math.sin(angle) * radius;
        server.runCommandSilent(`particle minecraft:flame ${center.x + dx} ${center.y + 0.2} ${center.z + dz} 0 0 0 0 8 force`);
        server.runCommandSilent(`particle minecraft:witch ${center.x + dx} ${center.y + 0.25} ${center.z + dz} 0 0 0 0 10 force`);
    }

    for (let i = 0; i < 64; i++) {
        let angle = (i / 64) * Math.PI * 2;
        let dx2 = Math.cos(angle) * radius * 0.8;
        let dz2 = Math.sin(angle) * radius * 0.8;
        server.runCommandSilent(`particle minecraft:flame ${center.x + dx2} ${center.y + 0.1} ${center.z + dz2  } 0 0 0 0 6 force`);
        server.runCommandSilent(`particle minecraft:witch ${center.x + dx2} ${center.y + 0.15} ${center.z + dz2  } 0 0 0 0 8 force`);
    }
}

function ApplyRingEffects(server, center, radius, level) {
    // 遍历当前维度内的所有玩家
    level.getPlayers().forEach(player => {
        // 计算水平距离 (X 和 Z 的 2D 距离)
        let dx = player.x - center.x;
        let dz = player.z - center.z;
        let horizontalDistance = Math.sqrt(dx * dx + dz * dz);
        
        // 计算垂直高度差 (Y 轴距离)
        let verticalDistance = Math.abs(player.y - center.y);
        
        // 判定条件：1. 水平距离在当前圆弧内  2. Y轴高度差小于等于 2
        if (horizontalDistance <= radius && verticalDistance <= 2.5) {
                // 使用玩家的 UUID 作为精准目标执行命令
                let target = player.uuid.toString();
                    
                // 1. 造成伤害
                server.runCommandSilent(`damage ${target} 1 minecraft:magic`);
                    
                // 2. 凋零 III (wither 2)
                server.runCommandSilent(`effect give ${target} minecraft:wither 3 2 true`);
                    
                // 3. 减速 II (slowness 1)
                server.runCommandSilent(`effect give ${target} minecraft:slowness 3 1 true`);
                    
                // 4. 击退 (向上向外弹射)
                server.runCommandSilent(`execute as ${target} at @s run tp @s ~ ~0.6 ~`);
            }
        });
}

function RandomEventSelect(server, entity, level) {
    if (!defaultBossPos) return; // 安全校验

    let randomNum = Math.floor(Math.random() * 100);
    if (randomNum < 34) {
        ExecuteEvent1(server, level, defaultBossPos);
    } else if (randomNum < 67) {
        ExecuteEvent2(server, level, defaultBossPos);
    } else {
        ExecuteEvent3(server, level, defaultBossPos);
    }
}

// ===================== 事件具体逻辑 =====================

// 事件1：生成 4x4 范围火粒子特效地板 (附加凋零与火焰伤害)
function ExecuteEvent1(server, level, centerPos) {
    server.runCommandSilent(`say 警告！场地即将喷发腐化烈焰！`);
    
    // 选取8个中心点
    for (let i = 0; i < 8; i++) {
        let pos = getRandomPos(centerPos, 36);
        
        // 阶段 1：3秒预警 (60 ticks)，每10 tick生成一次警告粒子(黑烟)
        for (let t = 0; t < 6; t++) {
            server.scheduleInTicks(t * 10, task => {
                // 扩散范围 2.0 大致能覆盖 4x4 区域，增加粒子数量至 40
                server.runCommandSilent(`particle minecraft:large_smoke ${pos.x} ${pos.y + 0.2} ${pos.z} 2.0 0 2.0 0 40 force`);
            });
        }

        // 阶段 2：5秒持续伤害与火焰粒子 (100 ticks)，从第60 tick开始，每10 tick执行一次
        for (let t = 0; t < 10; t++) {
            server.scheduleInTicks(60 + t * 10, task => {
                // 生成普通火焰粒子
                server.runCommandSilent(`particle minecraft:flame ${pos.x} ${pos.y + 0.2} ${pos.z} 2.0 0.1 2.0 0 80 force`);
                // 混入灵魂火粒子，作为凋零效果的视觉暗示
                server.runCommandSilent(`particle minecraft:soul_fire_flame ${pos.x} ${pos.y + 0.2} ${pos.z} 2.0 0.1 2.0 0 40 force`);
                
                // 对距离该坐标 2.5 格范围内（大致覆盖 4x4 正方形）的玩家造成 4 点火焰伤害
                server.runCommandSilent(`execute positioned ${pos.x} ${pos.y} ${pos.z} as @a[distance=..2.8] run damage @s 4 minecraft:in_fire`);
                
                // 对相同范围内的玩家附加凋零效果 (持续 2 秒，等级 II，隐藏粒子)
                server.runCommandSilent(`execute positioned ${pos.x} ${pos.y} ${pos.z} run effect give @a[distance=..2.8] minecraft:wither 2 1 true`);
            });
        }
    }
}

// 事件2：随机落雷
function ExecuteEvent2(server, level, centerPos) {
    server.runCommandSilent(`say 感受雷霆的愤怒！`);
    
    // 循环6次，每次间隔1秒 (20 ticks)
    for (let loop = 0; loop < 6; loop++) {
        server.scheduleInTicks(loop * 20, task => {
            // 每次选取5个坐标
            for (let i = 0; i < 5; i++) {
                let pos = getRandomPos(centerPos, 38);
                server.runCommandSilent(`execute positioned ${pos.x} ${pos.y} ${pos.z} run summon minecraft:lightning_bolt`);
            }
        });
    }
}

// 事件3：随机召唤僵尸
function ExecuteEvent3(server, level, centerPos) {
    server.runCommandSilent(`say 亡者大军，听我号令！`);
    
    // 循环5次，每次间隔2秒 (40 ticks)
    for (let loop = 0; loop < 5; loop++) {
        server.scheduleInTicks(loop * 40, task => {
            // 每次选取2个坐标
            for (let i = 0; i < 2; i++) {
                let pos = getRandomPos(centerPos, 38);
                // 使用 KubeJS API 生成实体
                let zombie = level.createEntity('minecraft:zombie');
                if (zombie) {
                    zombie.setPosition(pos.x, pos.y, pos.z);
                    // 可以根据需要给僵尸上标签或者装备
                    // zombie.mergeNbt('{Tags:["Boss_Minion"]}'); 
                    zombie.spawn();
                    // 生成一些伴随粒子特效
                    server.runCommandSilent(`particle minecraft:soul ${pos.x} ${pos.y + 1} ${pos.z} 0.5 0.5 0.5 0.1 20 force`);
                }
            }
        });
    }
}