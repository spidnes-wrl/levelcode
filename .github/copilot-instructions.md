# Copilot instructions

## Project identity

LevelCode is the official ecosystem for customizing, organizing, and improving AI and digital workflows.

The public waitlist site at https://levelcode-waitlist.vercel.app is a visual reference and must not be treated as the technical source of truth.

Core principles:
- LevelCoach recommends, the user decides, LevelCode executes.
- The product must remain user-controlled.
- AI integrations must be documented and optional.
- Do not invent operational AI backends or fake provider connections.

## Design

- Dark interface.
- Black as the core structural color.
- Yellow and violet as accent tones.
- Rounded corners and modern layout.
- Keep the visual tone close to the existing demo without copying it blindly.

## Architecture

- Favor a modular and maintainable structure.
- Separate application shell, modules, docs, and integrations.
- Keep statuses explicit for each area: operational, in development, experimental, planned.
- Prefer documentation of real integration points over fake functionality.

## Safety and quality

- Do not commit secrets or API keys.
- Use environment variables for all provider configuration.
- Avoid presenting a demo as a production AI service.
- Keep documentation honest and evidence-based.
- Validate the project with `npm run build` before claiming readiness.
