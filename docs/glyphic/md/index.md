# Glyphic

**Glyphic** is a modular, MQTT-powered macropad system for Windows. It lets you trigger keyboard shortcuts, shell commands, and more on your PC from any MQTT client or device. Macros and plugins are easy to share and extend, making Glyphic a powerful automation companion for creative and productivity workflows.

---

## Features

- **MQTT Integration:** Listen for macro triggers over MQTT topics.
- **Modular Macros:** Organize macros in folders, each as a simple YAML file.
- **Extensible Plugins:** Add new actions by dropping Python files into the plugins folder.
- **System Tray:** Control Glyphic from the Windows system tray (reload macros/plugins, restart MQTT, restart app, quit).
- **Logging:** All actions and errors are logged for easy troubleshooting.
- **Easy Sharing:** Share macros and plugins as files—no code changes needed.

---

## How It Works

- **Trigger:** Publish a message to `{topic_prefix}/{folder}` with the macro ID as the payload.
- **Lookup:** Glyphic searches configured macro folders for `{folder}/{macro_id}.yaml`.
- **Execute:** The macro YAML specifies which plugin to use and with what parameters.
- **Plugins:** Plugins live in `plugins/` and define actions like keyboard shortcuts or shell commands.

---

## System Tray Controls

- **Reload Macros & Plugins:** Instantly reloads all macros and plugins.
- **Restart MQTT Client:** Reconnects to the MQTT broker.
- **Restart Program:** Restarts the Glyphic app.
- **Quit:** Exits Glyphic.

---

## License

GNU General Public License v3.0

---

## Credits

Created by Veillax.  
Inspired by creative automation and open-source spirit.
