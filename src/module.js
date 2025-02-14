import { useTemplatesPath } from "./scripts/combat-hp-display-helpers.js";
import { registerGameSettings, migrateDataStructures } from "./scripts/setup.js";
import {
  deleteCombatUpdate,
  deleteCombatantUpdate,
  startCombatUpdate,
  joinCombatUpdate,
} from "./scripts/module/DisplayBarHandler.js";

Hooks.once("init", function () {
  registerGameSettings();
  loadTemplates([
    useTemplatesPath("partials/tokenDisplayValues.hbs"),
    useTemplatesPath("partials/tokenDisplayValues2.hbs"),
    useTemplatesPath("partials/convertDisplayValue.hbs"),
  ]);
});

Hooks.once("ready", async () => {
  await migrateDataStructures();
});

Hooks.on("createCombatant", async (combatant) => {
  await joinCombatUpdate(combatant);
});

Hooks.on("updateCombat", async (combat) => {
  await startCombatUpdate(combat);
});

Hooks.on("deleteCombat", async (combat) => {
  await deleteCombatUpdate(combat);
});

Hooks.on("deleteCombatant", async (combatant) => {
  await deleteCombatantUpdate(combatant);
});

/* ------------------------------------ */
/* Other Hooks							*/
/* ------------------------------------ */

Hooks.once("devModeReady", ({ registerPackageDebugFlag }) => {
  registerPackageDebugFlag(CONSTANTS.MODULE_ID);
});
