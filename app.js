// Initialize the dataLayer
window.dataLayer = window.dataLayer || [];

// Push "Page Load Started" event
window.dataLayer.push({
  "detailed_event": "Page Load Started",
  "event": "page_load_start",
  "page_data": {
    "page_title": document.title,
    "page_url": window.location.href
  }
});
console.log("Page load start event tracked.");

// Page Load Completed Tracking
function trackPageLoadCompleted() {
  window.dataLayer.push({
    "detailed_event": "Page Load Completed",
    "event": "page_view",
    "page_data": {
      "page_title": document.title,
      "page_url": window.location.href
    }
  });
  console.log("Page load completed event tracked.");
}

if (document.readyState === 'complete') {
  trackPageLoadCompleted();
} else {
  window.addEventListener('load', trackPageLoadCompleted);
}

// Click event listener for all social media buttons
document.querySelectorAll(".btn-success").forEach(function(button) {
  button.addEventListener("click", function () {
    const linkUrl = button.getAttribute("data-url");

    // Open the link in a new tab
    window.open(linkUrl, '_blank');

    // Push event data to the dataLayer
    window.dataLayer.push({
      detailed_event: "Social Media Clicks",
      event: "social_media_click",
      event_data: {
        link_url: linkUrl
      },
      page_data: {
        page_location: window.location.href
      }
    });
    console.log(`Event tracked for ${linkUrl}`);
  });
});

