import React from "react";
import { Link } from "react-router-dom";

export default function FacebookReviews() {
  return (
    <div className="fb-wrapper">

      <div className="fb-container">
        {/* LEFT COLUMN */}
        <div className="fb-column">
          <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fjessica.dunn.679067%2Fposts%2Fpfbid02SXhQbWFtX3RHbC72HGx9oLSHY2H42SgmjwH9c9MGm2pkb6Eidij6zYWbUAVZeq2El&show_text=true&width=500"
            className="fb-iframe tall"
            scrolling="no"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </div>

        {/* RIGHT COLUMN */}
        <div className="fb-column">
          <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fdianna.england%2Fposts%2Fpfbid04g6YR8JrXSNxA8vsuFGh2acguG4ANNEnFyHsiBrDYzGGPdXxmTw4XJHfRWaaSdyVl&show_text=true&width=500"
            className="fb-iframe"
            scrolling="no"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />

          <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fteresamorena.rodriguez%2Fposts%2Fpfbid025HNT2bpzoH1gkqvGQaT9LbjiN4s1NupY2XfbXLRFyUFpNueMsRVN2D6uZ9k9xapwl&show_text=true&width=500"
            className="fb-iframe"
            scrolling="no"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
      <h3 className="fb-title">More — click the Facebook link below</h3>

          {/* LINK UNDER RIGHT COLUMN */}
          <Link
            to="https://www.facebook.com/MedinaServicesLLC/reviews"
            className="facebook-review left"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/facebook-review.webp"
              alt="Facebook Reviews"
              className="face-review-logo"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
