# Installation

## Prerequisites

- Windows 10 or later
- Python 3.8 or newer (https://www.python.org/downloads/)

## Install Dependencies

Open a terminal and run:

```sh
pip install paho-mqtt pyyaml keyboard pystray pillow
```

> **Note:** You may need to run your terminal as Administrator for the `keyboard` package to work properly.

## Download Glyphic

Clone or download the Glyphic repository to your computer.

## Configuration

Edit `config/config.yaml` to set your MQTT broker, macro folders, and logging preferences.

## Running Glyphic

Start Glyphic with:

```sh
python mqtt_macropad/main.py
```

A system tray icon will appear, indicating Glyphic is running.