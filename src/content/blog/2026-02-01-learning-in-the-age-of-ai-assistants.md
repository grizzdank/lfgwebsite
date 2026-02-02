---
title: "Learning in the Age of AI Assistants: Don't Let Your Brain Atrophy"
excerpt: "New research shows most ways people use AI coding assistants actively harm learning. Here's how to stay sharp while still moving fast."
publishedAt: "2026-02-07T09:00:00Z"
category: "AI & Automation"
tags: ["AI", "learning", "skill development", "productivity", "knowledge work"]
featured: true
draft: true
author:
  name: "Dave Graham"
  title: "Principal Consultant"
---

There's a dark side to AI assistance that nobody wants to talk about: it can make you dumber.

Not theoretically. Measurably.

## The Research

A recent paper from Anthropic researchers (Shen & Tamkin, January 2026) studied how different AI interaction patterns affect skill formation. They identified six distinct patterns — and only three preserve learning.

The results are stark:

| Pattern | Quiz Score | Learning Outcome |
|---------|------------|------------------|
| Generation-Then-Comprehension | **86%** | ✅ Strong |
| Conceptual Inquiry | 65% | ✅ Preserved |
| Hybrid Code-Explanation | 68% | ✅ Preserved |
| AI Delegation | 39% | ❌ Impaired |
| Progressive AI Reliance | 35% | ❌ Impaired |
| Iterative AI Debugging | **24%** | ❌ Severely impaired |

The worst pattern — letting AI debug your code iteratively without understanding the fixes — resulted in quiz scores barely better than random guessing.

## What This Means

Ethan Mollick has written extensively about AI as a "management superpower" — the ability to delegate to AI and accomplish more than ever before. He's right. But there's a trap.

**Delegation without comprehension is outsourcing your brain.**

The "Progressive AI Reliance" pattern is especially insidious. You start engaged, writing code and asking AI to review. Then you start letting AI write more. Then you're just copy-pasting and shipping. Each step feels productive. But you're slowly losing the ability to do the work yourself.

This isn't hypothetical. I've caught myself doing it.

## My Learning Protocol

After reading this research, I've implemented what I call "comprehension checkpoints" in my AI workflow:

### 1. Generate-Then-Explain

When AI produces code, I don't just run it. I ask: "Explain this implementation line by line."

The act of reading the explanation — even if I could have figured it out — activates the learning circuits that pure copy-paste bypasses.

```
Me: Write a function to debounce API calls

AI: [generates code]

Me: Explain how this debounce implementation works, 
    especially the closure and timeout handling.

AI: [detailed explanation]
```

That second prompt is the difference between 39% and 86% retention.

### 2. Conceptual-First Prompting

For topics I'm learning (not just shipping), I start with concepts before asking for code:

```
Me: Explain the concept of backpressure in async systems. 
    What problems does it solve?

AI: [conceptual explanation]

Me: Now show me how to implement backpressure in a Rust channel.
```

By understanding the "why" first, I can evaluate the code AI produces rather than blindly trusting it.

### 3. Struggle First, Then Ask

For problems I want to truly learn, I set a timer. 15-30 minutes of genuine struggle before asking AI for help.

The struggle creates mental hooks. When AI provides the answer, it clicks into place rather than sliding off.

### 4. Teach-Back

After learning something new with AI help, I explain it to Pulpito (my AI assistant) as if teaching a beginner. If I can't explain it simply, I didn't learn it.

```
Me: Let me explain what I just learned about backpressure 
    to make sure I've got it...

AI: [listens, asks clarifying questions, corrects misconceptions]
```

The Feynman technique, with an AI that actually responds.

## The Centaur Paradox

Here's the tension: I use AI constantly. I've written about building a "centaur brain" — a shared memory layer between me and my AI assistant. I run my life through Pulpito.

But I also need to stay sharp. Delegation is powerful. Atrophy is real.

The solution isn't to use AI less. It's to use AI *differently* depending on the goal:

| Goal | Pattern | AI Role |
|------|---------|---------|
| Ship fast | Delegation | Do it for me |
| Learn new skill | Conceptual-first | Teach me, then show me |
| Deepen understanding | Generate-then-explain | Do it, then explain |
| Build intuition | Struggle-first | Help only after I try |

The key insight: **you have to consciously choose which mode you're in**.

Default mode is delegation. Default mode makes you dumber. You have to actively opt into learning mode.

## For Teams

If you're leading a team, this research has serious implications:

1. **Junior developers are at highest risk.** They don't have the foundation to evaluate AI output. Iterative AI debugging (24% retention) is exactly how juniors naturally use Copilot.

2. **Code review matters more than ever.** Not for catching bugs — AI is pretty good at that. For forcing comprehension. "Explain why this works" should be a standard review comment.

3. **Pair programming > AI solo.** Two humans plus AI learn more than one human plus AI. The discussion creates comprehension checkpoints naturally.

4. **Training should include AI interaction patterns.** Not "how to prompt" — how to prompt *while still learning*.

## The Bottom Line

AI makes the skilled more productive and the unskilled more dependent.

Which one you become is a choice you make every time you interact with an AI assistant.

Ask for the explanation. Struggle before you ask. Teach it back. Stay sharp.

The centaur that stops exercising its human half isn't a centaur anymore. It's just a horse with delusions.

---

**References:**
- Shen, K. & Tamkin, A. (2026). "How AI Impacts Skill Formation." Anthropic Research.
- Mollick, E. "Management as AI Superpower." One Useful Thing.

---

**Building AI workflows for your team?** I help organizations implement AI patterns that amplify capability without sacrificing skill development.

[Let's talk →](https://lfgconsultants.com/contact)
