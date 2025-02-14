import DisplayBarConvertionMenu from "../scripts/module/DisplayBarConvertionMenu.js";
import DisplayBarSettingsMenu from "../scripts/module/DisplayBarSettingsMenu.js";

export const registerGameSettings = () => {
  game.settings.registerMenu("combat-hp-display", "hp-display-settings", {
    name: game.i18n.localize("combat-hp-display.hpDisplaySettings.label"),
    label: game.i18n.localize("combat-hp-display.hpDisplaySettings.title"),
    hint: "",
    icon: "fas fa-cog",
    type: DisplayBarSettingsMenu,
    restricted: true,
  });
  if (!game.modules.get("barbrawl")?.active) {
    game.settings.registerMenu("combat-hp-display", "actor-converter", {
      name: game.i18n.localize("combat-hp-display.actorConverter.label"),
      label: game.i18n.localize("combat-hp-display.actorConverter.title"),
      hint: "",
      icon: "fas fa-exchange-alt",
      type: DisplayBarConvertionMenu,
      restricted: true,
    });
  }

  game.settings.register("combat-hp-display", "out-of-combat-display", {
    name: "Out Of Combat HP Display",
    hint: "The HP Display behehavior used when not in combat",
    scope: "world",
    config: false,
    type: Object,
    default: {
      friendly: { value: 0, gmOnly: false },
      neutral: { value: 0, gmOnly: false },
      hostile: { value: 0, gmOnly: false },
    },
  });

  game.settings.register("combat-hp-display", "combat-display", {
    name: "Combat HP Display",
    hint: "The HP Display behehavior used when in combat",
    scope: "world",
    config: false,
    type: Object,
    default: {
      friendly: { value: 50, gmOnly: false },
      neutral: { value: 50, gmOnly: false },
      hostile: { value: 50, gmOnly: false },
    },
  });
};

export const migrateDataStructures = async () => {
  if (game.user.isGM) {
    if (typeof game.settings.get("combat-hp-display", "out-of-combat-display")?.valueOf() === "number") {
      const outOfCombat = game.settings.get("combat-hp-display", "out-of-combat-display");
      game.settings.set("combat-hp-display", "out-of-combat-display", {
        friendly: { value: outOfCombat, gmOnly: false },
        neutral: { value: outOfCombat, gmOnly: false },
        hostile: { value: outOfCombat, gmOnly: false },
      });
    }

    const outOfCombat = game.settings.get("combat-hp-display", "out-of-combat-display");
    if (outOfCombat.friendly.value === undefined) {
      await game.settings.set("combat-hp-display", "out-of-combat-display", {
        friendly: { value: outOfCombat.friendly.value ?? outOfCombat.friendly, gmOnly: false },
        neutral: { value: outOfCombat.neutral.value ?? outOfCombat.neutral, gmOnly: false },
        hostile: { value: outOfCombat.hostile.value ?? outOfCombat.hostile, gmOnly: false },
      });
    }

    if (typeof game.settings.get("combat-hp-display", "combat-display")?.valueOf() === "number") {
      const inCombat = game.settings.get("combat-hp-display", "combat-display");
      await game.settings.set("combat-hp-display", "combat-display", {
        friendly: { value: inCombat, gmOnly: false },
        neutral: { value: inCombat, gmOnly: false },
        hostile: { value: inCombat, gmOnly: false },
      });
    }

    const inCombat = game.settings.get("combat-hp-display", "combat-display");
    if (inCombat.friendly.value === undefined) {
      await game.settings.set("combat-hp-display", "combat-display", {
        friendly: { value: inCombat.friendly.value ?? inCombat.friendly, gmOnly: false },
        neutral: { value: inCombat.neutral.value ?? inCombat.neutral, gmOnly: false },
        hostile: { value: inCombat.hostile.value ?? inCombat.hostile, gmOnly: false },
      });
    }

    if (game.modules.get("barbrawl")?.active) {
      const inCombat = game.settings.get("combat-hp-display", "combat-display");
      Object.keys(inCombat).forEach((key) => {
        const setting = inCombat[key].value;
        inCombat[key].value = setting === 10 || setting === 20 ? 30 : setting === 40 ? 50 : setting;
      });
      await game.settings.set("combat-hp-display", "combat-display", inCombat);
    }
  }
};
