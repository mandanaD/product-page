# Product Page

This is a **Next.js + TypeScript** project with **TailwindCSS** and **DaisyUI**.  
I used **React Hook Form**, **Zod**, and **Lucide-React** to build this product page.

The page shows **product details**, lets you **select color and size**, and changes the product **image** based on the
selected color. At the bottom, it shows a **list of reviews** for the selected color.

I used **context (`useProduct`)** to save the selected color and control which image and reviews are shown.

There is a **form to add a new review** at the top of the review list, using **RHF + Zod**, and it just logs the
submitted value in the console.  
The **add to cart form** also uses RHF and logs the values in the console.

I used **mock data** to show product details and reviews.

---

## Project Structure
````
src
├── app                   # Next.js pages and routing
├── components            # All React components
│   ├── layout            # Layout components (footer)
│   ├── pages             # Page-specific components
│   └── ui                # Reusable UI components
│       ├── button        # Button component
│       ├── fields        # Form fields
│       │   ├── InputField
│       │   ├── Radio
│       │   └── Textarea
│       └── rate          # Rating component
├── context               # React context (useProduct)
├── hook                  # Custom hooks
├── mock                  # Mock data (product.)
├── shema                 # Zod schemas
└── type                  # TypeScript types
````


---


## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/mandanaD/product-page.git
2. Install dependencies::
   ```bash
   npm i
3. Install dependencies::
   ```bash
   npm run dev

4. Install dependencies::
   ```bash
   http://localhost:3000
