---
title: "Centaur Health: How I Used AI to Analyze 643,000 Genetic Variants"
excerpt: "I fed my raw 23andMe data to Claude Code, compared it to my actual bloodwork, and walked into my doctor's appointment with a plan. Here's how the human-AI partnership turned 643k genetic variants into real medical action."
publishedAt: "2026-01-22T12:00:00Z"
category: "AI & Automation"
tags: ["centaur", "AI health", "genomics", "23andMe", "Claude Code", "personal analytics"]
featured: true
draft: true
---

## 643,161 Data Points. One Hour. Zero Medical Degrees.

That's what sat in my 23andMe raw data export—a zip file I'd downloaded years ago and never touched. Over half a million genetic markers that could tell me about disease risks, drug responses, and traits I'd inherited. 

The problem? Making sense of it requires expertise I don't have.

Professional genetic interpretation services cost hundreds of dollars. DIY research would take weeks. So the file just sat there.

Then I tried something different: I turned it into a collaboration between human judgment and AI processing.

## What Is a Centaur?

In chess, "centaur" teams—human plus AI working together—consistently beat both pure humans and pure AI. The human provides intuition and judgment. The AI provides calculation and pattern recognition.

The mythical centaur had the mind of a human and the body of a horse. Neither alone. Both together, stronger than either.

I wanted to test this with something personal: my genome.

## The Division of Labor

**I brought:**
- The questions that mattered to me (LDL cholesterol runs in my family)
- Domain context (what areas to focus on, what to skip)
- Judgment calls (what to act on vs. what to file away)
- Privacy decisions (what stays private, what I share here)

**Claude Code brought:**
- Pattern recognition across 643k data points
- Synthesis of research on what each variant means
- Structured analysis across multiple health categories
- Visualization to make it comprehensible

Neither of us could have done this alone. I don't have the time to research 643k SNPs. Claude doesn't know which findings would actually change my behavior.

## The Process

### Step 1: Assess the Data

I pointed Claude Code at the raw file:

```
Analyze my_genome_data.txt and tell me what we have.
```

Within seconds: file format identified, SNP count verified, data structure mapped. We had 643,161 markers to work with.

### Step 2: Start Specific, Not Broad

Here's the key insight: don't ask "analyze everything." That's how you get overwhelmed with noise.

Instead, I started with what I actually cared about:

```
I have high LDL cholesterol. What variants in my data relate to 
lipid metabolism, and what do they suggest?
```

This is the centaur approach—**human provides direction, AI provides depth**.

The AI identified 13 relevant variants across PCSK9, APOB, LDLR, and APOE genes, then synthesized them into a risk profile with specific recommendations.

### Step 3: Expand Systematically

Once I saw the quality of the LDL analysis, I expanded:

```
Now analyze: disease risk markers, longevity genes, athletic 
profile, metabolism, and cognitive wellness. Create a comprehensive 
report with actionable recommendations.
```

The report covered:
- **Cardiovascular**: Lipid metabolism, clotting factors
- **Neurological**: APOE status, BDNF variants
- **Metabolic**: Diabetes risk markers (TCF7L2, FTO)
- **Longevity**: FOXO3 and telomere-related genes
- **Athletic**: Muscle fiber composition (ACTN3), recovery profile (COMT)
- **Nutrition**: Caffeine metabolism, B12 absorption, vitamin D processing

### Step 4: Make It Visual

Raw tables of genetic data are hard to grok. So I asked for a dashboard:

```
Create an interactive HTML dashboard with charts showing my 
risk profiles, with a dark theme.
```

The result: risk scores visualized as gauges, traits organized by category, and clear action items highlighted. All generated locally, nothing uploaded anywhere.

## Sample Findings

Here's the type of insight this approach produces:

| Category | Finding | Action |
|----------|---------|--------|
| **Longevity** | Favorable variants in longevity-associated genes | Double down on fasting, zone 2 cardio |
| **Metabolism** | Elevated diabetes risk markers | Limit refined carbs, monitor glucose |
| **Cognitive** | "Warrior" stress-response profile | Thrive under pressure; manage chronic stress |
| **Nutrition** | Fast caffeine metabolizer | Coffee may be cardioprotective |
| **Athletic** | Mixed muscle fiber type | Suited for hybrid training, not pure endurance |
| **LDL** | Multiple variants affecting cholesterol clearance | Aggressive lifestyle intervention |

Generic health advice says "exercise more" and "eat better." Genetic analysis says *which* exercise and *why* certain foods matter more for you specifically.

## The Real Test: Genetics vs. Bloodwork

Here's where it got interesting. I had actual lab results sitting in another folder. So I asked the AI to compare predictions to reality.

**Genetics predicted → Labs confirmed:**

| Prediction | What Labs Showed |
|------------|------------------|
| Elevated LDL risk (multiple variants) | LDL flagged HIGH ✓ |
| Vitamin D processing issues | Vitamin D insufficient ✓ |

The genetics weren't just theoretical—they explained my actual numbers.

**But here's the twist:**

My genetics also showed elevated Type 2 diabetes risk. Multiple variants predict reduced insulin secretion and carbohydrate intolerance.

My actual glucose markers? Excellent.

**Lifestyle was overriding genetics.** My diet and exercise patterns were compensating for genetic predisposition. The AI flagged this as "keep doing what you're doing, but don't get complacent."

This is the centaur insight: genetics show the hand you're dealt, bloodwork shows how you're playing it.

## From Analysis to Action

The analysis didn't stay in a markdown file. I generated a summary for my doctor with specific questions:

- Given my lipid-related variants, should we consider more aggressive LDL targets?
- My vitamin D has been low for years despite supplementation—genetic variants may explain why. Higher dose?
- What additional markers should we track given my genetic profile?

**Outcome:** Started medication for LDL. Adjusted vitamin D dosing. Scheduled advanced lipid testing.

The AI provided the research synthesis. The doctor provided the medical judgment. I provided the decision to act. Centaur health in practice.

## What AI Can't Do

The centaur model requires honesty about AI limitations:

**This isn't medical advice.** These are statistical probabilities from research studies, not diagnoses. I'm discussing actionable findings with my doctor, not self-prescribing based on SNPs.

**Context matters.** AI doesn't know my family history, current meds, or lifestyle unless I provide them. The interpretation is only as good as the context I give it.

**Research evolves.** Genetic science moves fast. Some of these associations may be refined or revised. Treat findings as hypotheses to explore, not certainties.

**Judgment stays human.** Should I get additional testing? Change my diet dramatically? Start a supplement? Those decisions require human judgment about risk tolerance, priorities, and quality of life.

## Why This Matters

This isn't about bypassing doctors or genetic counselors. It's about **preparation and access**:

- **Democratized exploration**: Professional genetic interpretation costs $300+. This took an hour.
- **Validated predictions**: Comparing genetics to actual labs confirmed the analysis wasn't just theoretical.
- **Better conversations**: I walked into my doctor's appointment with specific questions, not vague concerns. Left with a treatment plan.
- **Accelerated understanding**: Research that would take weeks to compile was synthesized in minutes.

The goal isn't to replace expertise—it's to show up more informed. My doctor didn't have to explain what PCSK9 variants are. We jumped straight to "given this profile, here's the plan."

## The Centaur Framework

This approach works for any personal data analysis:

1. **Human provides direction** — What questions actually matter to you?
2. **AI provides depth** — Process volume, find patterns, synthesize research
3. **Human provides judgment** — What to act on, what to verify, what to ignore
4. **Iterate together** — Refine questions based on initial findings

Your genome. Your financial records. Your health metrics. Your career history. All of these benefit from the centaur approach: human judgment steering AI capability.

## Try It Yourself

If you have 23andMe or AncestryDNA raw data:

1. **Download your raw data** — Both services let you export the full file
2. **Use a capable AI assistant** — Claude Code, Cursor, or similar with file access
3. **Start specific** — One health question you actually care about
4. **Expand systematically** — Let quality guide how far you go
5. **Verify what matters** — Discuss actionable findings with healthcare providers

Remember: this is insight generation, not medical advice. The AI helps you understand what's in your data. What you *do* with that understanding is a human decision.

---

*The centaur doesn't replace the human or the horse. It combines them into something neither could be alone.*

---

**Want to explore AI-augmented workflows for your work?** [Let's talk](https://lfgconsultants.com/contact).
