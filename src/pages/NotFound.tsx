import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>404 - Page Not Found | Datetech Solution</title>

        <meta
          name="description"
          content="The page you are looking for does not exist on Datetech Solution."
        />

        <meta name="robots" content="noindex" />
      </Helmet>

      {/* UI */}
      <div className="flex min-h-screen items-center justify-center bg-muted px-4">
        <div className="text-center max-w-md">
          <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>

          <p className="mb-3 text-2xl font-semibold">
            Page Not Found
          </p>

          <p className="mb-8 text-muted-foreground">
            Sorry, the page you are looking for does not exist or has been moved.
          </p>

          <Link
            to="/"
            className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-primary-foreground transition hover:opacity-90"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;