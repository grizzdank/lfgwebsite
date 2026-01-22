---
title: "Building a Centaur Brain: How My AI and I Share a Memory"
excerpt: "I built a system where my AI assistant and I share a persistent memory layer. Here's the architecture, the workflow, and why it's changing how I work."
publishedAt: "2026-01-13T14:00:00Z"
category: "AI & Automation"
tags: ["centaur", "AI productivity", "Obsidian", "knowledge management", "Clawdbot", "automation"]
featured: false
draft: true
---

## The Problem with AI Assistants

Every conversation with an AI starts from scratch.

You explain your project. Again. You provide context. Again. You remind it of decisions you made last week. Again.

This "context loading tax" adds up. It's not just time—it's cognitive overhead. You're constantly managing what the AI knows instead of just working together.

I wanted something different: an AI that remembers. That knows my projects, my preferences, my active work. That I can drop into any conversation without setup.

So I built a centaur brain.

## What's a Centaur?

In chess, "centaur" teams—human plus AI working together—consistently beat both pure humans and pure AI. The human provides intuition, creativity, and judgment. The AI provides calculation, pattern recognition, and tireless consistency.

The term comes from the mythical creature: human mind, horse body. Neither alone. Both together.

I wanted that for knowledge work.

## The Architecture

The system has three components:

### 1. The Shared Memory: Obsidian Vault

An Obsidian vault serves as the shared memory layer. It's just markdown files in folders—nothing proprietary.

\`\`\`
research-vault/
├── inbox/          # Raw captures, unsorted
├── exploring/      # Ideas being developed
├── ready/          # Refined, ready to use
└── parked/         # On hold, not forgotten
\`\`\`

Ideas flow through this lifecycle. A shower thought enters \`inbox/\`. If it has legs, it graduates to \`exploring/\`. When it's actionable, it moves to \`ready/\`. If priorities shift, it goes to \`parked/\`—not deleted, just waiting.

### 2. The AI Interface: Pulpito

Pulpito is my AI assistant running on [Clawdbot](https://clawd.bot). It's always on, connected via Signal and WhatsApp, and—crucially—it can read and write to the vault.

The assistant has:
- **Persistent context**: Project files, preferences, active work
- **Proactive behavior**: Heartbeat check-ins, autonomous processing
- **Tool access**: Can SSH to machines, run commands, create files

It's not waiting for me to ask. It's working alongside me.

### 3. The Sync Layer: Git + Automation

The vault syncs across devices via Git:
- **Mac** (my laptop): Primary editing in Obsidian
- **iPhone**: Mobile capture via Obsidian app
- **Poza** (Linux server): AI processing hub

A \`launchd\` job on Mac sweeps new files to \`inbox/\` and pushes to GitHub every 5 minutes. The AI pulls changes on its heartbeat cycle and can push updates back.

[TODO: Architecture diagram]

<!-- INFOGRAPHIC PROMPT (for openai-image-gen skill)

**Style Reference:** "Pokey" Clawdbot infographic - clean hub-and-spoke architecture diagram. 
Soft gradients, rounded corners, drop shadows. Friendly tech-startup aesthetic.

**Layout:** Hub-and-spoke with central gateway, radial sections

**Center:** 
- "Pulpito" with cute octopus mascot (🐙)
- Subtitle: "Clawdbot Gateway"

**Left Section (INPUTS - cyan/teal gradient):**
- Signal (primary messaging) 
- WhatsApp
- CLI terminal
- Cron heartbeats (scheduled pulses)

**Top Section (MEMORY LAYER - coral/peach gradient):**
- HEARTBEAT.md (daily state)
- research-vault/ (Obsidian)
- memory/*.md (durable facts)
- AGENTS.md / SOUL.md (personality & rules)

**Top-Right Section (SYNC - green/teal gradient):**
- Git (version control)
- GitHub (remote)
- launchd (Mac automation)
- SSH tunnels

**Right Section (OUTPUTS - teal):**
- Messages (Signal/WhatsApp replies)
- Code commits
- File writes
- Notifications

**Bottom Section (TOOLS - purple/lavender gradient):**
- Browser automation
- exec (shell commands)
- MCP servers
- OndaLaptop node (MacBook)
- Poza (Linux gateway server)

**Flow Arrows:**
- Ideas captured on phone → inbox → AI processes → GitHub issues
- Heartbeat cycle: pull vault → process → push updates
- Human judgment ←→ AI execution (centaur loop)

**Color Scheme:**
- Background: Off-white (#F5F7FA)
- Text: Dark gray (not pure black)
- Connection lines: Cyan/teal (#4ECDC4)
- Section backgrounds: Soft gradients matching category colors

**Typography:** Clean sans-serif, section headers bold

**Note:** Include small icons for each tool/integration. Keep readable at blog width (~800px).

-->

## The Workflow in Practice

### Zero-Friction Capture

Sunday morning. I'm at my son's soccer game. A feature idea pops into my head for a side project.

I pull out my phone. Open Obsidian. Type:

\`\`\`
Be able to make task recurring when creating new task
\`\`\`

That's it. Back to watching soccer.

**What happened next (no human intervention):**

1. \`launchd\` swept the note to \`inbox/\` (5-minute cycle)
2. Git pushed to GitHub
3. Pulpito's heartbeat pulled the vault (30-minute cycle)
4. AI recognized it as a feature request for a specific project
5. Created GitHub issue #1 on the repo
6. Deleted the inbox note, committed, pushed

**From phone note to GitHub issue in one heartbeat cycle—while watching soccer.**

I stayed in "capture mode" (low friction). The AI handled routing, formatting, and destination. I didn't have to decide where this note belonged or what to do with it. The system knew.

### Collaborative Debugging

Here's a messier example—one that shows the centaur effect in real debugging.

**The bug**: My \`launchd\` sweep script moved a note while I was actively editing it in Obsidian. When the file got committed, it was empty. Data loss.

**The debug session**:

Me: "I lost a note. Can you figure out what happened?"

The AI:
1. SSH'd to my Mac
2. Checked git history for the vault
3. Found the empty file commit
4. Traced back to find when content existed
5. Identified the race condition: Obsidian was mid-autosave when the script ran \`git add\`
6. Proposed a fix: Check file modification time, skip files touched in the last 60 seconds
7. Updated the script
8. Recovered the lost content from git reflog

One conversation. Problem identified, diagnosed, fixed, and content recovered.

I noticed the problem. The AI did the forensics and surgery. Neither of us could have done it as fast alone.

**The fix** (now in \`watch-vault.sh\`):

\`\`\`bash
# Skip files modified in last 60 seconds (being actively edited)
if [[ \$(( \$(date +%s) - \$(stat -f %m "\$file") )) -lt 60 ]]; then
    continue
fi
\`\`\`

This iterative refinement IS the centaur effect—human notices problem, AI diagnoses and fixes, human validates.

## Why This Works

### Human Strengths
- **Creativity**: The initial ideas, the "what if" moments
- **Judgment**: Deciding what matters, what to prioritize
- **Direction**: Setting goals, defining success
- **Taste**: Knowing when something is right

### AI Strengths
- **Processing**: Handling volume, finding patterns
- **Availability**: Always on, no context switching cost
- **Organization**: Routing, formatting, filing
- **Memory**: Perfect recall of everything in the vault

### Together
- Capture anywhere, process automatically
- Debug complex issues in single conversations
- Build on previous work without re-explaining
- Stay in flow state longer

The AI extends my working memory. I extend its judgment.

## What I've Learned

### 1. Structure Enables Autonomy

The folder lifecycle (\`inbox\` → \`exploring\` → \`ready\` → \`parked\`) isn't just organization—it's a protocol. The AI knows what each folder means and can make decisions accordingly.

Without structure, the AI asks "where should I put this?" With structure, it just knows.

### 2. Proactive > Reactive

The game-changer wasn't giving the AI access to my files. It was giving it a heartbeat—regular check-ins where it can act without being asked.

Reactive AI waits for prompts. Proactive AI is a collaborator.

### 3. Git Is the Perfect Sync Layer

Every change is versioned. Conflicts are mergeable. History is recoverable. The AI can read diffs, understand what changed, and even recover from mistakes.

I've recovered "lost" work from git reflog multiple times. Version control isn't just for code.

### 4. Trust Builds Over Time

Early on, I reviewed everything the AI did. Now I trust it to handle routine processing. That trust was earned through consistent behavior and recoverable mistakes.

Start supervised. Graduate to autonomous.

## What's Next

The system keeps evolving:

- **Voice interface**: Capture via voice memo, transcribe, process
- **More autonomous processing**: Auto-categorization, deadline extraction, project assignment
- **Graduating ideas**: From vault notes to project specs to shipped features

The centaur brain isn't a destination. It's a practice.

## Build Your Own

Want to try this yourself? The core components are:

1. **A vault**: Obsidian, Notion, or even plain markdown files
2. **An AI with access**: Claude with file access, or a tool like Clawdbot
3. **A sync mechanism**: Git, iCloud, Dropbox—whatever works
4. **A capture flow**: Make it easy to get ideas in

Start simple. A shared folder the AI can read. A daily prompt: "What's in my inbox?" 

Then iterate. The centaur brain grows with use.

---

*The centaur doesn't replace the human or the horse. It combines them into something neither could be alone.*

---

**Want help building a centaur system for your team?** [Let's talk](https://lfgconsultants.com/contact).
