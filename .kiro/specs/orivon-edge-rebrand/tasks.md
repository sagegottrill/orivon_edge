# Implementation Plan: Orivon Edge Rebrand

## Task Overview

This implementation plan breaks down the Orivon Edge rebrand into discrete, manageable coding tasks. Each task builds incrementally on previous work, ensuring the website transformation from government-focused provider to hybrid venture studio + digital agency is systematic and testable.

All tasks reference specific requirements from the requirements document and follow the design specifications outlined in the design document.

---

## Phase 1: Core Messaging & Hero Updates

- [x] 1. Update Hero component typewriter phrases


  - Replace existing typewriter phrases with new venture studio + agency focused phrases
  - Update the phrases array to include: "AI-Driven Venture Studio", "We Build & Scale Startups", "Digital Agency + Startup Factory", etc. (15 new phrases total)
  - Test typewriter animation with new phrases
  - Verify smooth transitions and timing
  - _Requirements: 1.1, 1.2, 4.1_



- [ ] 2. Update Hero subtitle and CTAs
  - Replace subtitle with: "A global venture studio and digital agency. We build AI-driven startups and deliver powerful solutions for businesses worldwide."
  - Update primary CTA to "Start Your Project" with client-focused styling
  - Update secondary CTA to "Explore Our Ventures" with venture-focused styling
  - Add visual distinction between CTAs (blue vs purple accent)



  - Test CTA navigation and hover states
  - _Requirements: 1.1, 4.2, 4.3_

- [ ] 3. Update About component core narrative
  - Replace About section headline with "Building Startups & Scaling Innovation"

  - Update subheadline to "A Global Venture Studio and Digital Agency"
  - Replace main narrative paragraph with new positioning statement
  - Add unique value proposition: "Unlike traditional agencies, we don't just deliver projects—we build future-proof systems and spin out startups"
  - Test text rendering and responsive layout
  - _Requirements: 3.1, 3.2, 3.4_




- [ ] 4. Update About component dual model explanation
  - Add new section explaining the dual business model
  - Create two-column layout for "For Clients" and "For Ventures" explanations
  - Style with distinct visual indicators (icons, colors)
  - Test responsive behavior on mobile
  - _Requirements: 3.5_

- [ ] 5. Update About component core values
  - Replace existing core values with new innovation-focused values
  - Update to: "Innovation-First Mindset", "Dual Excellence", "Research-Driven Development", "Global Reach, Local Impact"
  - Update descriptions to reflect venture studio + agency positioning
  - Test card layout and animations
  - _Requirements: 3.3_

---

## Phase 2: Services Section Restructure

- [ ] 6. Create dual-lane Services component structure
  - Refactor ServicesIndustries component to support two distinct service lanes
  - Create ServiceLane interface with type, title, description, services, and CTA
  - Implement side-by-side layout for desktop (50/50 split)
  - Implement stacked layout for mobile with clear visual separation
  - Add visual indicators (icons, accent colors) to differentiate lanes
  - _Requirements: 2.1, 2.4_

- [ ] 7. Implement Client Solutions lane content
  - Add "Client Solutions" lane with blue accent color
  - Create service cards for: Custom Websites, SaaS Development & Automation, AI Agents & Chatbots, Digital Transformation
  - Add features list for each service
  - Add "Start Your Project" CTA at bottom of lane
  - Test carousel/grid layout within lane
  - _Requirements: 2.2_

- [ ] 8. Implement Venture Studio lane content
  - Add "Venture Studio" lane with purple accent color
  - Create service cards for: AI-Powered Tools, Civic Tech Platforms, Industry-Specific SaaS, Research-Backed Prototypes
  - Add features list and examples for each service (e.g., "ChatGPT for Doctors", "Democrasee")
  - Add "Explore Our Ventures" CTA at bottom of lane
  - Test carousel/grid layout within lane
  - _Requirements: 2.3_

- [ ] 9. Add visual differentiation between service lanes
  - Implement color coding system (blue for client, purple for venture)
  - Add distinct icons for each lane
  - Add subtle background gradients or patterns
  - Ensure visual hierarchy is clear
  - Test accessibility and contrast ratios
  - _Requirements: 2.4, 2.5_

- [ ] 10. Update Services section header and description
  - Update section title to emphasize dual model
  - Update description to mention both client services and venture building
  - Ensure messaging is global and innovation-focused
  - Test responsive typography
  - _Requirements: 1.5, 2.1_

---

## Phase 3: Portfolio Enhancement & Categorization

- [ ] 11. Add category and badge system to portfolio projects
  - Update PortfolioProject interface to include category ('client-solution' | 'orivon-venture')
  - Add badge field for visual indicators ('Orivon Venture', 'Client Project', 'Spin-off', 'Acquired')
  - Implement badge component with distinct styling
  - Add badges to all existing projects
  - _Requirements: 5.1, 5.4_

- [ ] 12. Update portfolio project descriptions for venture focus
  - Update Democrasee description to emphasize it's an Orivon venture
  - Update FarmAfricaa description to emphasize it's an Orivon venture
  - Update BICTDA Academy description to clarify it's a client project
  - Add "Orivon Venture" or "Client Project" labels to project cards
  - Ensure descriptions emphasize innovation and AI capabilities
  - _Requirements: 5.2, 5.3_

- [ ] 13. Add metrics display for venture projects
  - Create metrics component for displaying user counts, funding, impact
  - Add metrics to Democrasee: "10,000+ active users", "5,000+ incidents reported"
  - Add metrics to FarmAfricaa: "5,000+ farmers", "15,000+ field observations"
  - Style metrics with prominent visual treatment
  - Test responsive layout of metrics
  - _Requirements: 5.2_

- [ ] 14. Implement enhanced portfolio filtering system
  - Update filter categories to include: "All", "Orivon Ventures", "Client Solutions", "AI/ML", "SaaS", "Civic Tech"
  - Implement filter logic to handle new categories
  - Add visual active state for selected filter
  - Test filtering functionality with all categories
  - Ensure smooth transitions between filtered views
  - _Requirements: 5.5_

- [ ] 15. Update portfolio section header
  - Update section title to emphasize both client work and ventures
  - Update description to mention "innovative solutions and in-house startups"
  - Ensure messaging aligns with dual model
  - Test responsive typography
  - _Requirements: 5.1_

---

## Phase 4: Process Section Dual Track Implementation

- [ ] 16. Create dual-track Process component structure
  - Refactor Process component to support two parallel tracks
  - Create ProcessTrack interface with name, type, description, steps
  - Implement side-by-side layout for desktop
  - Implement toggle or tabs for mobile
  - Add visual connection lines between steps within each track
  - _Requirements: 7.1_

- [ ] 17. Implement Client Projects track
  - Add "Client Projects" track with blue accent color
  - Create steps: Discovery & Strategy (1-2 weeks), Design & Prototyping (2-3 weeks), Development & Automation (4-12 weeks), Launch & Scale (Ongoing)
  - Add deliverables for each step
  - Add icons for each step
  - Test step layout and animations
  - _Requirements: 7.2_

- [ ] 18. Implement Venture Building track
  - Add "Venture Building" track with purple accent color
  - Create steps: Research & Validation (2-4 weeks), MVP Development (6-8 weeks), Market Testing & Iteration (8-12 weeks), Scale & Spin-off (6-12 months)
  - Add deliverables for each step
  - Add icons for each step
  - Test step layout and animations
  - _Requirements: 7.3_

- [ ] 19. Add visual differentiation between process tracks
  - Implement color coding consistent with service lanes
  - Add distinct visual styles for each track
  - Ensure connection lines are visually clear
  - Test responsive behavior and track switching on mobile
  - _Requirements: 7.4_

- [ ] 20. Update Process section header
  - Update section title to mention both client and venture processes
  - Update description to emphasize dual capabilities
  - Ensure messaging is clear and compelling
  - Test responsive typography
  - _Requirements: 7.1_

---

## Phase 5: Testimonials & Success Stories

- [ ] 21. Update testimonials data model
  - Add type field to testimonials ('client' | 'venture')
  - Add metrics field for displaying success metrics
  - Add badge field for venture success indicators
  - Update existing testimonials with new fields
  - _Requirements: 8.1, 8.2_

- [ ] 22. Add venture success story testimonials
  - Create at least 2 new testimonials focused on venture success
  - Include metrics like user counts, impact numbers, or funding
  - Add "Venture Success" or similar badges
  - Ensure testimonials mention startup building or innovation
  - _Requirements: 8.2, 8.3_

- [ ] 23. Implement metrics display in testimonials
  - Create metrics component for testimonial cards
  - Display metrics prominently (e.g., "+300% growth", "10,000+ users")
  - Style metrics with visual emphasis
  - Test responsive layout
  - _Requirements: 8.3_

- [ ] 24. Add testimonial filtering or categorization
  - Implement ability to filter testimonials by type (client vs venture)
  - Add visual indicators for testimonial type
  - Test carousel navigation with categorized testimonials
  - _Requirements: 8.1_

- [ ] 25. Update Testimonials section header
  - Update section title to include both client and venture success
  - Update description to mention startup success stories
  - Ensure messaging feels global and innovation-focused
  - Test responsive typography
  - _Requirements: 8.4_

---

## Phase 6: Industries Section Update

- [ ] 26. Expand industries list beyond government focus
  - Add new industries: "Startups & Venture Capital", "SMEs & Scale-ups" at the top
  - Reorder industries to de-emphasize government
  - Add "AI & Automation" as a new industry category
  - Update industry descriptions to emphasize innovation and scalability
  - _Requirements: 6.1, 6.3_

- [ ] 27. Update industry descriptions for broader appeal
  - Rewrite descriptions to emphasize AI-driven solutions and scalability
  - Remove government-heavy language
  - Add examples of venture-building for each industry
  - Ensure descriptions appeal to startups and scale-ups
  - _Requirements: 6.2_

- [ ] 28. Update Industries section header
  - Change title to "Industries We Transform & Ventures We Build"
  - Update description to emphasize diverse market focus
  - Ensure messaging is global and innovation-first
  - Test responsive typography
  - _Requirements: 6.4_

---

## Phase 7: Contact & Newsletter Updates

- [ ] 29. Add inquiry type selector to contact form
  - Add dropdown or radio buttons for inquiry type: "Client Project", "Venture Collaboration", "Investment Opportunity", "General Inquiry"
  - Update form validation to include inquiry type
  - Style selector to match overall design
  - Test form submission with different inquiry types
  - _Requirements: 9.1, 9.2_

- [ ] 30. Update contact section messaging
  - Update header to mention both client services and venture collaboration
  - Update description: "Whether you need a digital solution or want to collaborate on a venture, let's build something extraordinary together"
  - Ensure tone is welcoming to both clients and potential partners
  - Test responsive layout
  - _Requirements: 9.3_

- [ ] 31. Update newsletter popup lead magnet
  - Change lead magnet to: "The Startup Builder's Toolkit: From Idea to Launch in 90 Days" or "AI Automation Playbook for Modern Businesses"
  - Update popup copy to mention both startup building and client solutions
  - Update benefits list to include: "Startup building insights", "AI automation tips", "Venture case studies", "Tech trends"
  - Test popup display and form submission
  - _Requirements: 11.1, 11.2, 11.3_

---

## Phase 8: Navigation & Footer Updates

- [ ] 32. Update navigation menu structure
  - Add "Our Ventures" menu item
  - Ensure menu items are: "Home", "About", "Services", "Our Ventures", "Portfolio", "Contact"
  - Update mobile navigation to include new structure
  - Test navigation on all screen sizes
  - _Requirements: 12.1, 12.4_

- [ ] 33. Add expandable Services menu (optional)
  - If implementing dropdown, add "Client Solutions" and "Venture Studio" sub-items
  - Style dropdown to match overall design
  - Test hover and click interactions
  - Ensure mobile-friendly implementation
  - _Requirements: 12.2_

- [ ] 34. Create "Our Ventures" section or page
  - Create dedicated section showcasing in-house startups
  - Include Democrasee, FarmAfricaa, and other ventures
  - Add venture metrics and status
  - Link from navigation menu
  - Test responsive layout
  - _Requirements: 12.3_

- [ ] 35. Update footer tagline and description
  - Change tagline to: "Building startups and scaling innovation worldwide"
  - Update description: "A global venture studio and digital agency building AI-driven startups and delivering powerful solutions for clients"
  - Ensure messaging is consistent with overall rebrand
  - Test responsive layout
  - _Requirements: 10.1, 10.3_

- [ ] 36. Update footer links structure
  - Add sections for "Client Services" and "Our Ventures"
  - Organize links to reflect dual business model
  - Ensure all links are functional
  - Test responsive layout
  - _Requirements: 10.2_

---

## Phase 9: Visual Consistency & Polish

- [ ] 37. Implement consistent color coding throughout site
  - Ensure blue accent is used consistently for client-related content
  - Ensure purple accent is used consistently for venture-related content
  - Update buttons, badges, and visual indicators
  - Test color contrast for accessibility
  - _Requirements: 1.5, 2.5_

- [ ] 38. Update all section backgrounds and visual effects
  - Ensure backgrounds feel futuristic and innovation-focused
  - Update video backgrounds if needed
  - Adjust overlays and gradients for consistency
  - Test performance impact
  - _Requirements: 1.5_

- [ ] 39. Ensure responsive design across all updated components
  - Test all updated sections on mobile, tablet, and desktop
  - Fix any layout issues or text overflow
  - Ensure touch targets are appropriate size on mobile
  - Test on multiple browsers
  - _Requirements: All_

- [ ] 40. Update all images and icons
  - Replace any government-focused imagery
  - Add startup/innovation-focused visuals
  - Ensure all images are optimized
  - Test image loading and fallbacks
  - _Requirements: 1.5_

---

## Phase 10: Testing & Optimization

- [ ] 41. Conduct message clarity testing
  - Survey 5-10 users to verify they understand the dual model
  - Ask: "What does Orivon Edge do?" and evaluate responses
  - Gather feedback on clarity of services and offerings
  - Make adjustments based on feedback
  - _Requirements: All_

- [ ] 42. Test all navigation flows
  - Verify all CTAs navigate to correct destinations
  - Test client-focused CTAs lead to appropriate pages
  - Test venture-focused CTAs lead to appropriate pages
  - Ensure smooth user journeys
  - _Requirements: 4.3, 12.1_

- [ ] 43. Test portfolio filtering and categorization
  - Test all filter categories work correctly
  - Verify projects display correct badges
  - Test smooth transitions between filtered views
  - Ensure no broken links or missing images
  - _Requirements: 5.5_

- [ ] 44. Test contact form with new inquiry types
  - Submit test forms with each inquiry type
  - Verify form validation works correctly
  - Test form submission success states
  - Ensure email routing works (if implemented)
  - _Requirements: 9.1, 9.2_

- [ ] 45. Performance testing and optimization
  - Run Lighthouse audit on all pages
  - Optimize images and videos if needed
  - Test page load times
  - Ensure Core Web Vitals are in "Good" range
  - _Requirements: All_

- [ ] 46. Accessibility testing
  - Test keyboard navigation throughout site
  - Verify screen reader compatibility
  - Check color contrast ratios
  - Ensure WCAG 2.1 AA compliance
  - _Requirements: All_

- [ ] 47. Cross-browser and device testing
  - Test on Chrome, Firefox, Safari, Edge
  - Test on iOS and Android devices
  - Fix any browser-specific issues
  - Ensure consistent experience across platforms
  - _Requirements: All_

- [ ] 48. Final content review and polish
  - Proofread all updated copy
  - Ensure consistent tone and voice
  - Verify all links work
  - Check for any placeholder text or images
  - _Requirements: All_

---

## Notes

- Each task should be completed and tested before moving to the next
- All requirements and design documents should be available during implementation
- Tasks are designed to be incremental and build on previous work
- Testing should be performed after each phase, not just at the end
- Visual consistency should be maintained throughout implementation
