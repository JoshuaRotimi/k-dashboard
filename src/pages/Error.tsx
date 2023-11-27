import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: unknown = useRouteError();

  return (
    <div
      id="error-page"
      className="h-screen flex justify-center items-center flex-col gap-4"
    >
      <h1>Oops! Page not found.</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>
          {(error as Error)?.message ||
            (error as { statusText?: string })?.statusText}
        </i>
      </p>
    </div>
  );
}
