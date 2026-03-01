## Sentient Infrastructure for Superyachts & Private

## Estates.

**The Proposition:** Moving beyond “Smart Homes” to “Invisible

Intelligence.”

_Local-First. Zero-Cloud. 120B Parameter Reasoning._

**Founder:**

Kiran Karthikeyan Achari | Lead Systems Architect (Boehm

Group, Robotics Specialist)

### November 2025 | Status: Confidential Investor Brief


### Confidentiality

This investor brief is confidential and intended solely for evaluation of a potential pilot part-
nership or strategic investment relationship. Redistribution requires prior written consent
from VŒRYNTH SYSTÈME.

### Disclaimer

This document contains forward-looking statements, technical illustrations, and indicative
pricing. Final specifications, timelines, certification requirements, and commercial terms
depend on the installation environment (estate/yacht/commercial), regulatory constraints,
and the chosen scope of work. Safety-critical marine systems (autopilot, engine controls,
certified alarms) are never overridden by our platform; we operate as a _monitoring + com-
fort orchestration_ layer.

### Contact

Kiran Karthikeyan Achari — Lead Systems Architect

_Germany (DACH focus) | Remote pilots possible across EU refit hubs_

### Copyright

© 2026 VŒRYNTH SYSTÈME — All rights reserved.


## Table of Contents


- 1 Executive Summary
   - 1.1 What We Build.
   - 1.2 Why This Matters
- 2 The Problem
   - 2.1 Cost of Failure (What Pain Looks Like)
- 3 The Solution (The Iceberg Architecture)
   - 3.1 The “Soul” (90% Invisible — The Product)
   - 3.2 The “Skin” (10% Visible — The Interface)
   - 3.3 A Simple Promise
- 4 The Technology Stack (How It Works)
   - 4.1 Layer 1: The “Hard” Metal (Connectivity)
   - 4.2 Layer 2: The Translation Core (Signal K & Middleware).
   - 4.3 Layer 3: The State Engine (Home Assistant Core)
   - 4.4 Layer 4: The “Vœrynth Core” (The Brain — Our IP)
   - 4.5 Layer 5: The Neural Interface (The App)
- 5 The Marine Differentiator
   - 5.1 The Vœrynth Advantage (NMEA Integration)
- 6 Security, Privacy, and Boundaries
   - 6.1 Security Model (Practical, Not Marketing)
   - 6.2 Privacy Model
- 7 Product Suites
   - 7.1 1. The Penthouse Suite (“The Sanctuary”)
   - 7.2 2. The Yacht Suite (“The Captain”)
   - 7.3 3. The Commercial Suite (“The Steward”).
- 8 Demonstration Dashboards & Interfaces
   - 8.1 Home / Estate Interfaces
   - 8.2 Yacht Interfaces
   - 8.3 Commercial Interfaces
- 9 Business Model (Economics).
   - 9.1 1. The Install (One-Time Revenue)
   - 9.2 2. The Retainer (Recurring Revenue — ARR)
   - 9.3 Unit Economics Summary (Illustrative)
- 10 Go-To-Market (12-Month Plan)
   - 10.1 Phase 1: Validation (Months 1–4)
   - 10.2 Phase 2: Standardization (Months 5–8)
   - 10.3 Phase 3: Scaling (Months 9–12)
- 11 Competitive Landscape & Moat
   - 11.1 Where Others Stop
   - 11.2 Why We Win
- 12 The Ask
   - 12.1 Use of Funds (Pilot Capital)
- 13 Key Risks and Mitigations
- 14 Implementation Method (Survey→Commissioning→Handover)
   - 14.1 1. Discovery & Constraints
   - 14.2 2. Design & Build
   - 14.3 3. Commissioning & Acceptance.
   - 14.4 4. Handover
- 15 Physical Device Structure (The Hardware Chassis)
- 16 12-Month Pilot Plan & Milestones
- 17 Three-Year Projections (Illustrative Base Case)
- 18 Scenario Comparison (Headline Numbers)
- Appendix
- 19 The “Real” Bill of Materials (BOM)
   - 19.1 The “Vœrynth Brain” (AI Inference Node)
   - 19.2 The “Nervous System” (Sensors)
   - 19.3 Marine Gateway & Protocol Hardware
   - 19.4 Estate Gateways & Actuation.


## 1 Executive Summary

**Thesis:** Luxury is not
“more buttons.” Luxury
High-end automation has a dirty secret: most “smart” sys- is _less friction_.
tems are cloud-dependent, latency-heavy, and fragile under
real-world conditions—especially at sea. Our proposition is
simple and unforgiving: **your estate or yacht must function
as beautifully offline as it does online.**

### 1.1 What We Build.

We do not sell a tablet app. We build a **local-first neural core**
that sits inside the client network and turns disparate systems
into one coherent, context-aware infrastructure:

- **Zero-Cloud Operation:** No audio/video/telemetry exfil-
    tration. Private by design.
- **120B-Class Local Reasoning:** An on-premise inference
    node (gpt-oss-120b class MoE) that interprets intent,
    context, and constraints.
- **Protocol Bridging:** Marine (NMEA 2000 / Signal K) +
    residential (KNX/DALI/Zigbee) + industrial (MQTT/OPC-
    UA/BACnet where applicable).
- **Invisible Service:** The home anticipates; the app is for
    exceptions, not daily piloting.

### 1.2 Why This Matters

For UHNWI clients, **privacy is non-negotiable** , **reliability is
elegance** , and **latency feels like cheapness**. VŒRYNTH SYS-
TÈME packages the discipline of industrial systems engineer-
ing into a luxury experience—without cloud dependency.


## 2 The Problem

### “Luxury Homes are Dumb. Superyachts are

### Fragile.”

```
If the internet drops and
your 2 M interior becomes
a 200 dumb house, the
product was a lie.
```
The current state of high-end automation is fundamentally
broken for the Ultra-High-Net-Worth Individual (UHNWI):

**Cloud Dependency is Fatal:** Modern systems rely on vendor
clouds. If the internet fails (common at sea) or a vendor
sunsets a service, comfort and control degrade instantly.
Latency (often 300–800 ms+) ruins the feeling of luxury.

**The “Privacy Void”:** Standard voice assistants stream speech
to cloud servers. For UHNWI clients, this is unaccept-
able: private conversations, business negotiations, and
family life must remain air-gapped.

**Dashboard Fatigue:** Typical installers deliver apps packed
with hundreds of toggles. High-end clients do not want
to be pilots; they want to be passengers. They want the
environment to adapt without being asked.

**Hardware Incompatibility:** Core marine protocols (NMEA/Sig-
nal K) and residential control ecosystems (KNX/DAL-
I/Zigbee/AV) rarely integrate coherently. Most “integra-
tions” are brittle scripts, not engineered systems.

### 2.1 Cost of Failure (What Pain Looks Like)

- **At sea:** intermittent connectivity, RF noise, VLAN seg-
    mentation, and safety boundaries make cloud assistants
    unreliable.
- **In estates:** privacy expectations, long asset lifetimes
    (20+ years), and vendor churn make cloud lock-in strate-
    gically dangerous.
- **For staff:** unstandardized dashboards increase training
    time and increase the likelihood of mistakes.


## 3 The Solution (The Iceberg Architecture)

### We don’t build apps. We build a Neural Core.

```
Iceberg rule: 90% of the
product is invisible engi-
neering. 10% is interface.
```
**Figure 1: The architecture is designed to keep intelligence local
and interfaces optional.**

### 3.1 The “Soul” (90% Invisible — The Product)

**Architecture:** A dedicated high-compute inference node
(dual-GPU workstation or rack appliance) running en-
tirely on-premise, inside the client’s network.

**Intelligence:** Powered by a local 120B-class MoE model
(gpt-oss-120b family). It understands context, physics
constraints, and user intent—not just keywords.

**Zero-Data Exfiltration:** No audio, video, or telemetry leaves
the local network. Optional remote support is opt-in,
with explicit network boundaries and audit trails.


### 3.2 The “Skin” (10% Visible — The Interface)

**The “Ammu” Concept (Bespoke Persona):** A persona de-
signed per client. They choose name, voice, tempera-
ment, and social boundaries (examples: “Aurelius, the
Ship’s Captain” or “Alfred, the Butler”).

**Neural Interface App:** A bespoke React Native app (An-
droid/iOS) that visualizes the house’s _reasoning_ and
state. Used for exceptions, telemetry checks, and staff
workflows—not daily micromanagement.

### 3.3 A Simple Promise

**The environment adapts. The user does not.** When uncer-
tainty is high, the system asks; when certainty is high, the sys-
tem acts silently.


## 4 The Technology Stack (How It Works)

### We don’t just “install” Home Assistant. We wrap

### it in an Industrial Neural Grid.

```
Most installers stop at
Layer 3. VŒRYNTH SYS-
TÈME builds Layer 4 & 5.
```
**Figure 2: Layered architecture with clear safety boundaries,
auditability, and local reasoning.**

### 4.1 Layer 1: The “Hard” Metal (Connectivity)

**Goal:** Talk to machines that do not have WiFi—reliably.

**Marine:** ISO-grade CAN/NMEA adapters (Actisense / Yacht
Devices) physically tapping the vessel’s NMEA 2000
backbone.

**Estate:** Hardwired KNX & DALI gateways for millisecond-
class lighting and shading response.

### 4.2 Layer 2: The Translation Core (Signal K & Middleware).

**The Problem:** Boat engines speak in PGNs (e.g., 127488 ).
Smart lights speak Zigbee. They do not share meaning.

**Our Solution:** Local Signal K instance as a universal transla-
tor, converting raw marine data into normalized JSON
streams.


**Innovation:** Real-time telemetry injection into MQTT (e.g., “If
depth< 2 m, wake the owner”).

### 4.3 Layer 3: The State Engine (Home Assistant Core)

**Role:** Home Assistant is treated as a **message bus + state
registry**.

**Important:** HA holds state ( _Light is ON_ ) but does not decide.
Native brittle automations (If X then Y) are disabled for
core logic; they remain only for deterministic safety in-
terlocks where appropriate.

### 4.4 Layer 4: The “Vœrynth Core” (The Brain — Our IP)

**Logic Matrix (Stupidity Filter):** Instead of naive rules, we
compute _probabilities_ and intent confidence.

**Example:** Motion=False + TV=On + Time=Evening→
Probability(Sleep) = 12%.
Action: keep lights on.

**LLM Agent:** The local 120B node receives state + constraints
and emits reasoning + actions.

**Input:** “Ammu, the sun is glaring on the TV.”
**Reasoning:** “Visual discomfort implied. Glare likely from West.
Close West blinds only. Do not dim lights.”
**Output:** Execute blind actuator commands; log the decision;
offer revert.

### 4.5 Layer 5: The Neural Interface (The App)

**Tech:** React 18.2 SPA + Vite + Capacitor (standalone, local).

**Engineering Excellence (The "Skin"):**
Luxury is reflected even in the digital interface. The Vœrynth interface is engineered as a **Predictive Single Page Application**:
- **Zero-Latency Navigation**: A custom "SmartLink" engine predicts intent (hover/touch) to prefetch assets, achieving <50ms perceived latency.
- **Offline Sovereignty**: Full PWA capabilities ensure the interface remains responsive even in zero-bandwidth maritime scenarios.
- **Deterministic SEO & Metadata**: A hybrid SSR/SSG pipeline ensures high-fidelity search indexing and localized social sharing.
- **Global Localization**: Synchronized sub-path routing (`/de`) for seamless multi-territory coordination.

**Performance:** Direct WebSocket to Layer 4 for ~12 ms UI la-
tency on local LAN.

**Offline:** Cache last-known state. If WiFi drops, the operator
sees the last stable system snapshot.


## 5 The Marine Differentiator

### Why a “Smart Home” installer fails on a Yacht.

```
At sea, the cloud is a lux-
ury you do not always
have. Reliability is the real
premium feature.
```
Generic assistants fail at sea because they rely on cloud ser-
vices and lack vessel context.

### 5.1 The Vœrynth Advantage (NMEA Integration)

We become the “Second Officer”: we do not just control lights—
we read the NMEA 2000 bus.

**Scenario:** Anchor drag.

**Context:** 03:00. Anchor slips. Crew asleep.

**Standard Response:** Helm buzzer (often unheard).

**Vœrynth Response:** • Signal K detects Navigation.Anchor.Drift
> 50 m.

- Layer 4 triggers CRITICAL_WAKE protocol.
- Master cabin lights pulse red (local DALI/KNX, no
    cloud).
- Voice panels announce: “Captain, anchor drift de-
    tected. Check depth immediately.”
- Optional: notify crew quarters; pin most relevant
    dashboards (depth, wind, COG, anchor track).

**Value:** This is damage prevention, not “home automation.”

**Figure 3: Example safety-aware workflow: monitor→interpret
→act with boundaries.**


## 6 Security, Privacy, and Boundaries

```
Policy: No data leaves by
default. Remote access is
a deliberate decision, not a
```
### 6.1 Security Model (Practical, Not Marketing)

- **Network Segmentation:** IoT VLAN vs Client VLAN with
    physical separation where required.
- **Local Credentialing:** No vendor accounts required for
    core operations; secrets stored locally.
- **Auditability:** Every automated action is logged with rea-
    son + confidence score.
- **Fail-Safe Defaults:** Comfort system failure does not af-
    fect safety-critical marine systems.

### 6.2 Privacy Model

- **Voice:** On-prem hotword + local ASR/TTS options; con-
    figurable retention (default: no retention).
- **Video:** Optional local-only NVR. Video never leaves un-
    less explicitly exported by the owner.
- **Data Minimization:** We ingest only what’s needed to
    create the intended experience.


## 7 Product Suites

```
Same core brain. Different
skins, constraints, and
value priorities.
```
### 7.1 1. The Penthouse Suite (“The Sanctuary”)

**Core Value:** Privacy & invisible service.

**Experience:** The home remembers intent patterns (lighting
preferences, music patterns, comfort zones) and acts
quietly.

**Feature:** Bespoke persona layer trained on household habits
and staff workflows.

**Hardware:** Hidden sensors (mmWave), bespoke wall panels
(Vœrynth Griffin branding), local AI server, hardwired
lighting/shading integration.

### 7.2 2. The Yacht Suite (“The Captain”)

**Core Value:** Safety & redundancy.

**Feature:** Navigational awareness: reads depth, wind, battery,
tanks, AIS, engine parameters (read-only).

**Integration:** Comfort automation informed by marine con-
text (e.g., “Stabilizers active”→ secure loose furniture
mode).

### 7.3 3. The Commercial Suite (“The Steward”).

**Core Value:** Efficiency & operator clarity.

**Feature:** Single pane of glass for facility managers: bridge
HVAC (BACnet) and lighting (DALI) to optimize energy via
real-time occupancy.

**Outcome:** Reduced energy waste, simpler compliance log-
ging, faster incident response.


## 8 Demonstration Dashboards & Interfaces

```
Dashboards exist to con-
firm reality—not to con-
stantly control it.
```
### 8.1 Home / Estate Interfaces

**Figure 4: Penthouse main dashboard (rooms, scenes, security
status, climate).**

**Figure 5: Neural interface concept: show what the house thinks,
why it acted, and how to override safely.**


### 8.2 Yacht Interfaces

**Figure 6: Yacht welcome dashboard: heading, wind, depth, key
systems status.**

**Figure 7: Captain view: combined comfort + navigational
awareness.**


### 8.3 Commercial Interfaces

**Figure 8: Commercial master controls: occupancy, zones, energy,
and alarms.**

**Figure 9: Optional staff UI: explicit tasks, clear states, minimal
controls.**


## 9 Business Model (Economics).

### High-Margin Engineering & “Training as a

### Service”

```
We sell engineering out-
comes, and we keep the
system improving over
time.
```
We operate as specialized systems consultants (Freiberufler-
friendly structure).

### 9.1 1. The Install (One-Time Revenue)

**Design & Engineering Fee:** € 15,000–€ 40,000 depending on
scope and protocols.

**Hardware Model:** Client purchases BOM directly (0% markup
to reduce liability) _or_ we supply custom nodes at ~40%
margin.

**Typical Project Value:** € 35k (Penthouse) to€ 80k (Supery-
acht), excluding optional NVR/camera packages.

### 9.2 2. The Retainer (Recurring Revenue — ARR)

**“Continuous Cognitive Calibration” (SLA):** € 350–€ 750 /
month.

**Value:** Every week, the node aggregates manual overrides
and updates the local “House Adapter” (LoRA) so the
system becomes more accurate without exporting pri-
vate data.

**Stickiness:** The longer the relationship, the better the sys-
tem fits the household. Churn means losing the learned
comfort model.

### 9.3 Unit Economics Summary (Illustrative)

**Table 1: Offer and indicative unit economics (illustrative).**

```
Segment Scope (plain-English) Typical Price Direct Cost Gross Margin
Penthouse Scenes, rooms, voice panels, private AI node, privacy hardening€ 35k–€ 55k ~58% ~42%
Yacht (35–60 ft) Signal K/NMEA dashboards, cabin voice, local AI node, redundancy€ 45k–€ 80k ~58% ~42%
Commercial (per floor/zone) HVAC+lighting+access orchestration, occupancy optimization€ 30k–€ 70k ~55% ~45%
Managed Service (SLA) Monitoring, updates, spares strategy, cognitive calibration€ 350–€ 750/mo Staff & spares ~75%
```

## 10 Go-To-Market (12-Month Plan)

```
Earn trust through pilots.
Standardize. Then scale
with the cable-pulling
```
### 10.1 Phase 1: Validation (Months 1–4)

**Goal:** 3 pilot sites (1 yacht, 1 penthouse, 1 commercial).

**Strategy:** “Cost-price engineering” for refit managers and
boutique architects in exchange for case-study filming
rights.

**Output:** A cinematic “Day in the Life” showcase proving the
invisible experience.

### 10.2 Phase 2: Standardization (Months 5–8)

**Goal:** Finalize the Vœrynth Core hardware spec and installa-
tion playbook.

**Tech:** Move from bespoke PC builds to a standardized AI ap-
pliance (pre-configured 19” rack unit).

**Output:** Repeatable bill of materials, tested network topol-
ogy, standard dashboards per suite.

### 10.3 Phase 3: Scaling (Months 9–12)

**Goal:** 40 installations run-rate (partner-assisted).

**Strategy:** Partner with marine electronics installers and high-
end integrators. We provide the brain and the code; they
pull the cables.


## 11 Competitive Landscape & Moat

```
Our moat is not a dash-
board. It’s the local rea-
soning + protocol depth +
```
### 11.1 Where Others Stop

- **Consumer assistants:** cloud-dependent, privacy-weak,
    no marine context.
- **Luxury control panels:** polished UI, but brittle integra-
    tion and vendor lock-in under the hood.
- **Installers:** wire it once, walk away; no continuous cali-
    bration or intelligence progression.

### 11.2 Why We Win

- **Local 120B reasoning** with explicit safety boundaries
    and audit logs.
- **Deep protocol competency** across marine + residential
    + industrial domains.
- **Lifecycle service:** weekly calibration, documentation,
    and predictable operations.


## 12 The Ask

### We are looking for Strategic Pilot Partners.

We are not looking for
generic VC. We are looking
We are seeking: for access + pilots + proof.

**Network Access:** Introductions to marine refit yards (Ham-
burg/Kiel/Mallorca) and luxury real estate developers
(DACH region).

**Pilot Capital:** € 50,000 to fund high-compute hardware (GPUs/sen-
sors) for the first 3 flagship installations.

### 12.1 Use of Funds (Pilot Capital)

- 120B-class inference node hardware (GPU, storage,
    10GbE).
- Sensor kits (mmWave, voice satellites), certified marine
    gateways, spares strategy.
- Documentation + filming kit for case study production.


## 13 Key Risks and Mitigations

**Risk: Certification and safety boundaries (marine)** Mitigation:
read-only integration for NMEA/autopilot; explicit sepa-
ration of safety-critical systems; partner with certified
marine electronics installers.

**Risk: Hardware supply volatility (GPUs)** Mitigation: two ap-
proved inference configurations (2× 4090 or RTX 6000
Ada); forward-buy spares for pilots.

**Risk: Integration scope creep** Mitigation: suite-based scope
definition; protocol boundary checklist; staged commis-
sioning.

**Risk: Staff adoption** Mitigation: minimal staff panels, train-
ing, and a strict “exceptions-only” UI philosophy.


## 14 Implementation Method (Survey→Commissioning→Handover)

```
Luxury clients buy out-
comes. We deliver with an
engineering playbook, not
```
### 14.1 1. Discovery & Constraints

- Protocol inventory (NMEA/Signal K, KNX/DALI, Zigbee,
    AV, HVAC, access control).
- Network topology + segmentation plan (IoT VLAN, client
    VLAN, crew VLAN where applicable).
- Safety boundaries (read-only marine integration; manual
    overrides preserved).
- Experience goals (“invisible” defaults; staff workflows;
    exception rules).

### 14.2 2. Design & Build

- Electrical + network design notes (gateway placement,
    PoE budgets, redundancy).
- Dashboard + persona design (client naming/voice/per-
    sonality; house vocabulary).
- Threat model + privacy policy decisions (retention de-
    faults, remote access stance).

### 14.3 3. Commissioning & Acceptance.

- Deterministic I/O validation (every relay, dimmer chan-
    nel, blind position, sensor).
- “Stupidity filter” calibration from real household behav-
    ior.
- Acceptance tests: offline mode, degraded mode, recov-
    ery mode, and fail-safe checks.


### 14.4 4. Handover

- Owner-facing controls: minimal, exceptions-first.
- Staff training: short workflows, clear alarms, bounded
    permissions.
- Deliverables: documented architecture, network map,
    config export, and a Git-tracked change history.


## 15 Physical Device Structure (The Hardware Chassis)

### A modular chassis: Brain, Spine, Nervous

### System, and Hands.

**1) The Brain:** On-prem inference node (dual-GPU class) +
local storage + audit logs.

**2) The Spine:** Managed network fabric (VLANs; zero-egress
policy by default).

**3) Nervous System:** ESP32-S3 voice satellites + mmWave
presence + protocol gateways.

**4) The Hands:** Bespoke wall panels for overrides, exceptions,
and critical states.

**5) Marine Gateway (Yacht):** NMEA 2000 data ingestion into
Signal K and MQTT telemetry.


## 16 12-Month Pilot Plan & Milestones

A pilot is not a demo. It is
a production installation
**Table 2: Milestones and concrete outputs (illustrative).** with measured outcomes.

```
Window Milestone Deliverable / Evidence
Months 1–2 Pilot #1 (Penthouse) live Offline-first comfort; persona; dashboards; owner acceptance checklist
Months 2–3 Pilot #2 (Yacht) live Signal K translation; anchor-drag protocol; captain dashboards; safety boundaries documented
Months 3–4 Pilot #3 (Commercial) live Occupancy optimization; energy dashboard; facility workflows; incident logging
Months 5–6 Standard hardware spec Rack appliance BOM; network topology template; repeatable install guide
Months 7–8 Partner kit “Brain + Code” partner package; training module for cable-pull installers
Months 9–12 Scale readiness 40-install run-rate plan; case-study video; reference architecture portfolio
```
**Figure 10: Pilot cadence and proof artifacts (case study,
acceptance tests, repeatable spec).**


## 17 Three-Year Projections (Illustrative Base Case)

```
These are illustrative to
convey economics; pilots
validate pricing, attach
rates, and cost curves.
```
**Assumptions (held constant):** blended ASP driven by mix
of Penthouse/Yacht/Commercial; attach rate for SLA grows
with installed base; hardware cost reduces with standardized
appliance; remote work leveraged for design and calibration.

- **Year 1:** 10 installs (3 pilots + 7 paid), 40–60% attach
    rate to SLA.
- **Year 2:** 20 installs (partner-assisted), 60–75% attach
    rate.
- **Year 3:** 40 installs run-rate, 75–85% attach rate.

**Table 3: Illustrative financial model (EUR).**

```
Metric Year 1 Year 2 Year 3
```
```
Install revenue€ 420,000€ 1,050,000€ 2,000,000
SLA (ARR end-of-year)€ 36,000€ 120,000€ 300,000
Gross margin (blended) 40–45% 45–50% 50%+
```

## 18 Scenario Comparison (Headline Numbers)

```
Conservative case sur-
vives on paid installs; up-
side case is partner-led
scale + high SLA attach.
```
**Table 4: Scenario comparison (illustrative).**

```
Scenario Installs (Y3) Install Revenue (Y3) ARR (end Y3)
```
```
Conservative 20 € 1,000,000€ 150k
Base Case 40 € 2,000,000€ 300k
Upside 70 € 3,500,000€ 600k
```

## Appendix

## 19 The “Real” Bill of Materials (BOM)

### Proving the Technical Depth

```
BOM is illustrative; final
selection varies by ves-
sel/electrical standards
```
### 19.1 The “Vœrynth Brain” (AI Inference Node)

**Compute:** Workstation class (AMD Ryzen 9 / Threadripper).

**Inference:** 2 × NVIDIA RTX 4090 (24GB) or 1× RTX 6000
Ada (48GB) — required for local 120B model class.

**Connectivity:** Dual 10GbE LAN (physical isolation of IoT VLAN
from client VLAN).

**Storage:** 4TB NVMe (RAID 1) for local recording (NVR) + model
storage.

### 19.2 The “Nervous System” (Sensors)

**Voice:** ESP32-S3 satellites (custom firmware: Micro_Assistant_v2);
distributed mic + speaker nodes.

**Presence:** mmWave radar (Aqara FP2-class or custom PCB)
for zone-level presence without cameras.

**Environmental:** Temperature/humidity/CO 2 /pressure sen-
sors for comfort control loops.

### 19.3 Marine Gateway & Protocol Hardware

**Marine Gateway:** Yacht Devices NMEA 2000 USB Gateway
(YDNU-02) or Actisense equivalent.

**Backbone Tap:** Certified T-connectors, terminators, and proper
galvanic isolation where required.

**Translation Layer:** Signal K runtime (local) with normalized
topic mapping into MQTT.


### 19.4 Estate Gateways & Actuation.

**Lighting:** KNX IP interface + DALI gateways (brand depends
on region and electrician preference).

**Shading:** Hardwired blind controllers (KNX) with manual
override preservation.

**AV:** Local network AV control (IR/IP) with explicit fallback
when devices are offline.


## 20 Recent Technical Milestones (Feb 2026)

- **Predictive PWA Architecture:** Deployed a smart routing engine achieving `<50ms` perceived latency, complete with a robust `_v2` asset cache-busting strategy for robust mobile resilience.
- **Dynamic SEO Strategy:** A hybrid SSR pipeline now maps search indexing accurately across localized pages (`/de` routing), with an updated `sitemap.xml`, `robots.txt`, and `llms.txt`.
- **Navigation Reliability:** Improved localized transition accuracy, fixing critical routing issues for English and German design pages.
