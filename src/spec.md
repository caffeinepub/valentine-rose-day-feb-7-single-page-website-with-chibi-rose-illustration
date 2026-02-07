# Specification

## Summary
**Goal:** Make all Rose Day page text clearly visible by updating theme text colors to a stronger, more saturated pink while staying within the existing romantic red/pink palette.

**Planned changes:**
- Update text-related Rose Day theme color tokens in `frontend/src/index.css` (e.g., `--rose-text`, `--rose-medium`, and/or `--foreground`) to a clearly pink, higher-contrast readable color (not near-white/washed out).
- Ensure key Rose Day page text elements in `frontend/src/pages/RoseDayPage.tsx` consistently use the updated stronger-pink readable styling (header greeting, date, subtitle, message card body text and labels, and footer text).
- Avoid low-opacity text styling that reduces visibility against the background image and gradient overlays.

**User-visible outcome:** All prominent text on the Rose Day landing page appears as clearly pink, high-visibility copy that remains readable across the full background and overlays.
