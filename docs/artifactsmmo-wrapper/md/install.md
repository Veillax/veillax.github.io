# Installation

Welcome to the installation guide for the [ArtifactsMMO](https://artifactsmmo.com/) Python wrapper! This guide will help you get started with installing the wrapper on your system.

> **Requirements**
> - Python 3.9 or higher
> - pip (Python package installer)
> - Internet connection

## Quick Install

For experienced users, you can install directly using pip:
```bash
pip install artifactsmmo-wrapper
```

## Detailed Installation Guide

Choose your operating system below for detailed installation instructions:

### Windows

1. **Install Python**
   - Download Python from [python.org](https://www.python.org/)
   - During installation, check "Add Python to PATH"
   - Verify installation: `python --version`

2. **Install the Wrapper**

   Without virtual environment:
   ```powershell
   python -m pip install artifactsmmo-wrapper
   ```

   With virtual environment (recommended):
   ```powershell
   python -m venv venv
   .\venv\Scripts\activate
   python -m pip install artifactsmmo-wrapper
   ```

### Linux

1. **Install Python**
   ```bash
   sudo apt update
   sudo apt install python3 python3-pip
   ```

2. **Install the Wrapper**

   Without virtual environment:
   ```bash
   pipx install artifactsmmo-wrapper --include-deps
   ```

   With virtual environment (recommended):
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   python3 -m pip install artifactsmmo-wrapper
   ```

### macOS

1. **Install Python**
   ```bash
   brew update
   brew install python
   ```

2. **Install the Wrapper**

   Without virtual environment:
   ```bash
   pipx install artifactsmmo-wrapper --include-deps
   ```

   With virtual environment (recommended):
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   python3 -m pip install artifactsmmo-wrapper
   ```

## Verifying Installation

To verify the installation was successful:
```python
import artifactsmmo_wrapper
print(artifactsmmo_wrapper.__version__)
```

## Next Steps

Once you've completed the installation, proceed to the [First Use Guide](first_use.html) to get started with the wrapper.

## Troubleshooting

If you encounter any issues:
1. Ensure Python is properly installed and in your PATH
2. Check that pip is up to date: `python -m pip install --upgrade pip`
3. Try installing with the `--verbose` flag: `pip install artifactsmmo-wrapper --verbose`