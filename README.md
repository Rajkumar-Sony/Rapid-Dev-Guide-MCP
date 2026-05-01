# Rapid Dev Guide MCP

<p align="center">
  <img src="https://res.cloudinary.com/da2gkpbnz/image/upload/v1777613195/image-logo_ucpy6m.png" alt="Rapid Dev Guide MCP Logo" width="420" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/MCP-Ready-0A7B83?style=for-the-badge" alt="MCP Ready" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript 5.x" />
  <img src="https://img.shields.io/badge/Node.js-%3E%3D20-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js >=20" />
  <img src="https://img.shields.io/badge/License-Proprietary-222222?style=for-the-badge" alt="Proprietary License" />
</p>

Rapid Dev Guide MCP is a private Model Context Protocol server for applying
development standards consistently across AI-assisted software projects.

It combines:

- an MCP server in this repository
- a `Development-Rules/` Git submodule that contains the rule documents
- task-oriented tools, prompts, and resources that guide planning, coding,
  review, and final verification

The goal is simple: make AI coding workflows ask the right setup questions,
apply the right engineering rules, and verify the right checklist before
finishing.

## Overview

Rapid Dev Guide MCP helps an AI client do three things well:

1. Select the relevant rules for a task.
2. Run a structured intake before implementation.
3. Verify completion against the appropriate checklist.

This repository contains the MCP package and runtime code.

The rule markdown files come from the existing GitHub repository mounted as a
submodule:

- `Development-Rules/` -> `https://github.com/Rajkumar-Sony/Development-Rules`

## Why This Exists

Most AI coding sessions fail for predictable reasons:

- implementation starts before framework, runtime, testing, or deployment
  decisions are confirmed
- coding principles are implied instead of selected explicitly
- security, quality, and architecture checks are applied too late
- final responses do not verify whether project standards were followed

Rapid Dev Guide MCP addresses that by exposing a reusable workflow through MCP.

## Core Capabilities

- Selects relevant rule files for a given software task
- Generates a mandatory pre-coding intake questionnaire
- Returns optional concept and coding-principle checklists
- Exposes every rule file as a read-only MCP resource
- Supports rule lookup, search, learning projects, and completion checklists
- Works with MCP-capable IDEs, editors, and agent CLIs

## Repository Structure

```text
Rapid-Dev-Guide-MCP/
├── Development-Rules/     # Git submodule with rule markdown files
├── src/                   # MCP server source
├── dist/                  # Build output
├── package.json
├── tsconfig.json
└── README.md
```

## How It Works

<p align="center">
  <img src="https://res.cloudinary.com/da2gkpbnz/image/upload/v1777613195/image2_dawpyb.png" alt="Rapid Dev Guide MCP Workflow" width="100%" />
</p>

At runtime:

1. Your IDE or agent starts `dist/server.js`.
2. The server loads rule documents from `Development-Rules/`.
3. The client discovers MCP tools, prompts, and resources.
4. During a task, the client calls tools such as `get_rules_for_task`,
   `get_project_intake`, and `get_checklist`.
5. The AI uses the returned guidance while planning, implementing, and
   finishing the task.

Important: installing the MCP server only makes the workflow available. It does
not force every client to use it unless your client honors MCP instructions or
you add a mandatory project/global instruction.

## Recommended Workflow

For the strongest results, configure your AI client to follow this sequence for
every development task:

1. Call `get_rules_for_task` before planning.
2. Call `get_project_intake` before coding.
3. Ask the user the returned setup questions.
4. Present the returned concepts and coding principles for selection.
5. Read and apply the relevant rule files.
6. Call `get_checklist` before finishing.

Recommended agent instruction:

```text
For every software development task, you must use the Rapid Dev Guide MCP before
planning, coding, reviewing, or finishing.

Required workflow:
1. Call get_rules_for_task with the user's task context before making a plan.
2. Call get_project_intake with the user's task context and any explicit rule areas.
3. Before coding implementation, ask the user the returned framework, language,
   CSS/UI library, tooling, runtime, testing, deployment, and project convention questions.
4. Show the returned concepts and coding principles as optional checkboxes so the
   user can manually select what applies to the project.
5. Do not start coding until the user answers the intake questions or explicitly
   approves reasonable defaults.
6. Apply the returned rule files during implementation.
7. If the user names specific rule areas, call get_rule_set for each named area.
8. Use search_rules when a concept or coding principle needs clarification.
9. Before the final response, call get_checklist for the most relevant rule area.
10. In the final response, state which Rapid Dev Guide areas were applied and whether
    the checklist passed.
```

## Quick Start

### 1. Clone the repository

```bash
git clone --recurse-submodules https://github.com/Rajkumar-Sony/Rapid-Dev-Guide-MCP.git
cd Rapid-Dev-Guide-MCP
```

If you already cloned without submodules:

```bash
git submodule update --init --recursive
```

### 2. Install dependencies

```bash
npm install
```

### 3. Build the server

```bash
npm run build
```

### 4. Point your MCP client to the built server

```json
{
  "mcpServers": {
    "rapid-dev-guide": {
      "command": "node",
      "args": ["/absolute/path/to/Rapid-Dev-Guide-MCP/dist/server.js"]
    }
  }
}
```

For local development without a build step:

```json
{
  "mcpServers": {
    "rapid-dev-guide": {
      "command": "npx",
      "args": ["tsx", "/absolute/path/to/Rapid-Dev-Guide-MCP/src/server.ts"]
    }
  }
}
```

## Example Task Flow

User request:

```text
Build a React dashboard with login, forms, API calls, and dark mode.
```

Expected MCP flow:

1. `get_rules_for_task`
2. `get_project_intake`
3. user answers framework/language/tooling questions
4. user selects concepts and coding principles
5. implementation starts
6. `get_checklist` runs before final completion

Example direct prompt:

```text
Use Rapid Dev Guide MCP. Apply frontend-development, security-and-privacy,
configuration-and-environments, and testing-and-quality-gates while building
this feature.
```

## Mandatory Intake Before Coding

The `get_project_intake` tool returns:

- framework and platform selection
- programming language selection
- package manager and build tool selection
- CSS or UI library selection
- runtime and version constraints
- testing and quality gate selection
- deployment environment selection
- project convention requirements
- area-specific follow-up questions for frontend, API, microservices, database,
  cloud, security, and documentation
- concept and coding-principle checklists

Example input:

```json
{
  "task": "Build a React dashboard with login, forms, API calls, and dark mode.",
  "areas": "frontend-development, security-and-privacy, configuration-and-environments, testing-and-quality-gates"
}
```

## Tools

- `list_rules`: List all available rule, learning, and index files.
- `get_rule_set`: Read one rule file by id, alias, title, or filename.
- `search_rules`: Search across rule documents and return compact matches.
- `get_rules_for_task`: Select the most relevant rule files for a task.
- `get_project_intake`: Generate pre-coding intake questions and concept selection.
- `get_learning_projects`: Return guided learning projects by area.
- `get_checklist`: Return the `Before Moving On` checklist for one rule area.
- `rules_mcp_status`: Return server health and loaded rule-file counts.

## Prompts

- `apply-rapid-dev-guide`: Full workflow prompt for using the MCP server during a development task.
- `project-intake-before-coding`: Prompt focused on mandatory setup and concept intake before implementation.

## Resources

Each markdown rule file is exposed as a read-only MCP resource, for example:

```text
rules://frontend-development
rules://rest-api-development
rules://backend-microservices
rules://index
```

## Supported Client Configuration

Most MCP-capable clients can use the standard `mcpServers` JSON shape:

```json
{
  "mcpServers": {
    "rapid-dev-guide": {
      "command": "node",
      "args": ["/absolute/path/to/Rapid-Dev-Guide-MCP/dist/server.js"]
    }
  }
}
```

### VS Code (GitHub Copilot MCP)

```json
{
  "servers": {
    "rapid-dev-guide": {
      "type": "stdio",
      "command": "node",
      "args": ["/absolute/path/to/Rapid-Dev-Guide-MCP/dist/server.js"]
    }
  }
}
```

### Windsurf

```json
{
  "mcpServers": {
    "rapid-dev-guide": {
      "command": "node",
      "args": ["/absolute/path/to/Rapid-Dev-Guide-MCP/dist/server.js"]
    }
  }
}
```

### JetBrains AI Assistant

```json
{
  "mcpServers": {
    "rapid-dev-guide": {
      "command": "node",
      "args": ["/absolute/path/to/Rapid-Dev-Guide-MCP/dist/server.js"]
    }
  }
}
```

### Junie

```json
{
  "mcpServers": {
    "rapid-dev-guide": {
      "command": "node",
      "args": ["/absolute/path/to/Rapid-Dev-Guide-MCP/dist/server.js"]
    }
  }
}
```

### Cline

```json
{
  "mcpServers": {
    "rapid-dev-guide": {
      "command": "node",
      "args": ["/absolute/path/to/Rapid-Dev-Guide-MCP/dist/server.js"],
      "disabled": false
    }
  }
}
```

### Zed

```json
{
  "context_servers": {
    "rapid-dev-guide": {
      "command": "node",
      "args": ["/absolute/path/to/Rapid-Dev-Guide-MCP/dist/server.js"],
      "env": {}
    }
  }
}
```

### Claude Code

```json
{
  "mcpServers": {
    "rapid-dev-guide": {
      "type": "stdio",
      "command": "node",
      "args": ["/absolute/path/to/Rapid-Dev-Guide-MCP/dist/server.js"]
    }
  }
}
```

### Codex (JSON Equivalent)

```json
{
  "mcpServers": {
    "rapid-dev-guide": {
      "command": "node",
      "args": ["/absolute/path/to/Rapid-Dev-Guide-MCP/dist/server.js"]
    }
  }
}
```

## Development

Useful commands:

```bash
npm install
npm run build
npm run typecheck
npm run dev
```

## Packaging Notes

- The MCP runtime lives in the root repository.
- The rule content is loaded from the `Development-Rules/` submodule.
- The package is marked `private`.
- The project is intended for private Git or private registry distribution.

## License

This project is proprietary. See [LICENSE](./LICENSE). Do not copy, publish,
redistribute, or use these files without explicit written permission.

---

<p align="center">Build with ❤️ by Raj Kumar Sony.</p>
