import React, { useState } from "react";

const BookingForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [roomType, setRoomType] = useState("single");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Kiểm tra ngày
    const today = new Date();
    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);

    if (checkinDate < today) {
      setError("Ngày nhận phòng không được trước ngày hiện tại.");
      return;
    }

    if (checkinDate >= checkoutDate) {
      setError("Ngày nhận phòng phải trước ngày trả phòng.");
      return;
    }

    setError(""); // Reset lỗi nếu không có lỗi
    onSubmit({ name, email, phone, checkin, checkout, roomType });
    resetForm(); // Gọi hàm reset form
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setCheckin("");
    setCheckout("");
    setRoomType("single");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Họ và Tên</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Số Điện Thoại</label>
        <input
          type="tel"
          className="form-control"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Ngày Nhận Phòng</label>
        <input
          type="date"
          className="form-control"
          value={checkin}
          onChange={(e) => setCheckin(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Ngày Trả Phòng</label>
        <input
          type="date"
          className="form-control"
          value={checkout}
          onChange={(e) => setCheckout(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Loại Phòng</label>
        <select
          className="form-select"
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
          required
        >
          <option value="single">Phòng Đơn</option>
          <option value="double">Phòng Đôi</option>
          <option value="suite">Phòng Suite</option>
        </select>
      </div>
      {error && <div className="alert alert-danger">{error}</div>}{" "}
      {/* Hiển thị thông báo lỗi */}
      <button type="submit" className="btn btn-primary">
        Đặt Phòng
      </button>
    </form>
  );
};

export default BookingForm;
