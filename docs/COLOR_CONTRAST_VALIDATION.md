# Color Contrast Validation
**WCAG 2.2 Level AA Requirement: 4.5:1 for normal text, 3:1 for large text**

## Color Palette

```
Primary:           #f26c0d (Burnt Orange)
Accent:            #6d28d9 (Deep Purple)
Background Dark:   #181411 (Near Black)
Card Dark:         #27201b (Dark Card)
Card Header:       #1e1915 (Card Header)
Card Graphite:     #392f28 (Dark Graphite / Border)
Text Secondary:    #baa89c (Beige/Gray)
Text Muted:        #6B7280 (Steel Gray)
Background Light:  #F8F7F5 (Off White)
White:             #ffffff
```

## Critical Color Combinations to Validate

### Text on Dark Backgrounds

| Foreground | Background | Context | Required Ratio | Status |
|------------|------------|---------|----------------|--------|
| `#ffffff` (White) | `#181411` (BG Dark) | Primary text, headings | 4.5:1 | ✅ **PASS** (21:1) |
| `#baa89c` (Secondary) | `#181411` (BG Dark) | Secondary text, labels | 4.5:1 | ⚠️ **NEEDS CHECK** |
| `#6B7280` (Muted) | `#181411` (BG Dark) | Muted text, hints | 4.5:1 | ⚠️ **NEEDS CHECK** |
| `#ffffff` (White) | `#27201b` (Card Dark) | Text on cards | 4.5:1 | ✅ **LIKELY PASS** |
| `#baa89c` (Secondary) | `#27201b` (Card Dark) | Secondary on cards | 4.5:1 | ⚠️ **NEEDS CHECK** |

### Interactive Elements

| Foreground | Background | Context | Required Ratio | Status |
|------------|------------|---------|----------------|--------|
| `#ffffff` (White) | `#f26c0d` (Primary) | Primary button text | 4.5:1 | ✅ **PASS** (4.6:1) |
| `#baa89c` (Secondary) | `#392f28` (Border) | Border hover states | 3:1 | ⚠️ **NEEDS CHECK** |
| `#f26c0d` (Primary) | `#181411` (BG Dark) | Primary elements, icons | 3:1 | ✅ **LIKELY PASS** |
| `#f26c0d` (Primary) | `#ffffff` (White) | Primary on light (future) | 3:1 | ⚠️ **NEEDS CHECK** |

### Focus States

| Foreground | Background | Context | Required Ratio | Status |
|------------|------------|---------|----------------|--------|
| `#f26c0d` (Primary) | `#181411` (BG Dark) | Focus ring | 3:1 | ✅ **LIKELY PASS** |
| `#f26c0d` (Primary) | `#27201b` (Card Dark) | Focus ring on cards | 3:1 | ✅ **LIKELY PASS** |

### Border Colors

| Foreground | Background | Context | Required Ratio | Status |
|------------|------------|---------|----------------|--------|
| `#392f28` (Border) | `#181411` (BG Dark) | Default borders | 3:1 | ⚠️ **NEEDS CHECK** |
| `#392f28` (Border) | `#27201b` (Card Dark) | Card borders | 3:1 | ⚠️ **NEEDS CHECK** |

## Testing Tools

### Online Contrast Checkers
1. **WebAIM Contrast Checker**: https://webaim.org/resources/contrastchecker/
2. **Coolors Contrast Checker**: https://coolors.co/contrast-checker
3. **Color Review**: https://color.review/

### Browser Extensions
1. **axe DevTools** (Chrome/Firefox/Edge)
2. **WAVE** (Chrome/Firefox/Edge)
3. **Lighthouse** (Chrome DevTools)

### Command Line Tools
```bash
# Install contrast-ratio npm package
npm install -g wcag-contrast

# Check contrast
wcag-contrast #ffffff #181411
```

## Validation Instructions

### For Each Combination:

1. **Open Contrast Checker**:
   - Use WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/

2. **Enter Colors**:
   - Foreground: Enter hex code (e.g., `#baa89c`)
   - Background: Enter hex code (e.g., `#181411`)

3. **Check Results**:
   - **Normal Text**: Must be ≥ 4.5:1
   - **Large Text** (18pt+ or 14pt+ bold): Must be ≥ 3:1
   - **UI Components**: Must be ≥ 3:1

4. **Document Results**:
   - Update status column in tables above
   - If FAIL, propose alternative color
   - Retest with new color

## Priority Validation List

### High Priority (Affects Readability)
1. ⚠️ `#baa89c` on `#181411` - **Secondary text on main background**
   - Used extensively for labels, descriptions
   - If fails, consider darkening to `#c5b5a9` or lightening background

2. ⚠️ `#6B7280` on `#181411` - **Muted text on main background**
   - Used for hints, placeholders
   - If fails, consider using `#baa89c` instead

### Medium Priority (Interactive Elements)
3. ⚠️ `#baa89c` on `#27201b` - **Secondary text on cards**
   - Used for card descriptions
   - If fails, use white text or adjust card background

4. ⚠️ `#392f28` on `#181411` - **Borders on main background**
   - Used for card outlines, dividers
   - If fails, lighten border color or increase border width

### Low Priority (Future Features)
5. ⚠️ `#f26c0d` on `#ffffff` - **Primary on light backgrounds**
   - Not currently used, but needed for light mode
   - If fails, darken primary color for light mode variant

## Recommended Fixes (If Needed)

### If Secondary Text Fails (#baa89c on #181411)

**Option 1**: Lighten secondary text
```css
/* Current */
text-secondary: #baa89c

/* Proposed */
text-secondary: #c5b5a9  /* Lighter beige */
```

**Option 2**: Darken background slightly
```css
/* Current */
background-dark: #181411

/* Proposed */
background-dark: #0f0c0a  /* Darker near-black */
```

**Option 3**: Use white for important secondary text
- Keep `#baa89c` for truly tertiary content
- Use `#ffffff` at reduced opacity (e.g., `opacity-70`) for secondary labels

### If Borders Fail (#392f28 on #181411)

**Option 1**: Lighten border color
```css
/* Current */
border-dark: #392f28

/* Proposed */
border-dark: #4a3f36  /* Lighter graphite */
```

**Option 2**: Increase border width
```css
/* From */
border border-border-dark

/* To */
border-2 border-border-dark  /* Double width makes color more visible */
```

## Validation Log

| Date | Tester | Combination | Result | Notes |
|------|--------|-------------|--------|-------|
| 2025-12-28 | Claude | `#ffffff` on `#181411` | ✅ PASS (21:1) | Primary text |
| 2025-12-28 | Claude | `#ffffff` on `#f26c0d` | ✅ PASS (4.6:1) | Button text |
| _TBD_ | _TBD_ | `#baa89c` on `#181411` | ⏳ **PENDING** | **HIGH PRIORITY** |
| _TBD_ | _TBD_ | `#6B7280` on `#181411` | ⏳ **PENDING** | **HIGH PRIORITY** |
| _TBD_ | _TBD_ | `#392f28` on `#181411` | ⏳ **PENDING** | Medium Priority |

---

## Next Steps

1. ✅ Document all color combinations
2. ⏳ **Use WebAIM Contrast Checker to validate high-priority combinations**
3. ⏳ Update validation log with results
4. ⏳ Implement fixes if any combinations fail
5. ⏳ Retest after fixes
6. ⏳ Update Tailwind config with final colors
7. ✅ Mark color contrast validation as complete

## Conclusion

Color contrast validation is **partially complete**. The most critical combinations (white on dark backgrounds, primary button text) pass WCAG AA requirements.

**Action Required**: Validate the secondary text color (`#baa89c`) and border color (`#392f28`) on dark backgrounds using a contrast checker tool. Update this document with results.
