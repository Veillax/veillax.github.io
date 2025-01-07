# ArtifactsMMO API Wrapper

![PyPI - Version](https://img.shields.io/pypi/v/artifactsmmo-wrapper?label=Version)
![PyPI - License](https://img.shields.io/pypi/l/artifactsmmo-wrapper?label=License)
![GitHub Release Date](https://img.shields.io/github/release-date/Veillax/ArtifactsMMO-Wrapper?label=Release%20Date)
![PyPI - Downloads](https://img.shields.io/pypi/dm/artifactsmmo-wrapper?label=Downloads)  
<br>

### Disclaimer

---

This wrapper is a third-party tool and is not officially affiliated with Artifacts MMO. Use it responsibly and at your own risk. Be aware of the game's terms of service and avoid any actions that could violate them.

### Overview

---

This is a Python wrapper for interacting with the Artifacts MMO API, providing an easy way to interact with the game's data, perform in-game actions, and manage character and account information. This library simplifies API requests and provides a range of features to integrate with Artifacts MMO's online functionalities.

#### Features

---

- **Character Management**: Create, delete, and manage character data.

- **In-Game Actions**: Move, gather, craft, fight, and other interactive commands.

- **Task Management**: Accept, complete, and exchange tasks from the taskmaster.

- **Grand Exchange**: Manage buy and sell orders, view order history.

- **Inventory and Equipment Management**: View, equip, and manage items.

- **Bank and Gold Management**: Deposit and withdraw gold or items.

- **Leaderboard and Events**: View event and leaderboard data.

### How to install

---

 Using pip (Recommended method)

`pip install artifactsmmo-wrapper`

Using conda (Recommended method)

`conda install artifactsmmo-wrapper`

Manually using pip (Only use this method if you know what you're doing)

---

```bash
mkdir artifactsmmo-wrapper
cd artifactsmmo-wrapper

git clone https://github.com/veillax/ArtifactsMMO-Wrapper.git
cd ArtifactsMMO-Wrapper

# Normal mode
pip install .

# Editable mode
# pip install -e .

```

**⚠️Some of the following text is taken from the ArtifactsMMO Website to ensure it is accurate and well put for newcommers to be able to understand. It is adapted to match the information available within this wrapper though**

### How to begin playing ArtifactsMMO

---

Artifacts is an asynchronous MMORPG in which you can control up to 5 characters at the same time. Your characters can fight monsters, gather resources, craft items and much more.

This wrapper however is thus far a synchronous wrapper, so you have to use the threading module to control more than one character at once

Unlike a traditional game, you'll have to write your own scripts in your preferred programming language to control your characters via an API.

This wrapper is an easy way to get started with playing ArtifactsMMO Season 3. It allows you to access the API without writing too much complex code.

For another quick start, you can write your own Javascript scripts directly in the client's code editor, otherwise you can use any language you like on your own IDE. You can see examples in other programming languages in the [Reference API](https://api.artifactsmmo.com/docs/#/).

### Before You Begin

---

The first step is to [create your account](https://artifactsmmo.com/account/create) and your first character [by logging in](https://artifactsmmo.com/account/characters). After that you'll need your token, which you can find [on your account](https://artifactsmmo.com/account/).
**⚠️ It is not allowed to play with more than one account. All accounts involved in multi-accounting will be banned**

![API Token Box](https://artifactsmmo.com/images/docs/token.png)

**⚠️ The token is used by the server to identify you when you make requests. It is important to keep it secret.**

You can now open the game client by [clicking here](https://artifactsmmo.com/client).

**Ready to start?**

Visit [ArtifactsMMO Wrapper on PyPi](https://pypi.org/project/artifactsmmo-wrapper/) to view the python package

### Links

---

[ArtifactsMMO Website](https://artifactsmmo.com/)  
[ArtifactsMMO Discord](https://discord.com/invite/prEBQ8a6Vs)  
[ArtifactsMMO Docs](https://docs.artifactsmmo.com/)  
[ArtifactsMMO Encyclopidea](https://artifactsmmo.com/encyclopedia)  
[ArtifactsMMO API Docs](https://api.artifactsmmo.com/docs/#/)
