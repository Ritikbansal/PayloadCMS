# Default Pages

https://restroworks.ritik.fyi/en/home
https://restroworks.ritik.fyi/contact
https://restroworks.ritik.fyi/en/products

Any number of pages can be made from Admin Panel

### Admin Panel Access

1. Navigate to the admin panel:

   ```
   https://restroworks.ritik.fyi/admin
   ```

2. Login with default credentials:
   - **Email**: `admin@ritik.app`
   - **Password**: `1234`

# Payload CMS + Next.js Project

A full-stack web application built with Payload CMS as the headless backend and Next.js for the frontend. The project uses Payload's schema system to manage content and renders pages dynamically in the Next.js frontend with multi-language support.

This template comes configured with a flexible blocks-based architecture to quickly build modern websites with content management capabilities.

## Tech Stack

- **Backend**: Payload CMS
- **Frontend**: Next.js
- **Database**: MongoDB
- **Deployment**: Render
- **Package Manager**: pnpm

## Quick Start

### Local Development

1. **Clone and Setup**:

   ```bash
   git clone <your-repo>
   cd my-project && cp .env.example .env
   ```

2. **Install dependencies**:

   ```bash
   pnpm install
   ```

3. **Start development server**:

   ```bash
   pnpm dev
   ```

4. **Open your browser**:

   ```
   http://localhost:3000
   ```

5. **(Optional) Seed initial data**:
   ```bash
   python3 seed.py
   ```

### Docker (Optional)

If you prefer Docker for local development:

1. Modify the `MONGODB_URI` in your `.env` file to `mongodb://127.0.0.1/<dbname>`
2. Update the `docker-compose.yml` file's `MONGODB_URI` to match the above `<dbname>`
3. Run:
   ```bash
   docker-compose up
   ```
   (Add `-d` to run in the background)

## Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URI=mongodb://root:example@localhost:27017/great?authSource=admin
PAYLOAD_SECRET=d01352859bd77b9a13ae11a9
NEXT_PUBLIC_PAYLOAD_URL=http://localhost:3000
```

### Production Deployment (Render)

1. Build command:

   ```bash
   pnpm install && pnpm run build
   ```

2. Start command:
   ```bash
   pnpm start
   ```

## Usage

### Admin Panel Access

1. Navigate to the admin panel:

   ```
   http://localhost:3000/admin
   ```

2. Login with default credentials:
   - **Email**: `admin@ritik.app`
   - **Password**: `1234`

### Creating Pages

1. In the admin panel, click on **"Create Page"**
2. Fill in the required details (most fields have default values)
3. **Important**: Give your page a proper slug (URL-friendly identifier)
4. Save the page

### Viewing Pages

After creating a page with a slug, visit:

```
http://localhost:3000/en/your-page-slug
```

### Page Building

- Pages are built using **blocks** system
- Inside the page editor, you can create and arrange different blocks
- These blocks are the building components that make up your page content
- Mix and match blocks to create dynamic page layouts

## CMS Architecture & Modeling

### Collections Structure

The project uses a **Pages collection** with a flexible blocks-based architecture:

```typescript
// collections/Pages.ts
- Title: Localized page title with default values
- Slug: Unique, localized URL identifier
- Layout: Flexible blocks system for page composition
- SEO Fields: Built-in SEO optimization
```

### Blocks System

Pages are built using modular, reusable blocks:

- **Hero**: Landing section with badge, title, CTAs, and stats
- **FeatureList**: Grid of features with icons and descriptions
- **Testimonials**: Customer testimonials and reviews
- **CTA**: Call-to-action sections
- **ProductFeatures/Hero/Pricing/Showcase**: Product-specific components
- **Footer**: Site footer content

### Key Design Decisions

1. **Localization First**: All content fields support multiple languages (`localized: true`)
2. **Default Values**: Every field includes sensible defaults for rapid prototyping
3. **Public API Access**: Pages collection allows public reads for frontend rendering
4. **Flexible Layout**: Blocks can be mixed and arranged in any order
5. **Icon System**: Predefined icon options using Lucide icons (zap, shield, users, etc.)
6. **Grouped Fields**: Related fields (like CTAs) are grouped for better UX

### Example Block Structure

```typescript
// Feature Block
- Icon: Select from predefined options (zap, shield, users, etc.)
- Title: Feature heading with defaults
- Description: Detailed feature description
```

This modular approach allows content creators to build complex, varied page layouts without technical knowledge while maintaining design consistency.

## Project Structure

- Payload CMS handles content management and API
- Next.js frontend fetches and renders pages from Payload
- MongoDB stores all content and schema data
- Multi-language content is managed through Payload's localization features

## Database

The project supports both PostgreSQL and MongoDB. Currently configured for MongoDB with authentication.

For Cloud deployment, you can add the `MONGODB_URI` from your Cloud project to your `.env` file if you want to use S3 storage and the cloud MongoDB database.

## Support

If you have any issues or questions:

- https://ritik.app
- https://email.ritik.app
