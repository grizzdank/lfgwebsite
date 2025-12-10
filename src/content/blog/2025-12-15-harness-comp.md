---
title: "Tilting at Agents"
excerpt: "I decided to compare three popular CLI code agent harnesses, Claude Code, Ampcode, and Opencode."
publishedAt: "2025-12-15T10:00:00Z"
category: "Projects"
tags: ["organic coding", "cli", "vibe coding"]
featured: false
author:
  name: "Dave Graham"
  title: "Quixote of Code"
---

# Tilting at Agents:
## A comparison of three popular coding CLI agent harnesses

I decided to compare three popular coding cli agent harnesses, [Ampcode](https://ampcode.com/), [Claude Code](https://www.claude.com/product/claude-code), and [Opencode](https://opencode.ai/). It's not going to be a perfect apples to apples comparison, for example I'm using the Ampcode free version which uses Claude Opus 4.5 while Claude-code will be using Sonnet 4.5 and I tried to use  Opus in opencode until I hit rate limits and spent $16 in tokens. Anyway, to set the stage, I want to create a todo app for my son so that he can easily manage his tasks and stay organized. I chose a progressive webapp (PWA) so he can access it on his iPhone without having to go through the app store. I hope to hook it up to his school's canvas account so it will pull his assignments automatically into the todo list, so I'll be implementing an API call to do that once I get the basic functionality of the app implemented. 

### Initializing 
I started each agent with the same initial prompt, which I put below:
```
I want to build a todo webapp for my son that he can access on his iphone. this will give him a view of the most important things he needs to take care of for the next 3 days (open to experiment with that time window), what training workout that day, upcoming assignments due at school, that sort of thing
```

So each agent finished the app to a similar point, creating frontend logic and backend logic, but waiting for supabase setup and configuration. Claude appears to not have created a backend folder, although to be fair, Ampcode created one but didn't create any backend logic yet. Opencode created a backend folder with backend logic in python.
