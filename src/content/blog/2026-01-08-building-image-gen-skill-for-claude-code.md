---
title: "Building an Image Generation Skill for Claude Code"
excerpt: "A terminal-native image generation workflow that eliminates context switching and enables iterative refinement without leaving your editor."
publishedAt: "2026-01-08T10:00:00Z"
category: "AI & Automation"
tags: ["claude code", "skills", "image generation", "developer tools", "workflow"]
featured: false
author:
  name: "Dave Graham"
  title: "Principal Consultant"
---
![Terminal showing image generation in action](/blog/2026-01-08-building-image-gen-skill-for-claude-code/hero.webp)

What if you could generate images without leaving your Claude Code session in terminal? No browser tabs, no context switching. Just ask Claude.

## The Problem

Context switching kills flow. Every time you need an image, you open a new tab, navigate to Midjourney or DALL-E, copy-paste prompts, download files, and move them to the right folder.

Iterations compound the friction. Tracking what changed between versions becomes its own project.

## What I Built

A Claude Code skill that wraps both Gemini and OpenAI image APIs into a single interface. Ask Claude to generate an image, and it:

- **Picks the right model automatically** based on your prompt
- **Saves directly to your project directory** with sensible naming
- **Tracks session state** so you can iterate with follow-up prompts

## Smart Model Selection

Instead of memorizing which model does what, the skill analyzes your prompt and routes accordingly:

| Detected Intent | Selected Model | Reason |
|----------------|----------------|--------|
| Transparency keywords | gpt-image-1.5 | Only OpenAI supports transparent PNG |
| Text/typography | gpt-image-1.5 | Better text rendering |
| "4K", "high res", "poster" | nano-banana-pro | Supports up to 4K |
| "quick", "draft", "sketch" | nano-banana | Faster iteration |
| Default | nano-banana-pro | Best overall quality |

## The Iteration Flow

The skill maintains per-project session state, which makes iterative refinement seamless:

```bash
# First generation
"Generate a cozy cabin in the woods"
# Saves: cabin_001.png

# Claude remembers the last image
"Add snow on the roof"
# Uses cabin_001.png as input, saves cabin_002.png

"Add warm light in the windows"
# Uses cabin_002.png, saves cabin_003.png
```

Each edit builds on the last. No re-uploading, no file management.

## Demo

![Animated demo of the image generation workflow](/blog/2026-01-08-building-image-gen-skill-for-claude-code/demo.gif)

## Technical Details

### Venv Bootstrap

The skill self-activates its virtual environment regardless of how Claude invokes it:

```python
VENV_PYTHON = SKILL_DIR / ".venv" / "bin" / "python3"

def _ensure_venv():
    if VENV_PYTHON.exists() and Path(sys.executable).resolve() != VENV_PYTHON.resolve():
        os.execv(str(VENV_PYTHON), [str(VENV_PYTHON)] + sys.argv)
```

Dependencies work without polluting your system Python.

### MIME Type Detection

A bug I shipped and fixed: the original code saved everything as `.png` regardless of actual format. Gemini returns JPEG data, so I was creating files with wrong extensions.

The fix parses the data URL header:

```python
if base64_data.startswith("data:"):
    header, base64_data = base64_data.split(",", 1)
    mime_type = header.split(";")[0].replace("data:", "")
    ext = {"image/png": "png", "image/jpeg": "jpg"}.get(mime_type, "png")
```

### Cost Optimization

If you use Gemini models heavily, OpenRouter's BYOK (Bring Your Own Key) option lets you use your own Google API key. This bypasses their commission and saves roughly 20-30%.

## Try It

**GitHub:** [github.com/grizzdank/image-gen](https://github.com/grizzdank/image-gen)

```bash
git clone https://github.com/grizzdank/image-gen.git ~/.claude/skills/image-gen
cd ~/.claude/skills/image-gen
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

Set your API keys and you're ready to generate.

## What's Next

Some directions I'm exploring:

- **Batch generation with variations** for A/B testing visual concepts
- **Style presets** to maintain brand consistency across generations
- **Integration with other Claude Code skills** for end-to-end workflows

---

**Building custom AI tooling for your team?** I help organizations create workflows that eliminate friction and keep developers in flow state.

[Book a free strategy session →](/schedule)
