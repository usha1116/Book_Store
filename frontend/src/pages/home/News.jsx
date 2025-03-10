import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const placeholderImage = "https://via.placeholder.com/300?text=No+Image";

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Fetch NYT Book Reviews
        const NYT_API_KEY = "I30cBwzfldCeheuNkTytLXM2Xca7dSKz";
        const NYT_URL = `https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=${NYT_API_KEY}`;

        const response = await fetch(NYT_URL);
        const data = await response.json();
        console.log(data)

        if (!data.results) {
          console.log("No book reviews found!");
          setLoading(false);
          return;
        }

        let uniqueImages = new Set();

        const booksWithImages = await Promise.all(
          data.results.map(async (book) => {
            try {
              const googleBooksUrl = `https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(
                book.book_title
              )}`;
              const googleResponse = await fetch(googleBooksUrl);
              const googleData = await googleResponse.json();

              let image = placeholderImage; // Default placeholder

              if (
                googleData.items &&
                googleData.items[0]?.volumeInfo?.imageLinks?.thumbnail
              ) {
                const foundImage = googleData.items[0].volumeInfo.imageLinks.thumbnail;

                // 🔹 Ensure uniqueness (check if image URL is already used)
                if (!uniqueImages.has(foundImage)) {
                  image = foundImage;
                  uniqueImages.add(foundImage); // Add to Set
                }
              }

              return { ...book, image };
            } catch (error) {
              console.error("Error fetching Google Books API:", error);
              return { ...book, image: placeholderImage };
            }
          })
        );

        setNews(booksWithImages);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching NYT API:", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p className="text-center py-8">Loading news...</p>;

  return (
    <div className="py-16">
      <h2 className="text-3xl font-semibold mb-6">Book News</h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 40 },
          1024: { slidesPerView: 2, spaceBetween: 50 },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {news?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-12">
              {/* Content */}
              <div className="py-4">
                <Link to={item.url || "/"}>
                  <h3 className="text-lg font-medium hover:text-blue-500 mb-4">
                    {item.book_title}
                  </h3>
                </Link>
                <div className="w-12 h-[4px] bg-primary mb-5"></div>
                <p className="text-sm text-gray-600">{item.summary}</p>
              </div>

              {/* Image */}
              <div className="flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.book_title}
                  className="w-full object-cover"
                  onError={(e) => {
                    if (e.target.src !== placeholderImage) {
                      e.target.src = placeholderImage;
                    }
                  }} // Ensures fallback happens only once
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default News;
