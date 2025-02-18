import React, { useState } from "react";
import BookingForm from "./components/BookingForm";
import Confirmation from "./components/Confirmation";
import './style.css';

const App = () => {
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleBookingSubmit = (details) => {
    setBookingDetails(details);
  };

  return (
    <div className="container">
      <header class="bg-primary text-white text-center py-4">
        <h1>Hệ Thống Đặt Chỗ Khách Sạn</h1>
      </header>
      <BookingForm onSubmit={handleBookingSubmit} />
      {bookingDetails && (
        <div className="mt-4">
          <h5>Xác Nhận Đặt Phòng</h5>
          <p>Cảm ơn {bookingDetails.name} đã đặt phòng!</p>
          <p>Email: {bookingDetails.email}</p>
          <p>Số Điện Thoại: {bookingDetails.phone}</p>
          <p>Ngày Nhận Phòng: {bookingDetails.checkin}</p>
          <p>Ngày Trả Phòng: {bookingDetails.checkout}</p>
          <p>
            Loại Phòng:{" "}
            {bookingDetails.roomType.charAt(0).toUpperCase() +
              bookingDetails.roomType.slice(1)}
          </p>
        </div>
      )}
      <footer>
        <p>&copy; Hệ Thống Đặt Chỗ Khách Sạn.</p>
      </footer>
    </div>
  );
};

export default App;
