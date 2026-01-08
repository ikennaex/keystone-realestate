import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <div className="w-full max-w-lg rounded-2xl bg-gray-900 p-6 text-white shadow-lg">
      <h3 className="text-xl font-semibold">
        Join our newsletter
      </h3>

      <p className="mt-1 text-sm text-gray-300">
        Get market updates, investment tips, and new listings.
      </p>

      <form
        action="https://keystonerealestatepartners.us4.list-manage.com/subscribe/post"
        method="POST"
        target="hidden_iframe"
        onSubmit={() => alert("Thanks for subscribing")}
        className="mt-4 flex flex-col gap-3 sm:flex-row"
      >
        {/* Mailchimp required fields */}
        <input type="hidden" name="u" value="296c7b07915fb645c04ae53b0" />
        <input type="hidden" name="id" value="f72e16d0cb" />

        <input
          type="email"
          name="EMAIL"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 rounded-xl border border-gray-700 bg-gray-800 px-4 py-3 text-sm text-white outline-none transition focus:border-customBlue focus:ring-2 focus:ring-customBlue"
        />

        <button
          type="submit"
          className="rounded-xl bg-customBlue px-6 py-3 text-sm font-medium transition hover:bg-emerald-700 active:scale-95"
        >
          Subscribe
        </button>
      </form>

      <p className="mt-3 text-xs text-gray-400">
        No spam. Unsubscribe anytime.
      </p>
    </div>
  );
}

export default Newsletter;
