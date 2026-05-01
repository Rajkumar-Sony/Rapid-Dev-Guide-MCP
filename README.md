# Rapid Dev Guide MCP

Root repository for the Rapid Dev Guide MCP project.

## Repository Structure

- `Development-Rules/`: the existing `Rajkumar-Sony/Development-Rules` repository, included here as a Git submodule.

## Working Location

Run installs, builds, and local MCP commands from:

```text
Development-Rules/
```

Example:

```bash
cd Development-Rules
npm install
npm run build
```

## Clone With Submodules

Use:

```bash
git clone --recurse-submodules https://github.com/Rajkumar-Sony/Rapid-Dev-Guide-MCP.git
```

If already cloned:

```bash
git submodule update --init --recursive
```

For MCP client configuration examples and full usage details, see:

- `Development-Rules/README.md`
