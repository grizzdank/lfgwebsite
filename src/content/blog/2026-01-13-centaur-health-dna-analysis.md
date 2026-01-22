---
title: "Centaur Health: How I Used AI to Analyze 643,000 Genetic Variants"
excerpt: "I fed my raw 23andMe data to Claude Code and got back actionable health insights in under an hour. Here's how the human-AI partnership unlocked my genome."
publishedAt: "2026-01-13T12:00:00Z"
category: "AI & Automation"
tags: ["centaur", "AI health", "genomics", "23andMe", "Claude Code", "personal analytics"]
featured: false
draft: true
---

## The Centaur Advantage

A centaur isn't about replacing human judgment with AI—it's about combining them. The mythical creature had the body of a horse and the mind of a human. In chess, "centaur" players (human + AI teams) consistently beat both pure humans and pure AI.

I wanted to test this with something personal: my genome.

## The Challenge

I had my raw 23andMe data sitting in a zip file—643,161 SNPs (single nucleotide polymorphisms), essentially a massive text file of genetic markers. The data is yours when you download it, but making sense of it? That requires:

- Knowing which of those 643k markers actually matter
- Understanding what each variant means
- Cross-referencing current research
- Synthesizing it into actionable recommendations

This is exactly the kind of task where human + AI collaboration shines.

## The Human Part

I brought:
- **The question**: What does my DNA say about my health risks and what should I do about it?
- **Domain context**: I knew I wanted to understand LDL cholesterol (runs in my family), longevity markers, and athletic potential
- **Judgment calls**: Which findings to act on, which to discuss with my doctor, which to ignore
- **Privacy decisions**: What to share, what to redact

## The AI Part

Claude Code brought:
- **Pattern recognition** across 643k data points
- **Research synthesis** on what each variant means
- **Structured analysis** organizing findings into actionable categories
- **Visualization generation** turning data into comprehensible charts

## The Process

### Step 1: Upload and Explore

I pointed Claude Code at my raw 23andMe file and asked it to assess what we were working with:

```
Analyze genome_Dave_Graham_v5_Full.txt and tell me what we have.
```

Within seconds, it had parsed the file format, counted SNPs, and identified the data structure.

### Step 2: Targeted Analysis

Rather than asking "tell me everything," I started with specific questions:

```
I have high LDL cholesterol. What variants in my data relate to 
lipid metabolism, and what do they suggest?
```

This is the centaur approach—I provided the *direction*, AI provided the *depth*. It identified 13 relevant variants across PCSK9, APOB, LDLR, and APOE genes, then synthesized them into a risk profile.

### Step 3: Expand Systematically

Once I saw the LDL analysis quality, I expanded:

```
Now analyze: disease risk markers, longevity genes, athletic 
profile, metabolism, and cognitive wellness. Create a comprehensive 
report with actionable recommendations.
```

The AI produced a structured report covering:
- Cardiovascular risk markers
- Neurological markers (APOE, BDNF)
- Metabolic/diabetes risk (TCF7L2, FTO)
- Longevity profile (FOXO3, telomere genes)
- Athletic potential (ACTN3, COMT)
- Nutrition metabolism (caffeine, B12, vitamin D)

### Step 4: Visualize

Raw findings are hard to grok. I asked for visualizations:

```
Create an interactive HTML dashboard with charts showing my 
risk profiles, with a dark theme.
```

[TODO: Insert redacted visualization screenshot]

## Key Findings (Redacted Sample)

Here's what the centaur analysis revealed—demonstrating the kind of insights possible without sharing my actual genotypes:

| Category | Finding | Action |
|----------|---------|--------|
| Longevity | Favorable FOXO3 variants | Leverage with fasting, exercise |
| Metabolism | Elevated diabetes risk | Limit refined carbs, monitor glucose |
| Cognitive | "Warrior" stress profile | Competitive environments beneficial |
| Nutrition | Fast caffeine metabolizer | Coffee is protective |
| Athletic | Mixed fiber type | Suited for varied training |

## What AI Can't Do

The centaur model requires acknowledging AI limitations:

1. **Not medical advice**: These are probabilities, not diagnoses. I'm discussing findings with my doctor.

2. **Missing context**: AI doesn't know my family history, lifestyle, or other health factors unless I provide them.

3. **Research evolves**: Genetic interpretation is a moving target. Some findings may be revised.

4. **Judgment calls**: Should I get additional testing? Change my diet? Start a supplement? Those decisions are human.

## Why This Matters

This isn't about replacing genetic counselors or doctors. It's about:

- **Democratizing access**: Professional genetic interpretation costs hundreds of dollars. This cost me an hour.
- **Personalizing health**: Generic advice says "exercise more." My genetics say *which* exercise and *why*.
- **Accelerating understanding**: I could have spent weeks researching each SNP. AI synthesized it in minutes.

## The Centaur Framework for Personal Analytics

This approach works for any personal data analysis:

1. **Human provides direction**: What questions matter to you?
2. **AI provides depth**: Process volume, find patterns, synthesize research
3. **Human provides judgment**: What to act on, what to verify, what to ignore
4. **Iterate together**: Refine questions based on initial findings

Your genome. Your health data. Your financial records. Your career history. All of these benefit from the centaur approach.

## Try It Yourself

If you have 23andMe or AncestryDNA raw data:

1. Download your raw data file (both services allow this)
2. Use Claude Code, Cursor, or similar AI coding assistant
3. Start with specific questions, not "analyze everything"
4. Verify important findings with healthcare providers
5. Remember: this is insight generation, not medical advice

## What's Next

I'm building a simple tool to help others run similar analyses on their own data—privately, locally, with no data leaving your machine. Stay tuned.

---

*The centaur doesn't replace the human or the horse. It combines them into something neither could be alone.*
