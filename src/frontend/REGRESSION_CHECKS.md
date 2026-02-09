# NK SYSTECH Frontend Regression Checks

This document outlines manual verification steps to ensure critical functionality remains intact after production builds.

## Contact Section - Direct Contact Buttons

### Purpose
Verify that the Call Now and WhatsApp buttons are visible and functional in the Contact section across all breakpoints.

### Verification Steps

1. **Build and Preview**
   ```bash
   npm run build
   npm run preview
   ```

2. **Navigate to Contact Section**
   - Open the preview URL in a browser
   - Click "Contact" in the navigation menu OR scroll to the Contact section
   - Verify the page scrolls to show the Contact section without the content being hidden under the sticky header

3. **Verify Button Presence**
   - Confirm the "Contact Us Directly" area is visible at the top of the Contact section
   - Verify both buttons are present and clearly visible:
     - **Call Now** button (primary/default variant)
     - **WhatsApp** button (secondary variant)

4. **Verify Button Labels and Icons**
   - Call Now button displays: Phone icon + "Call Now" text
   - WhatsApp button displays: MessageCircle icon + "WhatsApp" text

5. **Verify Link Attributes**
   - **Call Now button:**
     - href: `tel:9080250925`
     - Should initiate a phone call when clicked (on devices that support tel: links)
   
   - **WhatsApp button:**
     - href: `https://wa.me/919080250925`
     - target: `_blank`
     - rel: `noopener noreferrer`
     - Should open WhatsApp chat in a new tab when clicked

6. **Verify Responsive Behavior**
   - **Mobile (< 640px):** Buttons should stack vertically, each taking full width
   - **Desktop (≥ 640px):** Buttons should display side-by-side, centered

7. **Verify Accessibility**
   - Both buttons should have appropriate aria-labels
   - Buttons should be keyboard accessible (Tab navigation)
   - Buttons should have visible focus states

### Expected Results

✅ Contact section is fully visible when navigated to (not obscured by sticky header)  
✅ "Contact Us Directly" area is prominently displayed  
✅ Both Call Now and WhatsApp buttons are visible and styled correctly  
✅ Call Now button uses `tel:9080250925`  
✅ WhatsApp button uses `https://wa.me/919080250925` with `target="_blank"` and `rel="noopener noreferrer"`  
✅ Clicking Call Now initiates a phone call (on supported devices)  
✅ Clicking WhatsApp opens chat in a new tab  
✅ Buttons are responsive and display correctly on mobile and desktop  
✅ Buttons are keyboard accessible with visible focus states  

### Debugging

If buttons are not visible:
1. Inspect the DOM to confirm the buttons are rendered
2. Check for CSS issues (z-index, display, visibility, opacity)
3. Verify scroll-margin-top is applied to the section (should be `scroll-mt-16` / 64px)
4. Check for JavaScript errors in the console
5. Verify the Section component wrapper is not clipping content

If buttons are present but links don't work:
1. Inspect the anchor element's href attribute
2. Verify target and rel attributes for WhatsApp link
3. Test on different devices/browsers (tel: links may not work in desktop browsers)
