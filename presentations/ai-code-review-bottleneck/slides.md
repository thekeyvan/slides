---
theme: default
title: "The AI Code Review Bottleneck"
info: |
  AI Engineering Paris 2026 — Matt Pocock and Kitze.
  20-minute presentation + 5–10 minutes Q&A.
fonts:
  sans: 'Work Sans'
  mono: 'JetBrains Mono'
lineNumbers: false
favicon: '/favicon.ico'
layout: cover
class: text-center
---

<style src="../../theme/style.css"></style>

<div class="text-sm tracking-widest uppercase text-muted">AI Engineering Paris 2026 · Engineering takeaways</div>

# We made coding faster.<br/><span class="gradient-text">What about merging?</span>

<div class="text-2xl mt-8 text-muted">The AI Code Review Bottleneck</div>

<div class="mt-10 text-lg">Matt Pocock × Kitze · From faster code generation to safer delivery</div>

<div class="abs-br m-6 text-sm text-muted">Keyvan Mahmoudi · 20 min + Q&A</div>

<!--
[0:45]

Open with a problem we already recognize: an agent can implement a change, write tests, and produce a pull request much faster than before. But the PR still needs someone to understand the behavior, the risk, and whether the code belongs in our system. That effort has not magically disappeared.

This is the problem Matt Pocock addressed at AI Engineering Paris. The premise is not that AI-generated code is always bad. It's that more code, arriving faster, can overwhelm an unchanged review process.

Today I want to show his proposed answer, how it fits our workflow, and which pieces we could realistically test as a team.

Source: Matt Pocock, Fixing the PR Bottleneck, AI Engineering Paris 2026.
-->


---
layout: default
---

<div class="text-sm text-primary font-bold uppercase">01 · The problem</div>

# Our engineering workflow already has agents

<div class="grid grid-cols-5 gap-3 mt-12 text-center text-lg">
  <div class="card"><div class="text-3xl mb-3">①</div><b>Ticket</b><div class="text-sm text-muted mt-2">Intent</div></div>
  <div class="card"><div class="text-3xl mb-3">②</div><b>Refine</b><div class="text-sm text-muted mt-2">Spec + tests</div></div>
  <div class="card"><div class="text-3xl mb-3">③</div><b>Implement</b><div class="text-sm text-muted mt-2">Agent + branch</div></div>
  <div class="card"><div class="text-3xl mb-3">④</div><b>PR</b><div class="text-sm text-muted mt-2">Generated diff</div></div>
  <div class="card" style="border:2px solid #ea580c"><div class="text-3xl mb-3 text-primary">⑤</div><b>Review</b><div class="text-sm text-primary mt-2">Human attention</div></div>
</div>

<div class="callout mt-10 text-xl"><strong>The last step still requires reconstructing behavior, evidence and risk.</strong></div>

<div class="text-xs text-muted mt-4">Simplified team workflow · not an audit of every repository</div>

<!--
[1:15]

Our workflow already has substantial automation. We start from a ticket, create a branch or work queue, refine the task, write a specification and tests, and ask an agent to implement and review the result. We are not beginning from zero.

The bottleneck appears near the end, when the PR arrives and a human still has to reconstruct what happened and decide whether it is safe to merge. Even good AI work may arrive with thin explanations, questionable tests, or too much diff to read quickly.

I am not claiming that every PR follows this exact sequence in every repository. This is a simplified representation of the agent-assisted workflow we have discussed. Our opportunity is to improve the steps immediately before human review rather than replace the entire process.

Source: Simplified team workflow plus Matt Pocock.
-->


---
layout: default
---

<div class="text-sm text-primary font-bold uppercase">01 · The problem</div>

# More PRs ≠ more delivered software

<div class="grid grid-cols-2 gap-10 mt-10">
  <div class="card">
    <h3 class="text-xl text-center">Generation capacity</h3>
    <div class="flex items-end justify-center gap-2 mt-6" style="height:150px;">
      <div style="width:52px;height:50px;background:#fed7aa;border-radius:5px;"></div>
      <div style="width:52px;height:90px;background:#fb923c;border-radius:5px;"></div>
      <div style="width:52px;height:145px;background:#ea580c;border-radius:5px;"></div>
    </div>
    <div class="text-center mt-3 font-bold text-primary">Growing rapidly</div>
  </div>
  <div class="card">
    <h3 class="text-xl text-center">Review capacity</h3>
    <div class="flex items-end justify-center gap-2 mt-6" style="height:150px;">
      <div style="width:52px;height:52px;background:#a3a3a3;border-radius:5px;"></div>
      <div style="width:52px;height:52px;background:#a3a3a3;border-radius:5px;"></div>
      <div style="width:52px;height:52px;background:#a3a3a3;border-radius:5px;"></div>
    </div>
    <div class="text-center mt-3 font-bold">Human attention is finite</div>
  </div>
</div>

<div class="text-xl text-center mt-8"><strong>More candidate work can mean a longer queue, not higher throughput.</strong></div>
<div class="text-xs text-muted mt-3">Conceptual illustration; no company metrics implied</div>

<!--
[1:15]

Think about a simple queue. Suppose AI lets us produce far more candidate PRs, but the number of reviewer hours remains fixed. We get more work waiting, not necessarily more value delivered. The bars are illustrative; they are not NN statistics.

This is why measuring generated lines of code, PR counts, or tokens consumed alone is misleading. A better outcome measure is the time between a requested change and a safe merge or deployment, without an unacceptable increase in defects.

Matt calls out a compounding danger: low-quality code becomes the environment the next coding agent reads. Poor output can therefore make future output worse. We need a system that raises the quality of the work arriving at the human gate.

Source: Matt Pocock.
-->


---
layout: default
---

<div class="text-sm text-primary font-bold uppercase">02 · Three brakes</div>

# Better brakes make safe speed possible

<div class="grid grid-cols-3 gap-5 mt-14">
  <div class="card" style="border-top:5px solid #16a34a">
    <div class="text-5xl font-extrabold text-green-600 mb-4">01</div>
    <h3 class="text-xl">Automated checks</h3>
    <p>Typecheck · lint · tests · contracts</p>
    <div class="mt-7 text-sm font-bold text-green-700">Deterministic + cheap</div>
  </div>
  <div class="card" style="border-top:5px solid #ea580c">
    <div class="text-5xl font-extrabold text-primary mb-4">02</div>
    <h3 class="text-xl">Automated review</h3>
    <p>Independent context · team standards · safe fixes</p>
    <div class="mt-7 text-sm font-bold text-primary">Contextual review</div>
  </div>
  <div class="card" style="border-top:5px solid #2563eb">
    <div class="text-5xl font-extrabold text-blue-600 mb-4">03</div>
    <h3 class="text-xl">Human judgment</h3>
    <p>Intent · side effects · irreversible risk</p>
    <div class="mt-7 text-sm font-bold text-blue-700">Scarce + decisive</div>
  </div>
</div>

<div class="text-center text-xl mt-10"><strong>Different layers catch different failure modes.</strong></div>

<!--
[1:15]

Matt uses a counterintuitive analogy: to run the factory faster, it needs better brakes. There are three distinct layers.

First: deterministic checks. Types, lint, tests, and any other reproducible quality rules. They are cheap to run and should catch problems we already know how to express.

Second: an automated reviewer, in its own context, using team-specific standards and enough surrounding code to understand the change. Its role is to improve the artifact before humans touch it.

Third: humans focus on decisions that still require judgment — correctness of the requirement, cross-system consequences, and merge risk. These are not three copies of the same review. Each should catch different classes of problems. Matt's goal is fewer necessary human interventions, not a promise of zero human accountability.

Source: Matt Pocock.
-->


---
layout: default
---

<div class="text-sm text-primary font-bold uppercase">02 · The test problem</div>

# Green CI can still lie

<div class="grid grid-cols-3 gap-4 mt-9">
  <div class="card">
    <div class="text-sm text-primary uppercase font-bold">01 · Tautology</div>
    <div class="rounded-md p-3 mt-4 text-base font-mono" style="background:#171717;color:#f5f5f5">const limit = 280;<br/>expect(limit).toBe(280)</div>
    <p class="mt-4 text-base">Repeats an implementation detail instead of checking behavior.</p>
  </div>
  <div class="card">
    <div class="text-sm text-primary uppercase font-bold">02 · Source-order assertion</div>
    <div class="rounded-md p-3 mt-4 text-base font-mono" style="background:#171717;color:#f5f5f5">indexOf('Videos')<br/>&gt; indexOf('Plan')</div>
    <p class="mt-4 text-base">Never renders the UI whose order matters.</p>
  </div>
  <div class="card">
    <div class="text-sm text-primary uppercase font-bold">03 · Perfect mock</div>
    <div class="rounded-md p-3 mt-4 text-base font-mono" style="background:#171717;color:#f5f5f5">mockAudio = {<br/>  play: () =&gt; true<br/>}</div>
    <p class="mt-4 text-base">Cannot reproduce the actual failure modes.</p>
  </div>
</div>

<div class="callout-warning callout mt-8 text-xl"><strong>Ask: what does this passing test actually prove?</strong></div>

<!--
[1:45]

Matt gives examples of ways generated tests can look reassuring without testing the requirement.

The first is a tautological test: if code defines a limit of 280 and the test only asserts that the exported constant equals 280, the test is coupled to the implementation instead of meaningful behavior.

The second is structure-sensitive testing. Imagine we want the Videos section to appear after Content Plan on a rendered page. A weak test searches the component source and compares positions of those strings. That test never renders anything; source order and visual order can differ.

Third, overly simplified mocks can make a test impossible to fail. Matt uses a browser AudioContext example. If the fake API never throws, the test cannot reveal real error behavior.

None of these require agents to cheat intentionally. The key question for our reviewer is: what does this passing test actually prove? Prioritize behavioral and contract tests for critical flows instead of maximizing test counts.

Source: Matt Pocock.
-->


---
layout: default
---

<div class="text-sm text-primary font-bold uppercase">02 · Better boundaries</div>

# Test behavior, not implementation

<div class="grid grid-cols-2 gap-8 mt-11">
  <div class="card">
    <h3 class="text-xl text-red-600">Shallow boundary</h3>
    <div class="mt-7 text-lg">Tests inspect internal flags, functions and source structure.</div>
    <div class="mt-8 text-sm text-muted">Fragile after harmless refactors</div>
  </div>
  <div class="card" style="border:2px solid #16a34a">
    <h3 class="text-xl text-green-700">Deep module boundary</h3>
    <div class="mt-7 text-lg">Tests observe outcomes through a small, meaningful public interface.</div>
    <div class="mt-8 text-sm text-green-700 font-bold">Stable, requirement-aligned evidence</div>
  </div>
</div>

<div class="text-xl mt-10 text-center"><strong>Rendered UI · Domain behavior · API contracts · Integration boundaries</strong></div>
<div class="text-sm text-muted mt-6">Concept adapted from John Ousterhout's deep modules; discussed by Matt Pocock.</div>

<!--
[1:00]

Matt connects test quality to code design, borrowing the idea of deep modules from John Ousterhout. A deep module has a simple public interface hiding meaningful complexity. When tests use that interface, they are less dependent on incidental implementation details.

A shallow design that exposes everything invites tests that reach into internals and break on harmless refactors. A deep module gives us a better place to test actual outcomes.

This does not mean every component must be abstracted or that unit tests are useless. It means, for a behavior that matters, choose an observation point corresponding to the requirement — a rendered UI, domain contract, API response, or real integration boundary.

Source: Matt Pocock plus John Ousterhout.
-->


---
layout: default
---

<div class="text-sm text-primary font-bold uppercase">03 · The agent architecture</div>

# Two contexts. Two responsibilities.

<div class="grid grid-cols-2 gap-9 mt-12">
  <div class="card">
    <div class="text-sm text-muted uppercase font-bold">Implementer</div>
    <h2 class="text-3xl mt-3">Make it work</h2>
    <div class="mt-8 space-y-3 text-xl">
      <div>Explore the codebase</div><div>Write the change</div><div>Debug failing checks</div>
    </div>
  </div>
  <div class="card" style="border:2px solid #ea580c">
    <div class="text-sm text-primary uppercase font-bold">Fresh reviewer context</div>
    <h2 class="text-3xl mt-3">Make it good</h2>
    <div class="mt-8 space-y-3 text-xl">
      <div>Inspect the diff and its context</div><div>Apply repository standards</div><div>Make safe corrective edits</div>
    </div>
  </div>
</div>

<div class="text-lg text-center mt-9"><strong>Separation of context is useful; it is not proof of independence.</strong></div>

<!--
[1:15]

Matt argues that an implementation agent already performs several cognitively expensive jobs: exploring the codebase, making changes and debugging failing checks. If we also load every architecture preference and style rule into that same context, the implementation run becomes overloaded.

Instead, use another context for review. Pass it the diff, relevant surrounding code and a specific repository-owned coding standards file. This resembles make-it-work, then make-it-good. Separate context means it is not constrained by the implementer's accumulated trial and error.

A fresh context is not magical independence. The reviewer can still make mistakes, and sharing the same model may preserve correlated blind spots. But the split makes responsibilities explicit, and team-owned standards become easier to improve over time.

Source: Matt Pocock.
-->


---
layout: default
---

<div class="text-sm text-primary font-bold uppercase">03 · Corrective review</div>

# Fix the code — don't create another queue

<div class="grid grid-cols-2 gap-8 mt-12">
  <div class="card" style="border-top:5px solid #dc2626">
    <h3 class="text-xl text-red-600">Comment-only bot</h3>
    <div class="text-5xl mt-6 font-extrabold">12 comments</div>
    <div class="text-lg text-muted mt-7">The human must interpret, triage and request fixes.</div>
  </div>
  <div class="card" style="border-top:5px solid #16a34a">
    <h3 class="text-xl text-green-700">Corrective reviewer</h3>
    <div class="text-3xl mt-6 font-extrabold">Fix → recheck → summarize</div>
    <div class="text-lg text-muted mt-7">Only unresolved, meaningful decisions reach the human.</div>
  </div>
</div>

<div class="callout-warning callout mt-9 text-lg"><strong>Bound the loop.</strong> Stop after a small number of passes; never silently change requirements.</div>

<!--
[1:15]

There is a distinction between an agent that generates comments and one that actually reduces work. Matt's advice is for the reviewer to commit straightforward fixes. A bot leaving 12 suggestions has moved workload to the human: we must validate, prioritize and request another round.

In a controlled workflow, a reviewer can fix clear standards violations or local issues on the PR branch, then rerun tests. When it is uncertain or disagrees with the requirement, it should ask a concise question instead. We should not let reviewers silently change business requirements or auto-merge risky work.

The goal is a corrected candidate with focused unresolved decisions. We must bound review–fix cycles; otherwise agents can ping-pong and burn tokens without progress.

Source: Matt Pocock and proposed workflow safeguards.
-->


---
layout: default
---

<div class="text-sm text-primary font-bold uppercase">03 · Practical architecture</div>

# An end-to-end PR workflow we can pilot

<div class="grid grid-cols-3 gap-4 mt-8">
  <div class="card"><div class="text-xs text-primary font-bold">01 / REQUIREMENT</div><h3 class="text-lg mt-2">Ticket + acceptance criteria</h3><p class="text-sm">Sort the employer dashboard by date</p></div>
  <div class="card"><div class="text-xs text-primary font-bold">02 / IMPLEMENT</div><h3 class="text-lg mt-2">Agent on isolated branch</h3><p class="text-sm">Code + tests + diff</p></div>
  <div class="card"><div class="text-xs text-primary font-bold">03 / VERIFY</div><h3 class="text-lg mt-2">Deterministic pipeline</h3><p class="text-sm">Typecheck · lint · rendered behavior</p></div>
  <div class="card"><div class="text-xs text-primary font-bold">04 / CORRECT</div><h3 class="text-lg mt-2">Reviewer agent</h3><p class="text-sm">Standards + safe fixes + rerun CI</p></div>
  <div class="card"><div class="text-xs text-primary font-bold">05 / EXPLAIN</div><h3 class="text-lg mt-2">Reviewable PR</h3><p class="text-sm">Evidence · blast radius · rollback</p></div>
  <div class="card" style="border:2px solid #ea580c"><div class="text-xs text-primary font-bold">06 / DECIDE</div><h3 class="text-lg mt-2">Human judgment</h3><p class="text-sm">Approve under existing controls</p></div>
</div>

<div class="text-sm text-muted mt-7">Illustrative employer-portal example. Azure DevOps Boards + Repos + Pipelines are plausible integration points.</div>

<!--
[2:15]

Let's make this concrete using a fictional low-risk change: adding a sorting option to an employer-portal dashboard.

Step one, start with a ticket and explicit acceptance criteria: what is sorted, what happens for equal values, and what a user sees. The ticket should also say which behavior would be unacceptable.

Step two, the implementer operates on a short-lived branch, finds relevant components, implements the change, and adds tests.

Step three, run deterministic checks — TypeScript, lint, unit or component tests, and a targeted behavioral test that renders the actual order instead of searching source text.

Step four, a second agent reads the diff and team's standards, fixes safe issues, and reruns checks. Cap the loop; escalate to a human if it stalls.

Step five, PR description explains expected behavior, evidence, possible side effects and whether the change is reversible. Step six, a person sees a prepared change rather than raw agent output.

We could prototype most of this with the Azure DevOps Boards, Repos and Pipelines we already use. Exact orchestration is an implementation choice, not the main idea. Agents should have scoped branch permissions and must not bypass branch protection.

Source: Proposed implementation based on Matt Pocock. The example is fictional, not company data.
-->


---
layout: default
---

<div class="text-sm text-primary font-bold uppercase">04 · Human review policy</div>

# Review depth should follow merge danger

<div class="grid grid-cols-2 gap-4 mt-8">
  <div class="card"><span class="text-xs text-muted">EASY TO REVERSE · LIMITED IMPACT</span><h3 class="text-xl mt-3 text-green-700">Two-way door</h3><p>Small visual change</p></div>
  <div class="card"><span class="text-xs text-muted">EASY TO REVERSE · WIDE IMPACT</span><h3 class="text-xl mt-3 text-amber-600">Check reach</h3><p>Widely used dependency</p></div>
  <div class="card"><span class="text-xs text-muted">HARD TO REVERSE · LIMITED IMPACT</span><h3 class="text-xl mt-3 text-amber-600">Check consequences</h3><p>Durable record mutation</p></div>
  <div class="card" style="border:2px solid #dc2626"><span class="text-xs text-muted">HARD TO REVERSE · WIDE IMPACT</span><h3 class="text-xl mt-3 text-red-600">One-way door</h3><p>Irreversible migration · sensitive data</p></div>
</div>

<div class="text-lg mt-8 text-center"><strong>Reversibility × blast radius ≠ PR size</strong></div>
<div class="text-sm text-muted mt-4">Risk classification is not permission to bypass organizational approval policy.</div>

<!--
[1:30]

Once the first two layers are useful, Matt asks how we spend human review time. He uses two dimensions: reversibility, and blast radius. Can we undo the change and its consequences? What happens if it is wrong and how many users or systems are affected?

A small visual change may be a two-way door if easy to revert and low consequence. A change that sends sensitive data, modifies durable records or introduces an irreversible migration is not made safe by having only three lines of diff.

Matt proposes all one-way doors get human review while some two-way doors may not need a deep human pass. In our environment that is a proposal to evaluate under actual branch policies, regulatory controls and security requirements — not a recommendation to switch off approvals. The immediate improvement is to make review depth proportional to risk, even if a human approves every PR.

Source: Matt Pocock.
-->


---
layout: default
---

<div class="text-sm text-primary font-bold uppercase">04 · Reviewer experience</div>

# Make the PR explain itself

<div class="card mt-8" style="max-width:820px;margin-left:auto;margin-right:auto;">
  <div class="text-xl font-bold mb-5">PR: Sort dashboard by most recent activity</div>
  <div class="grid grid-cols-2 gap-x-9 gap-y-5 text-lg">
    <div><div class="text-xs uppercase font-bold text-primary">Why</div>Newest employer activity is easiest to find</div>
    <div><div class="text-xs uppercase font-bold text-primary">Behavior</div>Newest first; stable tie-breaking</div>
    <div><div class="text-xs uppercase font-bold text-primary">Evidence</div>Rendered ordering test + checks passed</div>
    <div><div class="text-xs uppercase font-bold text-primary">Risk</div>UI-only · localized · reversible</div>
    <div class="col-span-2"><div class="text-xs uppercase font-bold text-primary">Open question</div>Confirm whether historical records use created or modified timestamp</div>
  </div>
</div>

<div class="text-lg text-center mt-8"><strong>Better evidence reduces reconstruction work.</strong></div>

<!--
[1:15]

Even after code is corrected, a human still needs the right information. Matt proposes a PR-generating skill writing useful explanation of merge danger and what changed. He also favors pseudocode and small diagrams when they communicate behavior faster than prose.

Here is what I'd want our PR to say: why the change exists, what behavior changed, what evidence ran, where blast radius sits, whether we can reverse it, and which decisions are unresolved.

That turns the PR body into an interface for review rather than an auto-generated changelog. For a BFF contract change, include an API example or sequence diagram. For UI, a before-and-after capture. The value is not more documentation; it is less time reconstructing context.

Source: Matt Pocock's PR skill, merge danger framing, proposed example.
-->


---
layout: default
---

<div class="text-sm text-primary font-bold uppercase">04 · The feedback loop</div>

# Never write the same review comment twice

<div class="grid grid-cols-4 gap-4 mt-16 text-center">
  <div class="card"><div class="text-4xl text-primary mb-5">1</div><h3 class="text-lg">Human finding</h3><p class="text-sm">Repeated issue</p></div>
  <div class="card"><div class="text-4xl text-primary mb-5">2</div><h3 class="text-lg">Retro</h3><p class="text-sm">Review session / PR history</p></div>
  <div class="card"><div class="text-4xl text-primary mb-5">3</div><h3 class="text-lg">Improve factory</h3><p class="text-sm">Test, standard or navigation</p></div>
  <div class="card"><div class="text-4xl text-primary mb-5">4</div><h3 class="text-lg">Next PR</h3><p class="text-sm">Better input to review</p></div>
</div>

<div class="callout mt-11 text-xl"><strong>Human insight should compound into reusable safeguards.</strong></div>

<!--
[1:30]

The final part of Matt's talk may be the most important. When a human spots a repeated agent mistake, review should not end when the current PR is fixed. Ask how the system allowed that mistake and how the next run can avoid it.

His Retro skill can read a completed agent session, PR and review history, or a collection of recent reviews. It may propose a deterministic rule, coding standard, pointer to useful documentation in AGENTS.md, or cleanup of bloated instructions.

If reviewers keep correcting the same test smell, don't rely on another reminder in a comment. Add a reproducible regression example, improve the review skill or introduce a check where possible.

'Propose' matters: review retrospective suggestions before adding shared rules, otherwise contradictory instructions accumulate. The desired compound effect is an expensive human insight becoming a cheap repeatable safeguard.

Source: Matt Pocock's Retro skill.
-->


---
layout: default
---

<div class="text-sm text-primary font-bold uppercase">04 · Related insight from Kitze</div>

# Parallel agents amplify the system around them

<div class="grid grid-cols-2 gap-9 mt-12">
  <div class="card">
    <div class="text-sm text-muted uppercase">Kitze · Engineering environment</div>
    <h3 class="text-2xl mt-3">More parallel work</h3>
    <div class="mt-7 text-lg">Isolated execution<br/>Reusable tooling<br/>Visible feedback</div>
  </div>
  <div class="card" style="border:2px solid #ea580c">
    <div class="text-sm text-primary uppercase">Pocock · Acceptance architecture</div>
    <h3 class="text-2xl mt-3">More reliable PRs</h3>
    <div class="mt-7 text-lg">Checks<br/>Corrective review<br/>Risk-based human decision</div>
  </div>
</div>

<div class="text-xl text-center mt-10"><strong>Increasing generation capacity without gates only moves the queue.</strong></div>
<div class="text-sm text-muted mt-5">Synthesis of two talks; not a direct quotation.</div>

<!--
[1:00]

A useful connection from Kitze's session is that once we run agents in parallel, the surrounding environment matters even more: good foundations, reusable tools, isolated execution and visible feedback. Parallel agents can increase candidate output quickly, but that does not automatically raise merge throughput.

Distinguish this supporting insight from Matt's specific review proposal. Kitze emphasized engineering environment and agency; Matt focused on how to prepare and safely accept resulting PRs. Together they suggest: as generation capacity grows, quality and isolation gates must be at least as dependable.

We can start locally with branch isolation and clear pipelines. A full cloud-hosted software factory is not required to test the review architecture.

Source: Kitze, AI Engineering Paris 2026; synthesis with Matt.
-->


---
layout: default
---

<div class="text-sm text-primary font-bold uppercase">05 · Limits and trade-offs</div>

# What could go wrong?

<div class="grid grid-cols-2 gap-5 mt-9">
  <div class="card"><h3 class="text-xl text-red-600">Correlated blind spots</h3><p class="text-base mt-3">A fresh agent can share the same mistaken assumption.</p></div>
  <div class="card"><h3 class="text-xl text-red-600">Review noise</h3><p class="text-base mt-3">False positives and comment overload burn attention.</p></div>
  <div class="card"><h3 class="text-xl text-red-600">Runaway loops</h3><p class="text-base mt-3">Repeated fixes add latency and token cost.</p></div>
  <div class="card"><h3 class="text-xl text-red-600">Permissions and governance</h3><p class="text-base mt-3">Agents must not bypass branch protections or accountability.</p></div>
</div>

<div class="callout-warning callout mt-7 text-lg"><strong>Prove that the reviewer removes work; measure defects, noise, time and cost.</strong></div>

<!--
[1:30]

The proposal has limits. An implementing and reviewing agent can share the same mistaken assumption. Independent context reduces clutter; it does not guarantee independent judgment. Important behavior still needs meaningful tests and ownership.

Generic bots may produce false positives and approval fatigue. That is why Matt emphasizes repository-specific coding standards. Even then measure whether the bot eliminates work or just moves it.

Automatic fix loops can become infinite. Use a small retry budget, cost and latency limits and defined escalation.

Permissions are part of quality. Keep agents on isolated branches with suitable credentials, preserve auditability, rerun checks after reviewer commits and honor normal branch protections. This matters especially for sensitive employer and insurance workflows. Automation should reduce low-value human effort, not bypass accountability.

Source: Matt Pocock and practical engineering risk analysis.
-->


---
layout: default
---

<div class="text-sm text-primary font-bold uppercase">05 · Next sprint</div>

# Run a two-sprint experiment

<div class="grid grid-cols-2 gap-8 mt-10">
  <div class="card">
    <h3 class="text-2xl">Pilot</h3>
    <div class="mt-5 text-lg space-y-3">
      <div>1 low-risk repository</div>
      <div>Team-owned review standards</div>
      <div>Reviewer agent + bounded fixes</div>
      <div>Existing human approval unchanged</div>
    </div>
  </div>
  <div class="card">
    <h3 class="text-2xl">Measure</h3>
    <div class="mt-5 text-lg space-y-3">
      <div>Review wait time</div>
      <div>Human rework / comments</div>
      <div>Defects and false positives</div>
      <div>Extra CI + model cost</div>
    </div>
  </div>
</div>

<div class="mt-10 text-center text-2xl font-bold"><span class="gradient-text">Optimize safe delivery, not generated PR count.</span></div>
<div class="abs-br m-6 text-sm text-muted">Discussion · 5–10 minutes Q&A</div>

<!--
[1:15]

My proposal is not to buy an orchestration platform or roll out auto-merge. We already have enough to run a small controlled experiment.

Choose one low-risk repository and a repeatable class of PRs. Baseline recent review waiting time and rework. Add focused repository-owned coding standards, an agent review stage on the feature branch, and deterministic checks that rerun after safe edits. Keep the existing human approval policy.

During two sprints, track review latency, human comments, reviewer false positives, defects or regressions, and additional CI and model cost. If the stage makes PRs easier to trust and reduces actual work, expand it; if it adds noise or delay, revise or remove it.

Closing thought: speed does not come from generating the maximum number of PRs. It comes from reducing avoidable decisions between useful code and safe delivery.

Q&A.

Suggested Q&A:
- Why not auto-merge? Approval changes require engineering/security/compliance decision.
- Why another agent? Dedicated context and standards; no guarantee of correctness.
- Isn't this existing review? Make it corrective, bounded, rerun CI and measure work saved.
- What if tests are written by the agent? Use explicit acceptance criteria and observable behavior as oracle.
- What if token cost rises? Measure end-to-end lead time and human interventions.

Sources: Proposal derived from Matt Pocock and Kitze; no pilot benefits claimed as measured.
-->
