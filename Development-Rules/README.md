# Rapid Dev Guide MCP

Private MCP server for applying these development rule files to future projects.

## Guarantee Model

Installing an MCP server only makes the rules available. An MCP server cannot
force every external IDE or agent to call it unless that client honors MCP
server instructions or you add a mandatory global/project instruction.

For the strongest behavior, do both:

1. Install this MCP server in the IDE or agent.
2. Add the mandatory agent instruction below to that IDE or agent's custom
   instructions, project rules, or system prompt area.

Mandatory agent instruction:

```text
For every software development task, you must use the Rapid Dev Guide MCP before
planning, coding, reviewing, or finishing.

Required workflow:
1. Call get_rules_for_task with the user's task context before making a plan.
2. Call get_project_intake with the user's task context and any explicit rule
   areas.
3. Before coding implementation, ask the user the returned framework, language,
   CSS/UI library, tooling, runtime, testing, deployment, and project
   convention questions.
4. Show the returned concepts and coding principles as optional checkboxes so
   the user can manually select what applies to the project.
5. Do not start coding until the user answers the intake questions or explicitly
   approves reasonable defaults.
6. Apply the returned rule files during implementation.
7. If the user names specific rule areas, call get_rule_set for each named area.
8. Use search_rules when a concept or coding principle needs clarification.
9. Before the final response, call get_checklist for the most relevant rule area.
10. In the final response, state which Rapid Dev Guide areas were applied and whether
   the checklist passed.

Do not skip this workflow unless the user explicitly says not to use Rapid Dev Guide
MCP for the current task.
```

Example user prompt:

```text
Use Rapid Dev Guide MCP. Apply frontend-development, security-and-privacy,
configuration-and-environments, and testing-and-quality-gates while building
this feature.

Task: I want to build a React dashboard with login, forms, API calls, and dark
mode.
```

If the IDE supports MCP prompts, use the `apply-rapid-dev-guide` prompt and pass the
task plus optional forced areas.

## Mandatory Intake Before Coding

For frontend, REST API, backend microservices, and all other development areas,
the agent must ask setup and concept-selection questions before implementation.

The MCP tool for this is:

```text
get_project_intake
```

Example call:

```json
{
  "task": "I want to build a React dashboard with login, forms, API calls, and dark mode.",
  "areas": "frontend-development, security-and-privacy, configuration-and-environments, testing-and-quality-gates"
}
```

The tool returns:

- Required questions for framework, language, CSS/UI library, package/build
  tooling, runtime, testing, deployment, and project conventions.
- Area-specific questions for frontend, REST API, microservices, database,
  cloud, security, documentation, and other rule files.
- Optional markdown checkboxes for every concept and coding principle in the
  relevant rule files.

The agent must present those checkboxes to the user and wait for selection or
approval of defaults before coding.

## License

This project is proprietary. See [LICENSE](./LICENSE). Do not copy, publish,
redistribute, or use these files without explicit written permission.

## Local Install

Build the server:

```bash
npm install
npm run build
```

Then configure any MCP-capable IDE or desktop client with the built server:

```json
{
  "mcpServers": {
    "rapid-dev-guide": {
      "command": "node",
      "args": ["/absolute/path/to/Rapid-Dev-Guide-MCP/Development-Rules/dist/server.js"]
    }
  }
}
```

Use an absolute path for `dist/server.js`.

## Private Git Install

Keep the repository private, then point MCP clients at the Git package. The
package runs `npm run build` during install through the `prepare` script.

```json
{
  "mcpServers": {
    "rapid-dev-guide": {
      "command": "npx",
      "args": ["-y", "git+ssh://git@github.com/YOUR_USER/YOUR_PRIVATE_REPO.git"]
    }
  }
}
```

## Private Registry Install

If you publish to a private npm or GitHub Packages registry, use:

```json
{
  "mcpServers": {
    "rapid-dev-guide": {
      "command": "npx",
      "args": ["-y", "@your-private-scope/rapid-dev-guide-mcp"]
    }
  }
}
```

Do not publish this package to a public registry unless you intentionally want
other people to receive the files.

## Development Mode

For development without building first:

```json
{
  "mcpServers": {
    "rapid-dev-guide": {
      "command": "npx",
      "args": ["tsx", "/absolute/path/to/Rapid-Dev-Guide-MCP/Development-Rules/src/server.ts"]
    }
  }
}
```

## IDE And Agent Configuration

Replace `/absolute/path/to/Rapid-Dev-Guide-MCP/Development-Rules` with this repository's absolute path. Use the
local `node dist/server.js` config when you work from this checkout. Use the
private Git or private registry config when you want the same setup on multiple
machines.

### Standard MCP JSON Clients

Use this shape for clients that accept an `mcpServers` JSON object, including
Claude Desktop, Cursor, Windsurf, JetBrains AI Assistant, Junie, Cline, Roo Code,
and many other MCP-compatible agent IDEs.

```json
{
  "mcpServers": {
    "rapid-dev-guide": {
      "command": "node",
      "args": ["/absolute/path/to/Rapid-Dev-Guide-MCP/Development-Rules/dist/server.js"]
    }
  }
}
```

Private Git install:

```json
{
  "mcpServers": {
    "rapid-dev-guide": {
      "command": "npx",
      "args": ["-y", "git+ssh://git@github.com/YOUR_USER/YOUR_PRIVATE_REPO.git"]
    }
  }
}
```

Private npm registry install:

```json
{
  "mcpServers": {
    "rapid-dev-guide": {
      "command": "npx",
      "args": ["-y", "@your-private-scope/rapid-dev-guide-mcp"]
    }
  }
}
```

### Cursor

Add the standard `mcpServers` block to Cursor's MCP configuration.

```json
{
  "mcpServers": {
    "rapid-dev-guide": {
      "command": "node",
      "args": ["/absolute/path/to/Rapid-Dev-Guide-MCP/Development-Rules/dist/server.js"]
    }
  }
}
```

### Windsurf Cascade

Add this to `~/.codeium/windsurf/mcp_config.json`.

```json
{
  "mcpServers": {
    "rapid-dev-guide": {
      "command": "node",
      "args": ["/absolute/path/to/Rapid-Dev-Guide-MCP/Development-Rules/dist/server.js"]
    }
  }
}
```

### Claude Desktop

Add this to `claude_desktop_config.json`, then restart Claude Desktop.

macOS:

```text
~/Library/Application Support/Claude/claude_desktop_config.json
```

Windows:

```text
%APPDATA%\\Claude\\claude_desktop_config.json
```

Config:

```json
{
  "mcpServers": {
    "rapid-dev-guide": {
      "command": "node",
      "args": ["/absolute/path/to/Rapid-Dev-Guide-MCP/Development-Rules/dist/server.js"]
    }
  }
}
```

### Claude Code

Add the server with the CLI:

```bash
claude mcp add-json rapid-dev-guide '{"type":"stdio","command":"node","args":["/absolute/path/to/Rapid-Dev-Guide-MCP/Development-Rules/dist/server.js"]}'
```

For a private registry package:

```bash
claude mcp add-json rapid-dev-guide '{"type":"stdio","command":"npx","args":["-y","@your-private-scope/rapid-dev-guide-mcp"]}'
```

### Codex CLI

Add this to `~/.codex/config.toml`.

```toml
[mcp_servers.rapid_dev_guide]
command = "node"
args = ["/absolute/path/to/Rapid-Dev-Guide-MCP/Development-Rules/dist/server.js"]
```

For a private registry package:

```toml
[mcp_servers.rapid_dev_guide]
command = "npx"
args = ["-y", "@your-private-scope/rapid-dev-guide-mcp"]
```

### VS Code With GitHub Copilot MCP

VS Code uses `.vscode/mcp.json` for workspace scope or the user-level `mcp.json`.
Its key is `servers`, not `mcpServers`.

```json
{
  "servers": {
    "rapid-dev-guide": {
      "type": "stdio",
      "command": "node",
      "args": ["/absolute/path/to/Rapid-Dev-Guide-MCP/Development-Rules/dist/server.js"]
    }
  }
}
```

Private registry install:

```json
{
  "servers": {
    "rapid-dev-guide": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@your-private-scope/rapid-dev-guide-mcp"]
    }
  }
}
```

### JetBrains AI Assistant

Use `Settings` > `Tools` > `AI Assistant` > `Model Context Protocol (MCP)`,
or paste this JSON into the MCP server configuration.

```json
{
  "mcpServers": {
    "rapid-dev-guide": {
      "command": "node",
      "args": ["/absolute/path/to/Rapid-Dev-Guide-MCP/Development-Rules/dist/server.js"]
    }
  }
}
```

### Junie

Add this to `.junie/mcp/mcp.json` at project or user scope.

```json
{
  "mcpServers": {
    "rapid-dev-guide": {
      "command": "node",
      "args": ["/absolute/path/to/Rapid-Dev-Guide-MCP/Development-Rules/dist/server.js"]
    }
  }
}
```

### Cline

Add this through Cline's MCP Servers settings or directly in
`cline_mcp_settings.json`.

```json
{
  "mcpServers": {
    "rapid-dev-guide": {
      "command": "node",
      "args": ["/absolute/path/to/Rapid-Dev-Guide-MCP/Development-Rules/dist/server.js"],
      "disabled": false
    }
  }
}
```

### Roo Code

Roo Code uses the same MCP server shape as Cline.

```json
{
  "mcpServers": {
    "rapid-dev-guide": {
      "command": "node",
      "args": ["/absolute/path/to/Rapid-Dev-Guide-MCP/Development-Rules/dist/server.js"],
      "disabled": false
    }
  }
}
```

### Zed

Zed uses `context_servers` in `settings.json`, not `mcpServers`.

```json
{
  "context_servers": {
    "rapid-dev-guide": {
      "command": "node",
      "args": ["/absolute/path/to/Rapid-Dev-Guide-MCP/Development-Rules/dist/server.js"],
      "env": {}
    }
  }
}
```

### Generic Stdio MCP Client

If an IDE or agent asks for command and arguments separately, use:

```text
command: node
args: /absolute/path/to/Rapid-Dev-Guide-MCP/Development-Rules/dist/server.js
```

If it asks for an npm package command, use:

```text
command: npx
args: -y @your-private-scope/rapid-dev-guide-mcp
```

## MCP Client References

- VS Code MCP configuration: https://code.visualstudio.com/docs/copilot/reference/mcp-configuration
- Windsurf Cascade MCP: https://docs.windsurf.com/windsurf/cascade/mcp
- JetBrains AI Assistant MCP: https://www.jetbrains.com/help/ai-assistant/mcp.html
- Junie MCP configuration: https://junie.jetbrains.com/docs/junie-cli-mcp-configuration.html
- Cline MCP configuration: https://docs.cline.bot/mcp/adding-and-configuring-servers
- Zed MCP configuration: https://zed.dev/docs/ai/mcp
- Claude Code MCP: https://code.claude.com/docs/en/mcp
- Codex MCP configuration: https://developers.openai.com/codex/config-reference

## Tools

- `list_rules`: List available rule and learning-project files.
- `get_rule_set`: Read one rule file by name, id, or filename.
- `search_rules`: Search all rule files.
- `get_rules_for_task`: Select relevant rule files for a project task.
- `get_project_intake`: Return required pre-coding questions and optional
  checkbox concept/principle selections for a task.
- `get_learning_projects`: Return practice projects for frontend, REST API, or microservices.
- `get_checklist`: Return the `Before Moving On` checklist for a rule area.
- `rules_mcp_status`: Confirm server health and loaded file counts.

## Prompts

- `apply-rapid-dev-guide`: Reusable workflow prompt that tells the agent to call
- `get_rules_for_task`, call `get_project_intake`, ask setup and concept
  checkbox questions before coding, apply returned rule files, use specific rule
  areas when requested, and verify the relevant checklist before finishing.
- `project-intake-before-coding`: Reusable prompt focused only on asking the
  framework/language/CSS/tooling questions and presenting concept/principle
  checkbox selections before implementation.

## Resources

The server exposes every markdown rule file as a read-only MCP resource using
URIs like:

```text
rules://frontend-development
rules://rest-api-development
rules://backend-microservices
rules://index
```

## Private Distribution

Keep this package private. For easy installation across IDEs, use a private Git
repository or private npm registry and point each IDE's MCP configuration at the
same command.
