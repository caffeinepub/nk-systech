# Specification

## Summary
**Goal:** Build a responsive NK SYSTECH business website (Home, About, Services, Contact) with a cohesive tech-services theme and an inquiry form that stores submissions in the backend.

**Planned changes:**
- Create a responsive site structure with clear navigation (desktop top nav + mobile menu) for Home, About, Services, and Contact, showing “NK SYSTECH” prominently.
- Add Services section/page with five consistent, responsive service blocks (CCTV, Workstations, Networking, Laptops, Computers) emphasizing “Sales & Service”.
- Add a simple Products / Multibrand Sales & Service categories listing component (category-level only) accessible from Home or Services.
- Implement Contact form (Name, Phone, Email, Service Interest dropdown, Message) with client-side validation, loading state, and success/error feedback; store inquiries via backend and expose create/list methods for verification/testing.
- Apply a cohesive visual theme (clean industrial tech) with consistent palette/typography/spacing (avoiding blue/purple as dominant colors).
- Add a footer on all pages/sections with NK SYSTECH info placeholders and quick links.
- Add and reference generated static assets (logo, hero/banner, service icons) from `frontend/public/assets/generated`.

**User-visible outcome:** Users can browse NK SYSTECH information across Home/About/Services/Contact, view services and product categories, and submit an inquiry via a validated contact form with visible submission feedback.
