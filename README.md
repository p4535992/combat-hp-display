# Combat HP Display [WORK IN PROGRESS]

![Latest Release Download Count](https://img.shields.io/github/downloads/p4535992/foundryvtt-combat-hp-display/latest/module.zip?color=2b82fc&label=DOWNLOADS&style=for-the-badge)

[![Forge Installs](https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https%3A%2F%2Fforge-vtt.com%2Fapi%2Fbazaar%2Fpackage%2Fcombat-hp-display&colorB=006400&style=for-the-badge)](https://forge-vtt.com/bazaar#package=combat-hp-display)

![Foundry Core Compatible Version](https://img.shields.io/badge/dynamic/json.svg?url=https%3A%2F%2Fraw.githubusercontent.com%2Fp4535992%2Ffoundryvtt-combat-hp-display%2Fmaster%2Fmodule.json&label=Foundry%20Version&query=$.compatibleCoreVersion&colorB=orange&style=for-the-badge)

![Latest Version](https://img.shields.io/badge/dynamic/json.svg?url=https%3A%2F%2Fraw.githubusercontent.com%2Fp4535992%2Ffoundryvtt-combat-hp-display%2Fmaster%2Fmodule.json&label=Latest%20Release&prefix=v&query=$.version&colorB=red&style=for-the-badge)

[![Foundry Hub Endorsements](https://img.shields.io/endpoint?logoColor=white&url=https%3A%2F%2Fwww.foundryvtt-hub.com%2Fwp-json%2Fhubapi%2Fv1%2Fpackage%2Fcombat-hp-display%2Fshield%2Fendorsements&style=for-the-badge)](https://www.foundryvtt-hub.com/package/combat-hp-display/)

![GitHub all releases](https://img.shields.io/github/downloads/p4535992/foundryvtt-combat-hp-display/total?style=for-the-badge)

[![Translation status](https://weblate.foundryvtt-hub.com/widgets/combat-hp-display/-/287x66-black.png)](https://weblate.foundryvtt-hub.com/engage/combat-hp-display/)

### If you want to buy me a coffee [![alt-text](https://img.shields.io/badge/-Patreon-%23ff424d?style=for-the-badge)](https://www.patreon.com/p4535992)

A Foundry VTT module for those that like to see Token HP bars while in combat but not otherwise.

![](wiki/videos/combat_hp_display_preview.gif)

Tokens that have been added to combat will automatically change the way they display HP and/or other bars on the token when combat is started. When combat is canceled their display status will also change depending on settings.
In the module settings you can set your preferred display type in and out of combat.

## Out Of Combat HP Display options

The display type that is set upon leaving combat
- Precombat Value - Tokens remember their previous display type and return to it (DEFAULT)
- Never Displayed
- When Controlled
- Hovered By Owner
- Hovered By Anyone
- Always For Owner
- Always For Everyone

## Combat HP Display options

The Display type that is set upon entering combat
- Never Displayed
- When Controlled
- Hovered By Owner
- Hovered By Anyone
- Always For Owner
- Always For Everyone (DEFAULT)

## Actor Displaybar Converter
A utility in the module settings for easily changing the Displaybar value on all actors. 

When I thought of displaying HP-bars using this module I already had a long-running campaign world. In my case all normal player tokens and monsters were set up to always show HP, and I altered them to Hovered By Anyone for more immersion and less green bars when out of combat. 

## Installation

It's always easiest to install modules from the in game add-on browser.

To install this module manually:
1.  Inside the Foundry "Configuration and Setup" screen, click "Add-on Modules"
2.  Click "Install Module"
3.  In the "Manifest URL" field, paste the following url:
`https://raw.githubusercontent.com/p4535992/foundryvtt-combat-hp-display/master/module.json`
4.  Click 'Install' and wait for installation to complete
5.  Don't forget to enable the module in game using the "Manage Module" button

## Issues

Any issues, bugs, or feature requests are always welcome to be reported directly to the [Issue Tracker](https://github.com/p4535992/foundryvtt-combat-hp-display/issues ), or using the [Bug Reporter Module](https://foundryvtt.com/packages/bug-reporter/).

## Api

All the api information are here [API](./wiki/api.md)

# Build

## Install all packages

```bash
npm install
```

### dev

`dev` will let you develop you own code with hot reloading on the browser

```bash
npm run dev
```

## npm build scripts

### build

`build` will build and set up a symlink between `dist` and your `dataPath`.

```bash
npm run build
```

### build-watch

`build-watch` will build and watch for changes, rebuilding automatically.

```bash
npm run build-watch
```

### prettier-format

`prettier-format` launch the prettier plugin based on the configuration [here](./.prettierrc)

```bash
npm run-script prettier-format
```

### lint and lint:fix

`lint` launch the eslint process based on the configuration [here](./.eslintrc.json)

```bash
npm run-script lint
```

`lint:fix` launch the eslint process with the fix argument

```bash
npm run-script lint:fix
```

## [Changelog](./CHANGELOG.md)

## Issues

Any issues, bugs, or feature requests are always welcome to be reported directly to the [Issue Tracker](https://github.com/p4535992/foundryvtt-combat-hp-display/issues ), or using the [Bug Reporter Module](https://foundryvtt.com/packages/bug-reporter/).

## License

This package is under an [MIT license](LICENSE) and the [Foundry Virtual Tabletop Limited License Agreement for module development](https://foundryvtt.com/article/license/).

- [Rarity Color](https://github.com/WBHarry/combat-hp-display) with license [MIT](https://github.com/WBHarry/combat-hp-display/blob/main/LICENSE)

## Credit

Thanks to anyone who helps me with this code! I appreciate the user community's feedback on this project!

- Ty to  [WBHarry](https://github.com/WBHarry) and the module [Combat HP Display](https://github.com/WBHarry/combat-hp-display)
