// No need to import ReactNode, as it's not required in JavaScript
// Type definitions are removed

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({children}) {
    return children;
  }
  