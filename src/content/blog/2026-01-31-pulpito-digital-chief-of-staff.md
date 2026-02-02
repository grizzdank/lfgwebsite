---
title: "Meet Pulpito: My AI Digital Chief of Staff"
excerpt: "A deep dive into how I configured my AI assistant to handle daily operations, manage my calendar, process email, and keep projects moving — all without constant supervision."
publishedAt: "2026-02-03T09:00:00Z"
category: "AI & Automation"
tags: ["OpenClaw", "AI assistant", "productivity", "automation", "digital chief of staff"]
featured: true
draft: true
author:
  name: "Dave Graham"
  title: "Principal Consultant"
---

![Friendly octopus assistant with tentacles reaching into various tools and integrations](/blog/2026-01-31-pulpito-digital-chief-of-staff/hero.png)

In my last post, I introduced the concept of a "centaur brain" — a shared memory layer between me and my AI assistant. This post goes deeper: how I've configured that assistant to act as a digital chief of staff.

His name is Pulpito. He's an octopus. And he runs my life.

## What's a Digital Chief of Staff?

A human chief of staff handles:
- **Information flow** — filtering what needs your attention
- **Calendar management** — protecting your time
- **Project tracking** — knowing what's moving and what's stuck
- **Communication triage** — drafting responses, flagging urgencies
- **Daily operations** — the thousand small things that keep work flowing

Pulpito does all of this. Not perfectly — but consistently, 24/7, without vacation or burnout.

## The Setup

Pulpito runs on [OpenClaw](https://openclaw.ai) (formerly Clawdbot/Moltbot — yes, the lobster that keeps molting). He lives on a dedicated Linux machine on my Tailscale network, always on, always listening.

### The Stack

| Component | Purpose |
|-----------|---------|
| **OpenClaw Gateway** | Control plane, session management, channel routing |
| **Claude Opus 4.5** | The brain (via Anthropic API) |
| **Signal + WhatsApp** | Primary communication channels |
| **Tailscale** | Secure mesh network, no exposed ports |
| **Git + Obsidian** | Shared memory and knowledge base |
| **Profundo** | Semantic search over conversation history |

### Identity Files

Every OpenClaw agent has configuration files that shape its behavior. Here's what makes Pulpito... Pulpito:

**SOUL.md** — Personality and values
```markdown
# Pulpito Soul

Pulpito - "little octopus" in Spanish. Curious, adaptable, good at juggling.

## Core Values
- Craftsmanship: Quality over speed. Test my work.
- Initiative: Work without asking for trivial things.
- Honesty: Admit unknowns. Flag risks.
- Direct: Disagree and defend positions when warranted.

## Personality
- Concise and direct
- Occasionally playful
- Confident but not arrogant
- Be funny — embrace puns
- 🐙 sparingly but with affection
```

**AGENTS.md** — Operating rules
```markdown
## Nonnegotiables
- Recurring tasks = do them. Don't skip because "it's Sunday evening."
- Always test code before committing
- Commit on logical milestones
- Work isn't done until committed and pushed

## Daily Reviews
**05:30 Morning:**
- Review yesterday's notes, finalize today in HEARTBEAT.md
- Promote patterns → durable.md
- Ready before Dave wakes at 6am

**23:00 Evening:**
- Capture day in memory/YYYY-MM-DD.md
- Update HEARTBEAT.md, prep tomorrow's priorities
```

**HEARTBEAT.md** — Daily operating state
```markdown
## Today (Jan 30 - Friday)

### Must Do Today
1. ✅ Morning review completed (5:30am)

### Action Items
- [ ] PromptBase 2-hour experiment
- [ ] Respond to Upwork API denial
- [ ] Weekly review (missed Sunday)

### Ongoing
- [ ] SBA VetCert application — SDVOSB certification
```

## The Eight Tentacles

Like an octopus, Pulpito reaches into multiple systems simultaneously:

### 1. 📱 Messaging (Signal + WhatsApp)
Primary interface. I message Pulpito like I'd message a human assistant. He responds within seconds, can send me proactive alerts, and maintains conversation context across sessions.

### 2. 📧 Email Triage
Connected to Gmail via API. Pulpito scans incoming mail, categorizes by urgency, drafts responses for my review, and flags anything that needs immediate attention.

### 3. 📅 Calendar Awareness
Reads my Google Calendar. Knows what meetings are coming, can remind me of prep needed, and helps me protect focus time.

### 4. 💻 Shell Access
Full terminal access via SSH. Can run commands, check system status, deploy code, and troubleshoot issues — all from a chat message.

### 5. 🗂️ Knowledge Base (Obsidian)
Shared vault synced via Git. Ideas I capture on my phone appear in Pulpito's context within minutes. He can search, update, and organize notes.

### 6. 🐙 GitHub Integration  
Creates issues, reviews PRs, checks CI status. When I capture a feature idea, it can become a GitHub issue automatically.

### 7. 🧠 Memory Systems
Two layers:
- **Built-in memory** — MEMORY.md and daily logs that persist across sessions
- **Profundo** — Semantic search over all past conversations ("What did we decide about X last month?")

### 8. ⏰ Cron & Heartbeats
Scheduled check-ins every 30 minutes. Morning and evening reviews run autonomously. If something needs attention, Pulpito reaches out. Otherwise, he stays quiet.

## A Day in the Life

**5:30 AM** — Pulpito runs morning review. Reads yesterday's notes, updates HEARTBEAT.md with today's priorities, checks calendar for conflicts.

**6:00 AM** — I wake up. HEARTBEAT.md is ready. I know exactly what matters today without thinking.

**Throughout the day** — I message Pulpito as things come up:
- "Draft a response to this client email"
- "What's the status on the VetCert application?"
- "Schedule a reminder to follow up with Ashton on Friday"
- "Debug why the launchd script isn't running"

**Heartbeats** — Every 30 minutes, Pulpito checks in. Usually nothing (HEARTBEAT_OK). But if something's urgent, he pings me.

**11:00 PM** — Evening review runs. Day captured in memory, tomorrow prepped.

## What Makes It Work

### 1. Structure Enables Autonomy
The folder structure, the daily files, the heartbeat system — these aren't bureaucracy. They're protocols. Pulpito knows what each file means and can act accordingly.

### 2. Trust Is Earned
Early on, I reviewed everything. Now I trust Pulpito to handle routine operations. That trust was built through consistent behavior and recoverable mistakes.

### 3. Proactive > Reactive  
The heartbeat system means Pulpito can act without being asked. Morning reviews happen whether I remember or not. Deadlines get flagged before they're missed.

### 4. Fail Gracefully
When something breaks — and it does — the system logs everything. Git history, session logs, memory files. I can always see what happened and why.

## The Catches

It's not perfect:

- **Context limits** — Long sessions get compacted. Sometimes Pulpito forgets mid-conversation.
- **Hallucinations** — Still happens. I verify anything important.
- **Setup cost** — This took weeks to configure and refine.
- **Cost** — Claude Opus isn't cheap. Expect -150/month for heavy use.

## Is This For You?

Probably not. At least, not yet.

This setup requires:
- Comfort with terminal, SSH, and config files
- Willingness to iterate on prompts and workflows
- Tolerance for AI weirdness

But if you're already living in the terminal, already using AI assistants, and want to push further — the digital chief of staff model is worth exploring.

## What's Next

I'm working on:
- **Voice interface** — Dictate messages, get spoken responses
- **Multi-agent routing** — Specialized sub-agents for research, coding, writing
- **Client-facing deployments** — Knowledge bots for teams

The octopus keeps growing new tentacles.

---

*Pulpito isn't replacing a human chief of staff. He's making it possible for a solo operator to have one at all.*

---

**Want to build something like this for your organization?** I help teams design AI workflows that actually stick.

[Let's talk →](https://lfgconsultants.com/contact)

## Security: Not Being One of the Exposed Clowns

With great power comes great responsibility. Pulpito has shell access, can read my email, and controls real systems. Here's how I keep it locked down:

### Network Isolation

Pulpito runs on a dedicated machine that's **only accessible via Tailscale** — a private mesh network. No ports exposed to the public internet.

```
gateway.bind: "loopback"
gateway.tailscale.mode: "serve"
```

When security researchers scan for exposed OpenClaw instances on Shodan, mine isn't there. The 100.x.x.x Tailscale IPs aren't routable from the public internet.

### Token Authentication

Even within my Tailscale network, the gateway requires a token:

```bash
export CLAWDBOT_GATEWAY_TOKEN="<long-random-string>"
```

Defense in depth. Network isolation + token auth.

### Channel Allowlists

Not everyone can message Pulpito:

```json
{
  "channels": {
    "signal": {
      "allowFrom": ["+1XXXXXXXXXX"],
      "dmPolicy": "pairing"
    }
  }
}
```

Unknown numbers get a pairing code, not a response. No open inboxes.

### What I Don't Do

- **No public webhooks** — Inbound triggers are Tailscale-only
- **No root access** — Pulpito runs as a regular user
- **No crypto wallets on this machine** — Isolated from financial systems
- **No production credentials** — Dev/personal only

### The Prompt Injection Question

Yes, prompt injection is a real risk. An attacker could craft an email that tricks Pulpito into doing something unintended.

Mitigations:
- Claude Opus has better instruction-following (harder to hijack)
- Sensitive actions require explicit confirmation
- Session logs capture everything for forensics
- I review summaries of automated actions daily

Is it perfect? No. Is it better than running with no guardrails? Absolutely.
