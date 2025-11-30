# Production Optimization Guide

This document outlines the production optimizations implemented for the Lemcorian website.

## ✅ Completed Optimizations

### Build & Minification
- ✅ Vite configured with Terser minification
- ✅ Console.log removal in production
- ✅ Code splitting (vendor, UI chunks)
- ✅ CSS code splitting enabled
- ✅ Source maps disabled in production
- ✅ Asset inlining for small files (< 4KB)

### Image Optimization
- ✅ Lazy loading on all below-the-fold images
- ✅ Hero image preloaded in HTML
- ✅ `fetchPriority` attributes added (high for hero, low for others)
- ✅ `decoding="async"` for non-blocking image decoding
- ✅ `aspect-video` for responsive image containers
- ✅ WebP component created (ready for WebP conversion)

### Font Optimization
- ✅ Preconnect to Google Fonts
- ✅ Async font loading with fallback
- ✅ System font fallbacks defined
- ✅ Font loading detection script
- ✅ Fallback fonts in CSS

### Responsiveness
- ✅ Mobile-first breakpoints (sm, md, lg, xl, 2xl)
- ✅ Responsive typography across all pages
- ✅ Responsive grid layouts
- ✅ Responsive spacing
- ✅ Container padding optimized per breakpoint

## Image Optimization

### WebP Format Support
- Created `OptimizedImage` component (`src/components/OptimizedImage.tsx`) that supports WebP with automatic fallback
- To use WebP images:
  1. Convert images to WebP format (use tools like `sharp`, `imagemagick`, or online converters)
  2. Place WebP versions in `/src/assets/` with `.webp` extension
  3. Import both formats and pass to `OptimizedImage` component:
     ```tsx
     import OptimizedImage from "@/components/OptimizedImage";
     import imageJpg from "@/assets/image.jpg";
     import imageWebp from "@/assets/image.webp";
     
     <OptimizedImage 
       src={imageJpg} 
       webpSrc={imageWebp}
       alt="Description"
       loading="lazy"
     />
     ```

### Image Loading Strategy
- **Hero Images**: Use `loading="eager"` and `fetchPriority="high"` (preloaded in HTML)
- **Above-the-fold Images**: Use `loading="eager"` and `fetchPriority="high"`
- **Below-the-fold Images**: Use `loading="lazy"` and `fetchPriority="low"`
- All images include `decoding="async"` for non-blocking decoding

### Current Image Loading
- ✅ Hero background image: Preloaded in `index.html`
- ✅ Division cards: Lazy loaded with `fetchPriority="low"`
- ✅ Leadership images: Lazy loaded with `fetchPriority="low"`
- ✅ All other images: Lazy loaded

## Build Optimizations

### Vite Configuration
- **Minification**: Enabled with Terser
- **Console Removal**: `console.log` statements removed in production
- **Code Splitting**: 
  - Vendor chunk: React, React DOM, React Router
  - UI chunk: Radix UI components
- **Asset Inlining**: Assets < 4KB are inlined
- **CSS Code Splitting**: Enabled for optimal loading
- **Source Maps**: Disabled in production for smaller bundle

### Build Commands
```bash
# Production build (minified, optimized)
npm run build

# Development build (for testing)
npm run build:dev

# Preview production build
npm run preview
```

## Font Optimization

### Font Loading Strategy
- **Preconnect**: Added to Google Fonts for faster DNS resolution
- **Async Loading**: Fonts load asynchronously with `media="print"` trick
- **Fallback Fonts**: System fonts used while Google Fonts load:
  - Sans-serif: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial`
  - Serif: `Georgia, "Times New Roman", Times, serif`
- **Font Loading Detection**: Script adds `fonts-loaded` class when fonts are ready

### Font Stack
```css
/* Fallback (immediate) */
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;

/* Primary (when loaded) */
font-family: "Inter", [fallback stack];

/* Serif */
font-family: "Merriweather", Georgia, "Times New Roman", Times, serif;
```

## Responsive Design

### Breakpoints
- **sm**: 640px (small tablets, large phones)
- **md**: 768px (tablets)
- **lg**: 1024px (small laptops)
- **xl**: 1280px (desktops)
- **2xl**: 1400px (large desktops)

### Responsive Patterns Used
- Mobile-first approach
- Flexible grid layouts (`grid md:grid-cols-3`)
- Responsive typography (`text-4xl md:text-5xl`)
- Responsive spacing (`py-20 md:py-28` → standardized to `py-20`)
- Responsive images with `aspect-video` for consistent ratios

## Performance Best Practices

### 1. Image Optimization Checklist
- [ ] Convert all images to WebP format
- [ ] Optimize image sizes (aim for < 200KB per image)
- [ ] Use appropriate image dimensions (don't serve 2000px images for 400px containers)
- [ ] Add WebP versions alongside JPG/PNG
- [ ] Use `OptimizedImage` component for automatic format selection

### 2. Before Production Deployment
1. Run `npm run build` to create optimized production bundle
2. Test the production build with `npm run preview`
3. Verify all images load correctly
4. Check Lighthouse scores (aim for 90+)
5. Test on multiple devices and browsers
6. Verify font loading and fallbacks

### 3. Image Conversion Tools
```bash
# Using sharp (Node.js)
npm install sharp
node convert-to-webp.js

# Using ImageMagick (CLI)
magick input.jpg -quality 85 output.webp

# Online tools
- Squoosh.app
- CloudConvert
- Convertio
```

## Bundle Analysis

### Expected Bundle Sizes (after optimization)
- **Main bundle**: ~150-200KB (gzipped)
- **Vendor bundle**: ~100-150KB (gzipped)
- **UI bundle**: ~50-80KB (gzipped)
- **Total JS**: ~300-430KB (gzipped)

### Monitoring
- Use `npm run build -- --analyze` if bundle analyzer is configured
- Check Network tab in DevTools
- Monitor Lighthouse performance scores

## Additional Optimizations

### Future Enhancements
1. **Service Worker**: Add for offline support and caching
2. **Image CDN**: Consider using a CDN for image delivery
3. **HTTP/2 Server Push**: For critical resources
4. **Resource Hints**: Add `dns-prefetch` for external domains
5. **Critical CSS**: Extract and inline critical CSS
6. **Preload**: Add preload hints for critical resources

## Testing Production Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Check bundle size
ls -lh dist/assets/

# Test with Lighthouse
# Open Chrome DevTools > Lighthouse > Run audit
```

## Notes

- Vite automatically handles CSS minification
- JavaScript is minified with Terser
- Images are not automatically converted - manual conversion required
- Font loading is optimized but fonts still load from Google Fonts CDN
- Consider self-hosting fonts for better performance if needed

