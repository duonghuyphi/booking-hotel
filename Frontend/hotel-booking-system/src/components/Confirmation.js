import React from 'react';

const Confirmation = ({ bookingDetails }) => {
    return (
        <div className="mt-4">
            <h5>Xác Nhận Đặt Phòng</h5>
            <p>Cảm ơn {bookingDetails.name} đã đặt phòng!</p>
            <p>Email: {bookingDetails.email}</p>
            <p>Số Điện Thoại: {bookingDetails.phone}</p>
            <p>Ngày Nhận Phòng: {bookingDetails.checkin}</p>
            <p>Ngày Trả Phòng: {bookingDetails.checkout}</p>
            <p>Loại Phòng: {bookingDetails.roomType.charAt(0).toUpperCase() + bookingDetails.roomType.slice(1)}</p>
        </div>
    );
};

export default Confirmation;