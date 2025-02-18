package com.hotel.demo.domain.repositories;

import com.hotel.demo.domain.entities.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking, Long> {
}
