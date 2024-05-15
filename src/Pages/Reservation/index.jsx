import { useContext, useEffect, useState } from "react";
import { ReservationContext } from "../../contexts/ReservationContext";
import WorkerInfo from "../../components/WorkerInfo";
import ReservationTime from "./ReservationTime";
import { useParams } from "react-router-dom";
import TimeTable from "../../components/TimeTable";
import AnimalsDetails from "./AnimalsDetails";
import toast from "react-hot-toast";
import { BlockLoader } from "../../components/Loader";
import Reviews from "./Reviews";
import AddReview from "./AddReview";
import Review from "./Review";
function Reservation() {
  const { id } = useParams();
  const [workerData, setWorkerData] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { appointment } = useContext(ReservationContext);

  useEffect(() => {
    const fetchWorkerData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${import.meta.env.VITE_API_LINK}/api/pety/details`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id }),
          },
        );
        if (response.ok) {
          const data = await response.json();
          setWorkerData(data.data);
          setReviews(data.data.reviews);
        }
      } catch (error) {
        toast.error("An error occurred while fetching worker data.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchWorkerData();
  }, [id]);

  const handleAddReview = (review) => {
    setReviews((prev) => [review, ...prev]);
  };
  const handleEditReview = (review) => {
    setReviews((prev) => prev.map((r) => (r._id === review._id ? review : r)));
  };
  const handleDeleteReview = (reviewId) => {
    setReviews((prev) => prev.filter((r) => r._id !== reviewId));
  };
  return (
    <div className="relative min-h-screen bg-neutral-100 px-8 py-10">
      {isLoading || !workerData ? (
        <BlockLoader />
      ) : (
        <div className="mx-auto flex flex-col gap-8 transition-all duration-200 sm:container lg:flex-row">
          <div className="flex flex-shrink basis-full flex-col gap-y-8 md:basis-1/2">
            <div className="flex flex-col justify-center rounded-xl bg-white py-2 shadow-lg shadow-neutral-300">
              <WorkerInfo data={workerData} />
              {appointment.time && (
                <ReservationTime appointment={appointment} />
              )}
            </div>
            <Reviews>
              <AddReview handleAddReview={handleAddReview} />
              <div className="flex flex-col gap-y-3">
                {reviews.map((review) => (
                  <Review
                    key={review._id}
                    review={review}
                    handleEditReview={handleEditReview}
                    handleDeleteReview={handleDeleteReview}
                  />
                ))}
              </div>
            </Reviews>
          </div>
          <div className="flex h-fit basis-full flex-col overflow-hidden rounded-xl bg-white shadow-lg shadow-neutral-300 md:sticky md:top-4 md:basis-1/2">
            <div className="border-b-[3px] border-neutral-200">
              <div className="bg-primary py-1 text-center font-sans text-lg font-bold text-white">
                Appointment details
              </div>
              <p className="-mb-2 pt-2 text-center text-lg font-semibold text-neutral-800">
                Choose your appointment
              </p>
              <TimeTable data={workerData} />
            </div>
            <AnimalsDetails />
          </div>
        </div>
      )}
    </div>
  );
}

export default Reservation;
