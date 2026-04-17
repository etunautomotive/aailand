# Codebase Organization Guidelines

## Section Components Structure

### File Naming Convention
- Use lowercase with dashes: `component-name.jsx`
- Export as PascalCase: `export function ComponentName() {}`

### Current Section Components

**Used on Landing Page** (`/src/app/page.jsx`):
1. `navbar.jsx` → `Navbar()` - Navigation header
2. `hero.jsx` → `Hero()` - Main headline and hook
3. `social-proof.jsx` → `SocialProof()` - Key metrics/stats (formerly `social-proof-section.jsx`)
4. `pain-points.jsx` → `PainPoints()` - Problem statement
5. `benefits.jsx` → `Benefits()` - Solution benefits
6. `how-it-works.jsx` → `HowItWorks()` - 3-step process flow (AI Conversations, Intelligent Pipeline, 360° Profiles)
7. `vs-traditional.jsx` → `VsTraditional()` - Comparison to alternatives
8. `case-study.jsx` → `CaseStudy()` - Riverside Auto Group case study (formerly `HowItWorks()`)
9. `pricing.jsx` → `Pricing()` - 4-tier pricing cards
10. `testimonials.jsx` → `Testimonials()` - Interactive testimonial carousel
11. `cta.jsx` → `CTA()` - Call-to-action section
12. `faq.jsx` → `FAQ()` - Frequently asked questions
13. `footer.jsx` → `Footer()` - Footer with links and newsletter

**Unused Components** (defined but not imported):
- `feature-widgets.jsx` → `FeatureWidgets()` - Unclear purpose, consider removing or documenting intent
- `stats.jsx` → `Stats()` - Unclear purpose, consider removing or documenting intent
- `chat-interface.jsx` → `ChatInterface()` - Unclear purpose, consider removing or documenting intent
- `use-case.jsx` → `UseCase()` - **DEPRECATED** - Replaced by `HowItWorks()`

## Naming Issues Fixed

### Issue: Confusing Component Names
**Problem**: `HowItWorks` component displayed a case study, while `UseCase` component displayed the actual "how it works" process.

**Solution**:
- Renamed `HowItWorks` → `CaseStudy` (shows Riverside case study)
- Renamed `UseCase` → `HowItWorks` (shows 3-step process: AI Conversations, Intelligent Pipeline, 360° Profiles)
- Renamed `social-proof-section.jsx` → `social-proof.jsx` (consistency)

### Landing Page Reorganization
Updated section order for logical flow:
1. Problem introduction (Hero → SocialProof → PainPoints)
2. Solution explanation (Benefits → **HowItWorks** → VsTraditional)
3. Proof of concept (**CaseStudy** → Pricing → Testimonials)
4. Conversion (CTA → FAQ → Footer)

## Best Practices Going Forward

1. **Component Names = What They Display**: Name components based on what they actually show, not conceptual intent
2. **Consistent Naming**: All section files use lowercase-dashes, all exports use PascalCase
3. **Remove Unused Components**: Delete or document components that aren't imported
4. **Logical Page Flow**: Arrange sections to guide user journey from awareness → understanding → decision
5. **Keep Imports in Order**: Match import order to render order for readability
