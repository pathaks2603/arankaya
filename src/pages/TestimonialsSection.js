import React, { useEffect, useState } from "react";
import {
  db,
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from "../../src/firebase";
import backgImage from "../assets/retreat/retreat1.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/TestimonialsSection.css";

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [userName, setUserName] = useState("");
  const [userLocation, setUserLocation] = useState("");

  // Fetch testimonials
  useEffect(() => {
    const q = query(
      collection(db, "testimonials"),
      orderBy("createdAt", "desc")
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const reviews = snapshot.docs.map((doc) => doc.data());
      setTestimonials(reviews);
    });
    return () => unsubscribe();
  }, []);

  // Add listener to clean up modal state
  useEffect(() => {
    const modalEl = document.getElementById("testimonialModal");
    if (modalEl) {
      modalEl.addEventListener("hidden.bs.modal", () => {
        setNewReview("");
        setUserName("");
        setUserLocation("");
        document.body.classList.remove("modal-open");
        document
          .querySelectorAll(".modal-backdrop")
          .forEach((el) => el.remove());
      });
    }
  }, []);

  // Submit review
  const handleSubmitReview = async () => {
    if (
      newReview.trim() === "" ||
      userName.trim() === "" ||
      userLocation.trim() === ""
    )
      return;

    try {
      await addDoc(collection(db, "testimonials"), {
        text: newReview,
        author: userName,
        location: userLocation,
        createdAt: serverTimestamp(),
      });

      // Reset fields
      setNewReview("");
      setUserName("");
      setUserLocation("");

      // Instead of hiding modal manually, trigger click on close button
      document.querySelector("#testimonialModal .btn-close")?.click();
    } catch (error) {
      console.error("Error adding testimonial:", error);
    }
  };

  return (
    <section
      className="testimonials-section py-5"
      style={{
        backgroundImage: `url('${backgImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container text-center">
        <h2 className="mb-4">What Our Guests Say</h2>

        <div
          id="testimonialCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {testimonials.map((review, idx) => {
              const date =
                review.createdAt?.toDate?.().toLocaleDateString() || "";
              return (
                <div
                  className={`carousel-item ${idx === 0 ? "active" : ""}`}
                  key={idx}
                >
                  <div className="testimonial-card mx-auto">
                    <p className="testimonial-text">"{review.text}"</p>
                    <h6 className="testimonial-author">
                      – {review.author}, {review.location} {date && `(${date})`}
                    </h6>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>

        <button
          type="button"
          className="btn btn-primary mt-4"
          data-bs-toggle="modal"
          data-bs-target="#testimonialModal"
        >
          Add Your Review
        </button>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="testimonialModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Your Review</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Your Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Your Location"
                value={userLocation}
                onChange={(e) => setUserLocation(e.target.value)}
              />
              <textarea
                className="form-control"
                rows="4"
                placeholder="Write your experience..."
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
              ></textarea>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                onClick={handleSubmitReview}
              >
                Submit Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
