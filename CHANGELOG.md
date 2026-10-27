# ⚔️ Endless Alice — Character Rework · Test Build v0.1

**🇬🇧 English** · [🇷🇺 Русский ниже](#-русский)

> **Build:** `pakchunk99-CharacterRework-Windows_P` · **Game:** Steam build 25695037 (UE 5.8.1) · **Languages:** EN + RU text
> **Type:** data + text only — no new models, sprites or animations.
> **Characters:** Takehime · Alice · E.C.I.L.A · Shibako

---

## 📦 Install / Uninstall

1. Close the game.
2. Copy the `EndlessAlice` folder into the game root (next to `EndlessAlice.exe`), merge folders.
   You should end up with **3 files** in `EndlessAlice/Content/Paks/~mods/`:
   `pakchunk99-CharacterRework-Windows_P.pak` · `.utoc` · `.ucas`
3. Set the game language to **English** or **Russian** (other languages keep original text).
4. Uninstall = delete those 3 files.

> ⚠️ If you have the older `pakchunk99-ShibakoPackLeader-*` files, delete them first. The Better Translation mod may stay — this mod already includes its text and loads after it.

---

## 🗡️ TAKEHIME — *"Vergil"*
**Idea:** every swing fires sword energy; the ultimate is a Judgement-Cut-style storm; Dash Slash is a Devil-Trigger window.

| Skill | Before | Now |
|---|---|---|
| **Passive — Qi Blade → Phantom Blades** | Sword energy every **3rd** attack (skills count) · 320% | Sword energy on **every** attack and **every skill slash** · 220% |
| **Slash** (main) | 150% | **200%**, each swing releases a blade |
| **Dancing Sakura Slash → Rapid Slash** | 7 cuts · 100% each · CD 10 s | **15 cuts** · 80% each · CD **6 s** |
| **Sakura God Slash → Judgement Cut** (ultimate) | 8 slashes · 100% · area ×1 · CD 20 s | **40 slashes** · 120% each · area **×2.5** · CD **30 s** |
| **Dash Slash → Devil Trigger** | buff **2 s**, attack speed ×2, move 200 · CD 5 s | buff **8 s**, attack speed **×3**, move **450**, all damage → Fire · CD **3 s** |
| **Sakura Strike** (jump slam) | stagger 1.5 / 2 / 3 by level | stagger **3** at every level |

**✅ Expected:** constant stream of blade waves; Judgement Cut is a long invincible-looking flurry that fires blades on *every* slash; Devil Trigger lasts long enough to chain Slash → Rapid Slash.
**🔎 Please check:** FPS drops during Judgement Cut (many projectiles) · does the blade really fire on each of the 40 slashes · does the Fire conversion last the full 8 s.

---

## 🐰 ALICE — *"Wonderland Artillery"*
**Idea:** upgrades that normally need picks are **built in** — both Specials become signature attacks.

| Skill | Before | Now |
|---|---|---|
| **Heart of Judgment** (Heavy special) | 3 laser blasts · 500% · CD 10 s | **+6 blasts** · **600%** · jumps **3×** higher · **×2** dmg to grounded, **×2.5** to large enemies · CD **6 s** |
| **Laughing Cat System** (Light special) | marks few targets · 300% · CD 10 s | locks **+15** targets · 250% each · jumps **2×** higher · **2×** item-trigger chance · CD **6 s** |
| **Bunny Grenade** | radius ×1 · CD 8 s | radius **×2** · CD **4 s** |
| **Fried Toast** | heal ×1 · CD 30 s | heal **×2** · CD **20 s** |
| **Mad Hatter's Afternoon Tea** | grenade buff 5 s · CD 30 s | buff **12 s** · CD **20 s** |
| **Carrot Machine Gun** | normal spread | **very tight** spread |
| **Rabbit Cannon** | 250% | **350%** |

**✅ Expected:** Heavy mode = artillery with a huge hovering salvo; Light mode = lock-on swarm of missiles; grenades pull and stun a much bigger area.
**🔎 Please check:** is the Heart of Judgment salvo really ~9 blasts · can Fried Toast over-heal / is the heal too strong · does Laughing Cat actually mark +15 enemies.

---

## 🥚 E.C.I.L.A — *"Light Weaver"*
**Idea:** the developers' placeholder (everything flat 300%, one-attack Egg) becomes a real combo kit:
**place orbs → detonate them → Star Rain.**

| Skill | Before | Now |
|---|---|---|
| **Evolution** | leaves Egg at **level 10** | leaves Egg at **level 2** |
| **Light Feather** (main) | 1 charge/s · max 14 · 55% each | **2 charges/s** · max **16** · **80%** each (full volley **1280%**) · cooldown 0.6 s · upgraded form repeats **+3** |
| **Beam Cannon** | orb 10 s · 300%/s · CD 20 s | orb **8 s** · **250%/s** · CD **12 s** |
| **Falling Strike** | 300% · CD 10 s | **800%** · CD **8 s** · bursts any Beam-Cannon orb it hits |
| **Star Rain** (ultimate) | 300% per pillar | **500%** per pillar |
| **Flash Strike** | 3 lasers · 300% · slow-fall 3 s | **5 lasers** · 150% · slow-fall **4 s** |
| **Egg: Energy Leak** | 15 lasers · 300% | 15 lasers · 150% |
| **Respawn cooldown** | 5 min | **2.5 min** |
| **Ruin** (passive) | 3% | **6%** |

**✅ Expected:** after reaching level 2 she gets the full 5-skill kit; the orb → Falling Strike combo chain-detonates.
**🔎 Please check:** does evolution really happen at level 2 (too early? not at all?) · does the 2nd evolution happen · does the respawn cooldown match 2.5 min · any broken or empty skill slots after evolving.

---

## 🐶 SHIBAKO — *"Beam Commander"*
**Idea:** damage moves away from the big ShibaFall nuke to the Laser; Rain becomes the payoff.

| Skill | Before | Now |
|---|---|---|
| **Wand** (main) | triple burst ready every 5 s · 100% | triple volley **always ready** · 60% per orb |
| **Shiba Inu Laser** (sub fire) | 50% · CD 10 s | **160%** · CD **2.5 s** |
| **ShibaFall** | 1000% · CD 10 s | **250%** · CD **3 s** (a taunt, not a nuke) |
| **Shiba Inu Rain** | 180% per dog · CD 50 s | **600%** per dog · CD **40 s** |

**✅ Expected:** laser-centred playstyle, ShibaFall used to pull enemies, Rain as the big finisher.

---

## 🧪 Tester checklist
- [ ] Game launches and reaches the menu with the mod installed
- [ ] Skill descriptions show the **new text** (EN and RU) and the numbers match what you see
- [ ] Each character: every skill still works, no empty/broken slot
- [ ] Cooldowns match the tables above (use a stopwatch)
- [ ] No crash, freeze or big FPS drop (especially Takehime ultimate)
- [ ] Anything that feels broken, useless or absurdly strong — **say which skill and why**

## 🐞 How to report
Send: character · skill · what you did · what you expected · what happened · screenshot/video ·
game language · `EndlessAlice.log` from `%LOCALAPPDATA%\EndlessAlice\Saved\Logs\` if it crashed.

## ⚠️ Known unknowns
This is a **first test build**; the author could not run it in-game. Edited values were verified inside the packed files, but real in-game behaviour (evolution timing, heal strength, number of Heart of Judgment blasts, performance) needs your feedback.
Numbers are a starting point, not final balance.

*Contains the game's own text — personal use only, do not re-upload.*

---
---

# 🇷🇺 Русский

# ⚔️ Endless Alice — Character Rework · Тестовая сборка v0.1

> **Сборка:** `pakchunk99-CharacterRework-Windows_P` · **Игра:** Steam build 25695037 (UE 5.8.1) · **Языки:** тексты EN + RU
> **Тип:** только данные и тексты — без новых моделей, спрайтов и анимаций.
> **Персонажи:** Такэхимэ · Алиса · E.C.I.L.A · Шибако

---

## 📦 Установка / удаление

1. Закройте игру.
2. Скопируйте папку `EndlessAlice` в корень игры (рядом с `EndlessAlice.exe`), объединив папки.
   В `EndlessAlice/Content/Paks/~mods/` должно появиться **3 файла**:
   `pakchunk99-CharacterRework-Windows_P.pak` · `.utoc` · `.ucas`
3. Выберите в игре **английский** или **русский** язык (остальные языки остаются с оригинальным текстом).
4. Удаление — просто удалите эти 3 файла.

> ⚠️ Если остались старые файлы `pakchunk99-ShibakoPackLeader-*`, удалите их. Мод Better Translation можно оставить: его тексты уже включены в эту сборку, и она загружается после него.

---

## 🗡️ ТАКЭХИМЭ — *«Вергил»*
**Идея:** каждый удар выпускает волну клинка; ульта — шторм в духе Judgement Cut; Dash Slash — окно «Девил Триггера».

| Навык | Было | Стало |
|---|---|---|
| **Пассивка — Ци-клинок → Призрачные клинки** | Волна клинка каждая **3-я** атака (навыки считаются) · 320% | Волна клинка при **каждой** атаке и **каждом ударе навыков** · 220% |
| **Удар** (основной) | 150% | **200%**, каждый взмах выпускает клинок |
| **Танцующий удар сакуры → Быстрая серия** | 7 ударов · 100% · перезарядка 10 с | **15 ударов** · 80% · перезарядка **6 с** |
| **Божественный удар сакуры → Суд клинков** (ульта) | 8 ударов · 100% · область ×1 · 20 с | **40 ударов** · 120% · область **×2,5** · **30 с** |
| **Dash Slash → Девил Триггер** | бафф **2 с**, скорость атаки ×2, скорость бега 200 · 5 с | бафф **8 с**, скорость атаки **×3**, бег **450**, весь урон → огонь · **3 с** |
| **Удар сакуры** (прыжок с ударом) | оглушение 1,5 / 2 / 3 по уровням | оглушение **3** на всех уровнях |

**✅ Ожидание:** постоянный поток волн клинка; «Суд клинков» — долгая серия ударов, где волна вылетает при *каждом* ударе; Девил Триггер длится достаточно, чтобы связать Удар → Быструю серию.
**🔎 Проверьте:** просадки FPS во время «Суда клинков» (много снарядов) · вылетает ли волна реально на каждый из 40 ударов · держится ли огненное превращение все 8 с.

---

## 🐰 АЛИСА — *«Артиллерия Страны чудес»*
**Идея:** улучшения, которые обычно нужно выбирать, **встроены сразу** — обе способности «Special» становятся фирменными.

| Навык | Было | Стало |
|---|---|---|
| **Сердце правосудия** (тяжёлая «Special») | 3 лазерных выстрела · 500% · 10 с | **+6 выстрелов** · **600%** · прыжок выше в **3×** · **×2** урона по наземным, **×2,5** по крупным · **6 с** |
| **Система «Смеющийся кот»** (лёгкая «Special») | мало целей · 300% · 10 с | захват **+15** целей · 250% на ракету · прыжок в **2×** выше · **2×** шанс срабатывания предметов · **6 с** |
| **Кроличья граната** | радиус ×1 · 8 с | радиус **×2** · **4 с** |
| **Жареный тост** | лечение ×1 · 30 с | лечение **×2** · **20 с** |
| **Чаепитие Безумного Шляпника** | бафф гранаты 5 с · 30 с | бафф **12 с** · **20 с** |
| **Морковный пулемёт** | обычный разброс | **очень малый** разброс |
| **Кроличья пушка** | 250% | **350%** |

**✅ Ожидание:** тяжёлый режим — артиллерия с огромным залпом в воздухе; лёгкий — рой ракет по захваченным целям; гранаты отбрасывают и оглушают гораздо больше врагов.
**🔎 Проверьте:** действительно ли у «Сердца правосудия» около 9 выстрелов · не слишком ли сильное лечение «Жареного тоста» (нет ли переизбытка) · помечает ли «Смеющийся кот» на 15 врагов больше.

---

## 🥚 E.C.I.L.A — *«Ткачиха света»*
**Идея:** заглушки разработчиков (везде ровно 300%, яйцо с одной атакой) превращены в настоящий комбо-набор:
**расставь сферы → взорви их → Звёздный дождь.**

| Навык | Было | Стало |
|---|---|---|
| **Эволюция** | выход из яйца на **10-м уровне** | выход из яйца на **2-м уровне** |
| **Световое перо** (основная) | 1 заряд/с · макс. 14 · 55% | **2 заряда/с** · макс. **16** · **80%** (полный залп **1280%**) · перезарядка 0,6 с · улучшенная форма повторяет **+3** раза |
| **Лучевая пушка** | сфера 10 с · 300%/с · 20 с | сфера **8 с** · **250%/с** · **12 с** |
| **Удар сверху** | 300% · 10 с | **800%** · **8 с** · взрывает сферы «Лучевой пушки» |
| **Звёздный дождь** (ульта) | 300% на столб | **500%** на столб |
| **Молниеносный удар** | 3 лазера · 300% · замедленное падение 3 с | **5 лазеров** · 150% · падение **4 с** |
| **Яйцо: Утечка энергии** | 15 лазеров · 300% | 15 лазеров · 150% |
| **Перезарядка воскрешения** | 5 мин | **2,5 мин** |
| **Руина** (пассивка) | 3% | **6%** |

**✅ Ожидание:** с 2-го уровня доступен весь набор из 5 навыков; связка «сфера → Удар сверху» взрывает сферы цепочкой.
**🔎 Проверьте:** эволюция действительно на 2-м уровне (не слишком рано? не происходит вовсе?) · происходит ли вторая эволюция · совпадает ли перезарядка воскрешения с 2,5 мин · нет ли пустых или сломанных слотов навыков после эволюции.

---

## 🐶 ШИБАКО — *«Командир лучей»*
**Идея:** урон уходит от большой бомбы «Звездопада» к лазеру; «Дождь» становится финишером.

| Навык | Было | Стало |
|---|---|---|
| **Посох** (основная) | тройной залп раз в 5 с · 100% | тройной залп **всегда готов** · 60% на сферу |
| **Лазер сиба-ину** | 50% · 10 с | **160%** · **2,5 с** |
| **Звездопад сиба-ину** | 1000% · 10 с | **250%** · **3 с** (таунт, а не бомба) |
| **Дождь из сиба-ину** | 180% на собаку · 50 с | **600%** на собаку · **40 с** |

**✅ Ожидание:** игра вокруг лазера, «Звездопад» — чтобы стянуть врагов, «Дождь» — большой финишер.

---

## 🧪 Чек-лист тестера
- [ ] Игра запускается и доходит до меню с установленным модом
- [ ] В описаниях навыков **новый текст** (EN и RU), цифры совпадают с тем, что видно в игре
- [ ] У каждого персонажа все навыки работают, нет пустых/сломанных слотов
- [ ] Перезарядки совпадают с таблицами (проверьте секундомером)
- [ ] Нет вылетов, зависаний и сильных просадок FPS (особенно ульта Такэхимэ)
- [ ] Всё, что кажется сломанным, бесполезным или нереально сильным — **напишите, какой навык и почему**

## 🐞 Как сообщить о проблеме
Пришлите: персонаж · навык · что делали · что ожидали · что произошло · скриншот/видео ·
язык игры · файл `EndlessAlice.log` из `%LOCALAPPDATA%\EndlessAlice\Saved\Logs\`, если был вылет.

## ⚠️ Что пока неизвестно
Это **первая тестовая сборка**; автор не смог запустить её в игре. Изменённые значения проверены внутри упакованных файлов, но реальное поведение в игре (момент эволюции, сила лечения, число выстрелов «Сердца правосудия», производительность) нужно подтвердить вашими отзывами.
Цифры — отправная точка, а не финальный баланс.

*Содержит собственные тексты игры — только для личного использования, не перезаливать.*
