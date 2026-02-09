# Specification

## Summary
**Goal:** Ensure the “Call Now” and “WhatsApp” direct-contact buttons are clearly visible and usable in the Contact section (id "contact") across all screen sizes in production.

**Planned changes:**
- Update the Contact section layout/styles so the “Contact Us Directly” area and both buttons are always visible (not hover-only, not hidden, not inside unexpected scroll/overlay containers) on mobile and desktop.
- Ensure the buttons are not obscured by the sticky header or overlapping containers at any breakpoint.
- Set and verify exact link destinations: “Call Now” uses `tel:9080250925`; “WhatsApp” uses `https://wa.me/919080250925` with `target="_blank"` and `rel` including `noopener noreferrer`.
- Add a lightweight UI-level regression verification step (manual or automated) that checks production build/preview for both button labels in the Contact section and validates their href values.

**User-visible outcome:** Visitors can reliably see and use the “Call Now” and “WhatsApp” buttons in the Contact section on any device, with links that work as expected.
