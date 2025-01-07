# Installation

It seems you've stumbled across this handy dandy python wrapper for [ArtifactsMMO](https://artifactsmmo.com/)  
This guide teaches you how to install the wrapper across different Operating Systems.  
If you already have it installed or know what you're doing, you can skip to the next part: [First Use](first_use.html)

---

> **Disclaimer**  
> This package does not support end-of-life (EOL) versions of Python.  
> Make sure you are using a supported version of Python as per the [official Python release schedule](https://devguide.python.org/versions/).  
> It is recommended to use the latest stable version of Python to ensure compatibility and receive security updates.

---

## Windows

This method assumes the use of the built-in Python installer for Windows.  
Make sure Python and pip are installed and added to your system PATH.  

##### Without a Virtual Environment

```powershell
# Download and install Python from https://www.python.org/
# Make sure to check "Add Python to PATH" during installation.
python -m pip install artifactsmmo-wrapper
```

##### With a Virtual Environment  

```powershell
# Download and install Python from https://www.python.org/
# Make sure to check "Add Python to PATH" during installation.
python -m venv venv
.\venv\Scripts\activate
python -m pip install artifactsmmo-wrapper
```

## Linux  

This method uses `apt`.  
For users on alternate Linux-based distributions or using other package managers, the process is similar.  
If you are using a different distribution, you may not need the `sudo` prefix.  
For package managers besides `apt`, the packages may be named differently. Make sure to search for the correct package before installation.  

##### Without a Virtual Environment

```bash
sudo apt update
sudo apt install python3 python3-pip
pipx install artifactsmmo-wrapper --include-deps
```

##### With a Virtual Environment

```bash
sudo apt update
sudo apt install python3 python3-venv
python3 -m venv venv
source venv/bin/activate
python3 -m pip install artifactsmmo-wrapper
```

## macOS

This method uses `brew`.  
For users not using Homebrew, the process may differ depending on your package manager (e.g., MacPorts).  
Make sure to verify the correct package names and installation steps for your specific setup.  

##### Without a Virtual Environment


```bash
brew update
brew install python
brew install pipx
pipx install artifactsmmo-wrapper --include-deps
```

##### With a Virtual Environment


```bash
brew update
brew install python
python3 -m venv venv
source venv/bin/activate
python3 -m pip install artifactsmmo-wrapper
```